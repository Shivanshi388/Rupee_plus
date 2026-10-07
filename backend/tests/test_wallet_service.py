from backend.app.services.ledger_service import LedgerService
from backend.app.services.wallet_service import WalletService


def test_wallet_service_returns_balances():
    ledger = LedgerService()

    ledger.record(
        transaction_id="TXN001",
        wallet_type="insurance",
        amount=0.60,
        entry_type="credit",
        description="Insurance allocation",
    )

    ledger.record(
        transaction_id="TXN001",
        wallet_type="savings",
        amount=0.40,
        entry_type="credit",
        description="Savings allocation",
    )

    service = WalletService(ledger)

    result = service.get_balances()

    assert result["insurance_balance"] == 0.60
    assert result["savings_balance"] == 0.40
    assert result["total_balance"] == 1.00
