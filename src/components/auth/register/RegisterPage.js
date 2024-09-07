import React, { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../../../api/axios.js'
import { Link } from 'react-router-dom'

// import components
import InputField from './InputField.jsx'
import SocialButton from './SocialButton.jsx'
import RegistrationHeader from '../../headers/RegistrationHeader.jsx'

// import assets
import backgroundImage from '../../../assets/images/login/l1.png'

const EMAIL_REGEX = /^[A-z][A-z0-9-_]{3,23}$/  // TODO: implement email regex
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = '/register'

const RegisterPage = () => {
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
        setValidName(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email)
        const v2 = PWD_REGEX.test(pwd)
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry")
            return
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data))
            //console.log(JSON.stringify(response))
            setSuccess(true)
            //clear state and controlled inputs
            setEmail('')
            setPwd('')
            setMatchPwd('')
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken')
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            {success ? (

                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>

            ) : (

                <>
                    <RegistrationHeader />

                    <section>

                        <div
                            className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
                            style={{backgroundImage: `url(${backgroundImage})`}}>

                            <div
                                className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">

                                <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                                <div
                                    className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">

                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                       aria-live="assertive">{errMsg}</p>

                                    <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>

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
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />

                                        <p id="uidnote"
                                           className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle}/>
                                            {/*TODO:implement email instruction*/}
                                            rule.<br/>
                                            rule2.<br/>
                                            rule3
                                        </p>

                                        <InputField
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={pwd}
                                            name="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            autoComplete="off"
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />

                                        <p id="pwdnote"
                                           className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle}/>
                                            8 to 24 characters.<br/>
                                            Must include uppercase and lowercase letters, a number and a special
                                            character.<br/>
                                            Allowed special characters: <span aria-label="exclamation mark">!</span>
                                            <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                                            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>

                                        <InputField
                                            id="confirm_pwd"
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={matchPwd}
                                            name="confirm_pwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />

                                        <p id="confirmnote"
                                           className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                            <FontAwesomeIcon icon={faInfoCircle}/>
                                            Must match the first password input field.
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={!validEmail || !validPwd || !validMatch}
                                            className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                                        >
                                            Register
                                        </button>
                                    </form>

                                    <div className="flex items-center w-4/5 mt-2 mb-3">
                                        <div className="flex-grow border-t border-gray-400"></div>
                                        <span className="mx-4"> or </span>
                                        <div className="flex-grow border-t border-gray-400"></div>
                                    </div>

                                    <div className="flex justify-between mt-3">
                                        <SocialButton text="Sign up with Google"/>
                                    </div>

                                    <div className="w-4/5 mt-3 mb-2 text-[12px] text-center">
                                        Already have an account..? Then{" "}
                                        <Link to="/login">
                                            <span className="text-teal-700 "> Login </span>
                                        </Link>
                                        {" "}to your account.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default RegisterPage