import React, { useState } from 'react';
import ForgotPasswordImg from "../../assets/images/Images/forgot.png"
import LoginHeader from '../../components/common/LoginHeader';
import InputField from '../../components/ui/InputField';

function ForgotPasswordPage() {

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

                    <form className="w-full" >
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                                Email Address
                            </label>
                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"

                                name="email"

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
