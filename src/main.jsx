import React from 'react'
import ReactDOM from 'react-dom/client'
// import './config/firebaseConfig'
import App from './App.jsx'
import './assets/styles/base/global.css'
import {AuthProvider} from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>,
)
