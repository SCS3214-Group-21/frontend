import React, { useState } from 'react';
import ForgotPasswordImg from "../../assets/images/Images/forgot.png"
import LoginHeader from '../../components/common/LoginHeader';
import InputField from '../../components/ui/InputField';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../services/authServices.js';
import Swal from 'sweetalert2';  // Import SweetAlert2

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');  // Clear previous error messages
        try {
            // Attempt to send the password reset link
            await forgetPassword(email);

            // If successful, show a success alert
            Swal.fire({
                icon: 'success',
                title: 'Reset Link Sent!',
                text: 'A reset link has been sent to your email.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Navigate to login page after clicking 'OK'
                    navigate('/login');
                }
            });
        } catch (error) {
            // Display error message and a SweetAlert2 error popup
            setErrorMessage('Error. Failed to send the reset link.');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
        }
    };

    return (
        <div className="bg-[#FFF8F5] min-h-screen flex flex-col">
            {/* Header */}
            <LoginHeader />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-between flex-1 w-full px-6 py-12 lg:flex-row sm:px-12 lg:px-24">

                {/* Left Side - Image */}
                <div className="mb-12 lg:w-1/2 lg:mb-0">
                    <img
                        src={ForgotPasswordImg}
                        alt="Forgot Password"
                        className="object-cover w-full h-auto "
                    />
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-col items-start lg:w-1/2 p-7">
                    <h1 className="mb-6 text-5xl font-bold text-custom-primary ">
                        Forgot Your Password?
                    </h1>
                    <p className="mb-8 text-base text-gray-600 sm:text-lg">
                        No worries! Enter your email address and we will send you a reset link to recover your password.
                    </p>

                    {errorMessage && (
                        <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
                    )}
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                                Email Address
                            </label>
                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center mb-2"
                        >
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
