import React, { useState } from 'react';
import { registerUser } from '../../services/authServices.js';

// Import components
import InputField from '../../components/ui/InputField.jsx';
import RegistrationHeader from '../../components/common/RegistrationHeader.jsx';

// Import asset
import backgroundImage from '../../assets/images/Images/007.png';

const vendorOptions = [
    { value: 'photographer', label: 'Photographer' },
    { value: 'florist', label: 'Florist' },
    { value: 'caterer', label: 'Caterer' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'dj', label: 'DJ' },
    { value: 'cars', label: 'Cars' },
    { value: 'jewellery', label: 'Jewellery' },
];

export default function VendorRegisterPage2() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        vendorType: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, vendorType } = formData;

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await registerUser({ email, password, role: vendorType });
            alert(response.msg);  // Success message from the server
            window.location.href = '/login';  // Redirect to login page
        } catch (error) {
            console.error("Registration failed: ", error);
            setError('Registration failed!');
        }
    };

    return (
        <div className="bg-[#FFF8F5]">
            <RegistrationHeader />

            <div
                className="flex items-center justify-center h-screen text-black bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>

                    <div
                        className="relative z-20 flex flex-col items-center w-full h-auto px-4 py-6 m-2 rounded-lg outline"
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

                            <InputField
                                id="vendorType"
                                type="select" // Adjusted type for dropdown
                                name="vendorType"
                                value={formData.vendorType}
                                onChange={handleChange}
                                options={vendorOptions}
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
