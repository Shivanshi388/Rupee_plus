function Dashboard({
  onCoverStatus,
  onPremium,
  onClaims,
  onHome
}) {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px"
    }}>

      <button onClick={onHome}>
        ← Home
      </button>

      <h1>Rupee+ Dashboard</h1>

      <p>
        Welcome back, Darshita 👋
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        maxWidth: "900px"
      }}>

        <div>
          <h2>Savings</h2>
          <h3>₹12,840</h3>
          <p>Your savings balance</p>
        </div>

        <div>
          <h2>Micro-Cover</h2>
          <h3>₹50,000</h3>
          <p>Protection available</p>
        </div>

        <div>
          <h2>Round-ups</h2>
          <h3>₹680</h3>
          <p>Saved this month</p>
        </div>

        <div>
          <h2>Protection</h2>
          <h3>Active</h3>
          <p>Your cover is active</p>
        </div>

      </div>

      <br />

      <button onClick={onCoverStatus}>
        View Cover Status
      </button>

      <button
        onClick={onPremium}
        style={{ marginLeft: "10px" }}
      >
        Understand Premium
      </button>

      <button
        onClick={onClaims}
        style={{ marginLeft: "10px" }}
      >
        Claims
      </button>

    </div>
  );
}

export default Dashboard;