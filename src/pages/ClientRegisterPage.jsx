import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";
import backgroundImage from "../assets/images/login/l1.png";
import ClientRegistrationHeader from "../components/common/ClientRegistrationHeader";

export default function ClientRegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/user/register-client", {
        email,
        password,
        role: "client",
      });

      setError("");

      Swal.fire({
        title: "Registration Successful!",
        text: "You have registered successfully.",
        icon: "success",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[#FFF8F5]">
      <ClientRegistrationHeader />
      <div
        className="flex items-center justify-center text-black h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
          <div className="absolute w-full h-full rounded-lg opacity-90"></div>
          <div
            className="relative z-20 flex flex-col items-center w-full h-auto px-4 rounded-lg outline py-8 m-2"
          >
            <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Register</h4>

            {error && <div className="text-red-500">{error}</div>}

            <InputField
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-2 py-1 bg-transparent border border-gray-800 rounded-lg"
            />

            <button
              type="button"
              onClick={handleRegister}
              className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center me-2.5 mb-2"
            >
              Register
            </button>

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
              <a href="/login" className="text-teal-700">Login</a>{" "}
              to your account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
