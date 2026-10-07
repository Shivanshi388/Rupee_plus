from fastapi.testclient import TestClient

from backend.app.main import app


client = TestClient(app)


def test_process_transaction():
    response = client.post(
        "/transactions/process",
        json={
            "transaction_id": "TXN001",
            "user_id": "USR001",
            "amount": 499.0,
            "insurance_required": 0.50,
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert data["transaction_id"] == "TXN001"
    assert data["user_id"] == "USR001"
    assert data["transaction_amount"] == 499.0
    assert data["roundup_amount"] == 1.0
    assert data["insurance_amount"] == 0.50
    assert data["savings_amount"] == 0.50
    assert data["insurance_balance"] == 0.50
    assert data["savings_balance"] == 0.50
    assert data["coverage_active"] is True
from fastapi.testclient import TestClient

from backend.app.main import app
from backend.app.services.profile_store import profiles
from backend.app.services.shared_store import shared_ledger


client = TestClient(app)


def test_onboarding_to_transaction_to_wallet_flow():
    shared_ledger.entries.clear()
    profiles.clear()

    onboarding_response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "E2E001",
            "name": "Demo Worker",
            "occupation": "Delivery Partner",
            "city": "Agra",
            "monthly_income": 18000,
            "income_stability": 0.70,
            "work_hours_per_day": 9,
            "city_risk": 0.40,
            "occupation_risk": 0.60,
            "previous_claims": 0,
        },
    )

    assert onboarding_response.status_code == 200

    profile = onboarding_response.json()

    assert profile["user_id"] == "E2E001"
    assert profile["monthly_premium"] > 0

    transaction_response = client.post(
        "/transactions/process",
        json={
            "transaction_id": "E2ETXN001",
            "user_id": "E2E001",
            "amount": 499,
        },
    )

    assert transaction_response.status_code == 200

    transaction = transaction_response.json()

    assert transaction["user_id"] == "E2E001"
    assert transaction["roundup_amount"] == 1.0
    assert transaction["insurance_required"] == profile["monthly_premium"]
    assert transaction["insurance_balance"] == 1.0
    assert transaction["savings_balance"] == 0.0

    wallet_response = client.get("/wallet/E2E001")

    assert wallet_response.status_code == 200

    wallet = wallet_response.json()

    assert wallet["user_id"] == "E2E001"
    assert wallet["insurance_balance"] == 1.0
    assert wallet["savings_balance"] == 0.0
    assert wallet["total_balance"] == 1.0


def test_transaction_without_onboarding_is_rejected():
    shared_ledger.entries.clear()
    profiles.clear()

    response = client.post(
        "/transactions/process",
        json={
            "transaction_id": "NO_PROFILE_TXN",
            "user_id": "UNKNOWN001",
            "amount": 250,
        },
    )

    assert response.status_code == 404
def test_ml_premium_eventually_activates_coverage():
    from backend.app.services.profile_store import profiles
    from backend.app.services.shared_store import shared_ledger

    shared_ledger.entries.clear()
    profiles.clear()

    onboarding_response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "COVER001",
            "name": "Coverage Demo",
            "occupation": "Delivery Partner",
            "city": "Agra",
            "monthly_income": 18000,
            "income_stability": 0.70,
            "work_hours_per_day": 9,
            "city_risk": 0.40,
            "occupation_risk": 0.60,
            "previous_claims": 0,
        },
    )

    assert onboarding_response.status_code == 200

    profile = onboarding_response.json()
    required_premium = profile["monthly_premium"]

    insurance_balance = 0.0
    transaction_number = 1

    while insurance_balance < required_premium:
        response = client.post(
            "/transactions/process",
            json={
                "transaction_id": f"COVER_TXN_{transaction_number}",
                "user_id": "COVER001",
                "amount": 500,
            },
        )

        assert response.status_code == 200

        transaction = response.json()
        insurance_balance = transaction["insurance_balance"]

        transaction_number += 1

        assert transaction_number < 100

    assert insurance_balance >= required_premium
    assert transaction["coverage_active"] is True

    wallet_response = client.get("/wallet/COVER001")

    assert wallet_response.status_code == 200

    wallet = wallet_response.json()

    assert wallet["insurance_balance"] >= required_premium
    assert wallet["total_balance"] >= required_premium
