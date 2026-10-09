from backend.app.services.ledger_service import LedgerService


class WalletService:
    """
    Provides wallet balances from the Rupee+ ledger.

    The ledger remains the source of truth for wallet balances.
    """

    def __init__(self, ledger: LedgerService):
        self.ledger = ledger

    def get_balances(self) -> dict:
        savings_balance = self.ledger.get_wallet_balance("savings")
        insurance_balance = self.ledger.get_wallet_balance("insurance")

        return {
            "savings_balance": savings_balance,
            "insurance_balance": insurance_balance,
            "total_balance": round(
                savings_balance + insurance_balance,
                2,
            ),
        }
