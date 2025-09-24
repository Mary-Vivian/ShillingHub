import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
<nav
  style={{
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(135, 153, 196, 0.95)', // Always visible color
    backdropFilter: 'blur(6px)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  }}
>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <div style={{ color: 'blue', fontSize: '1.5rem', fontWeight: 'bold', }}>
          ShillingHub
        </div>

        {/* Desktop Menu */}
       <div
        style={{
         display: 'flex',   // <-- Make it a flex container
        gap: '16px',       // <-- Space between links (adjust as needed)
        }}
      className="desktop-menu"
    >
     <a onClick={() => scrollToSection('features')} style={linkStyle}>Features</a>
     <a onClick={() => scrollToSection('solution')} style={linkStyle}>Solution</a>
     <a onClick={() => scrollToSection('market')} style={linkStyle}>Market</a>
     <a onClick={() => scrollToSection('growth')} style={linkStyle}>Growth</a>
    </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            borderTop: '1px solid #1d519bff',
          }}
        >
          <a onClick={() => scrollToSection('features')} style={linkStyle}>Features</a>
          <a onClick={() => scrollToSection('solution')} style={linkStyle}>Solution</a>
          <a onClick={() => scrollToSection('market')} style={linkStyle}>Market</a>
          <a onClick={() => scrollToSection('growth')} style={linkStyle}>Growth</a>
        </div>
      )}
    </nav>
  );
};

const linkStyle = {
  cursor: 'pointer',
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s',
  fontSize: '1rem',
};

export default Navbar;
