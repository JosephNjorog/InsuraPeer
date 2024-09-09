// src/components/ServicesSection.js
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Healthcare Funding',
    description: 'Transparent and efficient funding solutions for healthcare initiatives.',
    icon: '💰',
  },
  {
    title: 'Group Management',
    description: 'Manage your healthcare funding groups and track contributions easily.',
    icon: '👥',
  },
  {
    title: 'Expense Tracking',
    description: 'Keep track of expenditures and ensure funds are used effectively.',
    icon: '📊',
  },
];

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesSection = () => {
  return (
    <section className="services-section py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={serviceVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
