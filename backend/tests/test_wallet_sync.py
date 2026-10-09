from fastapi.testclient import TestClient

from backend.app.api.routes.transactions import allocation_service
from backend.app.main import app
from backend.app.services.shared_store import shared_ledger


client = TestClient(app)


def test_wallet_reflects_processed_transaction():
    shared_ledger.entries.clear()

    response = client.post(
        "/transactions/process",
        json={
            "transaction_id": "SYNC001",
            "user_id": "USR001",
            "amount": 499.0,
            "insurance_required": 2.0,
        },
    )

    assert response.status_code == 200

    wallet_response = client.get("/wallet/USR001")

    assert wallet_response.status_code == 200

    data = wallet_response.json()

    assert data["user_id"] == "USR001"
    assert data["insurance_balance"] == 1.0
    assert data["savings_balance"] == 0.0
    assert data["total_balance"] == 1.0


def test_wallet_reflects_multiple_transactions():
    shared_ledger.entries.clear()

    for index in range(3):
        response = client.post(
            "/transactions/process",
            json={
                "transaction_id": f"SYNC00{index + 1}",
                "user_id": "USR002",
                "amount": 250.0,
                "insurance_required": 2.0,
            },
        )

        assert response.status_code == 200

    wallet_response = client.get("/wallet/USR002")

    assert wallet_response.status_code == 200

    data = wallet_response.json()

    assert data["insurance_balance"] == 2.0
    assert data["savings_balance"] == 1.0
    assert data["total_balance"] == 3.0
