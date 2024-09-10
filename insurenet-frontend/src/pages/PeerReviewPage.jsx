import React, { useState, useEffect } from 'react';

// Mock Data
const mockClaims = [
  { id: 1, claimantName: 'John Doe', amount: 500, description: 'Claim for medical expenses', status: 'pending', comments: [] },
  { id: 2, claimantName: 'Jane Smith', amount: 1200, description: 'Claim for travel expenses', status: 'pending', comments: [] },
];

const PeerReviewPage = () => {
  const [claims, setClaims] = useState(mockClaims);

  useEffect(() => {
    // Fetch claims from API
    // setClaims(response.data);
  }, []);

  const handleReview = (id, action, comment) => {
    setClaims(prevClaims =>
      prevClaims.map(claim =>
        claim.id === id
          ? {
              ...claim,
              status: action === 'approve' ? 'approved' : 'rejected',
              comments: action === 'reject' ? [...claim.comments, comment] : claim.comments,
            }
          : claim
      )
    );
  };

  const getApprovalPercentage = (claim) => {
    // Calculate approval percentage
    const totalReviews = claims.length; // Replace with actual review count
    const approvedReviews = claims.filter(c => c.status === 'approved').length; // Replace with actual approved count
    return totalReviews > 0 ? (approvedReviews / totalReviews) * 100 : 0;
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
        {claims.map(claim => (
          <div key={claim.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Claim from {claim.claimantName}</h2>
            <p><span className="font-bold">Amount:</span> ${claim.amount}</p>
            <p><span className="font-bold">Description:</span> {claim.description}</p>
            <div className="mb-4">
              <span className="font-bold">Approval Status:</span> {claim.status}
              <div className="mt-2">
                <span className="font-bold">Approval Percentage:</span> {getApprovalPercentage(claim).toFixed(2)}%
              </div>
            </div>
            {claim.status === 'pending' && (
              <div>
                <button
                  onClick={() => handleReview(claim.id, 'approve')}
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReview(claim.id, 'reject', prompt('Enter comment:'))}
                  className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            )}
            {claim.status === 'rejected' && (
              <div className="mt-4">
                <h3 className="font-semibold">Comments:</h3>
                <ul>
                  {claim.comments.map((comment, index) => (
                    <li key={index} className="text-red-500">{comment}</li>
                  ))}
                </ul>
              </div>
            )}
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

export default PeerReviewPage;
