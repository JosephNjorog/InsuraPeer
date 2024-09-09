import React, { useState } from 'react';
import Modal from './Modal'; // Make sure to import the Modal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSignInModal = () => {
    setIsSignInOpen(!isSignInOpen);
    setIsSignUpOpen(false);
  };

  const toggleSignUpModal = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsSignInOpen(false);
  };

  const closeModals = () => {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className='text-4xl font-extrabold font-kanit'>
            In<span className='text-custom-green'>Sure</span>Net
          </h1>
        </div>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex space-x-10">
          <a href="/" className="text-gray-800 hover:text-custom-green">Home</a>
          <a href="#about" className="text-gray-800 hover:text-custom-green">About Us</a>
          <a href="#services" className="text-gray-800 hover:text-custom-green">Services</a>
          <a href="#contact" className="text-gray-800 hover:text-custom-green">Contact</a>
        </div>

        {/* Right Side Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <button onClick={toggleSignInModal} className="text-gray-800 hover:text-custom-green">Sign In</button>
          <button onClick={toggleSignUpModal} className="bg-custom-green text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="/" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Home</a>
          <a href="#about" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">About Us</a>
          <a href="#services" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Services</a>
          <a href="#contact" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">Contact</a>
          <button onClick={toggleSignInModal} className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100">Sign In</button>
          <button onClick={toggleSignUpModal} className="block w-full text-left py-2 px-4 bg-custom-green text-white hover:bg-green-600">Sign Up</button>
        </div>
      )}

      {/* Modals */}
      <Modal isOpen={isSignInOpen} onClose={closeModals} title="Sign In to your account" />
      <Modal isOpen={isSignUpOpen} onClose={closeModals} title="Create a new account" />
    </nav>
  );
};

export default Navbar;
