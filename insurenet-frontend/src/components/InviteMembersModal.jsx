import React from 'react';

const InviteMembersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleInvite = () => {
    // Invite logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Invite Members</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Addresses</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Enter email addresses separated by commas" />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600">Cancel</button>
            <button type="button" onClick={handleInvite} className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">Invite</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InviteMembersModal;