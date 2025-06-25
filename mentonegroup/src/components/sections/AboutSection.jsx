// src/components/sections/AboutSection.jsx
import { motion } from 'framer-motion';
import { teamData } from '../../utils/data';
import { useState, useEffect } from 'react';
import { Building2, Heart, Users, Zap, ArrowRight, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValueCard, setActiveValueCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   const values = [
    { 
      icon: Building2, 
      text: "We Build", 
      color: "text-blue-600",
      gradient: "from-blue-500 to-blue-700"
    },
    { 
      icon: Heart, 
      text: "We Heal", 
      color: "text-red-600",
      gradient: "from-red-500 to-pink-600"
    },
    { 
      icon: Users, 
      text: "We Serve", 
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-600"
    },
    { 
      icon: Zap, 
      text: "We Connect", 
      color: "text-purple-600",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

    const handleRedirect = () => {
    window.location.href = '/company';
  };

  return (
    <section className="section pt-0">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 overflow-hidden">
        <div className="container mx-auto px-6 py-20 pt-18">
          <div className="max-w-4xl">
            {/* Welcome Text */}
            <div 
              className={`mb-8 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-blue-300 text-lg font-medium mb-2">Welcome to</p>
            </div>

            {/* Company Name */}
            <div 
              className={`mb-8 transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Mentone Group
              </h1>
            </div>

            {/* Main Headline */}
            <div 
              className={`mb-8 transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-light text-white mb-8 leading-tight">
                Building the Future.
                <br />
                <span className="text-blue-300">Enriching Lives.</span>
              </h2>
            </div>

            {/* Description */}
            <div 
              className={`mb-12 transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <p className="text-xl md:text-1xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
                We're not just a business — we're a force for progress. From soaring skyscrapers to healing hands, 
                from plastic engineering to creative expression, we turn bold ideas into real-world impact.
              </p>
            </div>

            {/* Key Messages */}
            <div 
              className={`mb-12 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-2xl shadow-lg">
                  <p className="text-white font-bold text-lg md:text-xl">
                    7 Verticals. 1 Purpose. Infinite Possibilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition Cards */}
            <div 
              className={`mb-16 transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                      onMouseEnter={() => setActiveValueCard(index)}
                      onMouseLeave={() => setActiveValueCard(null)}
                    >
                      <div className="text-center">
                        <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white font-semibold text-sm">
                          {value.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div 
              className={`mb-32 md:mb-20 transform transition-all duration-1000 delay-1000 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}
            >
              <button onClick={handleRedirect} className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center gap-3">
                Discover Our Universe of Companies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto  px-6 py-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
              <div className="text-white/80">
                <p className="text-sm">A conglomerate of innovative companies spanning</p>
                <p className="text-sm font-medium">concrete, aluminum formwork, surgical instruments, plastics and creative studios.</p>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-white/70">Verticals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-sm text-white/70">Purpose</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-white/70">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Separate from hero */}
      <div className="bg-light py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Our Vision</h3>
              <div className="text-gray-700 mb-4 space-y-4">
                <p className="text-sm sm:text-base">
                  To inspire and shape a world where innovation fuels growth, compassion drives action, and every person has the power to rise.
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent leading-tight tracking-wide">
                  One group. Infinite possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-lg order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/about-building.jpg"
                alt="Mentone Group Headquarters"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <div className="mb-16 bg-gradient-to-br from-gray-50 to-white py-16 px-8 rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Our Leadership
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the visionary minds driving innovation and shaping the future of our organization
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamData.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 z-20">
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: hoveredCard === index ? 0.95 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {member.bio}
                      </p>
                      
                      {/* Sub Bio */}
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 italic border-l-2 border-blue-200 pl-3 bg-blue-50/30 py-2 rounded-r-lg">
                        {member.subBio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200 transition-all duration-300 group-hover:shadow-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Hover Effect - Floating Icon */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredCard === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-lg text-gray-600 mb-6">
                Ready to work with industry leaders who drive real results?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Get In Touch
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">35+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">7</h3>
              <p className="text-gray-600">Companies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Employees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-primary mb-2">8+</h3>
              <p className="text-gray-600">Cities</p>
              </motion.div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default AboutSection;