from dataclasses import dataclass

from backend.app.services.ledger_service import LedgerService
from backend.app.services.roundup_engine import RoundUpEngine


@dataclass
class AllocationResult:
    transaction_id: str
    transaction_amount: float
    roundup_amount: float
    insurance_amount: float
    savings_amount: float
    insurance_balance: float
    savings_balance: float
    coverage_active: bool


class TransactionAllocationService:

    def __init__(self, ledger: LedgerService | None = None):
        self.roundup_engine = RoundUpEngine()
        self.ledger = ledger if ledger is not None else LedgerService()

    def process_transaction(
        self,
        transaction_id: str,
        transaction_amount: float,
        insurance_required: float,
        user_id: str = "default",
    ) -> AllocationResult:

        if not user_id:
            raise ValueError("User ID is required.")

        if insurance_required <= 0:
            raise ValueError(
                "Insurance requirement must be greater than zero."
            )

        roundup = self.roundup_engine.calculate(transaction_amount)

        current_insurance = self.ledger.get_wallet_balance(
            "insurance",
            user_id=user_id,
        )

        remaining_insurance = max(
            0.0,
            insurance_required - current_insurance,
        )

        insurance_amount = min(
            roundup.roundup_amount,
            remaining_insurance,
        )

        savings_amount = round(
            roundup.roundup_amount - insurance_amount,
            2,
        )

        if insurance_amount > 0:
            self.ledger.record(
                transaction_id=transaction_id,
                wallet_type="insurance",
                amount=insurance_amount,
                entry_type="credit",
                description="Insurance allocation",
                user_id=user_id,
            )

        if savings_amount > 0:
            self.ledger.record(
                transaction_id=transaction_id,
                wallet_type="savings",
                amount=savings_amount,
                entry_type="credit",
                description="Savings allocation",
                user_id=user_id,
            )

        insurance_balance = self.ledger.get_wallet_balance(
            "insurance",
            user_id=user_id,
        )

        savings_balance = self.ledger.get_wallet_balance(
            "savings",
            user_id=user_id,
        )

        return AllocationResult(
            transaction_id=transaction_id,
            transaction_amount=round(
                transaction_amount,
                2,
            ),
            roundup_amount=round(
                roundup.roundup_amount,
                2,
            ),
            insurance_amount=round(
                insurance_amount,
                2,
            ),
            savings_amount=round(
                savings_amount,
                2,
            ),
            insurance_balance=insurance_balance,
            savings_balance=savings_balance,
            coverage_active=insurance_balance >= insurance_required,
        )
