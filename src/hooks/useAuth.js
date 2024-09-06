import { useContext } from 'react'
import { AuthProvider } from '../context/AuthProvider.jsx'

export const useAuth = () => {
    const context = useContext(AuthProvider)

    if(context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}