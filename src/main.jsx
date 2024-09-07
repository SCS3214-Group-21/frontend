import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {AuthProvider} from './context/AuthProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/base/global.css'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)