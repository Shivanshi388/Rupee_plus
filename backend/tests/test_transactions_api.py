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
