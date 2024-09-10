import React, { useEffect, useState } from "react"

const GroupManagementPage = () => {
import React, { useEffect, useState } from "react";
import axios from "axios";

const GroupManagementPage = () => {
  const [groupData, setGroupData] = useState({
    poolBalance: 150000,
    members: [
      { id: 1, name: "Samia Aziz", contribution: 500 },
      { id: 2, name: "Fabian Owuor", contribution: 60000 },
      { id: 3, name: "Getrude Wangare", contribution: 40000 },
    ],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Get auth token
        const groupId = "YOUR_GROUP_ID"; // Replace with actual group ID
        const response = await axios.get(`/api/group/${groupId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setGroupData(response.data);
      } catch (error) {
        setError("Error fetching group data.");
      }
    };

    fetchGroupData();
  }, []);

  const handleInviteMember = (email) => {
    console.log(`Invite sent to: ${email}`);
  };
'}'
  const handleEditPlanDetails = () => {
    console.log("Plan details edited!");
  };

  if (!groupData) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Group Management</h1>
      <h2>Pool Balance: {groupData.poolBalance}</h2>
      <h2>Member Contributions:</h2>
      <ul>
        {groupData.members.map((member) => (
          <li key={member.id}>
            {member.name}: {member.contribution}
          </li>
        ))}
      </ul>

      <h3>Edit Plan Details</h3>
      <button onClick={handleEditPlanDetails}>Edit Plan</button>

      <h3>Invite New Member</h3>
      <input type="email" placeholder="Member Email" />
      <button onClick={() => handleInviteMember("newmember@example.com")}>
        Invite Member
      </button>
    </div>
  );
};

export default GroupManagementPage;
