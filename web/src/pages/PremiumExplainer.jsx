function PremiumExplainer({ onBack, onClaims }) {
  return (
    <div style={{ padding: "40px" }}>

      <button onClick={onBack}>
        ← Back
      </button>

      <h1>Premium Explainer</h1>

      <p>
        Your premium helps keep your micro-cover active.
      </p>

      <h2>₹30 / month</h2>

      <button onClick={onClaims}>
        Go to Claims
      </button>

    </div>
  );
}

export default PremiumExplainer;
