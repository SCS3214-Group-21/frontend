import { useRef, useState, useEffect } from 'react'
import axios from '../../api/axios.js'
import { Link } from 'react-router-dom'

// import components
import InputField from '../../components/ui/InputField.jsx'
import SocialButton from '../../components/ui/SocialButton.jsx'
import LoginHeader from '../../components/common/LoginHeader.jsx'
import ClientRegistrationHeader from "../../components/common/ClientRegistrationHeader.jsx";

// import asset
import backgroundImage from '../../assets/images/login/l1.png'

// define const
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/register'

export default function ClientRegisterPage() {
    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    })

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd, matchPwd])

    const handleSubmit = async (event) => {
        event.preventDefault()

        // if button enabled with js hack
        const v1 = EMAIL_REGEX.test(email)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return
        }

        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data))

            //console.log(JSON.stringify(response))
            setSuccess(true)

            //clear state and controlled inputs
            setEmail('')
            setPwd('')
            setMatchPwd('')
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
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
                    <div className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">
                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">

                            <InputField
                                id="email"
                                type="email"
                                placeholder=" Email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="emailnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                            />

                            <InputField
                                id="password"
                                type="password"
                                placeholder=" Password"
                                name="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />

                            <InputField
                                id="confirmPassword"
                                type="password"
                                placeholder=" Confirm Password"
                                name="confirmPassword"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />

                            <button
                                type="submit"
                                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                                disabled={!validEmail || !validPwd || !validMatch ? true : false}
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
                            <SocialButton text="Sign up with Google" />
                        </div>

                        <div className="w-4/5 mt-2 mb-2 text-[12px] text-center">
                            Already have an account..? Then{" "}
                            <Link to="/login" className="text-teal-700">
                                Login
                            </Link>{" "}
                            to your account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

//     return (
//         <div className="bg-[#FFF8F5]">
//
//             <ClientRegistrationHeader />
//
//             <div
//                 className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
//                 style={{ backgroundImage: `url(${backgroundImage})` }}
//             >
//                 <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
//                     <div className="absolute w-full h-full rounded-lg opacity-90"></div>
//
//                     <div
//                         className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">
//
//                         <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>
//                         <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
//
//                             <InputField
//                                 id="email"
//                                 type="email"
//                                 placeholder=" Email"
//                                 name="email"
//                                 onChange={handleChange}
//                             />
//
//                             <InputField
//                                 id="password"
//                                 type="password"
//                                 placeholder=" Password"
//                                 name="password"
//                                 onChange={handleChange}
//                             />
//
//                             <InputField
//                                 id="confirmPassword"
//                                 type="password"
//                                 placeholder=" Confirm Password"
//                                 name="password"
//                                 onChange={handleChange}
//                             />
//
//                             <button
//                                 type="submit"
//                                 className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
//                             >
//                                 Register
//                             </button>
//                         </form>
//
//                         <div className="flex items-center w-4/5 mt-2 mb-3">
//                             <div className="flex-grow border-t border-gray-400"></div>
//                             <span className="mx-4">or</span>
//                             <div className="flex-grow border-t border-gray-400"></div>
//                         </div>
//
//                         <div className="flex justify-between mt-3">
//                             <SocialButton text="Sign up with Google"/>
//                         </div>
//
//                         <div className="w-4/5 mt-2 mb-2 text-[12px] text-center">
//                             Already have an account..? Then{" "}
//                             <a href="/login" className="text-teal-700 ">
//                                 Login
//                             </a>
//                             {" "}to your account
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
// );
}
