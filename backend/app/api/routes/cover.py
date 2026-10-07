from fastapi import APIRouter

from backend.app.schemas.cover import (
    CoverageRequest,
    CoverageResponse,
)
from backend.app.services.coverage_service import CoverageService


router = APIRouter(
    prefix="/cover",
    tags=["Coverage"],
)

coverage_service = CoverageService()


@router.post("/check", response_model=CoverageResponse)
def check_coverage(request: CoverageRequest):
    result = coverage_service.check_coverage(
        required_premium=request.required_premium,
        insurance_balance=request.insurance_balance,
    )

    if result.coverage_active:
        message = "Coverage is active."
    else:
        message = (
            f"?{result.remaining_amount:.2f} more is required "
            "to activate coverage."
        )

    return CoverageResponse(
        user_id=request.user_id,
        required_premium=result.required_premium,
        insurance_balance=result.insurance_balance,
        coverage_active=result.coverage_active,
        remaining_amount=result.remaining_amount,
        message=message,
    )
