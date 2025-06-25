// src/pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
// import ContactForm from '../components/contact/ContactForm';
// import ContactInfo from '../components/contact/ContactInfo';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Mentone Group</title>
        <meta name="description" content="Get in touch with Mentone Group. Contact us for inquiries about our companies, products, or services." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-12 px-4"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <ContactInfo />
          <ContactForm /> */}
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;