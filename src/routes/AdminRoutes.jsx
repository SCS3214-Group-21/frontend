import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { getToken, getUserRole } from '../utils/auth';

// import Logout Component
import Logout from '../components/Logout.jsx';
import NotFoundPage from '../pages/errors/NotFoundPage.jsx';
import AdminDashboardPage from '../pages/AdminPage/AdminDashboardPage.jsx';
import AdminManageUsersPage from '../pages/AdminPage/AdminManageUsersPage.jsx';
import AdminBlogPage from '../pages/AdminPage/AdminBlogPage.jsx';
import AdminCreateBlogPage from '../pages/AdminPage/AdminCreateBlogPage.jsx';
import AdminBlogAcceptPage from '../pages/AdminPage/AdminBlogAcceptPage.jsx';
//import AdminFeedbackPage from '../pages/AdminPage/AdminFeedbackPage.jsx';

import NotFoundPage from '../pages/errors/NotFoundPage';
import Logout from '../components/Logout.jsx';


function AdminRoutes() {
    const token = getToken(); // Get the token from storage
    const userRole = getUserRole(); // Get the user role from storage

    // Check if the user is authenticated and has the 'admin' role
    const isAuthenticatedAdmin = token && userRole === 'admin';

    return (
        <Routes>

<Route path="/logout" element={<Logout />} />

            <Route
                path="/dashboard"
                element={isAuthenticatedAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
            />

            <Route
                    path="/manageusers"
                    element={isAuthenticatedAdmin ? <AdminManageUser /> : <Navigate to="/login" />}
                />

            <Route
                    path="/transaction"
                    element={isAuthenticatedAdmin ? <AdminTransactions /> : <Navigate to="/login" />}
                />
            
            {/* <Route
                    path="/feedback"
                    element={isAuthenticatedAdmin ? <AdminFeedbackPage /> : <Navigate to="/login" />}
                /> */}

            <Route
                path="/blogs"
                element={isAuthenticatedAdmin ? <AdminBlogPage /> : <Navigate to="/login" />}
            />

            <Route
                path="/blogs/createblog"
                element={isAuthenticatedAdmin ? <AdminCreateBlogPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/blogs/acceptblogs"
                element={isAuthenticatedAdmin ? <AdminBlogAcceptPage /> : <Navigate to="/login" />}
            />
            <Route
                path="/*"
                element={isAuthenticatedAdmin ? <NotFoundPage text="Back to Dashboard" link="/dashboard" /> : <Navigate to="/login" />}
            />
        </Routes>
    );
}

export default AdminRoutes
