import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AuthProvider} from './context/AuthContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles/base/global.css'
import PublicRoutes from "./routes/PublicRoutes.jsx";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)