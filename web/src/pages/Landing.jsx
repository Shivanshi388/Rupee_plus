import {
  ShieldCheck,
  PiggyBank,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function Landing({ onGetStarted }) {
  return (
    <div className="landing-page">

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">₹</div>
          <span>Rupee+</span>
        </div>

        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#protection">Protection</a>
          <a href="#about">About</a>
        </div>

        <button
          className="nav-button"
          onClick={onGetStarted}
        >
          Get Started
        </button>

      </nav>

      <main className="hero">

        <div className="hero-content">

          <div className="badge">
            <Sparkles size={16} />
            Financial protection, made simple
          </div>

          <h1>
            Small savings.
            <br />
            <span>Big protection.</span>
          </h1>

          <p className="hero-description">
            Rupee+ helps gig workers build savings, round up
            everyday spending, and access affordable income
            protection — all in one simple platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={onGetStarted}
            >
              Get Started
              <ArrowRight size={19} />
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                document
                  .getElementById("how")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              See how it works
            </button>

          </div>

          <div className="trust-row">

            <div>
              <CheckCircle2 size={18} />
              No complicated paperwork
            </div>

            <div>
              <CheckCircle2 size={18} />
              Built for gig workers
            </div>

          </div>

        </div>

        <div className="hero-card-wrapper">

          <div className="floating-card card-top">

            <PiggyBank size={20} />

            <div>
              <small>Monthly savings</small>
              <strong>₹2,450</strong>
            </div>

          </div>

          <div className="dashboard-preview">

            <div className="preview-header">

              <div>
                <small>Good morning</small>
                <h3>Darshita 👋</h3>
              </div>

              <div className="avatar">
                D
              </div>

            </div>

            <div className="balance-card">

              <span>Total protection</span>

              <strong>₹50,000</strong>

              <small>
                Active coverage
              </small>

            </div>

            <div className="preview-grid">

              <div className="mini-card">

                <PiggyBank size={20} />

                <span>Savings</span>

                <strong>
                  ₹12,840
                </strong>

              </div>

              <div className="mini-card">

                <ShieldCheck size={20} />

                <span>Micro-cover</span>

                <strong>
                  Active
                </strong>

              </div>

            </div>

            <div className="progress-section">

              <div className="progress-heading">

                <span>
                  Protection goal
                </span>

                <strong>
                  72%
                </strong>

              </div>

              <div className="progress-bar">

                <div className="progress-value"></div>

              </div>

            </div>

          </div>

        </div>

      </main>

      <section
        id="how"
        className="features-section"
      >

        <div className="section-heading">

          <span>
            HOW RUPEE+ WORKS
          </span>

          <h2>
            Your money, working smarter.
          </h2>

          <p>
            Simple tools designed around
            the way gig workers earn and spend.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <PiggyBank />
            </div>

            <h3>
              Build Savings
            </h3>

            <p>
              Put aside small amounts regularly
              and create a safety net without
              disrupting your daily cash flow.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <ArrowRight />
            </div>

            <h3>
              Round-ups
            </h3>

            <p>
              Automatically turn everyday
              purchases into small savings.
            </p>

          </div>

          <div
            className="feature-card"
            id="protection"
          >

            <div className="feature-icon">
              <ShieldCheck />
            </div>

            <h3>
              Stay Protected
            </h3>

            <p>
              Access affordable micro-cover
              designed around your income
              and everyday risks.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Landing;