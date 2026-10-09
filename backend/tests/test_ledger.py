import pytest

from backend.app.services.ledger_service import LedgerService


def test_credit_is_recorded():
    ledger = LedgerService()

    entry = ledger.record(
        transaction_id="TXN001",
        wallet_type="savings",
        amount=15,
        entry_type="credit",
        description="Round-up allocation",
    )

    assert entry.transaction_id == "TXN001"
    assert entry.wallet_type == "savings"
    assert entry.amount == 15
    assert entry.entry_type == "credit"


def test_wallet_balance_tracks_credits_and_debits():
    ledger = LedgerService()

    ledger.record(
        "TXN001",
        "savings",
        15,
        "credit",
        "Round-up allocation",
    )

    ledger.record(
        "TXN002",
        "savings",
        5,
        "debit",
        "Withdrawal",
    )

    assert ledger.get_wallet_balance("savings") == 10


def test_insurance_and_savings_balances_are_separate():
    ledger = LedgerService()

    ledger.record("TXN001", "insurance", 25, "credit", "Premium allocation")
    ledger.record("TXN001", "savings", 15, "credit", "Savings allocation")

    assert ledger.get_wallet_balance("insurance") == 25
    assert ledger.get_wallet_balance("savings") == 15


def test_invalid_wallet_type_is_rejected():
    ledger = LedgerService()

    with pytest.raises(ValueError):
        ledger.record(
            "TXN001",
            "unknown",
            10,
            "credit",
            "Invalid wallet",
        )


def test_invalid_amount_is_rejected():
    ledger = LedgerService()

    with pytest.raises(ValueError):
        ledger.record(
            "TXN001",
            "savings",
            0,
            "credit",
            "Invalid amount",
        )
