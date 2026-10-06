from dataclasses import dataclass


@dataclass
class WalletSplit:
    total_amount: float
    insurance_amount: float
    savings_amount: float


class WalletSplitService:
    """
    Splits collected Rupee+ round-ups between:
    - Insurance Wallet: amount required for the current premium
    - Savings Wallet: remaining amount
    """

    def split(self, total_amount: float, insurance_required: float) -> WalletSplit:
        if total_amount < 0:
            raise ValueError("Total amount cannot be negative.")

        if insurance_required < 0:
            raise ValueError("Insurance requirement cannot be negative.")

        insurance_amount = min(total_amount, insurance_required)
        savings_amount = total_amount - insurance_amount

        return WalletSplit(
            total_amount=round(total_amount, 2),
            insurance_amount=round(insurance_amount, 2),
            savings_amount=round(savings_amount, 2),
        )
