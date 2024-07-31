import React from "react";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";
import backgroundImage from "../assets/images/login/l1.png";
import logo from "../assets/images/Images/logo2.png";
import google from "../assets/images/Icons/GoogleIcon.png";
import facebook from "../assets/images/Icons/FbIcon.png";
import x from "../assets/images/Icons/XIcon.png";
import PrimaryButton from "../components/ui/PrimaryButton";
import LoginHeader from "../components/common/LoginHeader";

// import firebase from "firebase/app"
// import 'firebase/auth'
// import '../config/firebaseConfig'

export default function LoginPage() {
    // const loginWithGoogle = () => {
    //     firebase
    //         .auth()
    //         .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //         .then((userCred) => {
    //             console.log(userCred)
    //         })
    // }

    return (
        <div className="bg-[#FFF8F5]">

            <LoginHeader />

            <div
                className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                    {/*<div*/}
                    {/*    className="absolute z-10 w-1/2 bg-center bg-no-repeat bg-contain rounded-full sm:w-64 h-1/2 sm:h-64 opacity-10 "*/}
                    {/*    style={{ backgroundImage: `url(${logo})` }}*/}
                    {/*></div>*/}

                    <div className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">

                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">
                            Sign in
                        </h4>

                        <InputField id="email" type="email" placeholder="Email"/>
                        <InputField id="password" type="password" placeholder="Password"/>

                        <a href="/forgot" className=" w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3">
                            Forgot password?
                        </a>

                        {/*<PrimaryButton text="Login" />*/}
                        <button
                            type="button"
                            className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
                        >
                            Login
                        </button>

                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>

                        <div className="flex justify-between mt-3">
                            <SocialButton text="Sign in with Google"/>
                            {/*<SocialButton icon={facebook} alt="Facebook Icon"/>*/}
                            {/*<SocialButton icon={x} alt="X Icon"/>*/}
                        </div>

                        <div className="w-4/5 mt-3 mb-2 text-[12px] text-center">
                            Don’t have an account..?{" "}
                            <a href="/register" className="text-teal-700 ">
                                Register
                            </a>{" "}
                            now.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
