import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/authApiSlice'
import { logout } from '../slices/authSlice'

function LogoutButton({ className }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [logoutApiCall] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      // Call logout API to clear server-side session/cookie
      await logoutApiCall().unwrap()
      
      // Clear Redux state and localStorage
      dispatch(logout())
      
      // Redirect to home page
      navigate('/login')
    } catch (err) {
      // Even if API call fails, still logout locally
      dispatch(logout())
      navigate('/')
    }
  }

  return (
    <button 
      onClick={handleLogout}
      className={className || "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"}
    >
      Logout
    </button>
  )
}

export default LogoutButton