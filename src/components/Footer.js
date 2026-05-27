import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container">
        <div className="row">

          
          <div className="col-4">
            <p>Martin Di Nota</p>
            <p>71 chemin de bois domenge</p>
            <p>06 15 44 28 24</p>
          </div>

          
          <div className="col-4">
            <NavLink to="/" className="text-white d-block">Accueil</NavLink>
            <NavLink to="/services" className="text-white d-block">Services</NavLink>
            <NavLink to="/realisations" className="text-white d-block">Réalisations</NavLink>
            <NavLink to="/contact" className="text-white d-block">Contact</NavLink>
          </div>

          
          <div className="col-4">
            <NavLink to="/realisations" className="text-white d-block">Projet 1</NavLink>
            <NavLink to="/realisations" className="text-white d-block">Projet 2</NavLink>
            <NavLink to="/realisations" className="text-white d-block">Projet 3</NavLink>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;