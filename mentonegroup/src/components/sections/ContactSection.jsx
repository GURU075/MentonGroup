// src/components/sections/ContactSection.jsx
import { motion } from 'framer-motion';
import ContactForm from '../ui/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactSection = ({ companyId = null }) => {
  return (
    <section className="section bg-gray-100 pt-3">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our companies or services? We're here to help.
            Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm companyId={companyId} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      S.No. 99 , Off.No - 1 , Lokesh Apartment, Cts No - 6687 & 6688 , Pimpri Waghire, Yashwant Nagar, Pimpri, Pune 411018
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 7410003777</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@mentonalu.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">
                      10AM- 5PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Connect With Us</h4>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.203296410351!2d73.8224709!3d18.640323499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b86b13b3ad53%3A0x9e96aa5af5122854!2sMENTONE%20CONCRETE%20PVT.%20LTD!5e1!3m2!1sen!2sin!4v1750771900160!5m2!1sen!2sin"
                  width="100%" 
                  height="200" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;