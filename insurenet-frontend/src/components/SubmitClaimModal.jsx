import React from 'react';
import { useHistory } from 'react-router-dom';

const SubmitClaimModal = ({ isOpen, onClose }) => {
  const history = useHistory();

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Submit claim logic here
    onClose();
    history.push('/claims');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Submit Claim</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Claim Details</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600">Cancel</button>
            <button type="button" onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitClaimModal;