import React from 'react';

const FlavorCard = ({ name, img, color }) => {
  return (
    <div className="flavor-card glass-effect" style={{ '--accent': color }}>
      <div className="card-visual">
        <img src={img} alt={name} className="rounded-card-img" />
      </div>
      <h3>{name}</h3>
      <button className="card-btn">View Details</button>
    </div>
  );
};

export default FlavorCard;
