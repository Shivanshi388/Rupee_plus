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
    user_id: str = "default"
    created_at: datetime = None

    def __post_init__(self):
        if self.created_at is None:
            self.created_at = datetime.now(timezone.utc)


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
        user_id: str = "default",
    ) -> LedgerEntry:

        if wallet_type not in {"savings", "insurance"}:
            raise ValueError("Wallet type must be savings or insurance.")

        if amount <= 0:
            raise ValueError("Amount must be greater than zero.")

        if entry_type not in {"credit", "debit"}:
            raise ValueError("Entry type must be credit or debit.")

        if not user_id:
            raise ValueError("User ID is required.")

        entry = LedgerEntry(
            transaction_id=transaction_id,
            wallet_type=wallet_type,
            amount=round(amount, 2),
            entry_type=entry_type,
            description=description,
            user_id=user_id,
        )

        self.entries.append(entry)
        return entry

    def get_entries(self, user_id: str | None = None) -> List[LedgerEntry]:
        if user_id is None:
            return list(self.entries)

        return [
            entry
            for entry in self.entries
            if entry.user_id == user_id
        ]

    def get_wallet_balance(
        self,
        wallet_type: str,
        user_id: str = "default",
    ) -> float:

        if wallet_type not in {"savings", "insurance"}:
            raise ValueError("Wallet type must be savings or insurance.")

        balance = 0.0

        for entry in self.entries:
            if (
                entry.user_id == user_id
                and entry.wallet_type == wallet_type
            ):
                if entry.entry_type == "credit":
                    balance += entry.amount
                else:
                    balance -= entry.amount

        return round(balance, 2)
