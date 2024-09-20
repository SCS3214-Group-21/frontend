import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useAuth } from './hooks/useAuth.js'

import PublicRoutes from './routes/PublicRoutes.jsx'
import ClientRoutes from './routes/ClientRoutes.jsx'
import VendorRoutes from './routes/VendorRoutes.jsx'
<<<<<<< HEAD

import AdminRoutes from './routes/AdminRoutes.jsx'

import PublicRoutesBackup from './routes/PublicRouteBackup.jsx'
=======
import AdminRoutes from './routes/AdminRoutes.jsx'
>>>>>>> 97cfa8c3362a78f148cf41d94b8695489cdc93ac

function App() {
    return (
<<<<<<< HEAD
        // <BrowserRouter>
        //     <Routes>
        //         {!currentUser ? (
        //             <Route path="/*" element={<PublicRoutes />} />
        //         ) : isClient ? (
        //             <Route path="/*" element={<ClientRoutes />} />
        //         ) : isVendor ? (
        //             <Route path="/*" element={<VendorRoutes />} />
        //         ) : (
        //             <Route path="/*" element={<AdminRoutes />} />
        //         )}
        //     </Routes>
        // </BrowserRouter>

        <>
            <PublicRoutesBackup />
        </>
=======
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRoutes />} />
                <Route path="/client/*" element={<ClientRoutes />} />
                <Route path="/vendor/*" element={<VendorRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
        </BrowserRouter>
>>>>>>> 97cfa8c3362a78f148cf41d94b8695489cdc93ac
    )
}

export default App
