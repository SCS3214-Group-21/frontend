import React from 'react'
import './App.css'

import {AuthProvider} from './context/AuthContext.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useAuth} from './hooks/useAuth.js'

import PublicRoutes from './routes/PublicRoutes.jsx'
import ClientRoutes from './routes/ClientRoutes.jsx'

function App() {

    const { currentUser } = useAuth()

    return (
        <BrowserRouter>
            <Routes>
                {!currentUser ? (
                    <Route path="/*" element={<PublicRoutes />} />
                ) : (
                    <Route path="/*" element={<ClientRoutes />} />
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default App
