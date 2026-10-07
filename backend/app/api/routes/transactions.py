from fastapi import APIRouter

from backend.app.schemas.transactions import (
    TransactionRequest,
    TransactionResponse,
)
from backend.app.services.shared_store import shared_ledger
from backend.app.services.transaction_allocation import (
    TransactionAllocationService,
)

router = APIRouter(
    prefix="/transactions",
    tags=["Transactions"],
)

allocation_service = TransactionAllocationService(
    ledger=shared_ledger,
)


@router.post(
    "/process",
    response_model=TransactionResponse,
)
def process_transaction(request: TransactionRequest):

    result = allocation_service.process_transaction(
        transaction_id=request.transaction_id,
        transaction_amount=request.amount,
        insurance_required=request.insurance_required,
        user_id=request.user_id,
    )

    if result.coverage_active:
        message = (
            "Rs.1 round-up processed. "
            "Insurance requirement reached; extra savings are accumulating."
        )
    else:
        message = "Rs.1 round-up processed successfully."

    return TransactionResponse(
        transaction_id=result.transaction_id,
        user_id=request.user_id,
        transaction_amount=result.transaction_amount,
        roundup_amount=result.roundup_amount,
        insurance_amount=result.insurance_amount,
        savings_amount=result.savings_amount,
        insurance_balance=result.insurance_balance,
        savings_balance=result.savings_balance,
        coverage_active=result.coverage_active,
        message=message,
    )
