import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="footer-social">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
