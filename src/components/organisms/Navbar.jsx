import React from 'react';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';
import Button from '../atoms/Button';

const Navbar = () => {
  return (
    <nav className="navbar glass-effect fade-in-scale">
      <div className="container nav-container">
        <Logo />
        <NavLinks />
        <Button>Find Stores</Button>
      </div>
    </nav>
  );
};

export default Navbar;
