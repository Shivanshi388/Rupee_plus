# Rupee+ ML System

## Overview

Rupee+ uses a Random Forest regression model to estimate a user's insurance risk score from 0 to 100.

The predicted risk score is used by the backend to determine:

- Risk level
- Personalized monthly premium
- Savings allocation
- Insurance allocation
- Personalized recommendations

## ML Features

The model uses six features:

| Feature | Description |
|---|---|
| monthly_income | User's monthly income |
| income_stability | Estimated income stability |
| work_hours_per_day | Average daily working hours |
| city_risk | Risk score associated with the user's city |
| occupation_risk | Risk score associated with the user's occupation |
| previous_claims | Number of previous insurance claims |

## Model

The current implementation uses:

- Random Forest Regressor
- 250 trees
- Maximum tree depth: 10
- Minimum samples per leaf: 3
- Random state: 42

The model is trained on a synthetic/demo dataset.

## Model Evaluation

The current trained model achieved:

- Mean Absolute Error: 3.06
- RMSE: 3.94
- R² Score: 0.9214
- 5-Fold Cross-Validation RMSE: 3.99 ± 0.24

These results are evaluation results on the synthetic/demo dataset and should not be interpreted as real-world insurance performance.

## Feature Importance

The current model reports the following feature importance values:

- City risk: 0.3569
- Occupation risk: 0.3080
- Income stability: 0.1942
- Work hours per day: 0.1132
- Monthly income: 0.0211
- Previous claims: 0.0066

Feature importance describes how much each feature contributes to the Random Forest's predictions. It does not establish causation.

## Profile-to-ML Mapping

The backend automatically maps user profile information into ML features.

### City

Known cities have predefined risk values. Unknown cities receive a default risk value.

### Occupation

Known occupations have predefined risk values. Partial matching is also supported for occupation names.

### Income Stability

Income stability can be derived from monthly income and working hours using the backend mapping service.

## Explainability

The backend exposes:

- Feature importance
- Importance percentage
- Whether each factor represents a higher-risk or lower-risk signal
- Personalized explanation
- Personalized recommendations

The explanation layer uses model feature importance together with rule-based interpretation of the user's individual feature values.

It is not a SHAP-based explanation.

## Recommendations

The recommendation service considers:

- Overall risk level
- Income stability
- Working hours
- City risk
- Occupation risk
- Previous claims

It generates practical suggestions such as maintaining a savings buffer or prioritizing insurance protection.

## Testing

The ML pipeline is covered by automated tests for:

- Model loading
- Risk prediction range
- Feature importance
- Pricing pipeline
- Profile-to-ML mapping
- Recommendation generation
- End-to-end onboarding behavior

The complete backend test suite currently passes all 56 tests.

## Limitations

The current model is intended for the hackathon/demo environment.

Its training data is synthetic and should be replaced with appropriately collected, validated, and privacy-preserving real-world data before production use.

The risk mapping values are also demo assumptions and should be calibrated using actuarial and domain data in a production system.
