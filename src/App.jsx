import { Routes, Route } from 'react-router-dom'

import ClientRoutes from './routes/ClientRoutes.jsx'
import VendorRoutes from './routes/VendorRoutes.jsx'
import AdminRoutes from './routes/AdminRoutes.jsx'
import RequireAuth from './config/RequireAuth.jsx'

import Layout from './pages/Layout.jsx'
import LandingPage from './pages/PublicPage/LandingPage.jsx'
import LoginPage from './pages/PublicPage/LoginPage.jsx'
import ClientRegisterPage from './pages/PublicPage/ClientRegisterPage.jsx'
import VendorRegisterPage from './pages/PublicPage/VendorRegisterPage.jsx'
import MissingPage from './pages/errors/MissingPage.jsx'

const ROLES = {
    'client' : 2001,
    'admin' : 2002,
    'vendor' : 2003
}

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />} >

                {/* Public Routes */}
                <Route index element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="client/register" element={<ClientRegisterPage />} />
                <Route path="vendor/register" element={<VendorRegisterPage />} />

                {/* Client Routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.client]} />} >
                    <Route path="client" element={<ClientRoutes />} />
                </Route>

                {/* Vendor Routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.vendor]} />} >
                    <Route path="vendor" element={<VendorRoutes />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />} >
                    <Route path="admin" element={<AdminRoutes />} />
                </Route>

                {/*Catch All*/}
                <Route path="*" element={<MissingPage />} />

            </Route>
        </Routes>
    )
}

export default App
