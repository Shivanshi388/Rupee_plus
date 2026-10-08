from backend.app.services.risk_mapping import (
    derive_income_stability,
    map_city_risk,
    map_occupation_risk,
)


def test_known_city_risk():
    assert map_city_risk("Delhi") == 0.85


def test_unknown_city_gets_default_risk():
    assert map_city_risk("Unknown City") == 0.60


def test_known_occupation_risk():
    assert map_occupation_risk("Delivery Rider") == 0.80


def test_unknown_occupation_gets_default_risk():
    assert map_occupation_risk("Unknown Job") == 0.60


def test_income_stability_stays_in_valid_range():
    stability = derive_income_stability(18000, 10)

    assert 0.15 <= stability <= 0.95
