from .pricing_service import PricingInput, PremiumPricingService


class ExplainabilityService:
    """
    Explainable-AI layer for the Rupee+ pricing model.

    Uses the exact weights from PremiumPricingService so every
    explanation matches the calculated risk score.
    """

    WEIGHTS = {
        "income_stability": 0.25,
        "work_hours_per_day": 0.15,
        "city_risk": 0.25,
        "occupation_risk": 0.25,
        "previous_claims": 0.10,
    }

    def __init__(self):
        self.pricing_service = PremiumPricingService()

    def explain(self, data: PricingInput) -> dict:
        result = self.pricing_service.calculate(data)

        income_risk = max(
            0.0,
            min(1.0, 1.0 - data.income_stability)
        )

        hours_risk = max(
            0.0,
            min(1.0, (data.work_hours_per_day - 4.0) / 12.0)
        )

        city_risk = max(
            0.0,
            min(1.0, data.city_risk)
        )

        occupation_risk = max(
            0.0,
            min(1.0, data.occupation_risk)
        )

        claims_risk = max(
            0.0,
            min(1.0, data.previous_claims / 5.0)
        )

        contributions = {
            "income_stability": income_risk * self.WEIGHTS["income_stability"] * 100,
            "work_hours_per_day": hours_risk * self.WEIGHTS["work_hours_per_day"] * 100,
            "city_risk": city_risk * self.WEIGHTS["city_risk"] * 100,
            "occupation_risk": occupation_risk * self.WEIGHTS["occupation_risk"] * 100,
            "previous_claims": claims_risk * self.WEIGHTS["previous_claims"] * 100,
        }

        factor_details = [
            {
                "factor": "Income stability",
                "contribution": round(contributions["income_stability"], 2),
                "weight": "25%",
                "impact": (
                    "higher risk"
                    if income_risk >= 0.5
                    else "lower risk"
                ),
                "reason": (
                    "Income varies significantly from month to month."
                    if income_risk >= 0.5
                    else "Income is relatively stable."
                ),
            },
            {
                "factor": "Working hours",
                "contribution": round(contributions["work_hours_per_day"], 2),
                "weight": "15%",
                "impact": (
                    "higher risk"
                    if hours_risk >= 0.5
                    else "lower risk"
                ),
                "reason": (
                    "Long working hours increase exposure to work-related risks."
                    if hours_risk >= 0.5
                    else "Working hours indicate lower exposure."
                ),
            },
            {
                "factor": "Location",
                "contribution": round(contributions["city_risk"], 2),
                "weight": "25%",
                "impact": (
                    "higher risk"
                    if city_risk >= 0.6
                    else "lower risk"
                ),
                "reason": (
                    "The selected location has a higher estimated risk level."
                    if city_risk >= 0.6
                    else "The selected location has a comparatively lower risk level."
                ),
            },
            {
                "factor": "Occupation",
                "contribution": round(contributions["occupation_risk"], 2),
                "weight": "25%",
                "impact": (
                    "higher risk"
                    if occupation_risk >= 0.6
                    else "lower risk"
                ),
                "reason": (
                    "The occupation has greater exposure to insured risks."
                    if occupation_risk >= 0.6
                    else "The occupation has comparatively lower exposure."
                ),
            },
            {
                "factor": "Previous claims",
                "contribution": round(contributions["previous_claims"], 2),
                "weight": "10%",
                "impact": (
                    "higher risk"
                    if data.previous_claims > 0
                    else "lower risk"
                ),
                "reason": (
                    f"{data.previous_claims} previous claim(s) increase the estimated risk."
                    if data.previous_claims > 0
                    else "No previous claims were reported."
                ),
            },
        ]

        factor_details.sort(
            key=lambda factor: factor["contribution"],
            reverse=True
        )

        highest_factors = [
            factor["factor"]
            for factor in factor_details[:2]
            if factor["contribution"] > 0
        ]

        if highest_factors:
            main_reason = (
                "The main factors influencing your risk are "
                + " and ".join(highest_factors)
                + "."
            )
        else:
            main_reason = "Your profile currently shows relatively low risk."

        return {
            "risk_score": result.risk_score,
            "risk_level": result.risk_level,
            "monthly_premium": result.monthly_premium,
            "insurance_allocation": result.insurance_allocation,
            "savings_allocation": result.savings_allocation,
            "factors": factor_details,
            "message": (
                f"Your estimated risk level is {result.risk_level}. "
                f"Your personalized monthly premium is "
                f"\u20b9{result.monthly_premium:.2f}."
            ),
            "summary": main_reason,
        }
