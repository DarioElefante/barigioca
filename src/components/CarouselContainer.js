import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselContainer = ({ corsi }) => {
  return (
    <Carousel controls={false} data-aos="fade-up" className="h-75">
      {corsi.map((corso) => (
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src={corso.image}
            alt={corso.position}
          />
          <Carousel.Caption className="text-dark">
            <h1 className="mt-5">{corso.name}</h1>
            <p className=" mr-5 mt-3 ">{corso.description}</p>

            <div className="row mt-5 p-4 text-right justify-content-end">
              <Link to="/Corsi" className="btn btn-lg btn-danger rounded-pill">
                Continua
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default CarouselContainer;
