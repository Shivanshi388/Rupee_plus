from typing import Dict, List


class AccountAggregatorMock:
    """
    Mock Account Aggregator for Rupee+.

    Simulates fetching a user's financial information
    without connecting to a real Account Aggregator network.
    """

    def __init__(self):
        self.user_data: Dict[str, Dict] = {}

    def add_user_data(
        self,
        user_id: str,
        monthly_income: float,
        average_monthly_expense: float,
        income_sources: List[str],
    ) -> Dict:
        """Store mock financial information for a user."""

        if monthly_income < 0:
            raise ValueError("Monthly income cannot be negative")

        if average_monthly_expense < 0:
            raise ValueError("Monthly expenses cannot be negative")

        data = {
            "user_id": user_id,
            "monthly_income": round(monthly_income, 2),
            "average_monthly_expense": round(average_monthly_expense, 2),
            "income_sources": income_sources,
        }

        self.user_data[user_id] = data

        return data

    def get_user_data(self, user_id: str) -> Dict | None:
        """Return financial information for a user."""

        return self.user_data.get(user_id)

    def calculate_monthly_surplus(self, user_id: str) -> float:
        """Calculate income remaining after average expenses."""

        data = self.get_user_data(user_id)

        if data is None:
            raise ValueError(f"No financial data found for user: {user_id}")

        return round(
            data["monthly_income"] - data["average_monthly_expense"],
            2,
        )
        
