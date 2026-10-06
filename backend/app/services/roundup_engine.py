from dataclasses import dataclass


@dataclass
class RoundUpResult:
    transaction_amount: float
    roundup_amount: float
    total_debit: float


class RoundUpEngine:
    """
    Rupee+ round-up rule.

    Every eligible UPI transaction contributes exactly ?1
    toward the Rupee+ wallet.
    """

    ROUNDUP_AMOUNT = 1.0

    def calculate(self, transaction_amount: float) -> RoundUpResult:
        if transaction_amount <= 0:
            raise ValueError("Transaction amount must be greater than zero.")

        return RoundUpResult(
            transaction_amount=round(transaction_amount, 2),
            roundup_amount=self.ROUNDUP_AMOUNT,
            total_debit=round(
                transaction_amount + self.ROUNDUP_AMOUNT,
                2
            ),
        )
