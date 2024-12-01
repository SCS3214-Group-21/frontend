import api from '../api';

// Create a new booking
export const createBooking = async (bookingData) => {
    try {
        const response = await api.post(
            '/booking/create',
            bookingData,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure the user is authenticated
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Booking creation failed!');
    }
};


// Function to get all bookings
export const getAllBookings = async () => {
    try {
        const response = await api.get('/booking/getAll', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log(response.data.bookings);
        return response.data.bookings;
    } catch (error) {
        console.error('Error fetching bookings:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to fetch bookings!');
    }
};

// Fetch vendor orders
export const getVendorOrders = async () => {
    try {
        const response = await api.get('/booking/vendor/orders', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure the user is authenticated
            },
        });
        return response.data.bookings;
    } catch (error) {
        console.error('Error fetching vendor orders:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to fetch vendor orders!');
    }
};

// Function to update booking status
export const updateBookingStatus = async (bookingId, status) => {
    try {
        console.log("This is service")
        const response = await api.patch(
            `/booking/updateStatus/${bookingId}`,
            { status },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error updating booking status:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to update booking status!');
    }
};