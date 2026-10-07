from fastapi import APIRouter

from backend.app.schemas.wallet import WalletBalanceResponse
from backend.app.services.ledger_service import LedgerService
from backend.app.services.wallet_service import WalletService


router = APIRouter(
    prefix="/wallet",
    tags=["Wallet"],
)

ledger = LedgerService()
wallet_service = WalletService(ledger)


@router.get("/{user_id}", response_model=WalletBalanceResponse)
def get_wallet_balance(user_id: str):
    balances = wallet_service.get_balances()

    return WalletBalanceResponse(
        user_id=user_id,
        savings_balance=balances["savings_balance"],
        insurance_balance=balances["insurance_balance"],
        total_balance=balances["total_balance"],
    )
