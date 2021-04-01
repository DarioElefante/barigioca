import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  const [navbar, setNav] = useState(false);
  const [smartmenu, setSmart] = useState(false);

  const navbarOnSCroll = () => {
    if (window.pageYOffset > 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 770) {
      setNav(true);
    } else {
      document.addEventListener("scroll", navbarOnSCroll);
    }
  }, []);

  const displayMenu = () => {
    setSmart(!smartmenu);
  };

  return (
    <nav
      className={`navbar transition align-items-center py-0 px-3 ${
        navbar ? "bg-main fixed-top" : "transparent"
      }`}
    >
      <div className="p-0">
        <img src="" alt="" />
        <p className="display-4">D</p>
      </div>
      <div className="">
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
