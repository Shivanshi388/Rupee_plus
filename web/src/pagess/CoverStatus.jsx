function CoverStatus({ onBack, onPremium }) {
  return (
    <div style={{ padding: "40px" }}>

      <button onClick={onBack}>
        ← Back
      </button>

      <h1>Cover Status</h1>

      <h2>₹50,000</h2>

      <p>
        Your Rupee+ protection is active.
      </p>

      <button onClick={onPremium}>
        Learn About Premium
      </button>

    </div>
  );
}

export default CoverStatus;