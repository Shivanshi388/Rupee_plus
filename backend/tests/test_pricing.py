from backend.app.services.pricing_service import (
    PricingInput,
    PremiumPricingService,
)


def test_low_risk_user_gets_lower_risk_score():
    service = PremiumPricingService()

    result = service.calculate(
        PricingInput(
            monthly_income=25000,
            income_stability=0.9,
            work_hours_per_day=6,
            city_risk=0.2,
            occupation_risk=0.2,
            previous_claims=0,
        )
    )

    assert result.risk_score < 35
    assert result.risk_level == "low"


def test_high_risk_user_gets_higher_premium():
    service = PremiumPricingService()

    result = service.calculate(
        PricingInput(
            monthly_income=12000,
            income_stability=0.2,
            work_hours_per_day=12,
            city_risk=0.9,
            occupation_risk=0.9,
            previous_claims=3,
        )
    )

    assert result.risk_score >= 65
    assert result.risk_level == "high"
    assert result.monthly_premium > 30


def test_premium_is_within_allowed_range():
    service = PremiumPricingService()

    result = service.calculate(
        PricingInput(
            monthly_income=15000,
            income_stability=0.5,
            work_hours_per_day=8,
            city_risk=0.5,
            occupation_risk=0.5,
        )
    )

    assert 10 <= result.monthly_premium <= 50
