import { useState } from "react";

function CoverStatus({ onBack, onPremium }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="cover-status-page">
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

        .cover-status-page {
          min-height: 100vh;
          background: #f6f4fc;
        }

        .cover-nav {
          height: 72px;
          background: white;
          border-bottom: 1px solid #e8e6ee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
        }

        .cover-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          font-weight: 900;
          font-size: 19px;
        }

        .cover-mark {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: #c8ff00;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-nav {
          border: none;
          background: transparent;
          font-size: 10px;
          font-weight: 900;
          cursor: pointer;
          color: #666;
        }

        .cover-container {
          width: min(900px, 92%);
          margin: 45px auto;
        }

        .eyebrow {
          font-size: 9px;
          font-weight: 900;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .cover-container h1 {
          font-size: 42px;
          letter-spacing: -2px;
          margin: 8px 0;
        }

        .intro {
          color: #777;
          font-size: 11px;
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .status-card {
          background: #292a31;
          color: white;
          border-radius: 26px;
          padding: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .active-badge {
          display: inline-block;
          background: #c8ff00;
          color: #292a31;
          border-radius: 20px;
          padding: 7px 11px;
          font-size: 8px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .status-card h2 {
          color: #c8ff00;
          font-size: 43px;
          margin: 0 0 6px;
          letter-spacing: -1.5px;
        }

        .status-card p {
          color: #bbb;
          font-size: 10px;
          margin: 0;
        }

        .status-circle {
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: #3c3d43;
          border: 8px solid #c8ff00;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .status-circle strong {
          font-size: 28px;
          color: #c8ff00;
        }

        .status-circle span {
          font-size: 8px;
          color: white;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        .detail-card {
          background: white;
          border: 1px solid #e7e5ed;
          border-radius: 20px;
          padding: 23px;
        }

        .detail-label {
          font-size: 8px;
          color: #888;
          text-transform: uppercase;
          font-weight: 900;
        }

        .detail-value {
          font-size: 25px;
          font-weight: 900;
          margin-top: 13px;
        }

        .detail-description {
          font-size: 9px;
          color: #888;
          line-height: 1.5;
          margin-top: 5px;
        }

        .coverage-list {
          background: white;
          border: 1px solid #e7e5ed;
          border-radius: 20px;
          padding: 23px;
          margin-top: 15px;
        }

        .coverage-list h3 {
          margin: 0 0 16px;
          font-size: 14px;
        }

        .coverage-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding: 14px 0;
        }

        .coverage-row:first-of-type {
          border-top: none;
        }

        .coverage-name {
          font-size: 10px;
          font-weight: 900;
        }

        .coverage-status {
          color: #708300;
          background: #eff7c9;
          padding: 6px 9px;
          border-radius: 20px;
          font-size: 8px;
          font-weight: 900;
        }

        .details-button {
          border: none;
          background: #f0eff7;
          color: #292a31;
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
          margin-top: 15px;
        }

        .extra-details {
          background: #f6f4fc;
          border-radius: 15px;
          padding: 16px;
          margin-top: 14px;
        }

        .extra-details p {
          margin: 5px 0;
          color: #777;
          font-size: 9px;
          line-height: 1.6;
        }

        .premium-banner {
          margin-top: 15px;
          background: #c8ff00;
          border-radius: 22px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .premium-banner h3 {
          margin: 0 0 6px;
          font-size: 17px;
        }

        .premium-banner p {
          margin: 0;
          font-size: 9px;
          color: #4f5900;
        }

        .premium-button {
          border: none;
          background: #292a31;
          color: #c8ff00;
          padding: 12px 18px;
          border-radius: 12px;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
          white-space: nowrap;
        }

        @media (max-width: 650px) {
          .cover-container h1 {
            font-size: 32px;
          }

          .status-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .status-circle {
            width: 100px;
            height: 100px;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .premium-banner {
            flex-direction: column;
            align-items: flex-start;
          }

          .premium-button {
            width: 100%;
          }
        }
      `}</style>

      <nav className="cover-nav">
        <div className="cover-brand">
          <div className="cover-mark">₹</div>
          Rupee+
        </div>

        <button
          className="back-nav"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>
      </nav>

      <main className="cover-container">

        <div className="eyebrow">
          Protection center
        </div>

        <h1>
          Your cover is active.
        </h1>

        <p className="intro">
          Your Rupee+ protection layer is currently active.
          Here is a simple overview of your coverage and
          protection status.
        </p>

        <section className="status-card">

          <div>
            <div className="active-badge">
              ● COVER ACTIVE
            </div>

            <h2>
              ₹1,00,000
            </h2>

            <p>
              Total protection coverage
            </p>
          </div>

          <div className="status-circle">
            <strong>100%</strong>
            <span>ACTIVE</span>
          </div>

        </section>

        <section className="details-grid">

          <div className="detail-card">
            <div className="detail-label">
              Monthly contribution
            </div>

            <div className="detail-value">
              ₹99
            </div>

            <div className="detail-description">
              Your estimated monthly protection contribution.
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-label">
              Protection period
            </div>

            <div className="detail-value">
              12 months
            </div>

            <div className="detail-description">
              Current protection period for this demo profile.
            </div>
          </div>

        </section>

        <section className="coverage-list">

          <h3>
            What is protected?
          </h3>

          <div className="coverage-row">
            <span className="coverage-name">
              Emergency hospitalization
            </span>

            <span className="coverage-status">
              INCLUDED
            </span>
          </div>

          <div className="coverage-row">
            <span className="coverage-name">
              Accident support
            </span>

            <span className="coverage-status">
              INCLUDED
            </span>
          </div>

          <div className="coverage-row">
            <span className="coverage-name">
              Emergency assistance
            </span>

            <span className="coverage-status">
              INCLUDED
            </span>
          </div>

          <button
            className="details-button"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide details" : "View details"}
          </button>

          {showDetails && (
            <div className="extra-details">
              <p>
                ✓ Coverage is currently shown as active for the
                Rupee+ frontend demo.
              </p>

              <p>
                ✓ Actual policy terms, exclusions and claim
                eligibility would come from the connected insurer.
              </p>

              <p>
                ✓ No real insurance purchase is made from this demo.
              </p>
            </div>
          )}

        </section>

        <section className="premium-banner">

          <div>
            <h3>
              Want to understand your protection better?
            </h3>

            <p>
              Learn how micro-cover works and what your premium supports.
            </p>
          </div>

          <button
            className="premium-button"
            onClick={onPremium}
          >
            Explain my premium →
          </button>

        </section>

      </main>
    </div>
  );
}

export default CoverStatus;