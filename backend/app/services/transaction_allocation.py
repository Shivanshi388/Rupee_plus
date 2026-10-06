from dataclasses import dataclass

from backend.app.services.roundup_engine import RoundUpEngine
from backend.app.services.wallet_split import WalletSplitService
from backend.app.services.ledger_service import LedgerService


@dataclass
class AllocationResult:
    transaction_id: str
    transaction_amount: float
    roundup_amount: float
    insurance_amount: float
    savings_amount: float


class TransactionAllocationService:
    """
    Processes a UPI transaction through the Rupee+ wallet flow:

        UPI transaction
            ?
        ?1 round-up
            ?
        Insurance Wallet
        Savings Wallet
            ?
        Ledger entries
    """

    def __init__(self):
        self.roundup_engine = RoundUpEngine()
        self.wallet_split_service = WalletSplitService()
        self.ledger = LedgerService()

    def process_transaction(
        self,
        transaction_id: str,
        transaction_amount: float,
        insurance_required: float,
    ) -> AllocationResult:

        roundup = self.roundup_engine.calculate(transaction_amount)

        split = self.wallet_split_service.split(
            total_amount=roundup.roundup_amount,
            insurance_required=insurance_required,
        )

        if split.insurance_amount > 0:
            self.ledger.record(
                transaction_id=transaction_id,
                wallet_type="insurance",
                amount=split.insurance_amount,
                entry_type="credit",
                description="?1 UPI round-up allocated to insurance wallet",
            )

        if split.savings_amount > 0:
            self.ledger.record(
                transaction_id=transaction_id,
                wallet_type="savings",
                amount=split.savings_amount,
                entry_type="credit",
                description="?1 UPI round-up allocated to savings wallet",
            )

        return AllocationResult(
            transaction_id=transaction_id,
            transaction_amount=roundup.transaction_amount,
            roundup_amount=roundup.roundup_amount,
            insurance_amount=split.insurance_amount,
            savings_amount=split.savings_amount,
        )
