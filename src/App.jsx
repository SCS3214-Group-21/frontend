import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useAuth } from './hooks/useAuth.js'

import PublicRoutes from './routes/PublicRoutes.jsx'
import ClientRoutes from './routes/ClientRoutes.jsx'
import VendorRoutes from './routes/VendorRoutes.jsx'

function App() {
    return (
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
