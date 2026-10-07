from backend.app.services.ledger_service import LedgerService


class WalletService:

    def __init__(self, ledger: LedgerService):
        self.ledger = ledger

    def get_balances(self, user_id: str = "default") -> dict:

        insurance_balance = self.ledger.get_wallet_balance(
            "insurance",
            user_id=user_id,
        )

        savings_balance = self.ledger.get_wallet_balance(
            "savings",
            user_id=user_id,
        )

        return {
            "user_id": user_id,
            "insurance_balance": insurance_balance,
            "savings_balance": savings_balance,
            "total_balance": round(
                insurance_balance + savings_balance,
                2,
            ),
        }
