from fastapi.testclient import TestClient

from backend.app.main import app
from backend.app.services.profile_store import profiles


client = TestClient(app)


def test_create_onboarding_profile():
    profiles.clear()

    response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "USR100",
            "name": "Rahul",
            "occupation": "Delivery Rider",
            "city": "Delhi",
            "monthly_income": 18000,
            "income_stability": 0.45,
            "work_hours_per_day": 11,
            "city_risk": 0.85,
            "occupation_risk": 0.80,
            "previous_claims": 2,
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert data["user_id"] == "USR100"
    assert data["name"] == "Rahul"
    assert data["occupation"] == "Delivery Rider"
    assert data["city"] == "Delhi"

    assert data["risk_score"] > 0
    assert data["risk_level"] in {"low", "medium", "high"}
    assert data["monthly_premium"] >= 10
    assert data["insurance_allocation"] > 0
    assert data["savings_allocation"] > 0

    assert data["risk_score"] == profiles["USR100"]["risk_score"]


def test_onboarding_rejects_invalid_income():
    response = client.post(
        "/onboarding/profile",
        json={
            "user_id": "USR101",
            "name": "Test User",
            "occupation": "Worker",
            "city": "Delhi",
            "monthly_income": 0,
            "income_stability": 0.5,
            "work_hours_per_day": 8,
            "city_risk": 0.5,
            "occupation_risk": 0.5,
            "previous_claims": 0,
        },
    )

    assert response.status_code == 422
