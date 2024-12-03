import api from '../api';

// Create a new quotation
export const createQuotation = async (client_id, vendor_id, items, details, package_id) => {
   
    try {
        const response = await api.post(
            '/quotation/create',
            {
                client_id,
                vendor_id,
                items,
                details,
                package_id,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating quotation:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Quotation creation failed!');
    }
};

// Fetch all quotations for a client
export const fetchClientQuotations = async () => {
    try {
        const response = await api.get('/quotation/client', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching client quotations:', error.response?.data || error.message);
        throw new Error('Failed to fetch client quotations!');
    }
};

// Fetch all quotations for a vendor
export const fetchVendorQuotations = async () => {
    try {
        const response = await api.get('/quotation/vendor', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching vendor quotations:', error.response?.data || error.message);
        throw new Error('Failed to fetch vendor quotations!');
    }
};

// Fetch a specific quotation by ID
export const fetchQuotationById = async (id) => {
    try {
        const response = await api.get(`/quotation/id/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching quotation:', error.response?.data || error.message);
        throw new Error('Failed to fetch quotation!');
    }
};

// Update the status of a quotation
export const updateQuotationStatus = async (quotationId, { price }) => {
    try {
        const response = await api.patch(
            `/quotation/status/${quotationId}`,
            { price }, // Send price in the request body
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error updating quotation status:', error.response?.data || error.message);
        throw new Error('Failed to update quotation status!');
    }
};

// Delete a quotation by ID
export const deleteQuotation = async (id) => {
    try {
        const response = await api.delete(`/quotation/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting quotation:', error.response?.data || error.message);
        throw new Error('Failed to delete quotation!');
    }
};
