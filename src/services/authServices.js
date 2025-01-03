import api from '../api';

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/api/login', { email, password });
    const { token, user } = response.data;

    // Store token and user info in localStorage
    // localStorage.setItem('token', token);
    // localStorage.setItem('user', JSON.stringify(user));

    // Return token and user
    return { token, user };
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
};

export const registerUser = async (data) => {
  try {
    const response = await api.post('/api/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Registration failed.');
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await api.post('/api/forget-password', { email });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed.');
  }
}


export const fetchUserEmail = async () => {
    try {
        const response = await api.get("api/email", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log("Fetch user email: ", response.data);
        return response.data.email; // Return email from the response
    } catch (error) {
        throw new Error("Failed to fetch user email!");
    }
};

