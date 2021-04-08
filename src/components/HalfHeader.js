import { useState } from "react";

const [header, setHeader] = useState();

const changeHeader = () => {
  const url = window.location.href;

  if (url === "http://localhost:3000/Corsi") {
    setHeader("I Corsi");
  } else if (url === "http://localhost:3000/Prodotti") {
    setHeader("I Prodotti");
  }
};
changeHeader();
const HalfHeader = () => {
  return (
    <section className="p-0 m-0">
      <div className="container-fluid d-flex flex-column justify-content-around half-above">
        <div className="row">
          <div data-aos="zoom-in-up" className="col-12">
            <h1 className="mt-5 pt-5">{header}</h1>
            <p className=" mr-md-5 mt-3 py-md-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
              fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
              aliquid?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HalfHeader;
