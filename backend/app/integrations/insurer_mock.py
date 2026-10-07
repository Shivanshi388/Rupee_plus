from dataclasses import dataclass


@dataclass
class InsurerDecision:
    approved: bool
    status: str
    reference: str
    message: str


class InsurerMock:
    """
    Demo insurer integration.

    This mock represents the external licensed-insurer API
    that would receive and process a real claim.
    """

    def submit_claim(
        self,
        claim_id: str,
        user_id: str,
        amount: float,
        reason: str,
    ) -> InsurerDecision:

        reference = f"INS-{claim_id}"

        return InsurerDecision(
            approved=True,
            status="approved",
            reference=reference,
            message="Claim approved by demo insurer.",
        )
