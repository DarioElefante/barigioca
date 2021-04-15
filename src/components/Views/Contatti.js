import HalfHeader from "../HalfHeader";
import { Form } from "react-bootstrap";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

function Contatti() {
  return (
    <>
      <HalfHeader />

      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.450387541737!2d16.853904815417657!3d41.124692979289215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e88d29e9c9cd%3A0x585d1b70ea5c31ce!2sSpazio%2013!5e0!3m2!1sit!2sit!4v1617447352263!5m2!1sit!2sit"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></Iframe>

      <div className="container-fluid d-flex justify-content-center py-md-5 py-5 bg-contact-social">
        <ul className="list-unstyled d-flex">
          <li>
            <Link className="p-0 m-0" to="">
              <i className="fab fa-facebook-f fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>
          </li>
          <li>
            <Link className="p-0 m-0" to="">
              <i className="fab fa-twitter fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>
          </li>
          <li>
            <Link className="p-0 m-0" to="">
              <i className="fab fa-instagram fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="row justify-content-center pt-5 mx-auto">
        <h1>Contattaci via Email</h1>
      </div>
      <hr className="separator"></hr>
      <div className="bg-form">
        <Form className="container p-5 px-custom">
          <Form.Group className="mt-5 row justify-content-between">
            <div className="col-12 col-md-6 my-3 my-md-0">
              {/* <Form.Label>Nome e Cognome</Form.Label> */}
              <Form.Control
                size="md"
                type="text"
                placeholder="NOME E COGNOME"
              />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-0">
              {/* <Form.Label>E-mail</Form.Label> */}
              <Form.Control size="md" type="text" placeholder="E-MAIL" />
            </div>
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Messaggio</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="IL TUO MESSAGGIO"
            />
          </Form.Group>
          <div className="row justify-content-center">
            <Link className="btn btn-lg btn-success border border-dark" to="">
              Invia
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Contatti;
