import React from "react";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";
import backgroundImage from "../assets/images/Images/02.png";
import logo from "../assets/images/Images/logo2.png";
import google from "../assets/images/Icons/GoogleIcon.png";
import facebook from "../assets/images/Icons/FbIcon.png";
import x from "../assets/images/Icons/XIcon.png";
import SecondaryButton from "../components/ui/SecondaryButton";
import LoginHeader from "../components/common/LoginHeader";

export default function LoginPage() {
    return (
        <>
            <LoginHeader />
            <div
                className="flex items-center justify-center w-screen h-screen text-black bg-center bg-no-repeat bg-cover "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-10/12  sm:w-96 h-4/6 sm:h-[380px]">
                    <div className="absolute w-full h-full bg-white rounded-lg opacity-90"></div>
                    <div
                        className="absolute z-10 w-1/2 bg-center bg-no-repeat bg-contain rounded-full sm:w-64 h-1/2 sm:h-64 opacity-10 "
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                    <div className="relative z-20 flex flex-col items-center w-full px-4 py-2">
                        <h4 className="mb-6 text-3xl sm:text-4xl">
                            Welcome <span className="text-[#A57E17]">Back !</span>

                        </h4>

                        <InputField id="email" type="email" placeholder="Email" />
                        <InputField id="password" type="password" placeholder="Password" />
                        <a href="/foget" className=" w-4/5 text-[12px] font-bold text-right">
                            Foget password?
                        </a>

                        <SecondaryButton text="Login" />
                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4 font-bold">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className="flex justify-between w-3/5 mt-3">
                            <SocialButton icon={google} alt="Google Icon" />
                            <SocialButton icon={facebook} alt="Facebook Icon" />
                            <SocialButton icon={x} alt="X Icon" />
                        </div>
                        <div className="w-4/5 mt-3 mb-2 text-xs font-bold text-center">
                            Don’t have an account..?{" "}
                            <a href="/register" className="text-teal-700 ">
                                Register
                            </a>{" "}
                            right now.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
