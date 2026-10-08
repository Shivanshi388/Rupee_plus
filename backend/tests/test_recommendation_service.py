from backend.app.services.pricing_service import PricingResult
from backend.app.services.recommendation_service import RecommendationService


def test_high_risk_gets_insurance_recommendation():
    service = RecommendationService()

    result = PricingResult(
        risk_score=80,
        monthly_premium=42,
        savings_allocation=25,
        insurance_allocation=75,
        risk_level="high",
        factors={
            "monthly_income": 12000,
            "income_stability": 0.2,
            "work_hours_per_day": 12,
            "city_risk": 0.9,
            "occupation_risk": 0.9,
            "previous_claims": 2,
        },
    )

    recommendations = service.generate(result)

    assert len(recommendations) >= 4
    assert any("insurance" in item.lower() for item in recommendations)


def test_low_risk_gets_savings_recommendation():
    service = RecommendationService()

    result = PricingResult(
        risk_score=20,
        monthly_premium=18,
        savings_allocation=60,
        insurance_allocation=40,
        risk_level="low",
        factors={
            "monthly_income": 30000,
            "income_stability": 0.9,
            "work_hours_per_day": 6,
            "city_risk": 0.2,
            "occupation_risk": 0.2,
            "previous_claims": 0,
        },
    )

    recommendations = service.generate(result)

    assert any("savings" in item.lower() for item in recommendations)


def test_unstable_income_gets_buffer_recommendation():
    service = RecommendationService()

    result = PricingResult(
        risk_score=55,
        monthly_premium=32,
        savings_allocation=40,
        insurance_allocation=60,
        risk_level="medium",
        factors={
            "monthly_income": 15000,
            "income_stability": 0.3,
            "work_hours_per_day": 8,
            "city_risk": 0.4,
            "occupation_risk": 0.4,
            "previous_claims": 0,
        },
    )

    recommendations = service.generate(result)

    assert any("savings buffer" in item.lower() for item in recommendations)
