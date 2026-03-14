import React from 'react';
import './App.css';
import strawberryImg from './assets/strawberry.png';
import blueberryImg from './assets/blueberry.png';
import peachImg from './assets/peach.png';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar glass-effect fade-in-scale">
        <div className="container nav-container">
          <div className="logo glow-text">OIKOS</div>
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
                  <img src={flavor.img} alt={flavor.name} />
                </div>
                <h3>{flavor.name}</h3>
                <button className="card-btn">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <h2 className="glow-text">OIKOS</h2>
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
            {/* Social icons placeholder */}
            <div className="social-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
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
