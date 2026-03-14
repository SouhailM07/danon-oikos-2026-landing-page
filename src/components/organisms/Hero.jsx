import React from 'react';
import strawberryImg from '../../assets/strawberry.png';
import Button from '../atoms/Button';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-accent"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-scale">
            <span className="glow-text">OIKOS</span>
            <br />
            <span className="subtitle">Mindful Indulgence</span>
          </h1>
          <p className="hero-description fade-in-scale delay-200">
            Experience the thick, creamy, and "forkable" texture of our premium Greek yogurt. Made with mindful ingredients for a bold flavor adventure.
          </p>
          <div className="hero-cta fade-in-scale delay-400">
            <Button>Explore Flavors</Button>
          </div>
        </div>
        <div className="hero-visual fade-in-scale delay-300">
          <img src={strawberryImg} alt="Oikos Strawberry" className="hero-img float-anim" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
