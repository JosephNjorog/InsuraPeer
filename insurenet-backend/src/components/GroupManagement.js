import React, { useState } from 'react';
import { inviteMember } from '../services/api';

const GroupManagement = ({ groupId }) => {
  const [email, setEmail] = useState('');

  const handleInvite = async () => {
    try {
      await inviteMember(groupId, email);
      alert('Member invited successfully!');
    } catch (error) {
      alert('Error inviting member.');
    }
  };

  return (
    <div className="container">
      <h1>Group Management</h1>
      <div className="form-group">
        <label htmlFor="email">Invite Member by Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleInvite} className="btn btn-primary mt-3">Invite Member</button>
      </div>
    </div>
  );
};

export default GroupManagement;
