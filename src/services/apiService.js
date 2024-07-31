// frontend/src/services/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your backend URL
});

export const registerClient = async (userData) => {
  try {
    const response = await api.post('/user/register-client', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/user/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
