import React from 'react';

const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button 
      type={type} 
      className={`premium-btn ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
