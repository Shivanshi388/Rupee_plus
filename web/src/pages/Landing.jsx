import React from "react";

function Landing() {
  return (
    <div className="rupee-page">

      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f8f6ff;
          color: #292a31;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        /* ================= NAVBAR ================= */

        .navbar {
          height: 72px;
          padding: 0 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-bottom: 1px solid #eceaf1;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 900;
        }

        .brand-mark {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #caff16;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          font-size: 13px;
          font-weight: 700;
        }

        .nav-links a {
          text-decoration: none;
          color: #292a31;
        }

        .nav-links a:hover {
          opacity: 0.6;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .login {
          border: none;
          background: transparent;
          font-weight: 700;
        }

        .nav-start {
          border: none;
          background: #303139;
          color: white;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 800;
        }

        .profile-dot {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: #caff16;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 900;
        }

        /* ================= PAGE ================= */

        .main {
          width: min(1180px, 92%);
          margin: auto;
        }

        /* ================= HERO ================= */

        .hero {
          margin-top: 20px;
          min-height: 600px;
          padding: 55px 50px;
          border-radius: 32px;
          background: #caff16;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: center;
          gap: 30px;
          overflow: hidden;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: rgba(255,255,255,.09);
          right: -100px;
          top: -150px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #303139;
          color: white;
          padding: 8px 14px;
          border-radius: 30px;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          background: #caff16;
          border-radius: 50%;
        }

        .hero h1 {
          font-size: clamp(45px, 5vw, 70px);
          line-height: .96;
          letter-spacing: -4px;
          margin: 25px 0;
          max-width: 680px;
        }

        .hero-description {
          max-width: 600px;
          line-height: 1.6;
          font-size: 15px;
          color: #37382f;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 25px;
          margin-bottom: 50px;
        }

        .primary-btn {
          border: none;
          background: #303139;
          color: white;
          padding: 14px 18px 14px 23px;
          border-radius: 30px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .primary-btn span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #caff16;
          color: #303139;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .secondary-btn {
          border: none;
          background: white;
          color: #303139;
          padding: 14px 22px;
          border-radius: 30px;
          font-weight: 800;
        }

        .hero-stats {
          display: flex;
          gap: 70px;
        }

        .hero-stat strong {
          display: block;
          font-size: 26px;
        }

        .hero-stat span {
          font-size: 8px;
          text-transform: uppercase;
          font-weight: 800;
        }

        /* ================= PHONE ================= */

        .phone-area {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 3;
        }

        .phone {
          width: 300px;
          min-height: 490px;
          background: white;
          border-radius: 36px;
          padding: 30px 17px;
          box-shadow: 0 25px 55px rgba(0,0,0,.2);
          position: relative;
        }

        .phone-speaker {
          width: 78px;
          height: 8px;
          background: #303139;
          border-radius: 20px;
          position: absolute;
          top: 13px;
          left: 50%;
          transform: translateX(-50%);
        }

        .phone-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 8px 8px 18px;
        }

        .account {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .account-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #efeff7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          font-weight: 900;
        }

        .account-text {
          font-size: 8px;
          color: #777;
        }

        .account-text strong {
          display: block;
          color: #222;
          font-size: 10px;
        }

        .protected {
          background: #303139;
          color: #caff16;
          padding: 5px 9px;
          border-radius: 20px;
          font-size: 7px;
          font-weight: 900;
        }

        .safety-box {
          background: #f1effa;
          border-radius: 25px;
          padding: 25px;
        }

        .mini-label {
          font-size: 8px;
          color: #666;
          font-weight: 800;
          text-transform: uppercase;
        }

        .safety-amount {
          font-size: 36px;
          font-weight: 900;
          margin: 5px 0;
        }

        .saved-pill {
          background: #ddff80;
          color: #596300;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 7px;
          font-weight: 900;
        }

        .phone-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 14px;
        }

        .phone-stat {
          background: #e8e7ef;
          padding: 14px 12px;
        }

        .phone-stat strong {
          display: block;
          font-size: 18px;
        }

        .phone-stat small {
          font-size: 7px;
          color: #647000;
          font-weight: 900;
        }

        .transaction {
          background: #f8f7fb;
          padding: 13px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
        }

        .transaction-icon {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          background: #caff16;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .transaction-text {
          flex: 1;
          font-size: 8px;
        }

        .transaction-text strong {
          display: block;
          font-size: 9px;
        }

        .transaction-save {
          font-size: 7px;
          text-align: right;
        }

        .transaction-save strong {
          display: block;
          background: #caff16;
          padding: 3px 6px;
          border-radius: 10px;
        }

        .auto-row {
          display: flex;
          justify-content: space-between;
          margin-top: 17px;
          padding: 0 8px;
          font-size: 9px;
          color: #777;
        }

        .toggle {
          width: 30px;
          height: 16px;
          background: #caff16;
          border-radius: 20px;
          position: relative;
        }

        .toggle::after {
          content: "";
          width: 11px;
          height: 11px;
          background: #303139;
          border-radius: 50%;
          position: absolute;
          right: 2px;
          top: 2.5px;
        }

        /* ================= STRIP ================= */

        .trust-strip {
          margin-top: 15px;
          background: white;
          border: 1px solid #e9e7ef;
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trust-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #ddff80;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trust-title {
          font-size: 7px;
          font-weight: 900;
          color: #777;
          text-transform: uppercase;
        }

        .trust-text {
          font-size: 9px;
          font-weight: 800;
        }

        .trust-right {
          margin-left: auto;
          color: #777;
          font-size: 7px;
        }

        /* ================= BENEFITS ================= */

        .benefits {
          margin-top: 25px;
          background: white;
          border: 1px solid #eceaf1;
          border-radius: 20px;
          padding: 25px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 25px;
        }

        .benefit {
          display: flex;
          gap: 12px;
        }

        .benefit-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f0eff7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit h4 {
          margin: 0 0 5px;
          font-size: 11px;
        }

        .benefit p {
          margin: 0;
          color: #777;
          font-size: 8px;
          line-height: 1.5;
        }

        /* ================= SECTIONS ================= */

        .section {
          padding-top: 90px;
        }

        .section-label {
          color: #687200;
          font-size: 8px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .section-title {
          font-size: clamp(34px,4vw,48px);
          line-height: 1;
          letter-spacing: -2px;
          margin: 0;
        }

        .section-description {
          color: #777;
          font-size: 10px;
          line-height: 1.6;
        }

        /* ================= PROCESS ================= */

        .process-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 30px;
        }

        .process-heading-right {
          max-width: 310px;
          color: #777;
          font-size: 9px;
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 12px;
        }

        .process-card {
          background: white;
          border: 1px solid #eceaf1;
          border-radius: 20px;
          padding: 18px;
          min-height: 190px;
          position: relative;
        }

        .process-number {
          color: #c9cfb0;
          font-size: 24px;
          font-weight: 900;
        }

        .process-icon {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 24px;
          height: 24px;
          background: #f0eff7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
        }

        .process-step {
          font-size: 7px;
          color: #777;
          font-weight: 900;
          text-transform: uppercase;
          margin-top: 28px;
        }

        .process-card h3 {
          margin: 5px 0;
          font-size: 14px;
        }

        .process-card p {
          color: #777;
          font-size: 8px;
          line-height: 1.5;
        }

        .process-link {
          position: absolute;
          bottom: 15px;
          font-size: 7px;
          color: #687200;
          font-weight: 900;
        }

        /* ================= SAFETY ================= */

        .center-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .center-heading .section-title {
          margin: auto;
        }

        .center-heading .section-description {
          max-width: 450px;
          margin: 12px auto;
        }

        .safety-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .safety-card {
          background: white;
          border: 1px solid #eceaf1;
          border-radius: 24px;
          padding: 30px;
          min-height: 270px;
        }

        .safety-card.dark {
          background: #303139;
          color: white;
        }

        .card-tag {
          background: #f0eff7;
          color: #777;
          padding: 5px 9px;
          border-radius: 20px;
          font-size: 7px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .dark .card-tag {
          background: #45464e;
          color: white;
        }

        .card-money {
          margin-top: 18px;
        }

        .card-money span {
          color: #777;
          font-size: 8px;
        }

        .dark .card-money span {
          color: #aaa;
        }

        .card-money strong {
          display: block;
          font-size: 30px;
        }

        .dark .card-money strong {
          color: #caff16;
        }

        .card-text {
          color: #777;
          font-size: 9px;
          line-height: 1.5;
        }

        .dark .card-text {
          color: #bbb;
        }

        .card-list {
          list-style: none;
          padding: 0;
          margin: 20px 0 0;
        }

        .card-list li {
          font-size: 8px;
          color: #777;
          margin: 9px 0;
        }

        .dark .card-list li {
          color: #ccc;
        }

        .card-list li::before {
          content: "✓";
          color: #748000;
          font-weight: 900;
          margin-right: 8px;
        }

        .dark .card-list li::before {
          color: #caff16;
        }

        /* ================= UNDERWRITING ================= */

        .underwriting {
          margin-top: 90px;
          background: #f0efff;
          border-radius: 25px;
          padding: 38px;
        }

        .underwriting-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 25px;
        }

        .under-card {
          background: white;
          border-radius: 18px;
          padding: 20px;
          min-height: 155px;
        }

        .under-number {
          background: #f0eff7;
          border-radius: 10px;
          padding: 4px 7px;
          font-size: 7px;
          font-weight: 900;
        }

        .under-card h3 {
          font-size: 13px;
          margin: 18px 0 7px;
        }

        .under-card p {
          color: #777;
          font-size: 8px;
          line-height: 1.5;
        }

        .premium-bar {
          margin-top: 14px;
          background: white;
          border-radius: 18px;
          padding: 17px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .premium-copy {
          max-width: 60%;
          font-size: 9px;
        }

        .premium-price {
          display: flex;
          gap: 25px;
        }

        .premium-price span {
          display: block;
          font-size: 7px;
          color: #777;
        }

        .premium-price strong {
          font-size: 15px;
        }

        /* ================= PEOPLE ================= */

        .people-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 12px;
          margin-top: 30px;
        }

        .people-card {
          background: white;
          border: 1px solid #eceaf1;
          border-radius: 19px;
          padding: 20px;
          min-height: 180px;
        }

        .people-icon {
          width: 30px;
          height: 30px;
          background: #eeedf5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .people-card:nth-child(2) .people-icon {
          background: #caff16;
        }

        .people-card h3 {
          font-size: 13px;
          margin: 0 0 8px;
        }

        .people-card p {
          font-size: 8px;
          color: #777;
          line-height: 1.5;
        }

        .people-link {
          font-size: 7px;
          color: #687200;
          font-weight: 900;
        }

        /* ================= ESTIMATOR ================= */

        .estimator {
          margin-top: 70px;
          background: white;
          border: 1px solid #eceaf1;
          border-radius: 25px;
          padding: 35px;
          display: grid;
          grid-template-columns: 1fr .8fr;
          gap: 35px;
        }

        .estimator h2 {
          margin: 0;
          font-size: 29px;
          line-height: 1.05;
          letter-spacing: -1px;
        }

        .estimator p {
          color: #777;
          font-size: 9px;
          line-height: 1.5;
        }

        .estimate-row {
          display: flex;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid #eceaf1;
          font-size: 8px;
        }

        .estimate-row strong {
          color: #687200;
        }

        .estimate-result {
          background: #f0efff;
          border-radius: 20px;
          padding: 18px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          align-content: center;
        }

        .result-box {
          background: white;
          padding: 15px;
          border-radius: 10px;
        }

        .result-box span {
          display: block;
          color: #777;
          font-size: 7px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .result-box strong {
          font-size: 25px;
        }

        .result-box.highlight strong {
          color: #9fbd00;
        }

        /* ================= CTA ================= */

        .cta {
          margin: 70px 0 35px;
          background: #303139;
          color: white;
          border-radius: 28px;
          padding: 65px 20px;
          text-align: center;
        }

        .cta-pill {
          display: inline-block;
          background: #caff16;
          color: #303139;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 7px;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(32px,4vw,48px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .cta p {
          max-width: 450px;
          margin: 15px auto 25px;
          color: #bbb;
          font-size: 10px;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .cta-main {
          border: none;
          background: #caff16;
          color: #303139;
          padding: 13px 22px;
          border-radius: 25px;
          font-weight: 900;
        }

        .cta-secondary {
          border: none;
          background: #44454d;
          color: white;
          padding: 13px 22px;
          border-radius: 25px;
          font-weight: 800;
        }

        /* ================= FOOTER ================= */

        .footer {
          background: white;
          border-top: 1px solid #eceaf1;
          padding: 45px 5%;
        }

        .footer-grid {
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr repeat(4,1fr);
          gap: 30px;
        }

        .footer h4 {
          font-size: 9px;
          text-transform: uppercase;
          margin: 0 0 12px;
        }

        .footer a {
          display: block;
          text-decoration: none;
          color: #777;
          font-size: 8px;
          margin: 7px 0;
        }

        .footer-brand p {
          color: #777;
          font-size: 8px;
          max-width: 220px;
        }

        .footer-bottom {
          max-width: 1180px;
          margin: 35px auto 0;
          padding-top: 18px;
          border-top: 1px solid #eceaf1;
          display: flex;
          justify-content: space-between;
          color: #999;
          font-size: 7px;
        }

        /* ================= MOBILE ================= */

        @media(max-width:900px) {

          .nav-links {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 40px 30px;
          }

          .phone-area {
            display: none;
          }

          .benefits {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .people-grid {
            grid-template-columns: 1fr 1fr;
          }

          .underwriting-grid {
            grid-template-columns: 1fr;
          }

          .safety-grid {
            grid-template-columns: 1fr;
          }

          .estimator {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media(max-width:600px) {

          .navbar {
            padding: 0 18px;
          }

          .login {
            display: none;
          }

          .main {
            width: 94%;
          }

          .hero {
            padding: 35px 24px;
            border-radius: 25px;
          }

          .hero h1 {
            font-size: 43px;
            letter-spacing: -2.5px;
          }

          .hero-stats {
            gap: 25px;
          }

          .hero-stat strong {
            font-size: 19px;
          }

          .process-grid,
          .people-grid {
            grid-template-columns: 1fr;
          }

          .process-heading {
            display: block;
          }

          .process-heading-right {
            margin-top: 15px;
          }

          .premium-bar {
            display: block;
          }

          .premium-copy {
            max-width: 100%;
            margin-bottom: 15px;
          }

          .estimate-result {
            grid-template-columns: 1fr;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-bottom {
            display: block;
          }

          .footer-bottom span {
            display: block;
            margin-top: 8px;
          }
        }

      `}</style>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="brand">
          <div className="brand-mark">₹</div>
          Rupee+
        </div>

        <nav className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#protection">Protection</a>
          <a href="#about">Why Rupee+</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login">
            Log In
          </button>

          <button className="nav-start">
            Get Started
          </button>

          <div className="profile-dot">
            R
          </div>
        </div>

      </header>


      <main className="main">

        {/* ================= HERO ================= */}

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Smarter savings. Simple protection.
            </div>

            <h1>
              Small Payments.
              <br />
              Big Financial Safety.
            </h1>

            <p className="hero-description">
              Rupee+ automatically turns everyday spending into
              savings and affordable insurance protection —
              one small round-up at a time.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Get Started
                <span>→</span>
              </button>

              <button className="secondary-btn">
                How It Works ↓
              </button>

            </div>

            <div className="hero-stats">

              <div className="hero-stat">
                <strong>₹1</strong>
                <span>Min. Round-up</span>
              </div>

              <div className="hero-stat">
                <strong>₹1,00,000</strong>
                <span>Micro-shield Cap</span>
              </div>

              <div className="hero-stat">
                <strong>Instant</strong>
                <span>UPI Liquidity</span>
              </div>

            </div>

          </div>


          {/* PHONE */}

          <div className="phone-area">

            <div className="phone">

              <div className="phone-speaker"></div>

              <div className="phone-top">

                <div className="account">

                  <div className="account-icon">
                    RP
                  </div>

                  <div className="account-text">
                    Live Account
                    <strong>Vikram S.</strong>
                  </div>

                </div>

                <div className="protected">
                  ● Protected
                </div>

              </div>


              <div className="safety-box">

                <div className="mini-label">
                  Financial Safety
                </div>

                <div className="safety-amount">
                  ₹2,480
                </div>

                <span className="saved-pill">
                  ↗ +₹680 saved this month
                </span>

              </div>


              <div className="phone-columns">

                <div className="phone-stat">
                  <div className="mini-label">
                    Savings Vault
                  </div>

                  <strong>₹1,850</strong>

                  <small>
                    7.4% p.a.
                  </small>
                </div>

                <div className="phone-stat">

                  <div className="mini-label">
                    Micro-Cover
                  </div>

                  <strong>₹630</strong>

                  <small>
                    ₹1L Coverage
                  </small>

                </div>

              </div>


              <div className="transaction">

                <div className="transaction-icon">
                  ☕
                </div>

                <div className="transaction-text">
                  <strong>
                    Chai & Snacks
                  </strong>

                  ₹247 → ₹250
                </div>

                <div className="transaction-save">
                  <strong>
                    +₹3 Saved
                  </strong>

                  Split 70/30
                </div>

              </div>


              <div className="auto-row">

                <span>
                  Auto-roundup: Active
                </span>

                <div className="toggle"></div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TRUST STRIP ================= */}

        <div className="trust-strip">

          <div className="trust-icon">
            ✓
          </div>

          <div>

            <div className="trust-title">
              Official Interface Release
            </div>

            <div className="trust-text">
              Designed for high-frequency UPI micro-transactions
            </div>

          </div>

          <div className="trust-right">
            Built on RBI / Sandbox Guidelines
          </div>

        </div>


        {/* ================= BENEFITS ================= */}

        <section className="benefits">

          <Benefit
            icon="↻"
            title="Save automatically"
            text="Spare rupees round-up every UPI scan, merchant swipe, or food delivery."
          />

          <Benefit
            icon="◆"
            title="Build an emergency fund"
            text="Your primary wallet compounds liquid capital with zero lock-ins."
          />

          <Benefit
            icon="✓"
            title="Get personalized protection"
            text="Micro-insurance shields adapt dynamically without complicated paperwork."
          />

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="section"
          id="how-it-works"
        >

          <div className="process-heading">

            <div>

              <div className="section-label">
                Effortless micro-allocation
              </div>

              <h2 className="section-title">
                Your everyday payments can
                <br />
                protect your future.
              </h2>

            </div>

            <p className="process-heading-right">
              Connect your preferred UPI. We monitor change
              rounded up from transactions and split it
              seamlessly in real time.
            </p>

          </div>


          <div className="process-grid">

            <ProcessCard
              number="01"
              title="PAY"
              icon="◉"
              text="Use your money normally for fees, groceries, metro transit, or online shopping."
              link="Daily spends →"
            />

            <ProcessCard
              number="02"
              title="ROUND-UP"
              icon="₹"
              text="Small amounts are automatically rounded up to the nearest ₹5 or ₹10 threshold."
              link="₹247 → ₹250 →"
            />

            <ProcessCard
              number="03"
              title="SAVE + PROTECT"
              icon="✓"
              text="Money automatically splits into your personal savings and insurance vaults."
              link="Automated 70/30 →"
            />

            <ProcessCard
              number="04"
              title="GET COVERED"
              icon="●"
              text="Receive affordable, real-time protection shields when eligible."
              link="Instant active policy →"
            />

          </div>

        </section>


        {/* ================= SAFETY ================= */}

        <section
          className="section"
          id="protection"
        >

          <div className="center-heading">

            <div className="section-label">
              Dual-layer architecture
            </div>

            <h2 className="section-title">
              One small amount. Two layers
              <br />
              of safety.
            </h2>

            <p className="section-description">
              Every spare rupee works twice —
              safeguarding today and shielding tomorrow.
            </p>

          </div>


          <div className="safety-grid">

            <SafetyCard
              tag="Emergency Vault"
              amount="₹1,850"
              title="Available balance"
              text="Build your emergency fund automatically without cutting lifestyle expenses."
              items={[
                "Instant withdrawal anytime via UPI",
                "Zero lock-in duration",
                "RBI-regulated banking partner"
              ]}
            />


            <SafetyCard
              dark
              tag="Active Cover"
              amount="₹630"
              title="Micro-shield"
              text="Fund affordable protection for unexpected hospitalization, accidents, or injury."
              items={[
                "Micro-health and accidental coverage",
                "Dynamic claims buffer",
                "₹1,00,000 protection coverage"
              ]}
            />

          </div>

        </section>


        {/* ================= UNDERWRITING ================= */}

        <section className="underwriting">

          <div className="section-label">
            Intelligent underwriting
          </div>

          <h2 className="section-title">
            Protection that adapts to
            <br />
            you.
          </h2>

          <p className="section-description">
            Smart underwriting that fits micro-budgets
            without complex medical paperwork.
          </p>


          <div className="underwriting-grid">

            <UnderCard
              number="01 / INPUT"
              title="User Data"
              text="Aggregated transaction cadence, merchant frequency, and purchase data create your behavioral safety baseline."
            />

            <UnderCard
              number="02 / ENGINE"
              title="ML Risk Model"
              text="Real-time analytics learn spending behavior and calculate suitable protection."
            />

            <UnderCard
              number="03 / OUTCOME"
              title="Personalized Premium"
              text="The size and price of your cover adapt to your financial situation."
            />

          </div>


          <div className="premium-bar">

            <div className="premium-copy">
              🛡 Rupee+ uses permitted financial and behavioral
              signals to personalize risk and suggest a fair
              micro-premium.
            </div>

            <div className="premium-price">

              <div>
                <span>
                  Personalized Premium
                </span>

                <strong>
                  ₹18 / week
                </strong>
              </div>

              <div>
                <span>
                  Coverage Value
                </span>

                <strong>
                  ₹1,00,000
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* ================= PEOPLE ================= */}

        <section className="section">

          <div className="section-label">
            Democratizing protection
          </div>

          <h2 className="section-title">
            Built for people with
            <br />
            unpredictable income.
          </h2>

          <p className="section-description">
            Traditional insurance requires hefty annual premiums.
            Rupee+ meets you where you are.
          </p>


          <div className="people-grid">

            <PeopleCard
              icon="✣"
              title="Gig Workers"
              text="Ride-hail drivers and platform freelancers carrying per-trip cash and health protection."
            />

            <PeopleCard
              icon="₹"
              title="Students"
              text="College budgets effortlessly creating their first emergency reserve."
            />

            <PeopleCard
              icon="▣"
              title="Daily-Wage Workers"
              text="Flexible safety cushions for irregular work and fluctuating revenue."
            />

            <PeopleCard
              icon="↗"
              title="Delivery Fleets"
              text="On-demand couriers working long hours with automatic shield protection."
            />

          </div>

        </section>


        {/* ================= ESTIMATOR ================= */}

        <section className="estimator">

          <div>

            <div className="section-label">
              Interactive estimator
            </div>

            <h2>
              See how fast spare rupees
              <br />
              turn into a fortress.
            </h2>

            <p>
              See your automated 12-month emergency reserve
              and insurance shield.
            </p>


            <div className="estimate-row">
              <span>
                Daily UPI spends count
              </span>

              <strong>
                6 transactions/day
              </strong>
            </div>


            <div className="estimate-row">
              <span>
                Average Round-up
              </span>

              <strong>
                ₹4 per transaction
              </strong>
            </div>

          </div>


          <div className="estimate-result">

            <div className="result-box">

              <span>
                Annual Savings
              </span>

              <strong>
                ₹6,132
              </strong>

            </div>


            <div className="result-box highlight">

              <span>
                Active Protection
              </span>

              <strong>
                ₹1,00,000
              </strong>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="cta">

          <div className="cta-pill">
            Zero paperwork. 60-second setup.
          </div>

          <h2>
            Start building your financial
            <br />
            safety net today.
          </h2>

          <p>
            Save a little. Protect a little.
            Build more security over time.
          </p>


          <div className="cta-buttons">

            <button className="cta-main">
              Get Started →
            </button>

            <button className="cta-secondary">
              ↓ Download App
            </button>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-grid">

          <div className="footer-brand">

            <div className="brand">
              <div className="brand-mark">
                ₹
              </div>

              Rupee+
            </div>

            <p>
              Save & Get Protected,
              One Rupee at a Time.
            </p>

          </div>


          <div>

            <h4>
              Product
            </h4>

            <a href="#about">
              Spare Rupees
            </a>

            <a href="#about">
              Auto-Vault
            </a>

            <a href="#protection">
              Micro-Health Cover
            </a>

            <a href="#about">
              Daily Yield
            </a>

          </div>


          <div>

            <h4>
              Legal
            </h4>

            <a href="#about">
              Privacy Policy
            </a>

            <a href="#about">
              Terms of Service
            </a>

            <a href="#about">
              Security Architecture
            </a>

          </div>


          <div>

            <h4>
              Contact
            </h4>

            <a href="#about">
              Support Center
            </a>

            <a href="#about">
              Partner Program
            </a>

            <a href="#about">
              Press Inquiries
            </a>

          </div>


          <div>

            <h4>
              Social
            </h4>

            <a href="#about">
              Community Forum
            </a>

            <a href="#about">
              LinkedIn
            </a>

            <a href="#about">
              Instagram
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Rupee+ Technologies Inc.
            All rights reserved.
          </span>

          <span>
            Crafted for Gen Z & Digital Natives
          </span>

        </div>

      </footer>

    </div>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function Benefit({ icon, title, text }) {
  return (
    <div className="benefit">

      <div className="benefit-icon">
        {icon}
      </div>

      <div>

        <h4>
          {title}
        </h4>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}


function ProcessCard({
  number,
  title,
  icon,
  text,
  link
}) {
  return (
    <div className="process-card">

      <div className="process-number">
        {number}
      </div>

      <div className="process-icon">
        {icon}
      </div>

      <div className="process-step">
        Step {number}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <div className="process-link">
        {link}
      </div>

    </div>
  );
}


function SafetyCard({
  tag,
  amount,
  title,
  text,
  items,
  dark
}) {
  return (
    <div className={`safety-card ${dark ? "dark" : ""}`}>

      <span className="card-tag">
        {tag}
      </span>

      <div className="card-money">

        <span>
          {title}
        </span>

        <strong>
          {amount}
        </strong>

      </div>

      <p className="card-text">
        {text}
      </p>

      <ul className="card-list">

        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}


function UnderCard({
  number,
  title,
  text
}) {
  return (
    <div className="under-card">

      <span className="under-number">
        {number}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


function PeopleCard({
  icon,
  title,
  text
}) {
  return (
    <div className="people-card">

      <div className="people-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <span className="people-link">
        Build digital safety →
      </span>

    </div>
  );
}


export default Landing;