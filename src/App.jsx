import React from 'react'
import './App.css'

import {AuthProvider} from './context/AuthContext.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useAuth} from './hooks/useAuth.js'

import PublicRoutes from './routes/PublicRoutes.jsx'
import ClientRoutes from './routes/ClientRoutes.jsx'
import VendorRoutes from './routes/VendorRoutes.jsx'
import PublicRoutesBackup from './routes/PublicRouteBackup.jsx'

function App() {

    const { currentUser } = useAuth()

    const isClient = currentUser && currentUser.roles && currentUser.roles.includes('client');
    const isVendor = currentUser && currentUser.roles && currentUser.roles.includes('vendor');

    return (
        <BrowserRouter>
            <Routes>
                {!currentUser ? (
                    <Route path="/*" element={<PublicRoutes />} />
                ) : isClient ? (
                    <Route path="/*" element={<ClientRoutes />} />
                ) : isVendor ? (
                    <Route path="/*" element={<VendorRoutes />} />
                ) : (
                    <Route path="/*" element={<PublicRoutes />} />
                )}
            </Routes>
        </BrowserRouter>

        // <>
        //     <PublicRoutesBackup />
        // </>
    )
}

export default App
