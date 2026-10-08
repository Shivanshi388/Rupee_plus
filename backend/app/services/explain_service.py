from backend.app.services.pricing_service import (
    PricingInput,
    PremiumPricingService,
)


class ExplainabilityService:
    def __init__(self):
        self.pricing_service = PremiumPricingService()

    def explain(self, data: PricingInput) -> dict:
        result = self.pricing_service.calculate(data)
        importances = self.pricing_service.ml_model.feature_importance()

        feature_labels = {
            "monthly_income": "Monthly income",
            "income_stability": "Income stability",
            "work_hours_per_day": "Working hours",
            "city_risk": "Location",
            "occupation_risk": "Occupation",
            "previous_claims": "Previous claims",
        }

        factors = []

        for name, importance in importances.items():
            value = result.factors[name]

            if name == "monthly_income":
                impact = "higher risk" if value < 20000 else "lower risk"
            elif name == "income_stability":
                impact = "higher risk" if value < 0.5 else "lower risk"
            elif name == "work_hours_per_day":
                impact = "higher risk" if value > 9 else "lower risk"
            elif name == "city_risk":
                impact = "higher risk" if value >= 0.6 else "lower risk"
            elif name == "occupation_risk":
                impact = "higher risk" if value >= 0.6 else "lower risk"
            elif name == "previous_claims":
                impact = "higher risk" if value > 0 else "lower risk"
            else:
                impact = "neutral"

            factors.append(
                {
                    "factor": feature_labels[name],
                    "importance": round(importance, 4),
                    "importance_percentage": round(importance * 100, 2),
                    "impact": impact,
                    "value": value,
                }
            )

        factors.sort(
            key=lambda factor: factor["importance"],
            reverse=True,
        )

        highest_factors = [
            factor["factor"]
            for factor in factors[:2]
        ]

        higher_risk_factors = [
            factor["factor"]
            for factor in factors
            if factor["impact"] == "higher risk"
        ]

        if higher_risk_factors:
            personalized_reason = (
                "Factors increasing your estimated risk include "
                + ", ".join(higher_risk_factors[:3])
                + "."
            )
        else:
            personalized_reason = (
                "Your current profile does not show major high-risk "
                "signals across the evaluated factors."
            )

        main_reason = (
            "The main factors influencing the model prediction are "
            + " and ".join(highest_factors)
            + "."
        )

        return {
            "risk_score": result.risk_score,
            "risk_level": result.risk_level,
            "monthly_premium": result.monthly_premium,
            "insurance_allocation": result.insurance_allocation,
            "savings_allocation": result.savings_allocation,
            "factors": factors,
            "message": (
                f"Your estimated risk level is {result.risk_level}. "
                f"Your personalized monthly premium is "
                f"Rs.{result.monthly_premium:.2f}."
            ),
            "summary": main_reason,
            "personalized_reason": personalized_reason,
            "model": "Random Forest",
            "training_data": "Synthetic demo dataset",
        }
