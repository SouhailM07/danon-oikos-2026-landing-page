import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img src="/logo.webp" alt="OIKOS Logo" className="navbar-logo" />
    </div>
  );
};

export default Logo;
