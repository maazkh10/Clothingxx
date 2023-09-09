import React from 'react';

function Trending() {
  const h2Style = {
    borderRadius: '30px',
    background: 'var(--gray-scale-input-bg, #F9F9F9)',
    display: 'inline-flex',
    padding: '10px 25px', /* Adjusted padding for more space */
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '30px', /* Added margin at the bottom for spacing */
  };

  return (
    <div>
      <h1 style={{
        color: 'var(--gray-scale-title-active, #000)',
        textAlign: 'center',
        fontFeatureSettings: "'clig' off, 'liga' off",
        fontFamily: 'Tenor Sans',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '80px',
        letterSpacing: '4px',
        textTransform: 'uppercase'
      }}>@Trending</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h2 style={h2Style}>#2022</h2>
        <h2 style={h2Style}>#Spring</h2>
        <h2 style={h2Style}>#Collection</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 style={h2Style}>#fall</h2>
        <h2 style={h2Style}>#Dress</h2>
        {/* <h2 style={h2Style}>#Openfasion</h2> */}
      </div>
     
    </div>
  );
}

export default Trending;
