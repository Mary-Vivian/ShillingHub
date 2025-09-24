import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <style>
        {`
          .hero-section {
            min-height: 100vh;
            padding: 80px 24px 0 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: transparent;\
            margin-top: 0;
          }

        .hero-container {
         max-width: 1200px;
         margin: 0 auto;
         margin-top: 0; 
         padding-top: 0;
        }


          .hero-badge {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(147, 51, 234, 0.3);
            border: 1px solid rgba(147, 51, 234, 0.5);
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 32px;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

        .hero-title {
         font-size: 3rem;
         font-weight: bold;
         margin-bottom: 24px;
         line-height: 1.2;
        display: flex;
         justify-content: center;
         align-items: center;
         gap: 4px;
        }


          .hero-title .gradient-text {
            display: block;
            background: linear-gradient(to right, #a855f7, #ec4899, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: #163381ff;
            margin: 0 auto 32px auto;
            max-width: 700px;
          }

          .hero-subtitle .purple {
            color: #a855f7;
            font-weight: 600;
          }

          .hero-subtitle .cyan {
            color: #06b6d4;
            font-weight: 600;
          }

          .hero-stats {
            display: flex;
            flex-direction: column;
            gap: 64px;
            margin-top: 48px;
            margin-bottom: 48px;
          }

          @media(min-width: 768px) {
            .hero-stats {
              flex-direction: row;
              justify-content: center;
            }
          }

          .stat-card {
            flex: 1;
            min-width: 280px;
            min-height: 80px;
            background: rgba(193, 203, 218, 0.5);
            border-radius: 12px;
            padding: 24px;
            border: 1px solid rgba(148, 163, 184, 0.3);
            transition: transform 0.3s ease;
          }

          .stat-card:hover {
            transform: scale(1.05);
          }

          .stat-value {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 8px;
          }

          .stat-purple { color: #a855f7; border-color: rgba(168, 85, 247, 0.3); }
          .stat-cyan { color: #06b6d4; border-color: rgba(6, 182, 212, 0.3); }
          .stat-pink { color: #ec4899; border-color: rgba(236, 72, 153, 0.3); }

          .hero-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 16px 32px;
            border-radius: 9999px;
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            background: linear-gradient(to right, #9333ea, #06b6d4);
            cursor: pointer;
            transition: all 0.3s ease;
            margin:40px  auto 0 auto;
          }

          .hero-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
          }

          .arrow-icon {
            margin-left: 8px;
            transition: transform 0.3s ease;
          }

          .hero-button:hover .arrow-icon {
            transform: translateX(4px);
          }

          .chevron-container {
            margin-top: 64px;
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
        `}
      </style>

      <div className="hero-container">
        <div className="hero-badge">
          Africa's First Privacy-First AI-Powered Financial Platform
        </div>

        <h1 className="hero-title">
          Kenya's Financial <span className="gradient-text">Revolution</span>
        </h1>

        <p className="hero-subtitle">
          Combining blockchain technology, zero-knowledge proofs, and AI to create 
          a revolutionary financial experience with <span className="purple">1-1.5% transaction fees</span> and 
          <span className="cyan"> 25-40% DeFi yields</span>
        </p>

        <div className="hero-stats">
          <div className="stat-card stat-purple">
            <div className="stat-value">99.97%</div>
            <div>Fraud Prevention</div>
          </div>
          <div className="stat-card stat-cyan">
            <div className="stat-value">2,000</div>
            <div>TPS Capacity</div>
          </div>
          <div className="stat-card stat-pink">
            <div className="stat-value">34M</div>
            <div>Target Users</div>
          </div>
        </div>

        <button onClick={() => scrollToSection('features')} className="hero-button">
          Discover the Future
          <ArrowRight size={20} className="arrow-icon" />
        </button>

        <div className="chevron-container">
          <ChevronDown size={32} className="chevron-icon" color="#9ca3af" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
