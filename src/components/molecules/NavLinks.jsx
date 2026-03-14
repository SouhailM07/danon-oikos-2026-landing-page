import React from 'react';

const NavLinks = ({ onClick }) => {
  return (
    <ul className="nav-links">
      <li><a href="#hero" onClick={onClick}>Home</a></li>
      <li><a href="#flavors" onClick={onClick}>Flavors</a></li>
      <li><a href="#about" onClick={onClick}>About</a></li>
      <li><a href="#contact" onClick={onClick}>Contact</a></li>
    </ul>
  );
};

export default NavLinks;
