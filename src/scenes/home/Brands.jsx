import React from 'react'
import Buberry from '../../images/Burberry.jpg'
import Boss from '../../images/Boss.jpg'
import Gucci from '../../images/Gucci.jpg'
import Catier from '../../images/Catier.jpg'
import Prada from '../../images/Prada.jpg'

function Brands() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '50px',
    maxWidth: '200px',
    margin: '0 auto',
  };

  const imageStyle = {
    maxWidth: '200px', // Adjust the size as needed
  };

  return (
    <div style={containerStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="125" height="10" viewBox="0 0 125 10" fill="none">
        <path d="M62.5775 9.25429L67.1271 4.70469H124.979V4.4979H67.1271L62.5775 0L58.0797 4.4979H0.0205994V4.70469H58.0797L62.5775 9.25429ZM62.5775 0.3102L66.9203 4.60129L62.5775 8.94409L58.2348 4.60129L62.5775 0.3102Z" fill="#555555"/>
      </svg>
      <img src={Buberry} alt='' style={imageStyle} />
      <img src={Boss} alt='' style={imageStyle} />
      <img src={Gucci} alt='' style={imageStyle} />
      <img src={Catier} alt='' style={imageStyle} />
      <img src={Prada} alt='' style={imageStyle} />
    
      <svg xmlns="http://www.w3.org/2000/svg" width="125" height="10" viewBox="0 0 125 10" fill="none">
        <path d="M62.5775 9.25429L67.1271 4.70469H124.979V4.4979H67.1271L62.5775 0L58.0797 4.4979H0.0205994V4.70469H58.0797L62.5775 9.25429ZM62.5775 0.3102L66.9203 4.60129L62.5775 8.94409L58.2348 4.60129L62.5775 0.3102Z" fill="#555555"/>
      </svg>
    </div>
  )
}

export default Brands;
