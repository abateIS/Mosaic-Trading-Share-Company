import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import About from '../components/About';
import BoardMembers from '../components/BoardMembers';
import HospitalSection from '../components/HospitalSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedServices />
      <About />
      <BoardMembers />
      <HospitalSection />
    </div>
  );
}

export default HomePage;
