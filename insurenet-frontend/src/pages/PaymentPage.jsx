"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PaymentPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const paymentMethods = [
    { id: 1, method: 'M-Pesa', icon: '💵' },
    { id: 2, method: 'Credit Card', icon: '💳' },
    { id: 3, method: 'Crypto Wallet', icon: '🔐' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <motion.header
        className="py-6 px-8 bg-gray-50 shadow-sm flex justify-between items-center md:px-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-bold text-3xl font-kanit">In<span className='text-custom-green'>Sure</span>Net</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-600">Groups</a></li>
            <li><a href="#" className="hover:text-blue-600">Claims</a></li>
            <li><a href="#" className="hover:text-blue-600">Profile</a></li>
          </ul>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </motion.header>

      {/* Sidebar Menu for Mobile */}
      {isMenuOpen && (
        <motion.nav
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-3/4 h-full bg-gray-100 p-6 shadow-lg z-50"
        >
          <button className="text-gray-600 mb-8" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <li><a href="#" className="block text-gray-700 text-lg hover:text-blue-600">Dashboard</a></li>
            <li><a href="#" className="block text-gray-700 text-lg hover:text-blue-600">Groups</a></li>
            <li><a href="#" className="block text-gray-700 text-lg hover:text-blue-600">Claims</a></li>
            <li><a href="#" className="block text-gray-700 text-lg hover:text-blue-600">Profile</a></li>
          </ul>
        </motion.nav>
      )}

      {/* Payment Section */}
      <main className="px-8 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Payment Form */}
          <motion.div
            className="p-8 bg-gray-100 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Make a Payment</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm text-gray-600">Amount</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Enter amount"
                  className="w-full p-3 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="payment-method" className="block text-sm text-gray-600">Payment Method</label>
                <select
                  id="payment-method"
                  className="w-full p-3 mt-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {paymentMethods.map((method) => (
                    <option key={method.id}>{method.method}</option>
                  ))}
                </select>
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pay Now
              </motion.button>
            </form>
          </motion.div>

          {/* Payment History */}
          <motion.div
            className="p-8 bg-gray-100 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Payment History</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-sm text-gray-600">March 15, 2024</span>
                <span className="text-lg">$200 - M-Pesa</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-gray-600">February 28, 2024</span>
                <span className="text-lg">$150 - Credit Card</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-gray-600">January 10, 2024</span>
                <span className="text-lg">$300 - Crypto Wallet</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </main>

      {/* Available Payment Methods */}
      <section className="px-8 py-12 bg-gray-50 md:px-12">
        <h3 className="text-xl font-semibold text-center mb-8">Available Payment Methods</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              className="p-6 bg-white rounded-lg shadow-md text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl">{method.icon}</span>
              <p className="mt-2 font-semibold">{method.method}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-6 px-8 bg-gray-800 text-white mt-12 md:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div>&copy; 2024 InSureNet</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
};

export default PaymentPage;
