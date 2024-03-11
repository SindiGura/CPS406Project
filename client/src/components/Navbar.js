import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-container">
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/create-account">Create Account</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
