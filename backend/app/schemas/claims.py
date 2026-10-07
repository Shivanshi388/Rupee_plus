from pydantic import BaseModel, Field


class ClaimRequest(BaseModel):
    claim_id: str = Field(min_length=1)
    user_id: str = Field(min_length=1)
    amount: float = Field(gt=0)
    reason: str = Field(min_length=1)


class ClaimResponse(BaseModel):
    claim_id: str
    user_id: str
    amount: float
    reason: str
    status: str
    insurer_reference: str | None = None
    message: str


class ClaimListResponse(BaseModel):
    user_id: str
    claims: list[ClaimResponse]
