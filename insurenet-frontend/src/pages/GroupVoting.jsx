import React, { useState } from 'react';

// Mock Data
const mockClaims = [
  { id: 1, claimantName: 'John Doe', amount: 500, description: 'Claim for medical expenses', threshold: 400 },
  { id: 2, claimantName: 'Jane Smith', amount: 1200, description: 'Claim for travel expenses', threshold: 1000 },
];

const GroupVotingPage = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (id, vote) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [id]: vote
    }));
  };

  const getVoteResult = (claim) => {
    // Example calculation - replace with actual voting logic
    const totalVotes = Object.values(votes).length;
    const yesVotes = Object.values(votes).filter(vote => vote === 'yes').length;
    return totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;
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
        {mockClaims.map(claim => (
          <div key={claim.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Major Claim: {claim.claimantName}</h2>
            <p><span className="font-bold">Amount:</span> ${claim.amount}</p>
            <p><span className="font-bold">Description:</span> {claim.description}</p>
            <div className="mb-4">
              <span className="font-bold">Vote Result:</span> {getVoteResult(claim).toFixed(2)}%
            </div>
            <div>
              <button
                onClick={() => handleVote(claim.id, 'yes')}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 mr-2"
              >
                Vote Yes
              </button>
              <button
                onClick={() => handleVote(claim.id, 'no')}
                className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700"
              >
                Vote No
              </button>
            </div>
          </div>
        ))}
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

export default GroupVotingPage;
