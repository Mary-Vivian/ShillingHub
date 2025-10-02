import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // close menu on click (for mobile)
  };

  const linkStyle = {
    cursor: "pointer",
    fontWeight: "500",
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#172133",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>ShillingHub</div>

      {/* Right side: Links + Hamburger */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px", // controls space between links and hamburger
        }}
      >
        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            gap: "40px",
          }}
          className="desktop-menu"
        >
          <a onClick={() => scrollToSection("features")} style={linkStyle}>
            Features
          </a>
          <a onClick={() => scrollToSection("solution")} style={linkStyle}>
            Solution
          </a>
          {/* <a onClick={() => scrollToSection("market")} style={linkStyle}>
            Market
          </a>
          <a onClick={() => scrollToSection("growth")} style={linkStyle}>
            Growth
          </a> */}
          <a onClick={() => scrollToSection("cta")} style={linkStyle}>
            Contacts
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div
          style={{ cursor: "pointer", fontSize: "22px" }}
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
            borderTop: "1px solid #1d519bff",
            backgroundColor: "rgba(23, 33, 51, 0.95)",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
          }}
        >
          <a onClick={() => scrollToSection("features")} style={linkStyle}>
            Features
          </a>
          <a onClick={() => scrollToSection("solution")} style={linkStyle}>
            Solution
          </a>
          <a onClick={() => scrollToSection("market")} style={linkStyle}>
            Market
          </a>
          <a onClick={() => scrollToSection("growth")} style={linkStyle}>
            Growth
          </a>
          <a onClick={() => scrollToSection("cta")} style={linkStyle}>
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
