import { useState } from "react";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import CoverStatus from "./pages/CoverStatus";
import PremiumExplainer from "./pages/PremiumExplainer";
import Claims from "./pages/Claims";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing");

  // LANDING PAGE
  if (page === "landing") {
    return (
      <Landing
        onGetStarted={() => setPage("onboarding")}
      />
    );
  }

  // ONBOARDING PAGE
  if (page === "onboarding") {
    return (
      <Onboarding
        onComplete={() => setPage("dashboard")}
        onBack={() => setPage("landing")}
      />
    );
  }

  // DASHBOARD
  if (page === "dashboard") {
    return (
      <Dashboard
        onCoverStatus={() => setPage("cover")}
        onPremium={() => setPage("premium")}
        onClaims={() => setPage("claims")}
        onHome={() => setPage("landing")}
      />
    );
  }

  // COVER STATUS
  if (page === "cover") {
    return (
      <CoverStatus
        onBack={() => setPage("dashboard")}
        onPremium={() => setPage("premium")}
      />
    );
  }

  // PREMIUM EXPLAINER
  if (page === "premium") {
    return (
      <PremiumExplainer
        onBack={() => setPage("cover")}
        onClaims={() => setPage("claims")}
      />
    );
  }

  // CLAIMS
  if (page === "claims") {
    return (
      <Claims
        onBack={() => setPage("dashboard")}
      />
    );
  }

  return null;
}

export default App;