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
