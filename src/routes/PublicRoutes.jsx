import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Import PublicPages
import ClientRegisterPage from '../pages/PublicPage/ClientRegisterPageBackup.jsx';
import LandingPage from '../pages/PublicPage/LandingPage.jsx';
import LoginPage from '../pages/PublicPage/LoginPageBackup.jsx';
import VendorRegisterPage1 from '../pages/PublicPage/VendorRegisterPage1.jsx';
import VendorRegisterPage2 from '../pages/PublicPage/VendorRegisterPage2.jsx';
import NotFoundPage from '../pages/errors/NotFoundPage.jsx';
import AboutUsPage from '../pages/PublicPage/AboutUsPage.jsx';

import { getToken, getUserRole } from '../utils/auth'; // Import token and role retrieval functions
import ForgotPasswordPage from '../pages/PublicPage/ForgotPasswordPage.jsx';

function PublicRoutes() {
  const token = getToken(); // Get the token from storage (auth)
  const userRole = getUserRole(); // Get the user role from storage (auth)

  // Function to determine where to redirect based on the user's role
  const getDashboardRoute = (role) => {
    if (role === 'admin') return '/admin/dashboard';
    if (role === 'client') return '/client/mywedding';
    return '/vendor/dashboard';
  };

  return (
    <Routes>
      <Route
        path="/register"
        element={!token ? <ClientRegisterPage /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/"
        element={!token ? <LandingPage /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/about"
        element={!token ? <AboutUsPage /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/forgotpassword"
        element={!token ? <ForgotPasswordPage /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/login"
        element={!token ? <LoginPage /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/vendorregister"
        element={!token ? <VendorRegisterPage1 /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      <Route
        path="/vendorregister2"
        element={!token ? <VendorRegisterPage2 /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
      {/* Catch-all route for undefined paths */}
      <Route path="*"
        element={!token ? <NotFoundPage text="Back to Home" link="/" /> : <Navigate to={getDashboardRoute(userRole)} />}
      />
    </Routes>
  );
}

export default PublicRoutes;
