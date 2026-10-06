import { useState } from "react";
import "../App.css";

function Onboarding({ onComplete, onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    occupation: "",
    city: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.income ||
      !formData.occupation ||
      !formData.city
    ) {
      setError("Please complete all the fields.");
      return;
    }

    localStorage.setItem(
      "rupeePlusUser",
      JSON.stringify(formData)
    );

    onComplete(formData);
  };

  return (
    <main className="onboarding-page">
      <div className="onboarding-container">

        <button
          className="back-button"
          onClick={onBack}
          type="button"
        >
          ← Back
        </button>

        <div className="onboarding-header">

          <div className="eyebrow">
            <span className="dot"></span>
            WELCOME TO RUPEE+
          </div>

          <h1>
            Let's build your
            <br />
            financial safety.
          </h1>

          <p>
            Tell us a little about yourself so Rupee+ can
            personalize your savings and protection experience.
          </p>

        </div>

        <form
          className="onboarding-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="age">
                Age
              </label>

              <input
                id="age"
                name="age"
                type="number"
                placeholder="e.g. 24"
                min="18"
                max="100"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="e.g. Lucknow"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="income">
              Monthly Income
            </label>

            <select
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
            >
              <option value="">
                Select your income range
              </option>

              <option value="below-15000">
                Below ₹15,000
              </option>

              <option value="15000-30000">
                ₹15,000 – ₹30,000
              </option>

              <option value="30000-50000">
                ₹30,000 – ₹50,000
              </option>

              <option value="50000-100000">
                ₹50,000 – ₹1,00,000
              </option>

              <option value="above-100000">
                Above ₹1,00,000
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="occupation">
              Occupation
            </label>

            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            >
              <option value="">
                Select your occupation
              </option>

              <option value="student">
                Student
              </option>

              <option value="salaried">
                Salaried
              </option>

              <option value="self-employed">
                Self-employed
              </option>

              <option value="business">
                Business Owner
              </option>

              <option value="freelancer">
                Freelancer
              </option>

              <option value="other">
                Other
              </option>
            </select>
          </div>

          {error && (
            <div className="form-error">
              {error}
            </div>
          )}

          <button
            className="onboarding-submit"
            type="submit"
          >
            Continue
            <span>→</span>
          </button>

        </form>

        <p className="privacy-note">
          🔒 Your information is stored securely and used
          only to personalize your Rupee+ experience.
        </p>

      </div>
    </main>
  );
}

export default Onboarding;