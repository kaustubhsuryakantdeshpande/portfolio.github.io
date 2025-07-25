import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        {/* Navigation Links - Left Side */}
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Projects
            </NavLink>
          </li>
        </ul>

        {/* Name/Logo - Right Side */}
        <a href="/" className="nav-logo">
          K.D.
        </a>
      </div>
    </nav>
  );
}