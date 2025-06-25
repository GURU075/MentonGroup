import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { companiesData } from '../../utils/data';
import logoo from '../../assets/logoo.png'; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Company website mapping
  const companyWebsites = {
    'mentone-concrete': 'https://mentoneconcrete.com',
    'mentone-aluform': 'https://mentonealuform.com', 
    'mentone-surgical': 'https://mentonesurgical.com',
    'jeaplast': 'https://jeaplast.com',
    'oriflame-studio': 'https://oriflamestudio.com',
    'pgpawar-foundation': 'https://pgpawarfoundation.com',
    'job-buzzer': 'https://jobbuzzer.in'
  };

  const handleCompanyClick = (companyId) => {
    const website = companyWebsites[companyId];
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };

  const isHomePage = location.pathname === '/';
  const featuredCompanies = companiesData.filter(company => company.featured);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoo} alt="Mentone Group" className="h-12 md:h-12" />
          <span className={`ml-2 font-heading font-bold text-xl md:text-2xl ${
            scrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}>
            Mentone Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/'
                ? 'text-secondary'
                : scrolled || !isHomePage
                ? 'text-dark hover:text-primary'
                : 'text-white hover:text-secondary'
            }`}
          >
            Home
          </Link>
          
          {/* Companies dropdown */}
          <div className="relative group">
            <Link
              to="/company"
              className={`font-medium transition-colors duration-300 flex items-center ${
                location.pathname.includes('/company')
                  ? 'text-secondary'
                  : scrolled || !isHomePage
                  ? 'text-dark hover:text-primary'
                  : 'text-dark hover:text-secondary'
              }`}
            >
              Our Companies
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 pt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-md shadow-lg p-3 border border-gray-100">
                {companiesData.map(company => (
                  <button
                    key={company.id}
                    onClick={() => handleCompanyClick(company.id)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  >
                    {company.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 ${
              location.pathname === '/contact'
                ? 'text-secondary'
                : scrolled || !isHomePage
                ? 'text-dark hover:text-primary'
                : 'text-dark hover:text-secondary'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-20"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <FaTimes className={`w-6 h-6 ${scrolled || !isHomePage ? 'text-dark' : 'text-white'}`} />
          ) : (
            <FaBars className={`w-6 h-6 ${scrolled || !isHomePage ? 'text-dark' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-dark bg-opacity-95 z-10 transform transition-transform duration-300 lg:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className="text-white hover:text-secondary my-3 text-xl font-medium"
            >
              Home
            </Link>
            
            <Link
              to="/company"
              className="text-white hover:text-secondary my-3 text-xl font-medium"
            >
              Our Companies
            </Link>
            
            {/* Mobile Company Links */}
            <div className="mt-2 mb-4">
              <p className="text-gray-300 text-sm text-center mb-2">Visit Our Companies:</p>
              {companiesData.map(company => (
                <button
                  key={company.id}
                  onClick={() => handleCompanyClick(company.id)}
                  className="block text-white hover:text-secondary my-2 text-lg font-medium transition-colors duration-200"
                >
                  {company.name}
                </button>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="text-white hover:text-secondary my-3 text-xl font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;