import { Link } from "react-router-dom";
import HalfHeader from "../HalfHeader.js";

function Corsi() {
  return (
    <>
      <HalfHeader />

      <section data-aos="fade-up" className="my-5">
        <div className="container-fluid py-4 bg-warning">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <h1 className="">Corso 1</h1>
              <p className=" mr-5 mt-3 pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                soluta ea esse iste eius, non illo aliquid atque hic nisi,
                quidem fuga impedit consectetur quisquam laboriosam ipsam
                voluptatem. Ut, aliquid?
              </p>
            </div>
          </div>
          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="" className="btn btn-lg btn-success rounded-pill">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="my-5">
        <div className="container-fluid py-4 bg-danger">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className="">Corso 2</h1>
              <p className=" mr-5 mt-3 pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                soluta ea esse iste eius, non illo aliquid atque hic nisi,
                quidem fuga impedit consectetur quisquam laboriosam ipsam
                voluptatem. Ut, aliquid?
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src="" alt="" />
            </div>
          </div>
          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="" className="btn btn-lg btn-warning rounded-pill">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="my-5">
        <div className="container-fluid py-4 bg-success">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="" alt="" />
            </div>

            <div className="col-md-6 col-12">
              <h1 className="">Corso 3</h1>
              <p className=" mr-5 mt-3 pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                soluta ea esse iste eius, non illo aliquid atque hic nisi,
                quidem fuga impedit consectetur quisquam laboriosam ipsam
                voluptatem. Ut, aliquid?
              </p>
            </div>
          </div>
          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="" className="btn btn-lg btn-danger rounded-pill">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Corsi;
