import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminDashboard from '../pages/AdminPage/AdminDashboardPage.jsx';
import AdminManageUser from '../pages/AdminPage/AdminManageUsersPage.jsx';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminmanageuser" element={<AdminManageUser />} />
        </Routes>
    );
};

export default AdminRoutes;