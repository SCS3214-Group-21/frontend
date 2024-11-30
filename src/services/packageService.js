import api from '../api';

export const createPackage = async (name, amount, items, description, image) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('amount', amount);
        formData.append('items', JSON.stringify(items)); // Serialize items
        formData.append('description', description);
        formData.append('img', image);

        // Log the FormData entries
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        const response = await api.post('/package/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });

        return response.data;
    } catch (error) {
        console.error('Package creation failed:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Package creation failed!');
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
        const token = localStorage.getItem('token');
        console.log('Authorization token:', token);  // Debugging token
        
        const response = await api.get('/package/my-packages', {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Fetched packages:', response.data); // Log the response
        return response.data;
    } catch (error) {
        console.error('Error fetching packages:', error?.response || error);  // Log detailed error
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
        console.log('Fetched package:', response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch package!');
    }
};

export const updatePackage = async (id, updatedPackage, image) => {
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

        return response.data;  // Return the updated package data
    } catch (error) {
        throw new Error('Failed to update package!');
    }
};

// Delete a package by ID
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
        throw new Error(error.response?.data?.message || 'Failed to delete package!');
    }
};

export const ChangeStatus = async (id) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found in localStorage.');

        const response = await api.put(
            `/package/package-status/${id}`, 
            {}, // Pass an empty object if no payload is required
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Correctly include the Authorization header
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error toggling package status:', error.response?.data || error.message);
        throw error; // Re-throw the error for handling in the caller
    }
};


export const fetchVendorDetailsById = async (id) => {
    try {
        const response = await api.get(`/package/vendor/details/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data.vendorDetails;
    } catch (error) {
        console.error('Failed to fetch vendor details:', error.response?.data || error.message);
        throw new Error('Error fetching vendor details');
    }
};
