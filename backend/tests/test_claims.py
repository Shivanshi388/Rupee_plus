from fastapi.testclient import TestClient

from backend.app.main import app


client = TestClient(app)

from backend.app.services.profile_store import profiles
from backend.app.services.shared_store import shared_ledger


def test_claim_rejected_without_active_coverage():
    shared_ledger.entries.clear()
    profiles.clear()

    onboarding_response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "CLAIM001",
            "name": "Claim Demo",
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

    response = client.post(
        "/claims",
        json={
            "claim_id": "CLM001",
            "user_id": "CLAIM001",
            "amount": 5000,
            "reason": "Unable to work due to an insured event.",
        },
    )

    assert response.status_code == 403
    assert "Coverage is not active" in response.json()["detail"]


def test_active_user_can_submit_claim_and_insurer_approves():
    shared_ledger.entries.clear()
    profiles.clear()

    onboarding_response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "CLAIM002",
            "name": "Covered Worker",
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

    premium = onboarding_response.json()["monthly_premium"]

    transaction_number = 1
    insurance_balance = 0.0

    while insurance_balance < premium:
        response = client.post(
            "/transactions/process",
            json={
                "transaction_id": f"CLAIM_TXN_{transaction_number}",
                "user_id": "CLAIM002",
                "amount": 500,
            },
        )

        assert response.status_code == 200

        insurance_balance = response.json()["insurance_balance"]
        transaction_number += 1

        assert transaction_number < 100

    claim_response = client.post(
        "/claims",
        json={
            "claim_id": "CLM002",
            "user_id": "CLAIM002",
            "amount": 5000,
            "reason": "Unable to work due to an insured event.",
        },
    )

    assert claim_response.status_code == 200

    claim = claim_response.json()

    assert claim["claim_id"] == "CLM002"
    assert claim["user_id"] == "CLAIM002"
    assert claim["amount"] == 5000
    assert claim["status"] == "approved"
    assert claim["insurer_reference"] == "INS-CLM002"


def test_claim_can_be_retrieved():
    response = client.get("/claims/CLM002")

    assert response.status_code == 200

    claim = response.json()

    assert claim["claim_id"] == "CLM002"
    assert claim["status"] == "approved"


def test_unknown_claim_returns_404():
    response = client.get("/claims/DOES_NOT_EXIST")

    assert response.status_code == 404
