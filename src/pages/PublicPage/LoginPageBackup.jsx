import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'

// import components
import InputField from '../../components/ui/InputField.jsx'
import SocialButton from '../../components/ui/SocialButton.jsx'
import LoginHeader from '../../components/common/LoginHeader.jsx'

// import asset
import backgroundImage from '../../assets/images/login/l1.png'

export default function LoginPageBackup() {
    const [formData, setFormData] = React.useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { userInfo, error } = await login(formData.email, formData.password)
            console.log('Login successful: ', userInfo)
            navigate('/client/mywedding')
        }
        catch (error) {
            console.error("Error logging in: ", error)
            setError(error)
        }
    }

    return (
        <div className="bg-[#FFF8F5]">

            <LoginHeader />

            <div
                className="flex items-center justify-center h-screen text-black bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                    <div
                        className="relative z-20 flex flex-col items-center w-full h-auto px-4 py-8 m-2 rounded-lg outline">

                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Sign in</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">

                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                            />
                            <InputField
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                name="password"
                                onChange={handleChange}
                            />

                            <a href="/forgot" className=" w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3">
                                Forgot password?
                            </a>

                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                            >
                                Login
                            </button>
                        </form>

                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <div className="flex justify-between mt-3">
                            <SocialButton text="Sign in with Google" />
                        </div>

                        <div className="w-4/5 mt-3 mb-2 text-[12px] text-center">
                            Don’t have an account..?{" "}
                            <a href="/register" className="text-teal-700 ">
                                Register
                            </a>
                            {" "}now.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
