import axios from 'axios';

export const processPayment = async (paymentData) => {
    return axios.post('/api/payment/process', paymentData);
};

export const addPaymentMethod = async (paymentMethodData) => {
    return axios.post('/api/payment/add-method', paymentMethodData);
};

export const updatePaymentMethod = async (id, paymentMethodData) => {
    return axios.put(`/api/payment/update-method/${id}`, paymentMethodData);
};

export const removePaymentMethod = async (id) => {
    return axios.delete(`/api/payment/remove-method/${id}`);
};
