import React, { useState } from "react";

function PremiumExplainer({ onBack, onClaims }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f4fc",
        color: "#292a31",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "30px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onBack}
          style={{
            border: "none",
            background: "#ffffff",
            color: "#292a31",
            padding: "12px 18px",
            borderRadius: "25px",
            fontWeight: "900",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        <div
          style={{
            fontWeight: "900",
            fontSize: "22px",
          }}
        >
          Rupee<span style={{ color: "#8aa000" }}>+</span>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#292a31",
          color: "#ffffff",
          borderRadius: "32px",
          padding: "55px",
        }}
      >
        <div
          style={{
            color: "#c8ff00",
            fontSize: "12px",
            fontWeight: "900",
            letterSpacing: "1.5px",
            marginBottom: "15px",
          }}
        >
          PREMIUM EXPLAINER
        </div>

        <h1
          style={{
            fontSize: "52px",
            lineHeight: "1",
            margin: "0 0 20px",
            maxWidth: "700px",
          }}
        >
          Your premium,
          <br />
          explained simply.
        </h1>

        <p
          style={{
            color: "#c9c8cf",
            fontSize: "16px",
            lineHeight: "1.7",
            maxWidth: "650px",
          }}
        >
          Rupee+ keeps your protection affordable by using small,
          predictable contributions instead of a large yearly payment.
        </p>

        {/* PREMIUM AMOUNT */}
        <div
          style={{
            marginTop: "35px",
            background: "#c8ff00",
            color: "#292a31",
            borderRadius: "24px",
            padding: "30px",
            maxWidth: "500px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "900",
              marginBottom: "8px",
            }}
          >
            YOUR PERSONALIZED PREMIUM
          </div>

          <div
            style={{
              fontSize: "44px",
              fontWeight: "900",
            }}
          >
            ₹18
          </div>

          <div
            style={{
              fontSize: "14px",
              fontWeight: "800",
              marginTop: "5px",
            }}
          >
            per week
          </div>
        </div>

        {/* BREAKDOWN */}
        <div
          style={{
            marginTop: "30px",
            background: "#383941",
            borderRadius: "22px",
            padding: "25px",
            maxWidth: "650px",
          }}
        >
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            style={{
              width: "100%",
              border: "none",
              background: "transparent",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "900",
              padding: 0,
            }}
          >
            <span>How is my premium calculated?</span>
            <span>{showBreakdown ? "−" : "+"}</span>
          </button>

          {showBreakdown && (
            <div
              style={{
                marginTop: "22px",
                borderTop: "1px solid #55565e",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                }}
              >
                <span>Base protection</span>
                <strong>₹10</strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                }}
              >
                <span>Income protection</span>
                <strong>₹5</strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                }}
              >
                <span>Micro-cover contribution</span>
                <strong>₹3</strong>
              </div>

              <div
                style={{
                  borderTop: "1px solid #55565e",
                  marginTop: "10px",
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "900",
                }}
              >
                <span>Total</span>
                <span style={{ color: "#c8ff00" }}>₹18 / week</span>
              </div>
            </div>
          )}
        </div>

        {/* BENEFITS */}
        <div
          style={{
            marginTop: "45px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
          }}
        >
          {[
            ["₹1,00,000", "Maximum cover"],
            ["₹99", "Monthly contribution"],
            ["24/7", "Protection access"],
          ].map((item) => (
            <div
              key={item[1]}
              style={{
                background: "#ffffff",
                color: "#292a31",
                borderRadius: "20px",
                padding: "25px",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: "900",
                }}
              >
                {item[0]}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  color: "#77727f",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* CLAIM BUTTON */}
        <div
          style={{
            marginTop: "45px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={onClaims}
            style={{
              border: "none",
              background: "#c8ff00",
              color: "#292a31",
              padding: "16px 28px",
              borderRadius: "30px",
              fontWeight: "900",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Go to Claims →
          </button>

          <button
            onClick={onBack}
            style={{
              border: "1px solid #65666e",
              background: "transparent",
              color: "#ffffff",
              padding: "16px 28px",
              borderRadius: "30px",
              fontWeight: "900",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            ← Back to Cover
          </button>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 700px) {
            body {
              margin: 0;
            }

            div {
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PremiumExplainer;