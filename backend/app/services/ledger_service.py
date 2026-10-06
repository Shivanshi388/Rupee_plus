from dataclasses import dataclass
from datetime import datetime, timezone
from typing import List


@dataclass
class LedgerEntry:
    transaction_id: str
    wallet_type: str
    amount: float
    entry_type: str
    description: str
    created_at: datetime


class LedgerService:
    def __init__(self):
        self.entries: List[LedgerEntry] = []

    def record(
        self,
        transaction_id: str,
        wallet_type: str,
        amount: float,
        entry_type: str,
        description: str,
    ) -> LedgerEntry:

        if amount <= 0:
            raise ValueError("Ledger amount must be greater than zero.")

        if wallet_type not in {"savings", "insurance"}:
            raise ValueError(
                "Wallet type must be 'savings' or 'insurance'."
            )

        if entry_type not in {"credit", "debit"}:
            raise ValueError(
                "Entry type must be 'credit' or 'debit'."
            )

        entry = LedgerEntry(
            transaction_id=transaction_id,
            wallet_type=wallet_type,
            amount=round(amount, 2),
            entry_type=entry_type,
            description=description,
            created_at=datetime.now(timezone.utc),
        )

        self.entries.append(entry)
        return entry

    def get_entries(self) -> List[LedgerEntry]:
        return list(self.entries)

    def get_wallet_balance(self, wallet_type: str) -> float:
        if wallet_type not in {"savings", "insurance"}:
            raise ValueError(
                "Wallet type must be 'savings' or 'insurance'."
            )

        balance = 0.0

        for entry in self.entries:
            if entry.wallet_type != wallet_type:
                continue

            if entry.entry_type == "credit":
                balance += entry.amount
            else:
                balance -= entry.amount

        return round(balance, 2)
