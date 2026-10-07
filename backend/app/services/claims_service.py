from datetime import datetime, timezone
from dataclasses import dataclass
from typing import Dict


@dataclass
class Claim:
    claim_id: str
    user_id: str
    amount: float
    reason: str
    status: str
    insurer_reference: str | None = None
    created_at: datetime | None = None

    def __post_init__(self):
        if self.created_at is None:
            self.created_at = datetime.now(timezone.utc)


class ClaimsService:
    def __init__(self):
        self.claims: Dict[str, Claim] = {}

    def create_claim(
        self,
        claim_id: str,
        user_id: str,
        amount: float,
        reason: str,
    ) -> Claim:

        if not claim_id:
            raise ValueError("Claim ID is required.")

        if not user_id:
            raise ValueError("User ID is required.")

        if amount <= 0:
            raise ValueError("Claim amount must be greater than zero.")

        if not reason.strip():
            raise ValueError("Claim reason is required.")

        if claim_id in self.claims:
            raise ValueError("Claim already exists.")

        claim = Claim(
            claim_id=claim_id,
            user_id=user_id,
            amount=round(amount, 2),
            reason=reason.strip(),
            status="submitted",
        )

        self.claims[claim_id] = claim
        return claim

    def get_claim(self, claim_id: str) -> Claim | None:
        return self.claims.get(claim_id)

    def get_user_claims(self, user_id: str) -> list[Claim]:
        return [
            claim
            for claim in self.claims.values()
            if claim.user_id == user_id
        ]
