import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// import pages
// import UserPage from '';

function UserRoutes() {
    const { currentUser } = useAuth();

    return (
        <Routes>
            <Route
                path="/"
                element={currentUser && currentUser.role === 'client' ? <UserPage /> : <Navigate to="/Unauthorized" />}
            />
        </Routes>
    );
}

export default UserRoutes;