import { useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
    const navigate = useNavigate();  // Add this line to get `navigate`
    const location = useLocation();
    const { bookingId } = location.state || {};

    useEffect(() => {
        if (!bookingId) {
            console.error('Booking ID is missing in SuccessPage');
        }
    }, [bookingId]);

    const handleGoToBookings = async () => {
        try {
            if (bookingId) {
                await updateBookingStatus(bookingId, 'paid');
                console.log('Booking status updated to paid.');
            } else {
                console.error('Booking ID not provided.');
            }
            navigate('/client/bookings');
        } catch (error) {
            console.error('Error updating booking status:', error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50">
            <div className="w-full max-w-lg p-8 text-center bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-4xl font-bold text-green-600">Payment Successful!</h1>
                <p className="mb-6 text-gray-700">
                    Thank you for your booking. Your payment has been successfully processed.
                </p>
                <button
                    onClick={handleGoToBookings}
                    className='h-10 px-8 text-white border-0 rounded-full bg-custom-secondary hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary'
                >
                    Go to Bookings
                </button>
            </div>
        </div>
    );
}

export default SuccessPage;
