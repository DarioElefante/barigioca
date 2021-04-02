import CarouselContainer from "../CarouselContainer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Progetto() {
  return (
    <>
      <section className="p-0 m-0">
        <div className="container-fluid d-flex flex-column justify-content-around above">
          <div className="row">
            <div data-aos="zoom-in-down" className="col-md-6 col-12 pt-5">
              <img
                className="img-fluid mx-auto d-block rounded rounded-pill"
                src="media/barigioca_logo.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-up" className="col-md-6 col-12">
              <h1 className="mt-5 pt-5">Il progetto</h1>
              <p className=" mr-md-5 mt-3 py-md-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                soluta ea esse iste eius, non illo aliquid atque hic nisi,
                quidem fuga impedit consectetur quisquam laboriosam ipsam
                voluptatem. Ut, aliquid?
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-lg-flex d-none">
            <HashLink to="#toBanners" className="text-center">
              <i className="fas fa-chevron-down fa-3x scrollDown transition"></i>
            </HashLink>
          </div>
        </div>
      </section>
      <div id="toBanners" className="fix-height d-lg-block d-none"></div>

      <CarouselContainer />

      {/* <section data-aos="fade-up" className="my-5">
        <div className="container-fluid bg-info">
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className="mt-5">I Corsi</h1>
              <p className=" mr-5 mt-3 ">
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
            <Link to="/Corsi" className="btn btn-lg btn-danger rounded-pill">
              Continua
            </Link>
          </div>
        </div>
      </section> */}

      <section data-aos="fade-up" className="my-5">
        <div className="container-fluid bg-warning">
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h1 className="">I Prodotti</h1>
            <p className=" mr-5 mt-3 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
              fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
              aliquid?
            </p>
          </div>
          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="/Prodotti" className="btn btn-lg btn-danger rounded-pill">
              Continua
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Progetto;
