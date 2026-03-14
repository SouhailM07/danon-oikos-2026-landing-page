import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Logo from '../atoms/Logo';
import NavLinks from '../molecules/NavLinks';
import Button from '../atoms/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar glass-effect fade-in-scale ${isOpen ? 'nav-open' : ''}`}>
      <div className="container nav-container">
        <Logo />
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLinks onClick={() => setIsOpen(false)} />
          <Button className="mobile-only">Find Stores</Button>
        </div>
        <div className="nav-actions">
          <Button className="desktop-only">Find Stores</Button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
