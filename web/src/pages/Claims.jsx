import React, { useState } from "react";

function Claims({ onBack }) {
  const [submitted, setSubmitted] = useState(false);

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
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "#ffffff",
              padding: "12px 20px",
              borderRadius: "25px",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: "22px",
              fontWeight: "900",
            }}
          >
            Rupee<span style={{ color: "#8aa000" }}>+</span>
          </div>
        </div>

        {/* TITLE */}
        <div
          style={{
            background: "#c8ff00",
            borderRadius: "30px",
            padding: "45px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: "900",
              letterSpacing: "1.5px",
            }}
          >
            PROTECTION CENTER
          </div>

          <h1
            style={{
              fontSize: "50px",
              lineHeight: "1",
              margin: "15px 0",
            }}
          >
            Make a claim
            <br />
            without the stress.
          </h1>

          <p
            style={{
              maxWidth: "600px",
              lineHeight: "1.6",
              fontSize: "15px",
            }}
          >
            Tell us what happened and our protection team will guide you
            through the next steps.
          </p>
        </div>

        {/* CLAIM CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "28px",
            padding: "35px",
            border: "1px solid #e3e0e9",
          }}
        >
          {!submitted ? (
            <>
              <h2
                style={{
                  marginTop: 0,
                  fontSize: "25px",
                }}
              >
                Start a new claim
              </h2>

              <p
                style={{
                  color: "#77727f",
                  fontSize: "14px",
                }}
              >
                Choose the type of protection you need help with.
              </p>

              {/* CLAIM TYPES */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "15px",
                  marginTop: "25px",
                }}
              >
                {[
                  ["🛡️", "Health"],
                  ["💼", "Income"],
                  ["🚨", "Accident"],
                ].map((item) => (
                  <button
                    key={item[1]}
                    style={{
                      background: "#f7f5fd",
                      border: "1px solid #dedbe6",
                      borderRadius: "18px",
                      padding: "25px 15px",
                      cursor: "pointer",
                      fontWeight: "900",
                      color: "#292a31",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "25px",
                        marginBottom: "10px",
                      }}
                    >
                      {item[0]}
                    </div>

                    {item[1]} Claim
                  </button>
                ))}
              </div>

              {/* DESCRIPTION */}
              <label
                style={{
                  display: "block",
                  marginTop: "30px",
                  fontSize: "12px",
                  fontWeight: "900",
                }}
              >
                WHAT HAPPENED?
              </label>

              <textarea
                placeholder="Briefly describe what happened..."
                style={{
                  width: "100%",
                  minHeight: "130px",
                  marginTop: "10px",
                  borderRadius: "16px",
                  border: "1px solid #ddd9e4",
                  padding: "15px",
                  fontSize: "14px",
                  resize: "vertical",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />

              {/* SUBMIT */}
              <button
                onClick={() => setSubmitted(true)}
                style={{
                  marginTop: "20px",
                  border: "none",
                  background: "#292a31",
                  color: "#ffffff",
                  padding: "16px 28px",
                  borderRadius: "30px",
                  fontWeight: "900",
                  cursor: "pointer",
                }}
              >
                Submit Claim →
              </button>
            </>
          ) : (
            /* SUCCESS */
            <div
              style={{
                textAlign: "center",
                padding: "35px 10px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#c8ff00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "30px",
                  fontWeight: "900",
                }}
              >
                ✓
              </div>

              <h2
                style={{
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                Claim submitted!
              </h2>

              <p
                style={{
                  color: "#77727f",
                  lineHeight: "1.6",
                }}
              >
                Your claim has been recorded for this demo. Our protection
                team would review the submitted information next.
              </p>

              <div
                style={{
                  background: "#f7f5fd",
                  borderRadius: "18px",
                  padding: "18px",
                  marginTop: "25px",
                  fontWeight: "900",
                }}
              >
                Claim ID: RP-2026-001
              </div>

              <button
                onClick={onBack}
                style={{
                  marginTop: "25px",
                  border: "none",
                  background: "#292a31",
                  color: "#ffffff",
                  padding: "15px 25px",
                  borderRadius: "30px",
                  fontWeight: "900",
                  cursor: "pointer",
                }}
              >
                ← Back to Premium
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Claims;