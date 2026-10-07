from fastapi import APIRouter

from backend.app.schemas.transactions import (
    TransactionRequest,
    TransactionResponse,
)
from backend.app.services.transaction_allocation import (
    TransactionAllocationService,
)


router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"],
)

allocation_service = TransactionAllocationService()


@router.post("/process", response_model=TransactionResponse)
def process_transaction(request: TransactionRequest):
    result = allocation_service.process_transaction(
        transaction_id=request.transaction_id,
        transaction_amount=request.amount,
        insurance_required=request.insurance_required,
    )

    return TransactionResponse(
        transaction_id=result.transaction_id,
        user_id=request.user_id,
        transaction_amount=result.transaction_amount,
        roundup_amount=result.roundup_amount,
        insurance_amount=result.insurance_amount,
        savings_amount=result.savings_amount,
        message="?1 round-up processed successfully.",
    )
