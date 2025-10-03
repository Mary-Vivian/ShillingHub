import React from 'react';
import { Lock, Brain, Coins } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <style>
        {`
          .features-section {
            padding: 80px 24px;
          }
          .features-container {
            max-width: 1200px;
            margin: -80px auto 0 auto;
          }
          .features-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 64px;
          }
          .features-title .highlight {
            background: linear-gradient(to right, #a855f7, #ec4899, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 62px;
          }
          .feature-card {
            background: #172134;
            border: 1px solid rgba(51, 65, 85, 1);
            padding: 32px;
            border-radius: 16px;
            transition: all 0.3s ease;
          }
          .feature-card:hover {
            transform: scale(1.05);
            border-color: rgba(168, 85, 247, 0.5);
          }
          .feature-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 24px;
            color: #fff;
            transition: transform 0.3s ease;
          }
          .feature-card:hover .feature-icon {
            transform: scale(1.1);
          }
          .feature-heading {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 16px;
            color:#4ade80;
          }
          .feature-text {
            color: white;
            margin-bottom: 16px;
            line-height: 1.6;
          }
          .feature-note {
            font-size: 0.9rem;
            font-weight: bold;
            color: #a855f7;
          }
        `}
      </style>

      <div className="features-container">
        <h2 className="features-title">
          Revolutionary <span className="highlight">Features</span>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <Lock className="feature-icon" />
            <h3 className="feature-heading">Privacy-First Architecture</h3>
            <p className="feature-text">
              Zero-knowledge proofs ensure complete transaction privacy while maintaining regulatory compliance. Users control their financial data without compromising security.
            </p>
            <div className="feature-note">Sub-2-second ZK verification</div>
          </div>

          <div className="feature-card">
            <Brain className="feature-icon" />
            <h3 className="feature-heading">AI-Powered Intelligence</h3>
            <p className="feature-text">
              Advanced machine learning algorithms provide real-time fraud detection, personalized financial insights, and automated DeFi yield optimization.
            </p>
            <div className="feature-note">40% improvement in accuracy</div>
          </div>

          <div className="feature-card">
            <Coins className="feature-icon" />
            <h3 className="feature-heading">DeFi Integration</h3>
            <p className="feature-text">
              Seamless access to decentralized finance protocols offering high APY yields, automated portfolio management, and cross-border payments.
            </p>
            <div className="feature-note">10% APY yields</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
