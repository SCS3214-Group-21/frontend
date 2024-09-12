import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/auth/RequireAuth.jsx'

// import layout
import Layout from './components/Layout.jsx'

// public pages
import LoginPage from './components/auth/login/LoginPage.jsx'
import RegisterPage from './components/auth/register/RegisterPage.jsx'
import LandingPage from './components/public/home/LandingPage.jsx'

// client pages
import ClientDashboardPage from "./components/client/dashboard/ClientDashboardPage.jsx"

// vendor pages

// error pages
import Missing from './components/error/Missing.jsx'
import Unauthorized from './components/error/Unauthorized.jsx'

const ROLES = {
    'Client': 2001,
    'Vendor': 1984,
    'Admin': 5150
}

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                {/* public routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                {/* protected routes */}

                {/* client routes */}
                <Route element={<RequireAuth allowedRoles={[ROLES.Client]} />}>
                    <Route path="/mywedding" element={<ClientDashboardPage />} />
                </Route>

                {/* vendor routes */}
                {/* admin routes */}

                {/* catch all */}
                <Route path="*" element={<Missing />} />
            </Route>
        </Routes>
    )
}

export default App