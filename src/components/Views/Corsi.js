import { Link } from "react-router-dom";
import HalfHeader from "../HalfHeader.js";

function Corsi({ corsi }) {
  return (
    <>
      <HalfHeader />
      {corsi.map((corso) => (
        <section data-aos="fade-up" className="my-5">
          <div className="container-fluid py-4 bg-warning">
            <div className="row">
              <div className="col-md-6 col-12">
                <img src="" alt="" />
              </div>
              <div className="col-md-6 col-12">
                <h1 className="">{corso.name}</h1>
                <p className=" mr-5 mt-3 pt-5">{corso.description}</p>
              </div>
            </div>
            <div className="row mt-5 p-4 text-right justify-content-end">
              <Link to="" className="btn btn-lg btn-success rounded-pill">
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Corsi;
