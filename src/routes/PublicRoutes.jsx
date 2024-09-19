import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import PublicPages
import ClientRegisterPage from '../pages/PublicPage/ClientRegisterPageBackup.jsx'
import LandingPage from '../pages/PublicPage/LandingPage.jsx'
import LoginPage from '../pages/PublicPage/LoginPageBackup.jsx'
import VendorRegisterPage1 from '../pages/PublicPage/VendorRegisterPage1.jsx'
import VendorRegisterPage2 from '../pages/PublicPage/VendorRegisterPage2.jsx'

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
                element={<VendorRegisterPage1 />}
            />
            <Route
                path="/vendorregister2"
                element={<VendorRegisterPage2 />}
            />

        </Routes>
    )
}

export default PublicRoutes