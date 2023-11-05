import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>    
            <div className="container">   
                <Link to='/'>  
                    <h1>SolveX - The Online Judge</h1>
                </Link>
                <nav>
                    {user && (
                        <div className='logout'>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar