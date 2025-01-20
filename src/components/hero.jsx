// src/components/hero.jsx
import React, { useState, useEffect } from 'react';
import Banner from '../assets/bubble_gumm.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'auto',
        backgroundPosition: `${scrollY * 0.1}px ${scrollY * 0.1}px`,
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-7xl">
          DJ [Name]
        </h1>
        <p className="text-lg text-gray-200 md:text-xl lg:text-2xl">
          [Tagline or Bio]
        </p>
      </div>
    </div>
  );
};

export default Hero;