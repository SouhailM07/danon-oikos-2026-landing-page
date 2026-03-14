import React from 'react';

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        {icon}
      </div>
      <div className="feature-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
