import React, { createContext, useState, useEffect } from 'react'
import authService from '../services/authServices.js'
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [emailForVerification, setEmailForVerification] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token')
            if (token) {
                try {
                    const decodedToken = jwtDecode(token)
                    setCurrentUser(decodedToken.userInfo)
                }
                catch (error) {
                    console.error('Error decoding token:', error)
                }
            }
            setLoading(false)
        }
        fetchUser()
    }, [])

    const login = async (email, password) => {
        const { token, error } = await authService.login(email, password)
        let userInfo
        if (token) {
            try {
                const decodedToken = jwtDecode(token)
                userInfo = decodedToken.userInfo
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(userInfo))
            }
            catch (error) {
                console.error('Error decoding token:', error)
            }
        }
        return { userInfo, error } // Return user and error
    };

    const signup = async (email, password) => {
        const { error } = await authService.signup(email, password)
        if (!error) {
            setEmailForVerification(email)
        }
        return { error } // Return error only
    };

    // const verifyOtp = async (email, otp) => {
    //     const { user, error } = await authService.verifyOtp(email, otp)
    //     console.log(error)
    //     if (user) {
    //         setCurrentUser(user)
    //     }
    //     return { user, error }   // Return user and error
    // };

    const logout = async () => {
        await authService.logout()
        localStorage.removeItem('token')
        setCurrentUser(null)
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, signup, emailForVerification, logout }}>
            {children}
        </AuthContext.Provider>
    )
}