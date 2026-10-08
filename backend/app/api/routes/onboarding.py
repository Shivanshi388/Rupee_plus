from fastapi import APIRouter

from backend.app.schemas.onboarding import (
    OnboardingRequest,
    OnboardingResponse,
)
from backend.app.services.pricing_service import (
    PricingInput,
    PremiumPricingService,
)
from backend.app.services.profile_store import save_profile
from backend.app.services.risk_mapping import (
    map_city_risk,
    map_occupation_risk,
)


router = APIRouter(
    prefix="/onboarding",
    tags=["Onboarding"],
)

pricing_service = PremiumPricingService()


@router.post(
    "/profile",
    response_model=OnboardingResponse,
)
def create_profile(request: OnboardingRequest):
    city_risk = map_city_risk(request.city)
    occupation_risk = map_occupation_risk(request.occupation)

    pricing_input = PricingInput(
        monthly_income=request.monthly_income,
        income_stability=request.income_stability,
        work_hours_per_day=request.work_hours_per_day,
        city_risk=city_risk,
        occupation_risk=occupation_risk,
        previous_claims=request.previous_claims,
    )

    result = pricing_service.calculate(pricing_input)

    profile = {
        "user_id": request.user_id,
        "name": request.name,
        "occupation": request.occupation,
        "city": request.city,
        "monthly_income": request.monthly_income,
        "income_stability": request.income_stability,
        "work_hours_per_day": request.work_hours_per_day,
        "city_risk": city_risk,
        "occupation_risk": occupation_risk,
        "previous_claims": request.previous_claims,
        "risk_score": result.risk_score,
        "risk_level": result.risk_level,
        "monthly_premium": result.monthly_premium,
        "insurance_allocation": result.insurance_allocation,
        "savings_allocation": result.savings_allocation,
    }

    save_profile(request.user_id, profile)

    return OnboardingResponse(
        **profile,
        message=(
            f"Welcome to Rupee+, {request.name}. "
            f"Your personalized monthly premium is "
            f"Rs.{result.monthly_premium:.2f}."
        ),
    )
