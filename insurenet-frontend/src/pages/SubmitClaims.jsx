import React, { useState } from 'react';

const ClaimsSubmissionForm = () => {
  const [claimData, setClaimData] = useState({
    claimantName: '',
    claimAmount: '',
    claimDescription: '',
    claimDate: '',
    documents: []
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setClaimData((prevData) => ({
      ...prevData,
      documents: Array.from(e.target.files)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Simulate a successful form submission
      console.log('Submitted data:', claimData);

      // Simulate clearing the form and showing a success message
      setSuccess('Claim submitted successfully!');
      setError('');
      setClaimData({
        claimantName: '',
        claimAmount: '',
        claimDescription: '',
        claimDate: '',
        documents: []
      });
    } catch (err) {
      setError('Failed to submit claim.');
      setSuccess('');
    }
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
      <main className="mt-8 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Submit a Claim</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Claimant Name:</label>
              <input
                type="text"
                name="claimantName"
                value={claimData.claimantName}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Claim Amount:</label>
              <input
                type="number"
                name="claimAmount"
                value={claimData.claimAmount}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Description:</label>
              <textarea
                name="claimDescription"
                value={claimData.claimDescription}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Claim Date:</label>
              <input
                type="date"
                name="claimDate"
                value={claimData.claimDate}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Upload Documents:</label>
              <input
                type="file"
                name="documents"
                multiple
                onChange={handleFileChange}
                className="block w-full text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Claim
            </button>
          </form>
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

export default ClaimsSubmissionForm;
