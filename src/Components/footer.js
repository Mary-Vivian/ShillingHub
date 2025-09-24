import React from "react";

const CTAFooter = () => {
  const sectionStyle = {
    padding: "80px 24px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "24px",
    color: "#fff",
  };

  const gradientTextStyle = {
    display: "block",
    background: "linear-gradient(to right, #a78bfa, #f472b6, #22d3ee)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const paragraphStyle = {
    fontSize: "20px",
    color: "#6f83a1ff",
    marginBottom: "48px",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.6",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  };

  const primaryButtonStyle = {
    background: "linear-gradient(to right, #9333ea, #ec4899)",
    padding: "16px 32px",
    borderRadius: "9999px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const secondaryButtonStyle = {
    border: "1px solid #22d3ee",
    color: "#22d3ee",
    padding: "16px 32px",
    borderRadius: "9999px",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const footerStyle = {
    padding: "48px 24px",
    borderTop: "1px solid #334155",
    textAlign: "center",
    marginTop: "40px",
  };

  const footerTitleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
    background: "linear-gradient(to right, #a78bfa, #22d3ee)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  const footerTextStyle = {
    color: "#9ca3af",
    marginBottom: "24px",
    fontSize: "14px",
  };

  const footerTagsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    color: "#6b7280",
    fontSize: "14px",
  };

  return (
    <>
      {/* CTA Section */}
      <section style={sectionStyle}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={headingStyle}>
            The Future of African Finance is{" "}
            <span style={gradientTextStyle}>Here</span>
          </h2>

          <p style={paragraphStyle}>
            ShillingHub represents a once-in-a-generation opportunity to transform
            how 1.3 billion Africans interact with money. Join us in building the
            financial infrastructure for Africa's digital future.
          </p>

          <div style={buttonContainerStyle}>
            <button
              style={primaryButtonStyle}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Join the Revolution
            </button>
            <button
              style={secondaryButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(34,211,238,0.1)")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={footerTitleStyle}>ShillingHub</div>
          <p style={footerTextStyle}>
            Building Kenya's First AI-Powered Zero-Knowledge Privacy Financial
            Platform
          </p>
          <div style={footerTagsStyle}>
            <span>Privacy-First</span>
            <span>AI-Powered</span>
            <span>DeFi-Integrated</span>
            <span>Africa-Focused</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
