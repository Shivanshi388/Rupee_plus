from typing import Dict


profiles: Dict[str, dict] = {}


def save_profile(user_id: str, profile: dict) -> dict:
    profiles[user_id] = profile
    return profiles[user_id]


def get_profile(user_id: str) -> dict | None:
    return profiles.get(user_id)
