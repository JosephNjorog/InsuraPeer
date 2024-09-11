import React, { useState } from 'react';

// Mock Data for Initial Plan
const initialPlan = {
  healthCoverage: 5000,
  cropInsurance: 3000,
  assetsInsurance: 2000,
  premium: 10000,
};

const GroupInsurancePlanCustomization = () => {
  const [plan, setPlan] = useState(initialPlan);
  const [voteTriggered, setVoteTriggered] = useState(false);

  const handleCoverageChange = (type, value) => {
    const newPlan = {
      ...plan,
      [type]: value,
      premium: value + plan.cropInsurance + plan.assetsInsurance,
    };

    if (type === 'cropInsurance') {
      newPlan.premium = plan.healthCoverage + value + plan.assetsInsurance;
    }

    if (type === 'assetsInsurance') {
      newPlan.premium = plan.healthCoverage + plan.cropInsurance + value;
    }

    setPlan(newPlan);
  };

  const triggerVoting = () => {
    setVoteTriggered(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-black text-white p-4 flex items-center justify-between">
        <div className="text-lg font-bold">InSureNet</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Dashboard</a></li>
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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Plan Customization</h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Health Coverage: ${plan.healthCoverage}</h3>
            <input
              type="range"
              min="1000"
              max="10000"
              value={plan.healthCoverage}
              onChange={(e) => handleCoverageChange('healthCoverage', Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Crop Insurance: ${plan.cropInsurance}</h3>
            <input
              type="range"
              min="1000"
              max="10000"
              value={plan.cropInsurance}
              onChange={(e) => handleCoverageChange('cropInsurance', Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium">Assets Insurance: ${plan.assetsInsurance}</h3>
            <input
              type="range"
              min="1000"
              max="10000"
              value={plan.assetsInsurance}
              onChange={(e) => handleCoverageChange('assetsInsurance', Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="mt-4 mb-6">
            <h2 className="text-lg font-semibold">Total Premium: ${plan.premium}</h2>
            <p className="text-sm text-gray-600">Adjust the sliders to see how the premium changes.</p>
          </div>

          <button
            onClick={triggerVoting}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Submit Plan for Voting
          </button>
        </div>

        {voteTriggered && (
          <div className="mt-8 bg-green-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Voting has been triggered!</h2>
            <p className="text-gray-600">Group members can now vote on the proposed changes.</p>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Live Plan Preview</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <h3 className="text-lg font-medium">Plan Breakdown</h3>
            <ul className="mt-2">
              <li className="text-gray-600">Health Coverage: ${plan.healthCoverage}</li>
              <li className="text-gray-600">Crop Insurance: ${plan.cropInsurance}</li>
              <li className="text-gray-600">Assets Insurance: ${plan.assetsInsurance}</li>
              <li className="text-gray-800 font-bold mt-2">Total Premium: ${plan.premium}</li>
            </ul>
          </div>
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

export default GroupInsurancePlanCustomization;