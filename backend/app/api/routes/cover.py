from fastapi import APIRouter, HTTPException

from backend.app.schemas.cover import (
    CoverageRequest,
    CoverageResponse,
    UserCoverageResponse,
)
from backend.app.services.coverage_service import CoverageService
from backend.app.services.profile_store import get_profile
from backend.app.services.shared_store import shared_ledger


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
            f"Rs.{result.remaining_amount:.2f} more is required "
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


@router.get(
    "/{user_id}",
    response_model=UserCoverageResponse,
)
def get_user_coverage(user_id: str):

    profile = get_profile(user_id)

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail=(
                "User profile not found. "
                "Complete onboarding before checking coverage."
            ),
        )

    insurance_balance = shared_ledger.get_wallet_balance(
        "insurance",
        user_id=user_id,
    )

    savings_balance = shared_ledger.get_wallet_balance(
        "savings",
        user_id=user_id,
    )

    required_premium = profile["monthly_premium"]

    result = coverage_service.check_coverage(
        required_premium=required_premium,
        insurance_balance=insurance_balance,
    )

    if result.coverage_active:
        message = "Your Rupee+ coverage is active."
    else:
        message = (
            f"Rs.{result.remaining_amount:.2f} more is required "
            "to activate your Rupee+ coverage."
        )

    return UserCoverageResponse(
        user_id=user_id,
        required_premium=result.required_premium,
        insurance_balance=result.insurance_balance,
        savings_balance=savings_balance,
        coverage_active=result.coverage_active,
        remaining_amount=result.remaining_amount,
        risk_level=profile["risk_level"],
        monthly_premium=profile["monthly_premium"],
        message=message,
    )
