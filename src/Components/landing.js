import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.page}>
      {/* Blurred background */}
      <div style={styles.background}></div>

      {/* Dark overlay on top of blur */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div
        style={{
          ...styles.content,
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h1 style={styles.title}>Welcome to ShillingHub</h1>
        <p style={styles.subtitle}>
          Africa's First Privacy-First AI-Powered Financial Platform 
          that combines blockchain technology, zero-knowledge proofs,
          and artificial intelligence to create a revolutionary financial experience in Kenya.
        </p>
        <button
          style={styles.button}
          onClick={() => scrollToSection("features")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1667808931942-d766e3b2ca8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHxjcnlwdG9jdXJyZW5jeSUyMGltYWdlcyUyMHRoYXQlMjBoYXZlJTIwY29pbnN8ZW58MHx8MHx8fDA%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "blur(5px)", 
    transform: "scale(1.1)", 
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.5rem",
    maxWidth: "600px",
    margin: "0 auto 30px",
    marginBottom:"54px",
    lineHeight: "1.5",
  },
  button: {
    background: "linear-gradient(to right, #9333ea, #06b6d4)",
    border: "none",
    padding: "12px 30px",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "600",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};

export default LandingPage;
