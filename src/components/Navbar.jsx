// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Navbar() {
  const { user, logout, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>

      {isLoggedIn ? (
        <>
          <span style={{ marginRight: '1rem' }}>
            Hello, {user.firstName}
          </span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: '1rem' }}>
            Login
          </Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar