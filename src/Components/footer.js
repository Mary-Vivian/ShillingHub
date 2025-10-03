import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import FeedbackTool from "./feedback"; 

const CombinedContactsCTA = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <section
      id="cta"
      style={{
        backgroundColor: "#172133",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px 24px",
        gap: "60px",
        position: "relative",
      }}
    >
      {/* Left: Contact Form + Social Links */}
      <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Get in Touch
        </h2>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://wa.me/2547XXXXXXXX"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
          >
            <FaWhatsapp size={28} />
          </a>
          <a href="mailto:your@email.com" style={socialLinkStyle}>
            <FaEnvelope size={28} />
          </a>
        </div>

        {/* Contact Form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input type="text" placeholder="Full Name" style={inputStyle} required />
          <input type="email" placeholder="Email" style={inputStyle} required />
          <textarea
            placeholder="Type your message..."
            rows="5"
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>

      {/* Right: CTA + Footer */}
      <div
        style={{
          flex: "1 1 400px",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          The Future of African Finance is{" "}
          <span
            style={{
              background: "linear-gradient(to right, #a78bfa, #f472b6, #22d3ee)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Here
          </span>
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            marginBottom: "32px",
            lineHeight: "1.6",
          }}
        >
          ShillingHub represents a once-in-a-generation opportunity to transform
          how 1.3 billion Africans interact with money. Join us in building the
          financial infrastructure for Africa's digital future.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {/* <button
            style={primaryButtonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Join the Revolution
          </button> */}
          {/* <button
            style={secondaryButtonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "rgba(34,211,238,0.1)")
            }
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Learn More
          </button> */}

          {/* Feedback Button */}
          <button
            style={{
              marginTop: "12px",
              border: "1px solid #9333ea",
              color: "#9333ea",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setShowFeedback(true)}
          >
            Give Feedback
          </button>
        </div>

        {/* Mini footer */}
        <div
          style={{
            marginTop: "40px",
            borderTop: "1px solid #334155",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "12px",
              background: "linear-gradient(to right, #a78bfa, #22d3ee)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ShillingHub
          </div>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            Building Kenya's First AI-Powered Zero-Knowledge Privacy Financial
            Platform
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            <span>Privacy-First</span>
            <span>AI-Powered</span>
            <span>DeFi-Integrated</span>
            <span>Africa-Focused</span>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showFeedback && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            overflowY: "auto",
            padding: "20px",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Close Button */}
            <button
              onClick={() => setShowFeedback(false)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <FeedbackTool />
          </div>
        </div>
      )}
    </section>
  );
};

const socialLinkStyle = {
  color: "white",
  textDecoration: "none",
  transition: "0.3s",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #334155",
  backgroundColor: "#0f172a",
  color: "white",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#3b82f6",
  border: "none",
  borderRadius: "8px",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const primaryButtonStyle = {
  background: "linear-gradient(to right, #9333ea, #ec4899)",
  padding: "14px 28px",
  borderRadius: "9999px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const secondaryButtonStyle = {
  border: "1px solid #22d3ee",
  color: "#22d3ee",
  padding: "14px 28px",
  borderRadius: "9999px",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default CombinedContactsCTA;
