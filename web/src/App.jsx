import { useState } from "react";

import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import CoverStatus from "./pages/CoverStatus";
import PremiumExplainer from "./pages/PremiumExplainer";
import Claims from "./pages/Claims";

function App() {
  const [page, setPage] = useState("landing");

  // ================= LANDING =================
  if (page === "landing") {
    return (
      <Landing
        onGetStarted={() => {
          setPage("onboarding");
        }}

        onLogin={() => {
          setPage("onboarding");
        }}

        onHowItWorks={() => {
          window.scrollTo({
            top: 750,
            behavior: "smooth",
          });
        }}

        onDownload={() => {
          alert("Rupee+ mobile app coming soon.");
        }}
      />
    );
  }

  // ================= ONBOARDING =================
  if (page === "onboarding") {
    return (
      <Onboarding
        onComplete={() => {
          setPage("dashboard");
        }}
      />
    );
  }

  // ================= DASHBOARD =================
  if (page === "dashboard") {
  return (
    <Dashboard
      onProtection={() => {
        setPage("cover-status");
      }}
      onClaims={() => {
        setPage("claims");
      }}
    />
  );
}

  // ================= COVER STATUS =================
  if (page === "cover-status") {
    return (
      <CoverStatus
        onBack={() => {
          setPage("dashboard");
        }}

        onPremium={() => {
          setPage("premium");
        }}
      />
    );
  }

  // ================= PREMIUM =================
  if (page === "premium") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f6f4fc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            background: "#292a31",
            color: "#ffffff",
            padding: "50px",
            borderRadius: "28px",
            textAlign: "center",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#c8ff00",
              fontSize: "13px",
              fontWeight: "900",
              letterSpacing: "1px",
              marginBottom: "15px",
            }}
          >
            PREMIUM EXPLAINER
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.05",
              margin: "0 0 18px",
            }}
          >
            Your premium,
            <br />
            explained simply.
          </h1>

          <p
            style={{
              color: "#cfcfd5",
              lineHeight: "1.7",
              fontSize: "15px",
            }}
          >
            Your Rupee+ protection contribution is designed to stay affordable
            while giving you meaningful financial protection.
          </p>

          <div
            style={{
              background: "#c8ff00",
              color: "#292a31",
              borderRadius: "18px",
              padding: "22px",
              marginTop: "25px",
              fontWeight: "900",
              fontSize: "25px",
            }}
          >
            ₹18 / week

            <div
              style={{
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "700",
              }}
            >
              Personalized premium
            </div>
          </div>

          <button
            onClick={() => setPage("cover-status")}
            style={{
              marginTop: "25px",
              border: "none",
              background: "#ffffff",
              color: "#292a31",
              padding: "14px 25px",
              borderRadius: "30px",
              fontWeight: "900",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ← Back to Cover
          </button>
        </div>
      </div>
    );
  }
  // ================= CLAIMS =================
if (page === "claims") {
  return (
    <Claims
      onBack={() => {
        setPage("premium");
      }}
    />
  );
}
  

  return null;
}

export default App;