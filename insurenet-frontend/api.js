import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const fetchInsurancePoolDataBase = async () => {
    const response = await api.get('/blockchain/base/insurancePool/balance');
    return response.data;
};

export const fetchInsurancePoolDataOptimism = async () => {
    const response = await api.get('/blockchain/optimism/insurancePool/balance');
    return response.data;
};

export const submitClaimBase = async (claimData) => {
    const response = await api.post('/blockchain/base/claimsManagement/submitClaim', claimData);
    return response.data;
};

export const submitClaimOptimism = async (claimData) => {
    const response = await api.post('/blockchain/optimism/claimsManagement/submitClaim', claimData);
    return response.data;
};

export const fetchClaimDetailsBase = async (claimId) => {
    const response = await api.get(`/blockchain/base/claimsManagement/claimDetails/${claimId}`);
    return response.data;
};

export const fetchClaimDetailsOptimism = async (claimId) => {
    const response = await api.get(`/blockchain/optimism/claimsManagement/claimDetails/${claimId}`);
    return response.data;
};

export const distributeProfitsBase = async () => {
    const response = await api.post('/blockchain/base/profitSharing/distribute');
    return response.data;
};

export const distributeProfitsOptimism = async () => {
    const response = await api.post('/blockchain/optimism/profitSharing/distribute');
    return response.data;
};

export const claimShareBase = async () => {
    const response = await api.post('/blockchain/base/profitSharing/claimShare');
    return response.data;
};

export const claimShareOptimism = async () => {
    const response = await api.post('/blockchain/optimism/profitSharing/claimShare');
    return response.data;
};

// Additional API functions for other blockchain interactions...