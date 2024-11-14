import api from '../api';

export const createPackage = async (name, amount, items, description) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('amount', amount);
        formData.append('items', items);
        formData.append('description', description);

        const response = await api.post('/package/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        
        return response.data;
    } catch (error) {
        throw new Error('Package Creation failed!');
    }
};

export const fetchAllPackages = async () => {
    try {
        const response = await api.get('/package/get-all', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch packages!');
    }
};

export const fetchMyPackages = async () => {
    try {
        const response = await api.get('/blog/my-packages', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch packages!');
    }
};

export const fetchPackageById = async (id) => {
    try {
        const response = await api.get(`/package/package/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch package!');
    }
};

export const updatePackage = async (id, updatedPackage) => {
    try {
        const formData = new FormData();

        // Append the necessary fields to FormData, even if there's no image
        formData.append('name', updatedPackage.name);
        formData.append('amount', updatedPackage.amount);
        formData.append('title', updatedPackage.title);
        formData.append('description', updatedPackage.description);

        if (image) {
            formData.append('img', image); // Append image if provided
        }

        // Send FormData for both cases, ensuring the backend can parse it
        const response = await api.put(`/package/package/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });

        return response.data;  // Return the updated blog data
    } catch (error) {
        throw new Error('Failed to update package!');
    }
};

// Delete a blog by ID
export const deletePackage = async (id) => {
    try {
        const response = await api.delete(`/package/package/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,  // Add token from localStorage
            }
        });
        return response.data;  // Return the actual API response (if available)
    } catch (error) {
        // Include the error message from the server if available
        throw new Error(error.response?.data?.message || 'Failed to delete blog!');
    }
};
