import api from '../api';

export const updateVendor = async(first_name, last_name, business_name, contact_number, email, address, city, branch, description, payment_key, profilePic, uploadedImages ) => {
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
        formData.append('payment_key', payment_key)

        // Append the profile picture (assuming it's a File object)
        if (profilePic) {
            formData.append('pic', profilePic);
        }

        // Append uploaded images (assuming each item in uploadedImages is a File object)
        if (uploadedImages && uploadedImages.length > 0) {
            uploadedImages.forEach((image) => {
                formData.append('images', image);
            });
        }

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

export const fetchHotelVendors = async () => {
    
}

};

// export const fetchHotelVendors = async () => {
//     try {
//         const response = await api.get(`vendor/get-one`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Server error:', error.response?.data || error.message);
//         throw new Error('Failed to fetch packages');
//     }
// 
//     
// };
