import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

const GroupDashboard = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Contributions',
        data: [100, 200, 150, 300, 250],
        borderColor: '#1f2937',
        backgroundColor: 'rgba(31, 41, 55, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-black text-white p-4 flex items-center justify-between">
        <div className="text-lg font-bold">InSureNet</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Group Management</a></li>
            <li><a href="#" className="hover:underline">Premium Tracking</a></li>
            <li><a href="#" className="hover:underline">Claims</a></li>
          </ul>
        </nav>
        <div className="relative">
          <button className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span>Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16m-7 5h7" />
            </svg>
          </button>
        </div>
      </header>

      <main className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Group Summary */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Group Summary</h2>
            <div className="space-y-4">
              <p><span className="font-bold">Total Contributions:</span> $5000</p>
              <p><span className="font-bold">Total Claims:</span> 12</p>
              <p><span className="font-bold">Current Plan:</span> Basic Coverage</p>
            </div>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <ul className="space-y-2">
              <li>Claim #123 approved</li>
              <li>New member added: John Doe</li>
              <li>Plan updated: Coverage increased</li>
            </ul>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Submit Claim</button>
              <button className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">Invite Members</button>
              <button className="w-full bg-yellow-600 text-white p-2 rounded-lg hover:bg-yellow-700">Customize Plan</button>
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg col-span-2 md:col-span-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Contribution Overview</h2>
            <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </motion.div>

          {/* Plan Overview */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Plan Overview</h2>
            <p><span className="font-bold">Plan Type:</span> Premium Coverage</p>
            <p><span className="font-bold">Coverage Amount:</span> $100,000</p>
            <p><span className="font-bold">Benefits:</span> Comprehensive coverage including health, accident, and property.</p>
          </motion.div>
        </div>
      </main>

      <footer className="bg-black text-white p-4 mt-6">
        <div className="flex justify-between items-center">
          <div>&copy; 2024 InSureNet</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default GroupDashboard;
