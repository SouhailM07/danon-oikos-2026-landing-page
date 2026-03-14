import React from 'react';
import Logo from '../atoms/Logo';
import SocialLinks from '../molecules/SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p>One Planet. One Health.</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <SocialLinks />
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Danone Oikos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
