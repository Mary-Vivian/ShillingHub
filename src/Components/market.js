import { TextAlignCenter } from "lucide-react";
import React from "react";

const MarketSection = () => {
  const sectionStyle = {
    padding: "80px 24px",
    backgroundColor: "transparent",
  };

  const containerStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "36px",
    color: "#fff",
    textAlign: "center",
    marginRight:"108px"
  };

  const purpleTextStyle = {
    color: "#000",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    marginBottom: "64px",
  };

  const cardBaseStyle = {
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid",
    textAlign: "center",
  };

  const purpleCard = {
    ...cardBaseStyle,
    background: "#151f31",
    borderColor: "rgba(168,85,247,0.3)",
  };

  const cyanCard = {
    ...cardBaseStyle,
    background: "#151f31",
    borderColor: "rgba(6,182,212,0.3)",
  };

  const pinkCard = {
    ...cardBaseStyle,
    background: "#151f31",
    borderColor: "rgba(236,72,153,0.3)",
  };

  const bigNumberStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const textStyle = {
    fontSize: "20px",
    color: "#546e6eff",
  };

  const subTextStyle = {
    marginTop: "8px",
    fontSize: "16px",
  };

  const cardContainerStyle = {
    background: "#151f31",
    backdropFilter: "blur(6px)",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #334155",
    textAlign: "left",
  };

  const subHeadingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#fff",
    textAlign: "center",
  };

  const twoColGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
  };

  const listHeadingPurple = {
    color: "#4adc76",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
  };

  const listHeadingCyan = {
    color: "#4adc76",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
  };

  const listStyle = {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "1.6",
    listStyle: "none",
    paddingLeft: "0",
  };

  return (
    <section id="market" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Massive <span style={purpleTextStyle}>Market Opportunity</span>
        </h2>

        <div style={gridStyle}>
          <div style={purpleCard}>
            <div style={{ ...bigNumberStyle, color: "#a78bfa" }}>$727.7B</div>
            <div style={textStyle}>Market Size by 2033</div>
            <div style={{ ...subTextStyle, color: "#4c28dfff" }}>17.58% CAGR</div>
          </div>
          <div style={cyanCard}>
            <div style={{ ...bigNumberStyle, color: "#22d3ee" }}>1.1B</div>
            <div style={textStyle}>Mobile Money Users</div>
            <div style={{ ...subTextStyle, color: "#21b5c9ff" }}>53% Global Total</div>
          </div>
          <div style={pinkCard}>
            <div style={{ ...bigNumberStyle, color: "#f472b6" }}>0</div>
            <div style={textStyle}>Privacy-First Competitors</div>
            <div style={{ ...subTextStyle, color: "#9e3870ff" }}>First Mover Advantage</div>
          </div>
        </div>

        <div style={cardContainerStyle}>
          <h3 style={subHeadingStyle}>Why Now?</h3>
          <div style={twoColGrid}>
            <div>
              <h4 style={listHeadingPurple}>Market Readiness</h4>
              <ul style={listStyle}>
                <li>• M-PESA dominance (92.3%) creating complacency</li>
                <li>• Users seeking alternatives due to high fees</li>
                <li>• 57% of Africans remain unbanked</li>
              </ul>
            </div>
            <div>
              <h4 style={listHeadingCyan}>Technology Maturity</h4>
              <ul style={listStyle}>
                <li>• ZKsync Era: 2,000 TPS, $1.11B TVL</li>
                <li>• 73% of financial institutions using AI</li>
                <li>• WorldID integration examples available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
