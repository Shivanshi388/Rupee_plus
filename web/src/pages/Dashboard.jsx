import { useState } from "react";

function Dashboard({ onProtection, onClaims }) {
  const [active, setActive] = useState("overview");

  return (
    <div className="dashboard-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f4fc;
          color: #292a31;
        }

        .dashboard-page {
          min-height: 100vh;
          background: #f6f4fc;
        }

        .dashboard-nav {
          height: 72px;
          background: white;
          border-bottom: 1px solid #e8e6ee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
        }

        .dashboard-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          font-weight: 900;
          font-size: 19px;
        }

        .dashboard-brand-mark {
          width: 31px;
          height: 31px;
          border-radius: 9px;
          background: #c8ff00;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-area {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #292a31;
          color: #c8ff00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 900;
        }

        .user-name {
          font-size: 12px;
          font-weight: 800;
        }

        .user-status {
          color: #777;
          font-size: 9px;
          margin-top: 3px;
        }

        .dashboard-layout {
          width: min(1200px, 92%);
          margin: 30px auto;
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 25px;
        }

        .sidebar {
          background: white;
          border-radius: 20px;
          padding: 14px;
          height: fit-content;
          border: 1px solid #e9e7ef;
        }

        .sidebar-label {
          color: #999;
          font-size: 8px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 12px;
        }

        .side-button {
          width: 100%;
          border: none;
          background: transparent;
          padding: 12px;
          border-radius: 11px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          color: #666;
        }

        .side-button.active {
          background: #c8ff00;
          color: #292a31;
        }

        .dashboard-content {
          min-width: 0;
        }

        .welcome {
          margin-bottom: 25px;
        }

        .welcome-label {
          color: #777;
          font-size: 10px;
          font-weight: 800;
        }

        .welcome h1 {
          margin: 7px 0;
          font-size: 35px;
          letter-spacing: -1.5px;
        }

        .welcome p {
          color: #777;
          font-size: 11px;
        }

        .safety-overview {
          background: #c8ff00;
          border-radius: 25px;
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 190px;
        }

        .safety-label {
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .safety-value {
          font-size: 48px;
          font-weight: 900;
          margin: 8px 0;
          letter-spacing: -2px;
        }

        .safety-description {
          font-size: 10px;
          max-width: 400px;
          color: #555;
        }

        .safety-score {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #292a31;
          color: #c8ff00;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .safety-score strong {
          font-size: 30px;
        }

        .safety-score span {
          font-size: 8px;
          color: white;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        .dash-card {
          background: white;
          border-radius: 20px;
          border: 1px solid #e9e7ef;
          padding: 23px;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-tag {
          font-size: 8px;
          font-weight: 900;
          color: #777;
          text-transform: uppercase;
        }

        .card-symbol {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #eeedf5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .dash-card h2 {
          margin: 22px 0 3px;
          font-size: 28px;
        }

        .dash-card small {
          color: #777;
          font-size: 9px;
        }

        .green-text {
          color: #7b9200;
          font-size: 9px;
          font-weight: 900;
          margin-top: 12px;
        }

        .cover-card {
          background: #292a31;
          color: white;
        }

        .cover-card .card-tag {
          color: #aaa;
        }

        .cover-card .card-symbol {
          background: #45464d;
          color: #c8ff00;
        }

        .cover-card h2 {
          color: #c8ff00;
        }

        .activity {
          margin-top: 15px;
          background: white;
          border: 1px solid #e9e7ef;
          border-radius: 20px;
          padding: 23px;
        }

        .activity h3 {
          margin: 0 0 18px;
          font-size: 14px;
        }

        .transaction {
          display: flex;
          align-items: center;
          padding: 13px 0;
          border-top: 1px solid #eee;
        }

        .transaction:first-of-type {
          border-top: none;
        }

        .transaction-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #f0eff7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
        }

        .transaction-info {
          flex: 1;
        }

        .transaction-info strong {
          display: block;
          font-size: 10px;
        }

        .transaction-info span {
          font-size: 8px;
          color: #999;
        }

        .transaction-amount {
          font-size: 10px;
          font-weight: 900;
        }

        .roundup {
          color: #788c00;
          font-size: 8px;
          margin-left: 5px;
        }

        .feature-page {
          background: white;
          border: 1px solid #e9e7ef;
          border-radius: 25px;
          padding: 32px;
        }

        .feature-label {
          color: #777;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .feature-page h2 {
          margin: 0;
          font-size: 32px;
          letter-spacing: -1px;
        }

        .feature-page > p {
          color: #777;
          font-size: 12px;
          line-height: 1.6;
          max-width: 650px;
          margin-top: 10px;
        }

        .feature-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .feature-stat {
          background: #f6f4fc;
          border-radius: 18px;
          padding: 22px;
        }

        .feature-stat span {
          display: block;
          color: #777;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .feature-stat strong {
          display: block;
          font-size: 27px;
          margin-top: 9px;
        }

        .progress-box {
          margin-top: 20px;
          background: #292a31;
          color: white;
          border-radius: 20px;
          padding: 23px;
        }

        .progress-box strong {
          color: #c8ff00;
        }

        .progress-track {
          width: 100%;
          height: 12px;
          background: #55565c;
          border-radius: 20px;
          margin-top: 15px;
          overflow: hidden;
        }

        .progress-fill {
          width: 37%;
          height: 100%;
          background: #c8ff00;
          border-radius: 20px;
        }

        .feature-list {
          margin-top: 20px;
        }

        .feature-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
          font-size: 11px;
        }

        .feature-row:last-child {
          border-bottom: none;
        }

        .feature-row strong {
          font-size: 12px;
        }

        .demo-note {
          margin-top: 20px;
          background: #eff8c9;
          border-radius: 16px;
          padding: 15px;
          color: #596300;
          font-size: 10px;
          line-height: 1.5;
        }

        @media(max-width:800px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
          }

          .sidebar {
            display: flex;
            overflow-x: auto;
          }

          .sidebar-label {
            display: none;
          }

          .side-button {
            min-width: 110px;
          }
        }

        @media(max-width:600px) {
          .dashboard-grid,
          .feature-stat-grid {
            grid-template-columns: 1fr;
          }

          .safety-overview {
            padding: 23px;
          }

          .safety-score {
            width: 90px;
            height: 90px;
          }

          .safety-score strong {
            font-size: 22px;
          }

          .safety-value {
            font-size: 35px;
          }

          .user-name {
            display: none;
          }

          .feature-page {
            padding: 23px;
          }
        }
      `}</style>

      <nav className="dashboard-nav">
        <div className="dashboard-brand">
          <div className="dashboard-brand-mark">₹</div>
          Rupee+
        </div>

        <div className="user-area">
          <div>
            <div className="user-name">Darshita</div>
            <div className="user-status">Financial safety active</div>
          </div>

          <div className="user-avatar">D</div>
        </div>
      </nav>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <div className="sidebar-label">Menu</div>

          <button
            className={
              active === "overview"
                ? "side-button active"
                : "side-button"
            }
            onClick={() => setActive("overview")}
          >
            ◉ Overview
          </button>

          <button
            className={
              active === "savings"
                ? "side-button active"
                : "side-button"
            }
            onClick={() => setActive("savings")}
          >
            ₹ Savings
          </button>

          <button
            className={
              active === "roundups"
                ? "side-button active"
                : "side-button"
            }
            onClick={() => setActive("roundups")}
          >
            ↻ Round-ups
          </button>

          <button
            className={
              active === "protection"
                ? "side-button active"
                : "side-button"
            }
            onClick={onProtection}
          >
            ✓ Protection
          </button>

          <button
            className={
              active === "claims"
                ? "side-button active"
                : "side-button"
            }
            onClick={onClaims}
          >
            + Claims
          </button>
        </aside>

        <main className="dashboard-content">

          {active === "overview" && (
            <>
              <div className="welcome">
                <div className="welcome-label">
                  YOUR FINANCIAL SAFETY
                </div>

                <h1>
                  Good afternoon, Darshita.
                </h1>

                <p>
                  Your money is working quietly in the background.
                </p>
              </div>

              <section className="safety-overview">
                <div>
                  <div className="safety-label">
                    Total financial safety
                  </div>

                  <div className="safety-value">
                    ₹2,480
                  </div>

                  <div className="safety-description">
                    ₹1,850 in savings + ₹630 allocated towards your
                    protection layer.
                  </div>
                </div>

                <div className="safety-score">
                  <strong>86</strong>
                  <span>SAFETY SCORE</span>
                </div>
              </section>

              <section className="dashboard-grid">
                <div className="dash-card">
                  <div className="card-top">
                    <span className="card-tag">
                      Savings vault
                    </span>

                    <div className="card-symbol">
                      ₹
                    </div>
                  </div>

                  <h2>₹1,850</h2>

                  <small>
                    Available emergency balance
                  </small>

                  <div className="green-text">
                    ↗ +₹680 this month
                  </div>
                </div>

                <div className="dash-card cover-card">
                  <div className="card-top">
                    <span className="card-tag">
                      Micro-cover
                    </span>

                    <div className="card-symbol">
                      ✓
                    </div>
                  </div>

                  <h2>₹1,00,000</h2>

                  <small>
                    Active protection coverage
                  </small>

                  <div className="green-text">
                    ● COVER ACTIVE
                  </div>
                </div>
              </section>

              <section className="activity">
                <h3>Recent activity</h3>

                <div className="transaction">
                  <div className="transaction-icon">
                    ☕
                  </div>

                  <div className="transaction-info">
                    <strong>Chai & Snacks</strong>
                    <span>Today · UPI payment</span>
                  </div>

                  <div className="transaction-amount">
                    ₹247
                    <span className="roundup">+₹3</span>
                  </div>
                </div>

                <div className="transaction">
                  <div className="transaction-icon">
                    🛒
                  </div>

                  <div className="transaction-info">
                    <strong>Grocery Store</strong>
                    <span>Yesterday · UPI payment</span>
                  </div>

                  <div className="transaction-amount">
                    ₹684
                    <span className="roundup">+₹6</span>
                  </div>
                </div>

                <div className="transaction">
                  <div className="transaction-icon">
                    🚇
                  </div>

                  <div className="transaction-info">
                    <strong>Metro Recharge</strong>
                    <span>Yesterday · UPI payment</span>
                  </div>

                  <div className="transaction-amount">
                    ₹196
                    <span className="roundup">+₹4</span>
                  </div>
                </div>
              </section>
            </>
          )}

          {active === "savings" && (
            <>
              <div className="welcome">
                <div className="welcome-label">
                  SAVINGS
                </div>

                <h1>
                  Build your safety net.
                </h1>

                <p>
                  Small, consistent savings can create a stronger
                  financial cushion.
                </p>
              </div>

              <section className="feature-page">
                <div className="feature-label">
                  SAVINGS VAULT
                </div>

                <h2>₹1,850</h2>

                <p>
                  Your current emergency savings balance. Keep building
                  your cushion for unexpected expenses.
                </p>

                <div className="feature-stat-grid">
                  <div className="feature-stat">
                    <span>Saved this month</span>
                    <strong>₹680</strong>
                  </div>

                  <div className="feature-stat">
                    <span>Savings goal</span>
                    <strong>₹5,000</strong>
                  </div>
                </div>

                <div className="progress-box">
                  <div>
                    Emergency fund progress:{" "}
                    <strong>37%</strong>
                  </div>

                  <div className="progress-track">
                    <div className="progress-fill"></div>
                  </div>
                </div>

                <div className="feature-list">
                  <div className="feature-row">
                    <span>Weekly contribution</span>
                    <strong>₹250</strong>
                  </div>

                  <div className="feature-row">
                    <span>Last contribution</span>
                    <strong>₹250</strong>
                  </div>

                  <div className="feature-row">
                    <span>Next contribution</span>
                    <strong>Friday</strong>
                  </div>
                </div>

                <div className="demo-note">
                  Demo data: these savings figures are sample values for
                  the Rupee+ frontend experience.
                </div>
              </section>
            </>
          )}

          {active === "roundups" && (
            <>
              <div className="welcome">
                <div className="welcome-label">
                  ROUND-UPS
                </div>

                <h1>
                  Turn spare change into savings.
                </h1>

                <p>
                  Your everyday payments can automatically contribute
                  small amounts to your financial safety net.
                </p>
              </div>

              <section className="feature-page">
                <div className="feature-label">
                  ROUND-UP SAVINGS
                </div>

                <h2>₹630</h2>

                <p>
                  Total amount collected through round-ups. Each payment
                  is rounded up and the difference is added to your
                  savings.
                </p>

                <div className="feature-stat-grid">
                  <div className="feature-stat">
                    <span>This month</span>
                    <strong>₹180</strong>
                  </div>

                  <div className="feature-stat">
                    <span>Transactions</span>
                    <strong>42</strong>
                  </div>
                </div>

                <div className="progress-box">
                  <div>
                    Round-up system:{" "}
                    <strong>ACTIVE</strong>
                  </div>

                  <div className="feature-list">
                    <div className="feature-row">
                      <span>Chai & Snacks</span>
                      <strong>+₹3</strong>
                    </div>

                    <div className="feature-row">
                      <span>Grocery Store</span>
                      <strong>+₹6</strong>
                    </div>

                    <div className="feature-row">
                      <span>Metro Recharge</span>
                      <strong>+₹4</strong>
                    </div>
                  </div>
                </div>

                <div className="demo-note">
                  Demo data: round-up amounts are sample values for the
                  Rupee+ frontend experience.
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;