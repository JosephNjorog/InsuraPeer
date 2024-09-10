import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust based on your backend URL
});

export const getGroupDashboard = (groupId) => api.get(`/group/${groupId}/dashboard`);
export const submitClaim = (groupId, userId, amount) => api.post(`/group/${groupId}/submit-claim`, { userId, amount });
export const inviteMember = (groupId, memberEmail) => api.post(`/group/${groupId}/invite`, { groupId, memberEmail });
export const customizePlan = (groupId, coverage, premium) => api.post(`/group/${groupId}/customize-plan`, { coverage, premium });
export const viewProfitSharing = (groupId) => api.get(`/group/${groupId}/profit-sharing`);
