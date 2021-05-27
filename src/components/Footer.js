import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="row justify-content-between px-md-3 py-5">
        <div className="col-12 col-md-3">
          <img
            src=".\media\logo-sito-2.png"
            className="img-fluid d-block mx-auto mx-md-0 bg-light rounded p-0"
            width="300px"
            alt="logo Tou.play"
          />
          <ul className="text-light list-unstyled pt-2">
            <li>indirizzo</li>
            <li>telefono</li>
            <li>email</li>
          </ul>
        </div>
        <div className="row justify-content-center justify-content-md-around p-md-5 p-0 ">
          <ul className="list-unstyled col-12 col-md-6 d-flex">
            <li>
              <Link to="">
                <i className="fab fa-facebook-f fa-2x mx-4 mx-md-5 text-light"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-twitter fa-2x mx-4 mx-md-5 text-light"></i>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fab fa-instagram fa-2x text-light px-5"></i>
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
