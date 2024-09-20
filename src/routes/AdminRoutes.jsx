<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../pages/AdminPage/AdminDashboardPage.jsx';
import AdminManageUser from '../pages/AdminPage/AdminManageUsersPage.jsx';
import AdminBlogPage from '../pages/AdminPage/AdminBlogPage.jsx';
import AdminFeedbackPage from '../pages/AdminPage/AdminFeedbackPage.jsx';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminmanageuser" element={<AdminManageUser />} />
            <Route path="/adminblog" element={<AdminBlogPage />} />
            <Route path="/adminfeedback" element={<AdminFeedbackPage />} />
        </Routes>
    );
};

export default AdminRoutes;
=======
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

function AdminRoutes() {

    const token = getToken(); // Get the token from storage
    const userRole = getUserRole(); // Get the user role from storage

    // Check if the user is authenticated and has the 'admin' role
    const isAuthenticatedAdmin = token && userRole === 'admin';

    return (
        <div>
            <Routes>
                <Route path="/logout" element={<Logout />} />

                <Route
                    path="/dashboard"
                    element={isAuthenticatedAdmin ? <AdminDashboardPage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/manageusers"
                    element={isAuthenticatedAdmin ? <AdminManageUsersPage /> : <Navigate to="/login" />}
                />
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
                    element={isAuthenticatedAdmin ? <NotFoundPage text="Back to Dashboard" link="/admin/dashboard" /> : <Navigate to="/login" />}
                />
            </Routes>

        </div>
    )
}

export default AdminRoutes
>>>>>>> 97cfa8c3362a78f148cf41d94b8695489cdc93ac
