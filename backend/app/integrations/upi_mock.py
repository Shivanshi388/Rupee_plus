from datetime import datetime
from typing import Dict, List


class UPIMock:
	"""Mock UPI integration for Rupee+."""

	def __init__(self) -> None:
		self.transactions: List[Dict] = []

	def create_transaction(
		self,
		user_id: str,
		amount: float,
		merchant: str,
		category: str = "other",
	) -> Dict:
		"""Create and store a mock UPI transaction."""
		if amount <= 0:
			raise ValueError("Transaction amount must be greater than 0")

		transaction = {
			"transaction_id": f"UPI-{len(self.transactions) + 1:06d}",
			"user_id": user_id,
			"amount": round(amount, 2),
			"merchant": merchant,
			"category": category,
			"status": "success",
			"timestamp": datetime.utcnow().isoformat(),
		}
		self.transactions.append(transaction)
		return transaction

	def get_transactions(self, user_id: str) -> List[Dict]:
		"""Return all transactions belonging to a user."""
		return [
			transaction
			for transaction in self.transactions
			if transaction["user_id"] == user_id
		]

	def get_transaction(self, transaction_id: str) -> Dict | None:
		"""Return a transaction by its ID, or None if it does not exist."""
		for transaction in self.transactions:
			if transaction["transaction_id"] == transaction_id:
				return transaction
		return None
