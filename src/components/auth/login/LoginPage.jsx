import React, { useRef, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth.js'
import axios from '../../../api/axios.js'

// import components
import InputField from './InputField.jsx'
import SocialButton from './SocialButton.jsx'
import LoginHeader from '../../headers/LoginHeader.jsx'

// import assets
import backgroundImage from '../../../assets/images/login/l1.png'

const LOGIN_URL = '/auth'
const GOOGLE_CLIENT_URL = '#'

const LoginPage = () => {
    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            //console.log(JSON.stringify(response?.data))
            //console.log(JSON.stringify(response))

            const accessToken = response?.data?.accessToken
            // const roles = response?.data?.roles
            const decoded = jwtDecode(accessToken)
            const roles = decoded.UserInfo.roles

            setAuth({ email, pwd, roles, accessToken })
            setEmail('')
            setPwd('')
            navigate(from, { replace: true })
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('LoginPage Failed')
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            <LoginHeader />

            <section>

                <div
                    className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
                    style={{backgroundImage: `url(${backgroundImage})`}} >

                    <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]" >

                        <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                        <div
                            className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">

                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                               aria-live="assertive">{errMsg}</p>

                            <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Sign in</h4>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

                                <InputField
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    ref={userRef}
                                    autoComplete="on"
                                    required
                                />

                                <InputField
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    autoComplete="off"
                                    required
                                />

                                <Link to="/forgot">
                                   <span className=" w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3">
                                       Forgot password?
                                   </span>
                                </Link>

                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                                >
                                    Sign In
                                </button>
                            </form>

                            <div className="flex items-center w-4/5 mt-2 mb-3">
                                <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="mx-4">
                                        or
                                    </span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <div className="flex justify-between mt-3">
                                <SocialButton text="Sign in with Google"/>
                            </div>

                            <div className="w-4/5 mt-3 mb-2 text-[12px] text-center">
                                Don’t have an account..?{" "}
                                <Link to="/register">
                                    <span className="text-teal-700 ">
                                        Register
                                    </span>
                                </Link>
                                {" "}now.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage