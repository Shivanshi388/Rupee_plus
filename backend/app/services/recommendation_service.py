from backend.app.services.pricing_service import PricingResult


class RecommendationService:
    """Generate personalized recommendations from ML pricing results."""

    def generate(self, result: PricingResult) -> list[str]:
        recommendations = []

        if result.risk_level == "high":
            recommendations.append(
                "Consider prioritizing insurance protection because your estimated risk is high."
            )
        elif result.risk_level == "medium":
            recommendations.append(
                "Maintain a balanced split between savings and insurance protection."
            )
        else:
            recommendations.append(
                "Your estimated risk is relatively low, so continue building your savings buffer."
            )

        factors = result.factors

        if factors["income_stability"] < 0.5:
            recommendations.append(
                "Build a savings buffer to handle fluctuations in monthly income."
            )

        if factors["work_hours_per_day"] > 9:
            recommendations.append(
                "Your long working hours may increase exposure to work-related risks; maintain adequate protection."
            )

        if factors["city_risk"] >= 0.6:
            recommendations.append(
                "Your location has a higher estimated risk level, making insurance protection more valuable."
            )

        if factors["occupation_risk"] >= 0.6:
            recommendations.append(
                "Your occupation has a higher estimated risk level; consider maintaining consistent insurance coverage."
            )

        if factors["previous_claims"] > 0:
            recommendations.append(
                "Because you have previous claims, keeping your protection active is especially important."
            )

        return recommendations
