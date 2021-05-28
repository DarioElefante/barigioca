import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ProductSlideshow = ({ productCatalog }) => {
  return (
    <Carousel className="px-0 mx-0 py-5 prod" controls={false}>
      {productCatalog.map((product) => (
        <Carousel.Item className="rounded bg-transparent">
          <img
            className="d-block w-50 img-fluid mx-auto carousel rounded-pill shadow"
            src={product.image}
            alt={product.position}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default ProductSlideshow;
