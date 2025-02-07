import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">HirePrep</h1>

        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/problems">Problems</Link></li>
          <li><Link to="/core">Core</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
