import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../pages/AdminPage/AdminDashboardPage.jsx';
import AdminManageUser from '../pages/AdminPage/AdminManageUsersPage.jsx';
import AdminTransactions from '../pages/AdminPage/AdminTransactions.jsx';
import AdminBlogPage from '../pages/AdminPage/AdminBlogPage.jsx';
import AdminFeedbackPage from '../pages/AdminPage/AdminFeedbackPage.jsx';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminmanageuser" element={<AdminManageUser />} />
            <Route path="/AdminTransactions" element={<AdminTransactions />} />
            <Route path="/adminblog" element={<AdminBlogPage />} />
            <Route path="/adminfeedback" element={<AdminFeedbackPage />} />
        </Routes>
    );
};

export default AdminRoutes;