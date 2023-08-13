import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
        <Link to="/">Movies</Link>
        &nbsp; | &nbsp;
        <Link to="/actors">Actors</Link>
    </nav>
  )
}
