from pathlib import Path

import joblib
import numpy as np


FEATURE_NAMES = [
    "monthly_income",
    "income_stability",
    "work_hours_per_day",
    "city_risk",
    "occupation_risk",
    "previous_claims",
]

MODEL_PATH = Path(__file__).resolve().parent / "artifacts" / "premium_model.joblib"


class PremiumMLModel:
    def __init__(self):
        self.model = None

    def load(self):
        if not MODEL_PATH.exists():
            raise FileNotFoundError(
                f"Trained model not found at {MODEL_PATH}. "
                "Run: python -m backend.app.ml.train_model"
            )

        self.model = joblib.load(MODEL_PATH)
        return self

    def predict_risk(self, features: dict) -> float:
        if self.model is None:
            self.load()

        values = np.array(
            [[features[name] for name in FEATURE_NAMES]],
            dtype=float,
        )

        prediction = float(self.model.predict(values)[0])

        return round(float(np.clip(prediction, 0.0, 100.0)), 2)

    def feature_importance(self) -> dict:
        if self.model is None:
            self.load()

        importances = self.model.feature_importances_

        return {
            name: round(float(value), 4)
            for name, value in zip(FEATURE_NAMES, importances)
        }
