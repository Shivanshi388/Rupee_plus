import React from "react";

function Landing({
  onGetStarted,
  onLogin,
  onHowItWorks,
  onDownload,
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5fd",
        color: "#171821",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* ================= HEADER ================= */}
      <header
        style={{
          height: "88px",
          background: "#ffffff",
          borderBottom: "1px solid #e7e4ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "#baff00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "23px",
              fontWeight: "900",
            }}
          >
            ₹
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "900",
            }}
          >
            Rupee+
          </div>
        </div>

        {/* Header buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
          }}
        >
          {/* STEP 3 */}
          <button
            onClick={onLogin}
            style={{
              border: "none",
              background: "transparent",
              color: "#111217",
              fontSize: "16px",
              fontWeight: "800",
              cursor: "pointer",
              padding: "12px 8px",
            }}
          >
            Step 3
          </button>

          {/* GET STARTED */}
          <button
            onClick={onGetStarted}
            style={{
              border: "none",
              background: "#303139",
              color: "#ffffff",
              padding: "16px 25px",
              borderRadius: "14px",
              fontSize: "16px",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          {/* Avatar */}
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "#baff00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
            }}
          >
            R
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <main>
        <section
          style={{
            padding: "26px 40px 70px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "#baff00",
              borderRadius: "38px",
              padding: "90px 40px 80px",
              minHeight: "620px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}
            <div
              style={{
                position: "absolute",
                width: "520px",
                height: "520px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                right: "-80px",
                top: "-120px",
              }}
            />

            <div
              style={{
                maxWidth: "850px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#303139",
                  color: "#ffffff",
                  borderRadius: "30px",
                  padding: "10px 18px",
                  fontSize: "12px",
                  fontWeight: "900",
                  letterSpacing: "0.5px",
                  marginBottom: "32px",
                }}
              >
                ● SMARTER SAVINGS. SIMPLE PROTECTION.
              </div>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: "0.98",
                  letterSpacing: "-3px",
                  margin: "0 0 28px",
                  maxWidth: "760px",
                  fontWeight: "900",
                }}
              >
                Small Payments.
                <br />
                Big Financial Safety.
              </h1>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.5",
                  maxWidth: "780px",
                  margin: "0 0 34px",
                }}
              >
                Rupee+ automatically turns everyday spending into savings and
                affordable insurance protection — one small round-up at a time.
              </p>

              {/* HERO BUTTONS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                {/* GET STARTED */}
                <button
                  onClick={onGetStarted}
                  style={{
                    border: "none",
                    background: "#303139",
                    color: "#ffffff",
                    padding: "18px 30px",
                    borderRadius: "35px",
                    fontSize: "17px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                  <span
                    style={{
                      marginLeft: "12px",
                      color: "#baff00",
                    }}
                  >
                    →
                  </span>
                </button>

                {/* HOW IT WORKS */}
                <button
                  onClick={onHowItWorks}
                  style={{
                    border: "none",
                    background: "#ffffff",
                    color: "#303139",
                    padding: "18px 30px",
                    borderRadius: "35px",
                    fontSize: "17px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  How It Works ↓
                </button>

                {/* DOWNLOAD APP */}
                <button
                  onClick={onDownload}
                  style={{
                    border: "none",
                    background: "#ffffff",
                    color: "#303139",
                    padding: "18px 30px",
                    borderRadius: "35px",
                    fontSize: "17px",
                    fontWeight: "900",
                    cursor: "pointer",
                  }}
                >
                  ↓ Download App
                </button>
              </div>

              {/* STATS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "70px",
                  marginTop: "65px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "34px",
                      fontWeight: "900",
                    }}
                  >
                    ₹1
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      marginTop: "5px",
                    }}
                  >
                    MIN. ROUND-UP
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "34px",
                      fontWeight: "900",
                    }}
                  >
                    ₹1,00,000
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      marginTop: "5px",
                    }}
                  >
                    MICRO-SHIELD CAP
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "34px",
                      fontWeight: "900",
                    }}
                  >
                    Instant
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      marginTop: "5px",
                    }}
                  >
                    UPI LIQUIDITY
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RELEASE BAR */}
          <div
            style={{
              maxWidth: "1200px",
              margin: "20px auto 0",
              background: "#ffffff",
              border: "1px solid #e4e1eb",
              borderRadius: "20px",
              padding: "16px 22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#baff00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                }}
              >
                ✓
              </div>

              <div>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: "900",
                  }}
                >
                  OFFICIAL INTERFACE RELEASE
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "800",
                  }}
                >
                  Designed for high-frequency UPI micro-transactions
                </div>
              </div>
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#77727f",
              }}
            >
              Built on RBI / Sandbox Guidelines
            </div>
          </div>
        </section>

        {/* ================= PROTECTION SECTION ================= */}
        <section
          id="how-it-works"
          style={{
            padding: "60px 40px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                color: "#717800",
                fontSize: "11px",
                fontWeight: "900",
                letterSpacing: "1.5px",
                marginBottom: "12px",
              }}
            >
              DEMOCRATIZING PROTECTION
            </div>

            <h2
              style={{
                fontSize: "50px",
                lineHeight: "1",
                letterSpacing: "-2px",
                margin: "0 0 15px",
                maxWidth: "700px",
              }}
            >
              Built for people with
              <br />
              unpredictable income.
            </h2>

            <p
              style={{
                color: "#66616e",
                fontSize: "16px",
                marginBottom: "45px",
              }}
            >
              Traditional insurance requires hefty annual premiums. Rupee+
              meets you where you are.
            </p>

            {/* CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "18px",
              }}
            >
              {[
                {
                  icon: "✦",
                  title: "Gig Workers",
                  text: "Ride-hail drivers and platform freelancers carrying per-trip cash and health protection.",
                },
                {
                  icon: "₹",
                  title: "Students",
                  text: "College budgets effortlessly creating their first emergency reserve.",
                },
                {
                  icon: "▣",
                  title: "Daily-Wage Workers",
                  text: "Flexible safety cushions for irregular work and fluctuating revenue.",
                },
                {
                  icon: "↗",
                  title: "Delivery Fleets",
                  text: "On-demand couriers working long hours with automatic shield protection.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e3e0e9",
                    borderRadius: "25px",
                    padding: "28px",
                    minHeight: "180px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      background:
                        index === 1 ? "#baff00" : "#efedf5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "900",
                      marginBottom: "25px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "18px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#77727f",
                      fontSize: "12px",
                      lineHeight: "1.6",
                      margin: "0 0 18px",
                    }}
                  >
                    {item.text}
                  </p>

                  <div
                    style={{
                      color: "#6c7300",
                      fontSize: "11px",
                      fontWeight: "900",
                    }}
                  >
                    Build digital safety →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section
          style={{
            padding: "20px 40px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "#ffffff",
              border: "1px solid #e4e1eb",
              borderRadius: "30px",
              padding: "55px",
            }}
          >
            <div
              style={{
                color: "#717800",
                fontSize: "11px",
                fontWeight: "900",
                letterSpacing: "1.5px",
              }}
            >
              EFFORTLESS MICRO-ALLOCATION
            </div>

            <h2
              style={{
                fontSize: "48px",
                lineHeight: "1",
                letterSpacing: "-2px",
                maxWidth: "700px",
                margin: "15px 0 45px",
              }}
            >
              Your everyday payments can protect your future.
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "18px",
              }}
            >
              {[
                [
                  "01",
                  "PAY",
                  "Use your money normally for fees, groceries, metro transit, or online shopping.",
                ],
                [
                  "02",
                  "ROUND-UP",
                  "Small amounts are automatically rounded up to the nearest ₹5 or ₹10 threshold.",
                ],
                [
                  "03",
                  "SAVE + PROTECT",
                  "Money automatically splits into your personal savings and insurance vaults.",
                ],
                [
                  "04",
                  "GET COVERED",
                  "Receive affordable, real-time protection shields when eligible.",
                ],
              ].map((item) => (
                <div
                  key={item[0]}
                  style={{
                    border: "1px solid #e3e0e9",
                    borderRadius: "24px",
                    padding: "28px",
                    minHeight: "170px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      color: "#c8c9b0",
                      fontWeight: "900",
                      marginBottom: "30px",
                    }}
                  >
                    {item[0]}
                  </div>

                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "900",
                      marginBottom: "8px",
                    }}
                  >
                    STEP {item[0]}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 12px",
                      fontSize: "18px",
                    }}
                  >
                    {item[1]}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#77727f",
                      fontSize: "12px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section
          style={{
            padding: "0 40px 80px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "#303139",
              color: "#ffffff",
              borderRadius: "32px",
              padding: "65px 45px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#baff00",
                fontSize: "11px",
                fontWeight: "900",
                letterSpacing: "1.5px",
                marginBottom: "15px",
              }}
            >
              START BUILDING YOUR SAFETY NET
            </div>

            <h2
              style={{
                fontSize: "46px",
                lineHeight: "1",
                margin: "0 0 18px",
              }}
            >
              Small payments.
              <br />
              Bigger peace of mind.
            </h2>

            <p
              style={{
                color: "#c9c8cf",
                maxWidth: "600px",
                margin: "0 auto 30px",
                lineHeight: "1.6",
              }}
            >
              Save a little. Protect a little. Build more security over time.
            </p>

            <button
              onClick={onGetStarted}
              style={{
                border: "none",
                background: "#baff00",
                color: "#303139",
                padding: "18px 32px",
                borderRadius: "35px",
                fontSize: "16px",
                fontWeight: "900",
                cursor: "pointer",
              }}
            >
              Get Started →
            </button>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          background: "#ffffff",
          borderTop: "1px solid #e4e1eb",
          padding: "55px 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "50px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "#baff00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                }}
              >
                ₹
              </div>

              <strong
                style={{
                  fontSize: "22px",
                }}
              >
                Rupee+
              </strong>
            </div>

            <p
              style={{
                color: "#77727f",
                fontSize: "12px",
              }}
            >
              Save & Get Protected, One Rupee at a Time.
            </p>
          </div>

          <div>
            <strong
              style={{
                fontSize: "11px",
              }}
            >
              PRODUCT
            </strong>

            <p>Spare Rupees</p>
            <p>Auto-Vault</p>
            <p>Micro-Health Cover</p>
            <p>Daily Yield</p>
          </div>

          <div>
            <strong
              style={{
                fontSize: "11px",
              }}
            >
              CONTACT
            </strong>

            <p>Support Center</p>
            <p>Partner Program</p>
            <p>Press Inquiries</p>
          </div>
        </div>
      </footer>

      {/* ================= RESPONSIVE CSS ================= */}
      <style>
        {`
          @media (max-width: 800px) {
            header {
              padding: 0 20px !important;
            }

            header > div:last-child {
              gap: 8px !important;
            }

            header button {
              padding: 10px 12px !important;
            }

            section {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }

            h1 {
              font-size: 45px !important;
            }

            h2 {
              font-size: 36px !important;
            }

            footer {
              padding: 40px 20px !important;
            }

            footer > div {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            header {
              height: 75px !important;
            }

            header > div:last-child button:first-child {
              display: none;
            }

            h1 {
              font-size: 38px !important;
            }

            h2 {
              font-size: 32px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Landing;