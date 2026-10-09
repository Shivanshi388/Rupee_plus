from pydantic import BaseModel, Field


class PremiumRequest(BaseModel):
    monthly_income: float = Field(gt=0)
    income_stability: float = Field(ge=0, le=1)
    work_hours_per_day: float = Field(ge=0)
    city_risk: float = Field(ge=0, le=1)
    occupation_risk: float = Field(ge=0, le=1)
    previous_claims: int = Field(ge=0)


class PremiumResponse(BaseModel):
    risk_score: float
    risk_level: str
    monthly_premium: float
    insurance_allocation: float
    savings_allocation: float
    factors: list[dict]
    message: str
    summary: str
