// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import logoo from '../../assets/logoo.png'; // Adjust the path as necessary

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companies = [
    {
      id: 'mentone-concrete',
      name: 'Mentone Concrete',
      website: 'https://mentoneconcrete.com'
    },
    {
      id: 'mentone-aluform', 
      name: 'Mentone Aluform',
      website: 'https://mentonealuform.com'
    },
    {
      id: 'mentone-surgical',
      name: 'Mentone Surgical', 
      website: 'https://mentonesurgical.com'
    },
    {
      id: 'jeaplast',
      name: 'Jeaplast',
      website: 'https://jeaplast.com'
    },
    {
      id: 'oriflame-studio',
      name: 'Oriflame Studio',
      website: 'https://oriflamestudio.com'
    },
    {
      id: 'pgpawar-foundation',
      name: 'PGP Awar Foundation',
      website: 'https://pgpawarfoundation.com'
    },
    {
      id: 'job-buzzer',
      name: 'Job Buzzer',
      website: 'https://jobbuzzer.in'
    }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center">
              <img src={logoo} alt="Mentone Group" className="h-10" />
              <span className="ml-2 font-heading font-bold text-xl">Mentone Group</span>
            </Link>
            <p className="mt-4 text-gray-400">
              A dynamic conglomerate with diverse businesses spanning multiple industries, united by a commitment to excellence and innovation.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Companies</h3>
            <ul className="space-y-2">
              {companies.map((company) => (
                <li key={company.id}>
                  <a 
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                    title={`Visit ${company.name} website`}
                  >
                    <span>{company.name}</span>
                    <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-400">S.No. 99 , Off.No - 1 , Lokesh Apartment , Cts No - 6687 & 6688 , Pimpri Waghire, Yashwant Nagar, Pimpri, Pune 411018</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 text-secondary mr-3" />
                <span className="text-gray-400">+91 7410003777</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-secondary mr-3" />
                <span className="text-gray-400">info@mentonalu.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} Mentone Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;