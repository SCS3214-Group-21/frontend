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

export default function ClientRegisterPage() {
    return (
        <>
            <LoginHeader />
            <div
                className="flex items-center justify-center w-screen h-screen text-black bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="relative flex items-center justify-center w-9/12  sm:w-96 h-4/6 sm:h-[400px]">
                    <div className="absolute w-full h-full bg-white rounded-lg opacity-90"></div>
                    <div
                        className="absolute z-10 w-1/2 bg-center bg-no-repeat bg-contain rounded-full sm:w-64 h-1/2 sm:h-64 opacity-10 "
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>
                    <div className="relative z-20 flex flex-col items-center w-full p-4">
                        <h4 className="mt-2 mb-5 text-3xl">
                            Register <span className="text-[#A57E17]">Now !</span>
                        </h4>

                        <InputField
                            id="email"
                            type="email"
                            placeholder=" Email"

                        />

                        <InputField
                            id="password"
                            type="password"
                            placeholder=" Password"

                        />

                        <InputField
                            id="confirmPassword"
                            type="password"
                            placeholder=" Confirm Password"
                            className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg"
                        />

                        <SecondaryButton text="Register" />
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
                        <div className="w-4/5 mt-2 mb-2 text-[10px] font-bold text-center">
                            Already have an account..? Then{" "}
                            <a href="/login" className="text-teal-700 ">
                                Login
                            </a>{" "}
                            to your account
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
