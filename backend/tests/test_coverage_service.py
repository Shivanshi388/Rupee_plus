from backend.app.services.coverage_service import CoverageService


def test_coverage_activates_when_balance_reaches_premium():
    service = CoverageService()

    result = service.check_coverage(
        required_premium=25.0,
        insurance_balance=25.0,
    )

    assert result.coverage_active is True
    assert result.remaining_amount == 0.0


def test_coverage_remains_inactive_when_balance_is_insufficient():
    service = CoverageService()

    result = service.check_coverage(
        required_premium=25.0,
        insurance_balance=18.0,
    )

    assert result.coverage_active is False
    assert result.remaining_amount == 7.0
