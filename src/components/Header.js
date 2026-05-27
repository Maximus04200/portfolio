import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo à gauche */}
        <NavLink className="navbar-brand" to="/">Martin Di Nota</NavLink>

        {/* Liens à droite */}
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/">Accueil</NavLink>
          <NavLink className="nav-link" to="/services">Services</NavLink>
          <NavLink className="nav-link" to="/realisations">Réalisations</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/mentionslegales">Mentions légales</NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Header;