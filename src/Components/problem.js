import React from 'react';

const SolutionSection = () => {
  const sectionStyle = {
    padding: '80px 24px',
    // backgroundColor: 'rgba(177, 194, 214, 0.3)',
  };

  const containerStyle = {
    maxWidth: '1120px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gap: '48px', // space between rows
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '32px',
    textAlign: 'center',
  };

  const problemHeadingStyle = {
    color: '#000',
  };

  const solutionHeadingStyle = {
    color: '#4ade80',
  };

  const pairContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 60px 1fr', // problem | arrow | solution
    alignItems: 'center',
    gap: '24px',
  };

  const cardStyle = (borderColor) => ({
    backgroundColor: '#151f31',
    padding: '24px',
    borderRadius: '12px',
    border: `1px solid ${borderColor}`,
  });

  const cardHeadingStyle = (color) => ({
    fontSize: '20px',
    fontWeight: '600',
    color: color,
    marginBottom: '8px',
  });

  const textStyle = {
    color: '#fff',
  };

  const arrowStyle = {
    fontSize: '24px',
    textAlign: 'center',
    color: '#555',
  };

  return (
    <section id="solution" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          The <span style={problemHeadingStyle}>Problem</span> → Our{' '}
          <span style={solutionHeadingStyle}>Solution</span>
        </h2>
        <div style={gridStyle}>
          {/* Pair 1 */}
          <div style={pairContainerStyle}>
            <div style={cardStyle('rgba(248, 113, 113, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>High Variable Fees</h4>
              {/* <p style={textStyle}>
                M-PESA fees range from 0% to 11%+. KES 50 withdrawal costs KES 11 (22% fee rate)
              </p> */}
            </div>
            <div style={arrowStyle}>➡</div>
            <div style={cardStyle('rgba(74, 222, 128, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>Fixed Low Fees</h4>
              {/* <p style={textStyle}>Transparent 1-1.5% flat transaction fees with no hidden costs</p> */}
            </div>
          </div>

          {/* Pair 2 */}
          <div style={pairContainerStyle}>
            <div style={cardStyle('rgba(248, 113, 113, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>Privacy Violations</h4>
              {/* <p style={textStyle}>
                Merchants share client data with third parties. Full exposure of names and phone numbers
              </p> */}
            </div>
            <div style={arrowStyle}>➡</div>
            <div style={cardStyle('rgba(74, 222, 128, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>Zero-Knowledge Privacy</h4>
              {/* <p style={textStyle}>
                Complete transaction privacy with regulatory compliance through selective disclosure
              </p> */}
            </div>
          </div>

          {/* Pair 3 */}
          <div style={pairContainerStyle}>
            <div style={cardStyle('rgba(248, 113, 113, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>Zero DeFi Access</h4>
              {/* <p style={textStyle}>
                Closed ecosystem with no blockchain integration or access to 25-40% DeFi yields
              </p> */}
            </div>
            <div style={arrowStyle}>➡</div>
            <div style={cardStyle('rgba(74, 222, 128, 0.3)')}>
              <h4 style={cardHeadingStyle('#4ade80')}>AI-Optimized DeFi</h4>
              {/* <p style={textStyle}>
                Automated yield optimization delivering 25-40% APY through intelligent portfolio management
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
