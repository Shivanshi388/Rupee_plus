import pytest

from backend.app.services.wallet_split import WalletSplitService


def test_high_risk_example_splits_40_into_25_insurance_and_15_savings():
    service = WalletSplitService()

    result = service.split(
        total_amount=40,
        insurance_required=25,
    )

    assert result.total_amount == 40
    assert result.insurance_amount == 25
    assert result.savings_amount == 15


def test_if_collected_amount_is_less_than_premium_all_goes_to_insurance():
    service = WalletSplitService()

    result = service.split(
        total_amount=10,
        insurance_required=25,
    )

    assert result.insurance_amount == 10
    assert result.savings_amount == 0


def test_extra_money_after_premium_goes_to_savings():
    service = WalletSplitService()

    result = service.split(
        total_amount=40,
        insurance_required=20,
    )

    assert result.insurance_amount == 20
    assert result.savings_amount == 20


def test_negative_amount_is_rejected():
    service = WalletSplitService()

    with pytest.raises(ValueError):
        service.split(-1, 25)


def test_negative_insurance_requirement_is_rejected():
    service = WalletSplitService()

    with pytest.raises(ValueError):
        service.split(40, -1)
