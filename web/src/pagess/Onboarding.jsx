function Onboarding({ onComplete, onBack }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "40px"
    }}>
      <div>
        <h1>Welcome to Rupee+</h1>

        <p>
          Let's set up your financial protection.
        </p>

        <button onClick={onBack}>
          Back
        </button>

        <button
          onClick={onComplete}
          style={{ marginLeft: "10px" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Onboarding;