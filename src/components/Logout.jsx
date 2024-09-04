import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const Logout = () => {
//     const navigate = useNavigate()
//     const { logout } = useAuth()
//
//     useEffect(() => {
//         const performLogout = async () => {
//             await logout()
//             navigate('/')
//         };
//         performLogout()
//     }, [navigate])

    return (
        <div>Logging out...</div>
    )
}

export default Logout
