import { Link } from "react-router-dom"

export default function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul className="navbar-items">
          <li>
            <Link to="/" >Movies</Link>
          </li>
          <li>
            <Link to="/actors" >Actors</Link>
          </li>
          <p>Welcome, {user.username}!</p>
        </ul>        
      </div>
    </nav>
  )
}
