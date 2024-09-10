import React, { useEffect, useState } from 'react';
import { getGroupDashboard } from '../services/api';

const Dashboard = ({ groupId }) => {
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await getGroupDashboard(groupId);
        setGroupData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    }
    fetchDashboard();
  }, [groupId]);

  if (!groupData) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{groupData?.groupName || 'N/A'} Dashboard</h1>
      <h3>Group Plan</h3>
      <p>Coverage: {groupData?.plan?.coverage || 'N/A'}</p>
      <p>Premium: {groupData?.plan?.premium || 'N/A'}</p>
      <p>Balance: {groupData?.balance || 'N/A'}</p>

      <h3>Members</h3>
      <ul>
        {groupData?.members?.length > 0 ? (
          groupData.members.map((member) => (
            <li key={member._id}>{member.name}</li>
          ))
        ) : (
          <li>No members available</li>
        )}
      </ul>

      <h3>Claims</h3>
      <ul>
        {groupData?.claims?.length > 0 ? (
          groupData.claims.map((claim) => (
            <li key={claim._id}>
              {claim.user.name} - {claim.amount} ({claim.status})
            </li>
          ))
        ) : (
          <li>No claims available</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
