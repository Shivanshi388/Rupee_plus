import pytest

from backend.app.services.roundup_engine import RoundUpEngine


def test_every_transaction_adds_one_rupee():
    engine = RoundUpEngine()

    result = engine.calculate(48.20)

    assert result.roundup_amount == 1.0
    assert result.total_debit == 49.20


def test_different_transaction_amounts_still_add_one_rupee():
    engine = RoundUpEngine()

    result = engine.calculate(125.75)

    assert result.roundup_amount == 1.0
    assert result.total_debit == 126.75


def test_zero_transaction_is_rejected():
    engine = RoundUpEngine()

    with pytest.raises(ValueError):
        engine.calculate(0)


def test_negative_transaction_is_rejected():
    engine = RoundUpEngine()

    with pytest.raises(ValueError):
        engine.calculate(-50)
