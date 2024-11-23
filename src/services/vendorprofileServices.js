import api from '../api';

export const updateVendor = async(first_name, last_name, business_name, contact_number, email, address, city, branch, description, profilePic, uploadedImages ) => {
    try{
        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('business_name', business_name);
        formData.append('contact_number', contact_number);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('branch', branch);
        formData.append('description', description);
        formData.append('profilePic', JSON.stringify(profilePic));
        formData.append('uploadedImages', JSON.stringify(uploadedImages));

        const response = await api.post(`/vendor/update`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Server error:', error.response?.data || error.message);
        throw new Error('Failed to update profile')
    }
};

export const fetchVendorById = async () => {
    try {
        const response = await api.get(`vendor/get-one`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Server error:', error.response?.data || error.message);
        throw new Error('Failed to fetch packages');
    }
};