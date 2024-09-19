import React from 'react'
import './App.css'

import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useAuth } from './hooks/useAuth.js'

import PublicRoutes from './routes/PublicRoutes.jsx'
import ClientRoutes from './routes/ClientRoutes.jsx'
import VendorRoutes from './routes/VendorRoutes.jsx'
import PublicRoutesBackup from './routes/PublicRouteBackup.jsx'

function App() {

    // const { currentUser } = useAuth()

    // const isClient = currentUser && currentUser.roles && currentUser.roles.includes('client');
    // const isVendor = currentUser && currentUser.roles && currentUser.roles.includes('vendor');

    return (
        // <BrowserRouter>
        //     <Routes>
        //         {!currentUser ? (
        //             <Route path="/*" element={<PublicRoutes />} />
        //         ) : isClient ? (
        //             <Route path="/client/*" element={<ClientRoutes />} />
        //         ) : isVendor ? (
        //             <Route path="/vendor/*" element={<VendorRoutes />} />
        //         ) : (
        //             <Route path="/*" element={<PublicRoutes />} />
        //         )}
        //     </Routes>
        // </BrowserRouter>

        // <>
        //     <PublicRoutesBackup />
        // </>
        <BrowserRouter>
            <Routes>

                <Route path="/*" element={<PublicRoutes />} />

                <Route path="/client/*" element={<ClientRoutes />} />

                <Route path="/vendor/*" element={<VendorRoutes />} />


            </Routes>
        </BrowserRouter>
    )
}

export default App
