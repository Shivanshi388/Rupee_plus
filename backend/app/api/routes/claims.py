from fastapi import APIRouter, HTTPException

from backend.app.integrations.insurer_mock import InsurerMock
from backend.app.schemas.claims import (
    ClaimListResponse,
    ClaimRequest,
    ClaimResponse,
)
from backend.app.services.claims_service import ClaimsService
from backend.app.services.coverage_service import CoverageService
from backend.app.services.profile_store import get_profile
from backend.app.services.shared_store import shared_ledger


router = APIRouter(
    prefix="/claims",
    tags=["Claims"],
)

claims_service = ClaimsService()
insurer = InsurerMock()
coverage_service = CoverageService()


def _claim_response(claim, message: str) -> ClaimResponse:
    return ClaimResponse(
        claim_id=claim.claim_id,
        user_id=claim.user_id,
        amount=claim.amount,
        reason=claim.reason,
        status=claim.status,
        insurer_reference=claim.insurer_reference,
        message=message,
    )


@router.post(
    "",
    response_model=ClaimResponse,
)
def submit_claim(request: ClaimRequest):

    profile = get_profile(request.user_id)

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail="User profile not found.",
        )

    insurance_balance = shared_ledger.get_wallet_balance(
        "insurance",
        user_id=request.user_id,
    )

    coverage = coverage_service.check_coverage(
        required_premium=profile["monthly_premium"],
        insurance_balance=insurance_balance,
    )

    if not coverage.coverage_active:
        raise HTTPException(
            status_code=403,
            detail=(
                "Coverage is not active. "
                f"Rs.{coverage.remaining_amount:.2f} more is required."
            ),
        )

    try:
        claim = claims_service.create_claim(
            claim_id=request.claim_id,
            user_id=request.user_id,
            amount=request.amount,
            reason=request.reason,
        )
    except ValueError as exc:
        raise HTTPException(
            status_code=400,
            detail=str(exc),
        )

    decision = insurer.submit_claim(
        claim_id=claim.claim_id,
        user_id=claim.user_id,
        amount=claim.amount,
        reason=claim.reason,
    )

    claim.status = decision.status
    claim.insurer_reference = decision.reference

    return _claim_response(
        claim,
        decision.message,
    )


@router.get(
    "/{claim_id}",
    response_model=ClaimResponse,
)
def get_claim(claim_id: str):

    claim = claims_service.get_claim(claim_id)

    if claim is None:
        raise HTTPException(
            status_code=404,
            detail="Claim not found.",
        )

    return _claim_response(
        claim,
        "Claim retrieved successfully.",
    )


@router.get(
    "/user/{user_id}",
    response_model=ClaimListResponse,
)
def get_user_claims(user_id: str):

    claims = claims_service.get_user_claims(user_id)

    return ClaimListResponse(
        user_id=user_id,
        claims=[
            _claim_response(
                claim,
                "Claim retrieved successfully.",
            )
            for claim in claims
        ],
    )
