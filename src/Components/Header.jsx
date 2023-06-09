import { NavLink } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="/assets/logo_orange.png" alt="Logo de Kasa" />{" "}
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
