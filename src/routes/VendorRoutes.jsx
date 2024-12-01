import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getToken, getUserRole } from '../utils/auth';

// import BlogPage
import BlogPage from '../pages/BlogPage/BlogPage.jsx';
import CreateBlogPage from '../pages/BlogPage/CreateBlogPage.jsx';
import UpdateBlogPage from '../pages/BlogPage/UpdateBlogPage.jsx';
import ViewMyBlogPage from '../pages/BlogPage/ViewMyBlogPage.jsx';

// import VendorPackagePage
import VendorPackagesPage from '../pages/VendorPackagePage/VendorPackagesPage.jsx';
import UpdatePackagePage from '../pages/VendorPackagePage/UpdatePackagePage.jsx';
import CreatePackagePage from '../pages/VendorPackagePage/CreatePackagePage.jsx';
import ViewPackagePage from '../pages/VendorPackagePage/ViewPackagePage.jsx';

// import VendorViewPage
import VendorDashboardPage from '../pages/VendorViewPage/VendorDashboardPage.jsx';
import VendorProfilePage from '../pages/VendorViewPage/VendorProfilePage.jsx';

// import Logout component
import Logout from '../components/Logout.jsx';

// import Vendor-specific pages
import VendorNotificationPage from "../pages/VendorViewPage/VendorNotificationPage.jsx";
import VendorAllChatsPage from "../pages/VendorViewPage/VendorAllChatsPage.jsx";
import VendorSchedulePage from "../pages/VendorViewPage/VendorSchedulePage.jsx";
import VendorChatPage from "../pages/VendorViewPage/VendorChatPage.jsx";
import VendorBlogPage from "../pages/VendorViewPage/VendorBlogPage.jsx";
import NotFoundPage from '../pages/errors/NotFoundPage.jsx';

import VendorOrdersPage from '../pages/VendorViewPage/VendorOrdersPage.jsx';

const VendorRoutes = () => {
  const token = getToken(); // Retrieve the token from storage
  const userRole = getUserRole(); // Retrieve the user role from storage

  // Check if the user is authenticated and is a vendor (not admin or client)
  const isAuthenticatedVendor = token && userRole !== 'admin' && userRole !== 'client';

  return (
    <Routes>
      {/* Logout route */}
      <Route
        path="/logout"
        element={isAuthenticatedVendor ? <Logout /> : <Navigate to="/login" />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={isAuthenticatedVendor ? <VendorDashboardPage /> : <Navigate to="/login" />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={isAuthenticatedVendor ? <VendorProfilePage /> : <Navigate to="/login" />}
      />

      {/* Packages */}
      <Route
        path="/packages"
        element={isAuthenticatedVendor ? <VendorPackagesPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/packages/createpackage"
        element={isAuthenticatedVendor ? <CreatePackagePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/packages/viewpackage/:id"
        element={isAuthenticatedVendor ? <ViewPackagePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/packages/updatepackage/:id"
        element={isAuthenticatedVendor ? <UpdatePackagePage /> : <Navigate to="/login" />}
      />

      {/* Notifications */}
      <Route
        path="/notification"
        element={isAuthenticatedVendor ? <VendorNotificationPage /> : <Navigate to="/login" />}
      />

      {/* Chat */}
      
      <Route
        path="/messages"
        element={isAuthenticatedVendor ? <VendorChatPage /> : <Navigate to="/login" />}
      />


      {/* Schedule */}
      <Route
        path="/schedule"
        element={isAuthenticatedVendor ? <VendorSchedulePage /> : <Navigate to="/login" />}
      />

      {/* Blog */}
      <Route
        path="/blog"
        element={isAuthenticatedVendor ? <VendorBlogPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/blog/createblog"
        element={isAuthenticatedVendor ? <CreateBlogPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/blog/updateblog/:id"
        element={isAuthenticatedVendor ? <UpdateBlogPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/blog/viewmyblog/:id"
        element={isAuthenticatedVendor ? <ViewMyBlogPage /> : <Navigate to="/login" />}
      />
       <Route
        path="/orders"
        element={isAuthenticatedVendor ? <VendorOrdersPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/*"
        element={isAuthenticatedVendor ? <NotFoundPage text="Back to Dashboard" link="/vendor/dashboard" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default VendorRoutes;
