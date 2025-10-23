import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    return (
        <header>
            <nav className='navbar-container'>
                <Link to={"/"} className="logo">ScreenGuard</Link>

                <div className='nav-links'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/approved"}>Approved</Link>
                </div>
            </nav>
        </header>

    )
}