import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authServices.js';
import { getDashboardRoute, setToken, setUserID, setUserRole } from '../../utils/auth';

// import components
import InputField from '../../components/ui/InputField.jsx';
import SocialButton from '../../components/ui/SocialButton.jsx';
import LoginHeader from '../../components/common/LoginHeader.jsx';

// import asset
import backgroundImage from '../../assets/images/login/l1.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user and get token + user info
      const { token, user } = await loginUser(email, password);

      if (token) {
        // Save token and role in localStorage
        setToken(token);
        setUserRole(user.role);
        setUserID(user.id);

        // Redirect based on user role
        const dashboardRoute = getDashboardRoute(user.role);
        navigate(dashboardRoute);
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="bg-[#FFF8F5]">
      <LoginHeader />

      <div
        className="flex items-center justify-center h-screen text-black bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative flex items-center justify-center w-auto h-auto sm:w-96 sm:h-[380px]">
          <div className="absolute w-full h-full rounded-lg opacity-90"></div>
          <div className="relative z-20 flex flex-col items-center w-full h-auto px-4 py-8 m-2 rounded-lg outline">
            <h4 className="mb-6 text-3xl font-[#121212] sm:text-4xl">Sign in</h4>

            {errorMessage && (
              <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
            )}

            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
              <InputField
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <a
                href="/forgot"
                className="w-4/5 text-[12px] text-[#1f1f1f] text-right mb-3"
              >
                Forgot password?
              </a>

              <button
                type="submit"
                className="text-white bg-gradient-to-br from-yellow-600 to-yellow-800 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-yellow-600 dark:focus:ring-yellow-700 font-medium rounded-md text-sm px-20 py-2.5 text-center mb-2"
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
              Don’t have an account..?{' '}
              <a href="/register" className="text-teal-700">
                Register
              </a>{' '}
              now.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
