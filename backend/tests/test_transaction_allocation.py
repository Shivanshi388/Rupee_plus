from backend.app.services.transaction_allocation import (
    TransactionAllocationService,
)


def test_roundup_is_allocated_to_insurance_first():
    service = TransactionAllocationService()

    result = service.process_transaction(
        transaction_id="UPI001",
        transaction_amount=48.20,
        insurance_required=25,
    )

    assert result.transaction_amount == 48.20
    assert result.roundup_amount == 1
    assert result.insurance_amount == 1
    assert result.savings_amount == 0


def test_savings_receives_amount_after_insurance_requirement():
    service = TransactionAllocationService()

    result = service.process_transaction(
        transaction_id="UPI002",
        transaction_amount=100,
        insurance_required=0.25,
    )

    assert result.roundup_amount == 1
    assert result.insurance_amount == 0.25
    assert result.savings_amount == 0.75


def test_ledger_records_allocation():
    service = TransactionAllocationService()

    service.process_transaction(
        transaction_id="UPI003",
        transaction_amount=250,
        insurance_required=1,
    )

    assert service.ledger.get_wallet_balance("insurance") == 1
    assert service.ledger.get_wallet_balance("savings") == 0


def test_multiple_transactions_accumulate_wallet_balances():
    service = TransactionAllocationService()

    service.process_transaction("UPI004", 50, 0)
    service.process_transaction("UPI005", 75, 0)
    service.process_transaction("UPI006", 100, 0)

    assert service.ledger.get_wallet_balance("insurance") == 0
    assert service.ledger.get_wallet_balance("savings") == 3
