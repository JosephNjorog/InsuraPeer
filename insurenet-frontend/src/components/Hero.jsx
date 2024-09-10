import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="text-center text-white px-6 py-4">
        <h1 className="text-5xl font-bold mb-4">Empowering Community Insurance</h1>
        <p className="text-xl mb-6">Innovative peer-to-peer insurance tailored for your community.</p>
        <button 
          className="bg-white text-custom-green px-6 py-3 rounded-3xl hover:scale-105 transition-transform"
          onClick={openModal} // Open modal on button click
        >
          Get Started
        </button>
      </div>

      {/* Modal Component with Sign Up Form */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create a new account" />
    </section>
  );
};

export default Hero;