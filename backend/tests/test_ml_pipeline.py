import pytest

from backend.app.ml.model import FEATURE_NAMES, PremiumMLModel
from backend.app.services.pricing_service import PricingInput, PremiumPricingService


def test_ml_model_loads():
    model = PremiumMLModel().load()

    assert model.model is not None


def test_ml_prediction_is_valid():
    model = PremiumMLModel().load()

    risk_score = model.predict_risk(
        {
            "monthly_income": 18000,
            "income_stability": 0.4,
            "work_hours_per_day": 10,
            "city_risk": 0.8,
            "occupation_risk": 0.8,
            "previous_claims": 1,
        }
    )

    assert 0 <= risk_score <= 100


def test_ml_feature_importance_contains_all_features():
    model = PremiumMLModel().load()

    importance = model.feature_importance()

    assert set(importance.keys()) == set(FEATURE_NAMES)
    assert all(value >= 0 for value in importance.values())


def test_pricing_pipeline_uses_ml_model():
    service = PremiumPricingService()

    result = service.calculate(
        PricingInput(
            monthly_income=18000,
            income_stability=0.4,
            work_hours_per_day=10,
            city_risk=0.8,
            occupation_risk=0.8,
            previous_claims=1,
        )
    )

    assert result.risk_score >= 0
    assert result.risk_score <= 100
    assert 10 <= result.monthly_premium <= 50
    assert result.risk_level in {"low", "medium", "high"}


@pytest.mark.parametrize(
    "city,occupation",
    [
        ("Delhi", "Delivery Rider"),
        ("Mumbai", "Driver"),
        ("Pune", "Freelancer"),
        ("Agra", "Shop Worker"),
    ],
)
def test_profile_values_can_flow_into_ml_pipeline(city, occupation):
    from backend.app.services.risk_mapping import (
        map_city_risk,
        map_occupation_risk,
    )

    city_risk = map_city_risk(city)
    occupation_risk = map_occupation_risk(occupation)

    service = PremiumPricingService()

    result = service.calculate(
        PricingInput(
            monthly_income=18000,
            income_stability=0.5,
            work_hours_per_day=8,
            city_risk=city_risk,
            occupation_risk=occupation_risk,
            previous_claims=0,
        )
    )

    assert 0 <= result.risk_score <= 100
    assert 10 <= result.monthly_premium <= 50
