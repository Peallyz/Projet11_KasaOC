import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <main className="error__page">
      <h1>
        <strong>404</strong>Oups! La page que vous demandez n&apos;existe pas.
      </h1>
      <NavLink to="/" className={"current"}>
        Retourner sur la page d&apos;accueil
      </NavLink>
    </main>
  );
};

export default Error;
