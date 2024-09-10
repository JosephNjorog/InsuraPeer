import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Make sure Modal can accept forms

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  // Handlers for toggling modals
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

  // Handle form inputs
  const handleInputChange = (e, setData) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit sign-in form
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', signInData);
      // Handle success (store token, redirect, etc.)
      console.log(response.data);
      closeModals();
    } catch (err) {
      setError(err.response.data.error || 'Sign-in failed');
    }
  };

  // Submit sign-up form
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', signUpData);
      // Handle success (store token, redirect, etc.)
      console.log(response.data);
      closeModals();
    } catch (err) {
      setError(err.response.data.error || 'Sign-up failed');
    }
  };

  // OAuth Sign-in with Google, Apple, Facebook
  const handleOAuthLogin = (provider) => {
    // Redirect to the backend route handling the OAuth flow
    window.location.href = `/api/auth/${provider}`;
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
            {/* Hamburger icon or X based on `isOpen` */}
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

      {/* Sign-in Modal */}
      <Modal isOpen={isSignInOpen} onClose={closeModals} title="Sign In to your account">
        <form onSubmit={handleSignInSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={signInData.email} 
            onChange={(e) => handleInputChange(e, setSignInData)} 
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={signInData.password} 
            onChange={(e) => handleInputChange(e, setSignInData)} 
            required
          />
          <button type="submit">Sign In</button>
          {error && <p>{error}</p>}
        </form>
        
        {/* OAuth Options */}
        <div className="mt-4">
          <button onClick={() => handleOAuthLogin('google')} className="oauth-btn">
            Continue with Google
          </button>
          <button onClick={() => handleOAuthLogin('facebook')} className="oauth-btn">
            Continue with Facebook
          </button>
          <button onClick={() => handleOAuthLogin('apple')} className="oauth-btn">
            Continue with Apple
          </button>
        </div>
      </Modal>

      {/* Sign-up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={closeModals} title="Create a new account">
        <form onSubmit={handleSignUpSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={signUpData.email} 
            onChange={(e) => handleInputChange(e, setSignUpData)} 
            required
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={signUpData.password} 
            onChange={(e) => handleInputChange(e, setSignUpData)} 
            required
          />
          <button type="submit">Sign Up</button>
          {error && <p>{error}</p>}
        </form>
        
        {/* OAuth Options */}
        <div className="mt-4">
          <button onClick={() => handleOAuthLogin('google')} className="oauth-btn">
            Continue with Google
          </button>
          <button onClick={() => handleOAuthLogin('facebook')} className="oauth-btn">
            Continue with Facebook
          </button>
          <button onClick={() => handleOAuthLogin('apple')} className="oauth-btn">
            Continue with Apple
          </button>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
