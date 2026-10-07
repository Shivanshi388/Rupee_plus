from pydantic import BaseModel


class WalletBalanceResponse(BaseModel):
    user_id: str
    savings_balance: float
    insurance_balance: float
    total_balance: float
