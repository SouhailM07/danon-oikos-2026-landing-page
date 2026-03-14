import React from 'react';
import './App.css';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import FlavorsSection from './components/organisms/FlavorsSection';
import StorySection from './components/organisms/StorySection';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FlavorsSection />
      <StorySection />
      <Footer />
    </div>
  );
}

export default App;
