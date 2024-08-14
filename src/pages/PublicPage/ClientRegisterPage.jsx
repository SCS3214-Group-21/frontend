import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

// import components
import InputField from '../../components/ui/InputField.jsx'
import SocialButton from '../../components/ui/SocialButton.jsx'
import LoginHeader from '../../components/common/LoginHeader.jsx'
import ClientRegistrationHeader from "../../components/common/ClientRegistrationHeader.jsx";

// import asset
import backgroundImage from '../../assets/images/login/l1.png'
import {useAuth} from "../../hooks/useAuth.js";

export default function ClientRegisterPage() {
    const [formData, setFormData] = React.useState({ email: '', password: '' })
    const [error, setError] = useState()
    const navigate = useNavigate()
    const { signup } = useAuth()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const {error} = await signup(formData.email, formData.password)
            if (!error) {
                setError(error)
                console.log('Registration Successful')
                navigate('/login')
            }
        }
        catch (error) {
            console.error("Error sign up: ", error)
            setError(error)
        }
    }

    return (
        <div className="bg-[#FFF8F5]">

            <ClientRegistrationHeader />

            <div
                className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>

                    <div
                        className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">

                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

                            <InputField
                                id="email"
                                type="email"
                                placeholder=" Email"
                                name="email"
                                onChange={handleChange}
                            />

                            <InputField
                                id="password"
                                type="password"
                                placeholder=" Password"
                                name="password"
                                onChange={handleChange}
                            />

                            <InputField
                                id="confirmPassword"
                                type="password"
                                placeholder=" Confirm Password"
                                name="password"
                                onChange={handleChange}
                            />

                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                            >
                                Register
                            </button>
                        </form>

                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <div className="flex justify-between mt-3">
                            <SocialButton text="Sign up with Google"/>
                        </div>

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
