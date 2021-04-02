import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid carousel"
          src="media/barigioca_logo.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-dark">
          <h1 className="mt-5">I Corsi</h1>
          <p className=" mr-5 mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
            fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
            aliquid?
          </p>

          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="/Corsi" className="btn btn-lg btn-danger rounded-pill">
              Continua
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  w-100 img-fluid carousel"
          src="media/barigioca_logo.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="text-dark">
          <h1 className="mt-5">I Corsi</h1>
          <p className=" mr-5 mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
            fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
            aliquid?
          </p>

          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="/Corsi" className="btn btn-lg btn-danger rounded-pill">
              Continua
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid carousel"
          src="media/barigioca_logo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-dark">
          <h1 className="mt-5">I Corsi</h1>
          <p className=" mr-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
            fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
            aliquid?
          </p>

          <div className="row mt-5 p-4 text-right justify-content-end">
            <Link to="/Corsi" className="btn btn-lg btn-danger rounded-pill">
              Continua
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselContainer;
