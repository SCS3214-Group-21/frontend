import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LogoutImg from '../assets/images/Images/logout.png'

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F5]">
            {/* Image */}
            <div className="mb-6">
                <img
                    src={LogoutImg}
                    alt="Logout"
                    className="object-contain w-48 h-48"
                />
            </div>

            {/* Sentence */}
            <h1 className="mb-4 text-3xl font-semibold text-gray-800">
                Oh no! You're leaving...<br></br>Are you sure?
            </h1>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button
                    className="px-6 py-2 text-black transition-colors border-2 rounded-md shadow-md border-custom-primary hover:bg-custom-yellow-dark"
                    onClick={handleConfirmLogout} // Logout action
                >
                    Yes,Log me out
                </button>
                <button
                    className="px-6 py-2 text-white transition-colors rounded-md shadow-md bg-custom-primary hover:bg-custom-yellow-dark"
                    onClick={handleCancelLogout} // Navigate back action
                >
                    Naah,Just Kidding
                </button>
            </div>
        </div>
    );
};

export default Logout;
