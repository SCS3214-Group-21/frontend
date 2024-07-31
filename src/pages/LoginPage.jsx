import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputField from "../components/ui/InputField";
import backgroundImage from "../assets/images/login/l1.png";
import LoginHeader from "../components/common/LoginHeader";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8000/user/login", {
                email,
                password,
            }, { withCredentials: true }); // Important for sending cookies

            const { role } = response.data; // Assume the role is in the response

            // Handle different roles and redirect accordingly
            Swal.fire({
                title: "Login Successful!",
                text: "You have logged in successfully.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                if (role === "client") {
                    navigate("/mywedding");
                } else if (role === "serviceprovider") {
                    navigate("/vendordashboard");
                } else {
                    navigate("/admindashboard");
                }
            });
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="bg-[#FFF8F5]">
            <LoginHeader />
            <div className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
                    <div className="absolute w-full h-full rounded-lg opacity-90"></div>
                    <div className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2">
                        <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Sign in</h4>
                        {error && <div className="text-red-500">{error}</div>}
                        <InputField id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputField id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <a href="/forgot" className="w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3">Forgot password?</a>
                        <button onClick={handleLogin} type="button" className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center mb-2">Login</button>
                        <div className="flex items-center w-4/5 mt-2 mb-3">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="mx-4">or</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <p className="mt-4 text-sm">
                            Don’t have an account yet? <a href="/register" className="text-sm text-yellow-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
