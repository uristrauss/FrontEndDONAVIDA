import React from 'react';
import logo from './Logo.png'; // Replace with your actual logo file path
import './Landing.css'; // Import the Landing component's CSS

const Landing = () => {
  return (
    <div className="landing-container"> {/* Use the defined CSS class */}
      <img src={logo} alt="School Logo" />
    </div>
  );
}

export default Landing;
