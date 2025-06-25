// Example component (src/components/ui/HeroSection.jsx)
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Mentone Group"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Mentone Group
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          A conglomerate of innovative companies spanning concrete, aluminum formwork, 
          surgical instruments, plastics and creative studios.
        </p>
        <Link
          to="/companies"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg transition-colors"
        >
          Discover Our Companies
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;