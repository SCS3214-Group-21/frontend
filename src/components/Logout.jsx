import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
    const { logoutUser } = React.useContext(AuthContext); // Accessing the logout function from context
    const navigate = useNavigate();

    // Confirm Logout: When "Yes" is clicked
    const handleConfirmLogout = () => {
        logoutUser(); // Call the logout function from context
        navigate('/'); // Redirect to home or login page
    };

    // Cancel Logout: When "No" is clicked, go to the previous page
    const handleCancelLogout = () => {
        navigate(-1); // This will navigate to the previous page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold text-black mb-4">Do you want to logout?</h1>
            <div>
                <button 
                    className="px-4 py-2 mr-4 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={handleConfirmLogout} // Logout action
                >
                    Yes
                </button>
                <button 
                    className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    onClick={handleCancelLogout} // Navigate back action
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default Logout;
