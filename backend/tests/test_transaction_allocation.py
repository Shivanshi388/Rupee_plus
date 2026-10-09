from backend.app.services.transaction_allocation import (
    TransactionAllocationService,
)


def test_roundups_fill_insurance_before_savings():
    service = TransactionAllocationService()

    result_1 = service.process_transaction(
        transaction_id="TXN001",
        transaction_amount=100.0,
        insurance_required=3.0,
    )

    result_2 = service.process_transaction(
        transaction_id="TXN002",
        transaction_amount=200.0,
        insurance_required=3.0,
    )

    result_3 = service.process_transaction(
        transaction_id="TXN003",
        transaction_amount=300.0,
        insurance_required=3.0,
    )

    assert result_1.insurance_amount == 1.0
    assert result_1.savings_amount == 0.0

    assert result_2.insurance_amount == 1.0
    assert result_2.savings_amount == 0.0

    assert result_3.insurance_amount == 1.0
    assert result_3.savings_amount == 0.0

    assert result_3.insurance_balance == 3.0
    assert result_3.savings_balance == 0.0
    assert result_3.coverage_active is True


def test_extra_roundups_go_to_savings_after_insurance_is_full():
    service = TransactionAllocationService()

    for index in range(3):
        service.process_transaction(
            transaction_id=f"TXN00{index + 1}",
            transaction_amount=100.0,
            insurance_required=3.0,
        )

    result = service.process_transaction(
        transaction_id="TXN004",
        transaction_amount=100.0,
        insurance_required=3.0,
    )

    assert result.insurance_amount == 0.0
    assert result.savings_amount == 1.0
    assert result.insurance_balance == 3.0
    assert result.savings_balance == 1.0
    assert result.coverage_active is True


def test_partial_insurance_requirement_splits_roundup():
    service = TransactionAllocationService()

    service.process_transaction(
        transaction_id="TXN001",
        transaction_amount=100.0,
        insurance_required=0.5,
    )

    result = service.process_transaction(
        transaction_id="TXN002",
        transaction_amount=100.0,
        insurance_required=0.5,
    )

    assert result.insurance_amount == 0.0
    assert result.savings_amount == 1.0
    assert result.insurance_balance == 0.5
    assert result.savings_balance == 1.5
    assert result.coverage_active is True
