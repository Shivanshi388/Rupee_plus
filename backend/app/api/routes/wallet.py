from fastapi import APIRouter

from backend.app.schemas.wallet import WalletBalanceResponse
from backend.app.services.shared_store import shared_ledger
from backend.app.services.wallet_service import WalletService


router = APIRouter(
    prefix="/wallet",
    tags=["Wallet"],
)

wallet_service = WalletService(shared_ledger)


@router.get(
    "/{user_id}",
    response_model=WalletBalanceResponse,
)
def get_wallet_balance(user_id: str):

    balances = wallet_service.get_balances(
        user_id=user_id,
    )

    return WalletBalanceResponse(
        user_id=user_id,
        savings_balance=balances["savings_balance"],
        insurance_balance=balances["insurance_balance"],
        total_balance=balances["total_balance"],
    )
