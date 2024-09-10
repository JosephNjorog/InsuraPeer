import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL to match your backend server address
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch group data
export const fetchGroupData = async (groupId, token) => {
  try {
    const response = await api.get(`/group/${groupId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching group data');
  }
};

// Function to invite a new member
export const inviteMember = async (email, token) => {
  try {
    const response = await api.post(
      '/group/invite',
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error('Error inviting member');
  }
};

// Other API functions can be added here

export default api;
