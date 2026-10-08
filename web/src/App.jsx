import { useState } from "react";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("landing");

  if (page === "onboarding") {
    return <Onboarding />;
  }

  if (page === "dashboard") {
    return <Dashboard />;
  }

  return (
    <div>
      <Landing />

      <div
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 9999,
        }}
      >
        <button
          onClick={() => setPage("onboarding")}
          style={{
            background: "#c8ff00",
            color: "#292a31",
            border: "none",
            borderRadius: "30px",
            padding: "14px 22px",
            fontWeight: "900",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(0,0,0,.15)",
          }}
        >
          Continue to Onboarding →
        </button>
      </div>
    </div>
  );
}

export default App;