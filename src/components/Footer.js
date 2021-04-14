import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="row py-5">
        <div className="col-12 col-md-6">
          <img src="" alt="" />
          <ul className="text-light list-unstyled">
            <li>indirizzo</li>
            <li>telefono</li>
            <li>email</li>
          </ul>
        </div>
        <div className="row justify-content-around p-5">
          <ul className="list-unstyled d-flex">
            <li>
              <Link to="">
                <i className="fab fa-facebook-f fa-2x mx-5 text-light"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-twitter fa-2x mx-5 text-light"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-instagram fa-2x mx-5 text-light"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg-main">
        <div className="col-12 text-center">p-iva</div>
      </div>
    </footer>
  );
};

export default Footer;
