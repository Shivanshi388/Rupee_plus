from dataclasses import dataclass

from backend.app.ml.model import PremiumMLModel


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
    ML-based personalized micro-insurance pricing service.

    The risk score is predicted by a trained Random Forest model.
    The current demo model is trained on synthetic data.
    """

    BASE_PREMIUM = 10.0
    MAX_PREMIUM = 50.0

    def __init__(self):
        self.ml_model = PremiumMLModel().load()

    def calculate_risk_score(self, data: PricingInput) -> float:
        features = {
            "monthly_income": data.monthly_income,
            "income_stability": data.income_stability,
            "work_hours_per_day": data.work_hours_per_day,
            "city_risk": data.city_risk,
            "occupation_risk": data.occupation_risk,
            "previous_claims": data.previous_claims,
        }

        return self.ml_model.predict_risk(features)

    def calculate_premium(self, risk_score: float) -> float:
        premium = self.BASE_PREMIUM + (risk_score / 100) * 40

        return round(
            max(self.BASE_PREMIUM, min(self.MAX_PREMIUM, premium)),
            2,
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
                "monthly_income": data.monthly_income,
                "income_stability": data.income_stability,
                "work_hours_per_day": data.work_hours_per_day,
                "city_risk": data.city_risk,
                "occupation_risk": data.occupation_risk,
                "previous_claims": data.previous_claims,
            },
        )
