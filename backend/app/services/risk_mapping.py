CITY_RISK = {
    "delhi": 0.85,
    "mumbai": 0.80,
    "bangalore": 0.70,
    "bengaluru": 0.70,
    "hyderabad": 0.65,
    "chennai": 0.65,
    "kolkata": 0.75,
    "pune": 0.55,
    "noida": 0.70,
    "gurgaon": 0.75,
    "gurugram": 0.75,
    "agra": 0.50,
}

OCCUPATION_RISK = {
    "delivery rider": 0.80,
    "delivery": 0.80,
    "driver": 0.75,
    "cab driver": 0.75,
    "construction worker": 0.90,
    "construction": 0.90,
    "factory worker": 0.70,
    "security guard": 0.65,
    "domestic worker": 0.60,
    "street vendor": 0.65,
    "shop worker": 0.45,
    "freelancer": 0.40,
    "office worker": 0.30,
    "teacher": 0.25,
}


def map_city_risk(city: str) -> float:
    return CITY_RISK.get(city.strip().lower(), 0.60)


def map_occupation_risk(occupation: str) -> float:
    normalized = occupation.strip().lower()

    if normalized in OCCUPATION_RISK:
        return OCCUPATION_RISK[normalized]

    for name, risk in OCCUPATION_RISK.items():
        if name in normalized or normalized in name:
            return risk

    return 0.60


def derive_income_stability(monthly_income: float, work_hours_per_day: float) -> float:
    income_factor = min(max((monthly_income - 8000) / 52000, 0.0), 1.0)
    hours_factor = min(max((work_hours_per_day - 4) / 10, 0.0), 1.0)

    stability = 0.35 + income_factor * 0.40 - hours_factor * 0.10

    return round(min(0.95, max(0.15, stability)), 2)
