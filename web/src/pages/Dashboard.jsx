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
          .dashboard-grid {
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
        }
      `}</style>

      <nav className="dashboard-nav">

        <div className="dashboard-brand">
          <div className="dashboard-brand-mark">₹</div>
          Rupee+
        </div>

        <div className="user-area">
          <div>
            <div className="user-name">
              Darshita
            </div>

            <div className="user-status">
              Financial safety active
            </div>
          </div>

          <div className="user-avatar">
            D
          </div>
        </div>

      </nav>


      <div className="dashboard-layout">

        <aside className="sidebar">

          <div className="sidebar-label">
            Menu
          </div>

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
                ₹1,850 in savings + ₹630 allocated
                towards your protection layer.
              </div>

            </div>

            <div className="safety-score">

              <strong>
                86
              </strong>

              <span>
                SAFETY SCORE
              </span>

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

              <h2>
                ₹1,850
              </h2>

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

              <h2>
                ₹1,00,000
              </h2>

              <small>
                Active protection coverage
              </small>

              <div className="green-text">
                ● COVER ACTIVE
              </div>

            </div>

          </section>


          <section className="activity">

            <h3>
              Recent activity
            </h3>

            <div className="transaction">

              <div className="transaction-icon">
                ☕
              </div>

              <div className="transaction-info">

                <strong>
                  Chai & Snacks
                </strong>

                <span>
                  Today · UPI payment
                </span>

              </div>

              <div className="transaction-amount">
                ₹247
                <span className="roundup">
                  +₹3
                </span>
              </div>

            </div>


            <div className="transaction">

              <div className="transaction-icon">
                🛒
              </div>

              <div className="transaction-info">

                <strong>
                  Grocery Store
                </strong>

                <span>
                  Yesterday · UPI payment
                </span>

              </div>

              <div className="transaction-amount">
                ₹684
                <span className="roundup">
                  +₹6
                </span>
              </div>

            </div>


            <div className="transaction">

              <div className="transaction-icon">
                🚇
              </div>

              <div className="transaction-info">

                <strong>
                  Metro Recharge
                </strong>

                <span>
                  Yesterday · UPI payment
                </span>

              </div>

              <div className="transaction-amount">
                ₹196
                <span className="roundup">
                  +₹4
                </span>
              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;