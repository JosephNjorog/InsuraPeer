import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GroupDashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    // Show a profile modal or navigate to the profile page
    alert("Profile functionality not yet implemented.");
  };

  const handleSubmitClaim = () => {
    handleNavigation('/submit-claims');
  };

  const handleInviteMembers = () => {
    // Show an invite members modal or navigate to the invite members page
    alert("Invite members functionality not yet implemented.");
  };

  const handleCustomizePlan = () => {
    handleNavigation('/insurance-plan-customization');
  };

  const handleGroupManagement = () => {
    alert("Group Management functionality not yet implemented.");
  };

  const handlePremiumTracking = () => {
    alert("Premium Tracking functionality not yet implemented.");
  };

  const handleLogout = () => {
    // Placeholder for actual logout logic
    // Clear user session or token here

    // Redirect to the homepage
    navigate('/');
  };

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
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex-shrink-0 p-6 hidden md:block">
        <div className="text-lg font-bold mb-6">InSureNet</div>
        <nav>
          <ul className="space-y-4">
            <li><a href="#" onClick={() => handleNavigation('/submit-claims')} className="block hover:bg-gray-700 p-2 rounded">Claims</a></li>
            <li><a href="#" onClick={() => handleNavigation('/payment')} className="block hover:bg-gray-700 p-2 rounded">Payment</a></li>
            <li><a href="#" onClick={() => handleNavigation('/settings')} className="block hover:bg-gray-700 p-2 rounded">Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="bg-black text-white p-4 flex items-center justify-between mb-6">
          <div className="text-lg font-bold">Dashboard</div>
          <div className="relative">
            <button onClick={handleLogout} className="ml-4 flex items-center space-x-2 text-white hover:text-gray-300">
              <span>Logout</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H3" />
              </svg>
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <button onClick={handleSubmitClaim} className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">Submit Claim</button>
              <button onClick={handleInviteMembers} className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition">Invite Members</button>
              <button onClick={handleCustomizePlan} className="w-full bg-yellow-600 text-white p-2 rounded-lg hover:bg-yellow-700 transition">Customize Plan</button>
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3"
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
        </main>

        <footer className="bg-black text-white p-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">&copy; 2024 InSureNet</div>
            <nav>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GroupDashboard;