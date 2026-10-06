from fastapi import APIRouter

from backend.app.schemas.premium import PremiumRequest, PremiumResponse
from backend.app.services.explain_service import ExplainabilityService
from backend.app.services.pricing_service import PricingInput


router = APIRouter(prefix="/premium", tags=["Premium"])

explainability_service = ExplainabilityService()


@router.post("/calculate", response_model=PremiumResponse)
def calculate_premium(request: PremiumRequest):
    pricing_input = PricingInput(
        monthly_income=request.monthly_income,
        income_stability=request.income_stability,
        work_hours_per_day=request.work_hours_per_day,
        city_risk=request.city_risk,
        occupation_risk=request.occupation_risk,
        previous_claims=request.previous_claims,
    )

    return explainability_service.explain(pricing_input)
