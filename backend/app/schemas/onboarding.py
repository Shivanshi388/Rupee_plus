from pydantic import BaseModel, Field


class OnboardingRequest(BaseModel):
    user_id: str = Field(min_length=1)
    name: str = Field(min_length=1)
    occupation: str = Field(min_length=1)
    city: str = Field(min_length=1)
    monthly_income: float = Field(gt=0)
    income_stability: float = Field(ge=0, le=1)
    work_hours_per_day: float = Field(gt=0, le=24)
    city_risk: float = Field(ge=0, le=1)
    occupation_risk: float = Field(ge=0, le=1)
    previous_claims: int = Field(ge=0)


class OnboardingResponse(BaseModel):
    user_id: str
    name: str
    occupation: str
    city: str
    monthly_income: float
    income_stability: float
    work_hours_per_day: float
    city_risk: float
    occupation_risk: float
    previous_claims: int
    risk_score: float
    risk_level: str
    monthly_premium: float
    insurance_allocation: float
    savings_allocation: float
    message: str
