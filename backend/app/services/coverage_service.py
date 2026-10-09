from dataclasses import dataclass


@dataclass
class CoverageResult:
    required_premium: float
    insurance_balance: float
    coverage_active: bool
    remaining_amount: float


class CoverageService:
    """
    Determines whether the accumulated insurance wallet
    is sufficient to activate the user's protection.
    """

    def check_coverage(
        self,
        required_premium: float,
        insurance_balance: float,
    ) -> CoverageResult:

        if required_premium <= 0:
            raise ValueError(
                "Required premium must be greater than zero."
            )

        if insurance_balance < 0:
            raise ValueError(
                "Insurance balance cannot be negative."
            )

        remaining = max(
            0.0,
            required_premium - insurance_balance,
        )

        return CoverageResult(
            required_premium=round(required_premium, 2),
            insurance_balance=round(insurance_balance, 2),
            coverage_active=insurance_balance >= required_premium,
            remaining_amount=round(remaining, 2),
        )
