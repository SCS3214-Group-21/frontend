import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import components
import InputField from '../../components/ui/InputField.jsx';
import SocialButton from '../../components/ui/SocialButton.jsx';
import ClientRegistrationHeader from "../../components/common/ClientRegistrationHeader.jsx";

// Import asset
import backgroundImage from '../../assets/images/login/l1.png';
import { registerUser } from '../../services/authServices.js';

// Import SweetAlert2
import Swal from 'sweetalert2';

export default function ClientRegisterPage() {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await registerUser({ email: formData.email, password: formData.password, role: 'client' });

            // Success SweetAlert
            Swal.fire({
                title: 'Registration Successful!',
                text: response.msg,  // Success message from the server
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login');  // Redirect to login page after successful registration
            });

        } catch (error) {
            console.error("Registration failed: ", error);

            // Error SweetAlert
            Swal.fire({
                title: 'Registration Failed!',
                text: 'An error occurred while registering. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="bg-[#FFF8F5]">

            <ClientRegistrationHeader />

            <div
                className="flex items-center justify-center h-screen text-black bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>

                    <div
                        className="relative z-20 flex flex-col items-center w-full h-auto px-4 py-8 m-2 rounded-lg outline"
                    >

                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">

                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                id="password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            {error && <div className="text-red-500 mb-4">{error}</div>}

                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                            >
                                Register
                            </button>
                        </form>

                        {/* <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div> */}

                        {/* <div className="flex justify-between mt-3">
                            <SocialButton text="Sign up with Google" />
                        </div> */}

                        <div className="w-4/5 mt-2 mb-2 text-[12px] text-center">
                            Already have an account..? Then{" "}
                            <a href="/login" className="text-teal-700 ">
                                Login
                            </a>
                            {" "}to your account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
