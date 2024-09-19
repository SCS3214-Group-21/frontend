import React from 'react'

// import components
import InputField from '../../components/ui/InputField.jsx'
import RegistrationHeader from '../../components/common/RegistrationHeader.jsx';

// import asset

import backgroundImage from '../../assets/images/Images/007.png'

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

    return (
        <div className="bg-[#FFF8F5]">

            <RegistrationHeader />

            <div
                className="flex items-center justify-center h-screen text-black bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>

                    <div
                        className="relative z-20 flex flex-col items-center w-full h-auto px-4 py-6 m-2 rounded-lg outline">

                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>
                        <form className="flex flex-col items-center w-full ">

                            <InputField
                                id="email"
                                type="email"
                                placeholder=" Email"
                                name="email"
                            // onChange={handleChange}
                            />

                            <InputField
                                id="password"
                                type="password"
                                placeholder=" Password"
                                name="password"
                            // onChange={handleChange}
                            />

                            <InputField
                                id="confirmPassword"
                                type="password"
                                placeholder=" Confirm Password"
                                name="password"
                            // onChange={handleChange}
                            />

                            <InputField
                                id="vendorType"
                                type="select" // Use 'select' as type to indicate dropdown
                                name="vendorType"
                                //value={vendorType}
                                //onChange={handleVendorTypeChange}
                                options={vendorOptions} // Pass the options array
                            />

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
