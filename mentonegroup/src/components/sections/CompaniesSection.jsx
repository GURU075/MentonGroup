import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  Heart, 
  Recycle, 
  Users, 
  Music, 
  Briefcase,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import pgp from '../../assets/pgp.png'; 
import alu from '../../assets/alu.png';
import concreteBg from '../../assets/concrete.png'; 
import surgicalBg from '../../assets/surgical.png';
import foundationBg from '../../assets/foundation.jpg';
import jobBuzzerBg from '../../assets/job.png'; 
import musicBg from '../../assets/music.png';
import jeaBg from '../../assets/jea.png'; // Add your logo path here
import musicLogo from '../../assets/musicLogo.png'; 
import pgpLogo from '../../assets/pgp.png'; 
import jeaLogo from '../../assets/jeaLogo.png'; 
import aluLogo from '../../assets/aluLogo.png';
import jobLogo from '../../assets/jobLogo.png'; 
import surgicalLogo from '../../assets/surgicalLogoo.png';
import concreteLogo from '../../assets/concretee.png';

const CompaniesSection = ({ showAll = false, featured = true }) => {
  const companiesData = [
    {
      id: 1,
      name: "Mentone Concrete",
      subtitle: "Concrete",
      description: "Crafting the concrete spine of modern infrastructure with strength, speed, and sustainability.",
      logo: concreteLogo,
      website: "mentoneconcrete.com",
      industry: "Construction",
      gradient: "from-gray-600 via-gray-700 to-gray-900",
      bgPattern: "concrete",
      color: "text-gray-800"
    },
    {
      id: 2,
      name: "Mentone ALUFORM",
      subtitle: "Formwork Revolution",
      description: "Leading the formwork revolution with futuristic aluminium shuttering systems — enabling rapid, high-rise dreams.",
      logo: aluLogo, // Add your logo path here
      website: "mentonealuform.com",
      industry: "Construction Technology",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
      bgPattern: "alu",
      color: "text-blue-800"
    },
    {
      id: 3,
      name: "Mentone Surgical",
      subtitle: "Precision Healthcare",
      description: "Precision-crafted surgical and medical solutions that support doctors in saving lives — because every heartbeat matters.",
      logo: surgicalLogo,
      website: "mentonesurgical.com",
      industry: "Healthcare",
      gradient: "from-red-500 via-pink-500 to-rose-600",
      bgPattern: "medical",
      color: "text-red-800"
    },
    {
      id: 4,
      name: "JEA PLAST",
      subtitle: "Plastic Engineering",
      description: "Innovative plastic engineering for a smarter tomorrow — designed with accuracy, delivered with excellence.",
      logo: jeaLogo, // Add your logo path here
      website: "jeaplast.com",
      industry: "Manufacturing",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgPattern: "industrial",
      color: "text-green-800"
    },
    {
      id: 5,
      name: "PG Pawar Social Foundation",
      subtitle: "Empowering Lives",
      description: "Our soul. Committed to touching lives through free health camps, quality education, and empowerment for all.",
      logo: pgpLogo, // Add your logo path here
      website: "pgpawarfoundation.com",
      industry: "Social Impact",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgPattern: "community",
      color: "text-orange-800"
    },
    {
      id: 6,
      name: "Oriflame Studio",
      subtitle: "Sonic Playground",
      description: "A sonic playground where music, stories, and creativity come alive — giving voice to every emotion.",
      logo: musicLogo, // Add your logo path here
      website: "oriflamestudio.com",
      industry: "Creative Services",
      gradient: "from-purple-600 via-violet-600 to-indigo-700",
      bgPattern: "sound",
      color: "text-purple-800"
    },
    {
      id: 7,
      name: "IMPULSOLAB LLP",
      subtitle: "Job Buzzer",
      description: "The pulse of opportunity. A next-gen recruitment platform connecting skills to success, dreams to destinations.",
      logo: jobLogo,
      website: "jobbuzzer.in",
      industry: "Technology",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      bgPattern: "tech",
      color: "text-cyan-800"
    }
  ];

  const getBackgroundPattern = (pattern) => {
    const patterns = {
      concrete: `url(${concreteBg})`,
      blueprint: `url(${alu})`,
      alu: `url(${alu})`,
      medical: `url(${surgicalBg})`,
      industrial:`url(${jeaBg})`,
      community: `url(${foundationBg})`,
      sound: `url(${musicBg})`,
      tech:  `url(${jobBuzzerBg})`,
    };
    return patterns[pattern] || patterns.concrete;
  };

  // Show all companies by default - you can modify this logic as needed
  const filteredCompanies = showAll 
    ? companiesData 
    : companiesData; // Show all companies since none have 'featured' property defined

  return (
    <section className="section bg-gray-50 pt-4">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Universe of Possibilities
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            From transforming skylines with cutting-edge construction technologies to uplifting communities through healthcare, education, and employment — Mentone is where vision meets action.
          </p>
          <div className="text-2xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Every vertical has a purpose. Every idea has a mission. Every action creates impact.
            </span>
          </div>
        </motion.div>
        
        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCompanies.map((company, index) => {
            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative  overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background with gradient and pattern */}
                <div 
                  className={`absolute brightness-75 inset-0 bg-gradient-to-br ${company.gradient} opacity-90`}
                  style={{
                    backgroundImage: getBackgroundPattern(company.bgPattern),
                     backgroundSize: 'cover',
                      backgroundPosition: 'center'
                  }}
                />
                
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between min-h-[320px]">
                  {/* Industry Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                      {company.industry}
                    </span>
                  </div>
                  
                  {/* Logo */}
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-1">
                      <img 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain abc"
                        // onError={(e) => {
                        //   // Fallback to a default icon if image fails to load
                        //   e.target.style.display = 'none';
                        // }}
                      />
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <p className="text-sm text-white/80 font-medium mb-3">
                      {company.subtitle}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed mb-4">
                      {company.description}
                    </p>
                  </div>
                  
                  {/* Website Link */}
                  <div className="mt-auto">
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:transform group-hover:scale-105"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Hover effect arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Building not just structures or systems — but a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">better, brighter future</span> for all.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;