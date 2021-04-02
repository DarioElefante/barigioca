import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav({ navbar, displayMenu, smartmenu }) {
  return (
    <nav
      data-aos="fade-down"
      className={`navbar transition align-items-center py-0 px-3 fixed-top ${
        navbar ? "bg-main shadow" : "transparent"
      }`}
    >
      <div className="p-0 m-0">
        <img src="" alt="" />
        <p className="display-4">D</p>
      </div>
      <div className="p-0 m-0">
        <i
          onClick={displayMenu}
          className="fas fa-bars fa-2x d-block d-md-none"
        ></i>
        <ul
          className={`navbar-nav list-unstyled list-group-horizontal-md mt-md-3 p-0 ${
            smartmenu ? "smartnav active" : "smartnav"
          }`}
        >
          <li className="nav-item inline-list my-3 my-md-0">
            <Link
              className="text-decoration-none font-weight-bold mx-3 text-dark"
              to={`/`}
            >
              Progetto
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
            <Link
              className="text-decoration-none font-weight-bold mx-3 text-dark"
              to={`/Corsi`}
            >
              I Corsi
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
            <Link
              className="text-decoration-none font-weight-bold mx-3 text-dark"
              to={`/Prodotti`}
            >
              I Prodotti
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
            <Link
              className="text-decoration-none font-weight-bold mx-3 text-dark"
              to={`/Contatti`}
            >
              Contatti
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
