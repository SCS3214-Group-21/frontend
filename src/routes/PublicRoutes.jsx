import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import PublicPages
import ClientRegisterPage from '../pages/PublicPage/ClientRegisterPage.jsx'
import LandingPage from '../pages/PublicPage/LandingPageBackup.jsx'
import LoginPage from '../pages/PublicPage/LoginPage.jsx'
import VendorRegisterPage from '../pages/PublicPage/VendorRegisterPage.jsx'

function PublicRoutes() {
    return (
        <Routes>
            <Route
                path="/register"
                element={<ClientRegisterPage />}
            />
            <Route
                path="/"
                element={<LandingPage />}
            />
            <Route
                path="/login"
                element={<LoginPage />}
            />
            <Route
                path="/vendorregister"
                element={<VendorRegisterPage />}
            />
        </Routes>
    )
}

export default PublicRoutes