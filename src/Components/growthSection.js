import React from "react";

const GrowthSection = () => {
  const sectionStyle = {
    padding: "80px 24px",
    backgroundColor: "rgba(148, 153, 158, 0.3)", // bg-slate-800/30
  };

  const containerStyle = {
    maxWidth: "1120px", // max-w-7xl
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "64px",
    color: "#fff",
  };

  const grid4Style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginBottom: "64px",
  };

  const cardStyle = {
    background: "linear-gradient(to bottom right, #0f172a, #1e293b)", // from-slate-900 to-slate-800
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #475569", // border-slate-600
    textAlign: "center",
    color: "#fff",
  };

  const grid2Style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "48px",
  };

  const subTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#fff",
  };

  const phaseCardStyle = (color) => ({
    backgroundColor: "#151f31",
    padding: "16px",
    borderRadius: "8px",
    border: `1px solid ${color}`,
    color: "#fff",
  });

  const visionCardStyle = {
    background: "#151f31",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid rgba(147,51,234,0.3)",
    color: "#fff",
  };

  const visionTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    background: "linear-gradient(to right, #a78bfa, #22d3ee)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const visionGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    textAlign: "center",
  };

  return (
    <section id="growth" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          Exponential <span style={{ color: "#4ade80" }}>Growth</span> Trajectory
        </h2>

        {/* Growth cards */}
        <div style={grid4Style}>
          {[
            { year: "Year 1", amount: "$400K", users: "10,000 users" },
            { year: "Year 2", amount: "$2.8M", users: "50,000 users" },
            { year: "Year 3", amount: "$7.2M", users: "150,000 users" },
            { year: "Year 4", amount: "$13.48M", users: "400,000 users" },
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <div style={{ fontSize: "20px", fontWeight: "bold", color: "#4ade80" }}>{item.year}</div>
              <div style={{ fontSize: "28px", fontWeight: "bold", marginTop: "8px" }}>{item.amount}</div>
              <div style={{ color: "#d1d5db" }}>{item.users}</div>
            </div>
          ))}
        </div>

        {/* Strategy and Vision */}
        <div style={grid2Style}>
          <div>
            <h3 style={subTitleStyle}>Expansion Strategy</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={phaseCardStyle("rgba(168,85,247,0.3)")}>
                <h4 style={{ fontWeight: "600", color: "#a78bfa" }}>Phase 1: East Africa</h4>
                <p style={{ fontSize: "14px", color: "#d1d5db", marginTop: "4px" }}>
                  Kenya, Uganda, Tanzania, Rwanda
                </p>
              </div>
              <div style={phaseCardStyle("rgba(6,182,212,0.3)")}>
                <h4 style={{ fontWeight: "600", color: "#22d3ee" }}>Phase 2: West Africa</h4>
                <p style={{ fontSize: "14px", color: "#d1d5db", marginTop: "4px" }}>
                  Nigeria, Ghana, Senegal, Côte d'Ivoire
                </p>
              </div>
              <div style={phaseCardStyle("rgba(236,72,153,0.3)")}>
                <h4 style={{ fontWeight: "600", color: "#ec4899" }}>Phase 3: Southern Africa</h4>
                <p style={{ fontSize: "14px", color: "#d1d5db", marginTop: "4px" }}>
                  South Africa, Zambia, Botswana, Malawi
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={subTitleStyle}>2030 Vision</h3>
            <div style={visionCardStyle}>
              <h4 style={visionTitleStyle}>Africa's Financial Operating System</h4>
              <div style={visionGridStyle}>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#a78bfa" }}>100M+</div>
                  <div style={{ fontSize: "14px", color: "#f2f4f8ff" }}>Users</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#22d3ee" }}>$50B+</div>
                  <div style={{ fontSize: "14px", color: "#f2f4f8ff" }}>Volume</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#ec4899" }}>$500M+</div>
                  <div style={{ fontSize: "14px", color: "#f2f4f8ff" }}>Revenue</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#4ade80" }}>20+</div>
                  <div style={{ fontSize: "14px", color: "#f2f4f8ff" }}>Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
