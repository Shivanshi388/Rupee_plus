function Claims({ onBack }) {
  return (
    <div style={{ padding: "40px" }}>

      <button onClick={onBack}>
        ← Back to Dashboard
      </button>

      <h1>Claims</h1>

      <p>
        Need help with a covered event?
      </p>

      <button>
        Start a Claim
      </button>

    </div>
  );
}

export default Claims;
