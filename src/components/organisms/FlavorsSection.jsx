import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import FlavorCard from '../molecules/FlavorCard';
import strawberryImg from '../../assets/strawberry.png';
import blueberryImg from '../../assets/blueberry.png';
import peachImg from '../../assets/peach.png';

const FlavorsSection = () => {
  const flavors = [
    { name: 'Strawberry', img: strawberryImg, color: 'var(--accent-strawberry)' },
    { name: 'Blueberry', img: blueberryImg, color: 'var(--accent-blueberry)' },
    { name: 'Peach', img: peachImg, color: 'var(--accent-peach)' }
  ];

  return (
    <section id="flavors" className="flavors">
      <div className="container">
        <SectionTitle>Pure Flavors</SectionTitle>
        <div className="flavor-grid">
          {flavors.map((flavor, index) => (
            <FlavorCard key={index} {...flavor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;
