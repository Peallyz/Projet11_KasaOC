import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "current" : "")}>
            Acceuil
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "current" : "")}
          >
            à propos
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
