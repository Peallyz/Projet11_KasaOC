import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <img src="./assets/logo_white.png " alt="Logo de Kasa" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
