import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import FeatureItem from '../molecules/FeatureItem';
import yogurtSwirl from '../../assets/yogurt_swirl.png';

const StorySection = () => {
  return (
    <section id="story" className="story fade-in-scale">
      <div className="container story-container">
        <div className="story-header horizontal-line">
          <SectionTitle>Scroll for Story</SectionTitle>
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
            <FeatureItem 
              title="HAUTE PROTÉINE" 
              description="Haute protéines yogurt, protéine est comme." 
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 7.5V11a2.5 2.5 0 0 1-5 0V7.5a2.5 2.5 0 1 1 5 0z" />
                  <path d="M18 7.5V11a2.5 2.5 0 1 0 5 0V7.5a2.5 2.5 0 1 0-5 0z" />
                  <path d="M6 9.25h12v1.5H6z" />
                  <path d="M6.5 6.5h11M6.5 12h11" />
                </svg>
              )}
            />
            <FeatureItem 
              title="RECETTE GRECQUE" 
              description="Recette driven de recette grecques et riecque." 
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 21h10a2 2 0 0 0 2-2V7H5v12a2 2 0 0 0 2 2z" />
                  <path d="M5 7c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4" />
                  <path d="M19 11h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                </svg>
              )}
            />
            <FeatureItem 
              title="INGRÉDIENTS NATURELS" 
              description="Ingrédients naturels et ne haute de sommiers." 
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.85 11a7 7 0 0 1-9.85 7z" />
                  <path d="M2 22c1.25-2.5 4.5-5 11-5" />
                </svg>
              )}
            />
            <FeatureItem 
              title="RECETTE NATURELS" 
              description="Ingrédients naturels peut pour moissors naturels." 
              icon={(
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
                </svg>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
