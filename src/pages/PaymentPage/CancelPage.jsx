import React from 'react';
import { useNavigate } from 'react-router-dom';

function CancelPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/client/bookings'); // Navigate to the bookings page
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50">
            <div className="w-full max-w-lg p-8 text-center bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-4xl font-bold text-red-600">Payment Cancelled</h1>
                <p className="mb-6 text-gray-700">
                    Your payment was not processed. You can go back to your bookings and try again.
                </p>
                <button
                    onClick={handleGoBack}
                    className='h-10 px-8 text-white border-0 rounded-full bg-custom-secondary hover:bg-custom-gray hover:from-custom-gray hover:via-custom-gray hover:to-custom-gray hover:text-custom-primary hover:border-2 hover:border-custom-primary'
                >
                    Go to Booking Details
                </button>
            </div>
        </div>
    );
}

export default CancelPage;
