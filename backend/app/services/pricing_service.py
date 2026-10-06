from dataclasses import dataclass


@dataclass
class PricingInput:
    monthly_income: float
    income_stability: float
    work_hours_per_day: float
    city_risk: float
    occupation_risk: float
    previous_claims: int = 0


@dataclass
class PricingResult:
    risk_score: float
    monthly_premium: float
    savings_allocation: float
    insurance_allocation: float
    risk_level: str
    factors: dict


class PremiumPricingService:
    """
    Personalized micro-insurance pricing engine for Rupee+.

    The current implementation is a transparent baseline scoring model.
    It is intentionally deterministic so the hackathon demo can explain
    exactly why a premium was calculated.
    """

    BASE_PREMIUM = 10.0
    MAX_PREMIUM = 50.0

    def calculate_risk_score(self, data: PricingInput) -> float:
        income_risk = max(0.0, min(1.0, 1.0 - data.income_stability))

        hours_risk = max(
            0.0,
            min(1.0, (data.work_hours_per_day - 4.0) / 12.0)
        )

        city_risk = max(0.0, min(1.0, data.city_risk))
        occupation_risk = max(0.0, min(1.0, data.occupation_risk))

        claims_risk = max(
            0.0,
            min(1.0, data.previous_claims / 5.0)
        )

        # Weighted risk score.
        score = (
            income_risk * 0.25
            + hours_risk * 0.15
            + city_risk * 0.25
            + occupation_risk * 0.25
            + claims_risk * 0.10
        )

        return round(score * 100, 2)

    def calculate_premium(self, risk_score: float) -> float:
        premium = self.BASE_PREMIUM + (risk_score / 100) * 40

        return round(
            max(self.BASE_PREMIUM, min(self.MAX_PREMIUM, premium)),
            2
        )

    def get_risk_level(self, risk_score: float) -> str:
        if risk_score < 35:
            return "low"
        if risk_score < 65:
            return "medium"
        return "high"

    def calculate(self, data: PricingInput) -> PricingResult:
        risk_score = self.calculate_risk_score(data)
        premium = self.calculate_premium(risk_score)
        risk_level = self.get_risk_level(risk_score)

        # Example Rupee+ wallet allocation.
        # Higher risk means a greater share goes toward protection.
        insurance_ratio = 0.40 + (risk_score / 100) * 0.35
        insurance_ratio = min(0.75, max(0.40, insurance_ratio))

        savings_ratio = 1.0 - insurance_ratio

        return PricingResult(
            risk_score=risk_score,
            monthly_premium=premium,
            savings_allocation=round(savings_ratio * 100, 2),
            insurance_allocation=round(insurance_ratio * 100, 2),
            risk_level=risk_level,
            factors={
                "income_stability": data.income_stability,
                "work_hours_per_day": data.work_hours_per_day,
                "city_risk": data.city_risk,
                "occupation_risk": data.occupation_risk,
                "previous_claims": data.previous_claims,
            },
        )
