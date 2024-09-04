import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import useToggle from '../../hooks/useToggle.js';
import axios from '../../api/axios';

// import components
import InputField from '../../components/ui/InputField.jsx';
import SocialButton from '../../components/ui/SocialButton.jsx';
import LoginHeader from '../../components/common/LoginHeader.jsx';

// import asset
import backgroundImage from '../../assets/images/login/l1.png';

// declare const
const LOGIN_URL = '/auth';

const LoginPage = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [check, toggleCheck] = useToggle('persist', false)

    useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;

            setAuth({ email, accessToken, roles })
            setEmail('')
            setPwd('')
            navigate(from, { replace: true })
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error?.response?.status === 400) {
                setErrMsg('Missing Email or Password')
            } else if (error?.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            if (errRef.current) {
                errRef.current.focus()
            }
        }
    };

    return (
        <div className="bg-[#FFF8F5]">
            <LoginHeader />

            <div
                className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                    <div className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">
                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Sign in</h4>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                            <InputField
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                name="email"
                                ref={userRef}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={pwd}
                                name="password"
                                onChange={(e) => setPwd(e.target.value)}
                            />
                            <a href="/forgot" className="w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3">
                                Forgot password?
                            </a>
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                            >
                                Login
                            </button>
                            <div className="persistCheck">
                                <input
                                    type="checkbox"
                                    id="persist"
                                    onChange={toggleCheck}
                                    checked={check}
                                />
                                <label htmlFor="persist">Trust This Device</label>
                            </div>
                        </form>
                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className="flex justify-between mt-3">
                            <SocialButton text="Sign in with Google"/>
                        </div>
                        <div className="w-4/5 mt-3 mb-2 text-[12px] text-center">
                            Don’t have an account..?{" "}
                            <span className="text-teal-700 ">
                                <Link to="/register">Register</Link>
                            </span>{" "}now.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage
