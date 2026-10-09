from pydantic import BaseModel, Field


class CoverageRequest(BaseModel):
    user_id: str = Field(min_length=1)
    required_premium: float = Field(gt=0)
    insurance_balance: float = Field(ge=0)


class CoverageResponse(BaseModel):
    user_id: str
    required_premium: float
    insurance_balance: float
    coverage_active: bool
    remaining_amount: float
    message: str
