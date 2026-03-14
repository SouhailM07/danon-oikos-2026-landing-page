import React from 'react';
import './App.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import strawberryImg from './assets/strawberry.png';
import blueberryImg from './assets/blueberry.png';
import peachImg from './assets/peach.png';
import yogurtSwirl from './assets/yogurt_swirl.png';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar glass-effect fade-in-scale">
        <div className="container nav-container">
          <div className="logo-container">
            <img src="/logo.webp" alt="OIKOS Logo" className="navbar-logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#flavors">Flavors</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="premium-btn">Find Stores</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg-accent"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title fade-in-scale">
              <span className="glow-text">OIKOS</span>
              <br />
              <span className="subtitle">Mindful Indulgence</span>
            </h1>
            <p className="hero-description fade-in-scale" style={{ animationDelay: '0.2s' }}>
              Experience the thick, creamy, and "forkable" texture of our premium Greek yogurt. Made with mindful ingredients for a bold flavor adventure.
            </p>
            <div className="hero-cta fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <button className="premium-btn">Explore Flavors</button>
            </div>
          </div>
          <div className="hero-visual fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <img src={strawberryImg} alt="Oikos Strawberry" className="hero-img float-anim" />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="flavors" className="flavors">
        <div className="container">
          <h2 className="section-title">Pure Flavors</h2>
          <div className="flavor-grid">
            {[
              { name: 'Strawberry', img: strawberryImg, color: 'var(--accent-strawberry)' },
              { name: 'Blueberry', img: blueberryImg, color: 'var(--accent-blueberry)' },
              { name: 'Peach', img: peachImg, color: 'var(--accent-peach)' }
            ].map((flavor, index) => (
              <div key={index} className="flavor-card glass-effect" style={{ '--accent': flavor.color }}>
                <div className="card-visual">
                  <img src={flavor.img} alt={flavor.name} className="rounded-card-img" />
                </div>
                <h3>{flavor.name}</h3>
                <button className="card-btn">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Story Section Omitted for clarity, but ensured to be kept in real replacement ... */}
      <section id="story" className="story fade-in-scale">
        <div className="container story-container">
          <div className="story-header horizontal-line">
            <h2 className="section-title">Scroll for Story</h2>
          </div>
          
          <div className="story-content">
            <div className="story-visual-wrapper">
              <div className="story-visual glass-effect">
                <img src={yogurtSwirl} alt="Creamy Yogurt Swirl" className="story-img" />
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="story-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7.5V11a2.5 2.5 0 0 1-5 0V7.5a2.5 2.5 0 1 1 5 0z" />
                    <path d="M18 7.5V11a2.5 2.5 0 1 0 5 0V7.5a2.5 2.5 0 1 0-5 0z" />
                    <path d="M6 9.25h12v1.5H6z" />
                    <path d="M6.5 6.5h11M6.5 12h11" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>HAUTE PROTÉINE</h4>
                  <p>Haute protéines yogurt, protéine est comme.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 21h10a2 2 0 0 0 2-2V7H5v12a2 2 0 0 0 2 2z" />
                    <path d="M5 7c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4" />
                    <path d="M19 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>RECETTE GRECQUE</h4>
                  <p>Recette driven de recette grecques et riecque.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.85 11a7 7 0 0 1-9.85 7z" />
                    <path d="M2 22c1.25-2.5 4.5-5 11-5" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>INGRÉDIENTS NATURELS</h4>
                  <p>Ingrédients naturels et ne haute de sommiers.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>RECETTE NATURELS</h4>
                  <p>Ingrédients naturels peut pour moissors naturels.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <img src="/logo.webp" alt="OIKOS Logo" className="footer-logo" />
            <p>One Planet. One Health.</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
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
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Danone Oikos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
