from pydantic import BaseModel, Field


class TransactionRequest(BaseModel):
    transaction_id: str = Field(min_length=1)
    user_id: str = Field(min_length=1)
    amount: float = Field(gt=0)
    insurance_required: float | None = Field(default=None, gt=0)


class TransactionResponse(BaseModel):
    transaction_id: str
    user_id: str
    transaction_amount: float
    roundup_amount: float
    insurance_amount: float
    savings_amount: float
    insurance_balance: float
    savings_balance: float
    insurance_required: float
    coverage_active: bool
    message: str
