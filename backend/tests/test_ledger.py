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
from backend.app.services.ledger_service import LedgerService


def test_ledger_keeps_user_balances_separate():
    ledger = LedgerService()

    ledger.record(
        "TXN001",
        "insurance",
        5,
        "credit",
        "Insurance allocation",
        user_id="USR001",
    )

    ledger.record(
        "TXN002",
        "insurance",
        8,
        "credit",
        "Insurance allocation",
        user_id="USR002",
    )

    assert ledger.get_wallet_balance("insurance", "USR001") == 5
    assert ledger.get_wallet_balance("insurance", "USR002") == 8


def test_transaction_allocation_is_user_specific():
    from backend.app.services.transaction_allocation import (
        TransactionAllocationService,
    )

    ledger = LedgerService()
    service = TransactionAllocationService(ledger)

    result_1 = service.process_transaction(
        transaction_id="TXN001",
        transaction_amount=100,
        insurance_required=2,
        user_id="USR001",
    )

    result_2 = service.process_transaction(
        transaction_id="TXN002",
        transaction_amount=100,
        insurance_required=2,
        user_id="USR002",
    )

    assert result_1.insurance_balance == 1
    assert result_2.insurance_balance == 1

    assert ledger.get_wallet_balance("insurance", "USR001") == 1
    assert ledger.get_wallet_balance("insurance", "USR002") == 1
