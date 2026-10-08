from pathlib import Path

import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import KFold, cross_val_score, train_test_split


FEATURE_NAMES = [
    "monthly_income",
    "income_stability",
    "work_hours_per_day",
    "city_risk",
    "occupation_risk",
    "previous_claims",
]

ARTIFACT_DIR = Path(__file__).resolve().parent / "artifacts"
MODEL_PATH = ARTIFACT_DIR / "premium_model.joblib"


def generate_demo_dataset(samples: int = 1200, seed: int = 42):
    rng = np.random.default_rng(seed)

    monthly_income = rng.uniform(8000, 60000, samples)
    income_stability = rng.uniform(0.15, 0.95, samples)
    work_hours = rng.uniform(4, 14, samples)
    city_risk = rng.uniform(0.05, 1.0, samples)
    occupation_risk = rng.uniform(0.05, 1.0, samples)
    previous_claims = rng.integers(0, 6, samples)

    income_risk = 1.0 - income_stability

    income_amount_risk = np.clip(
        1.0 - (monthly_income - 8000) / 52000,
        0.0,
        1.0,
    )

    hours_risk = np.clip(
        (work_hours - 4.0) / 10.0,
        0.0,
        1.0,
    )

    claims_risk = previous_claims / 5.0

    risk = (
        income_risk * 24
        + income_amount_risk * 8
        + hours_risk * 15
        + city_risk * 24
        + occupation_risk * 24
        + claims_risk * 5
    )

    interaction_bonus = (
        city_risk * occupation_risk * 8
        + income_risk * hours_risk * 5
    )

    noise = rng.normal(0, 2.0, samples)

    risk = np.clip(
        risk + interaction_bonus + noise,
        0,
        100,
    )

    X = np.column_stack(
        [
            monthly_income,
            income_stability,
            work_hours,
            city_risk,
            occupation_risk,
            previous_claims,
        ]
    )

    return X, risk


def build_model():
    return RandomForestRegressor(
        n_estimators=250,
        max_depth=10,
        min_samples_leaf=3,
        random_state=42,
        n_jobs=-1,
    )


def train():
    X, y = generate_demo_dataset()

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
    )

    model = build_model()
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    mae = mean_absolute_error(y_test, predictions)
    rmse = np.sqrt(mean_squared_error(y_test, predictions))
    r2 = r2_score(y_test, predictions)

    kfold = KFold(
        n_splits=5,
        shuffle=True,
        random_state=42,
    )

    cv_scores = cross_val_score(
        build_model(),
        X,
        y,
        cv=kfold,
        scoring="neg_root_mean_squared_error",
        n_jobs=-1,
    )

    cv_rmse = -cv_scores

    ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)
    joblib.dump(model, MODEL_PATH)

    print("Rupee+ ML model trained successfully.")
    print(f"Training samples: {len(X_train)}")
    print(f"Test samples: {len(X_test)}")
    print(f"Mean Absolute Error: {mae:.2f}")
    print(f"RMSE: {rmse:.2f}")
    print(f"R2 Score: {r2:.4f}")
    print(f"5-Fold CV RMSE: {cv_rmse.mean():.2f} +/- {cv_rmse.std():.2f}")
    print(f"Model saved to: {MODEL_PATH}")

    print("\nFeature importance:")
    for name, importance in zip(FEATURE_NAMES, model.feature_importances_):
        print(f"  {name}: {importance:.4f}")


if __name__ == "__main__":
    train()
