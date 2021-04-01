import { useState } from "react";

function Progetto() {
  const [filler, setFiller] = useState(true);

  document.addEventListener("scroll", function () {
    if (window.pageXOffset > window.pageYOffset > 200) {
      setFiller(!filler);
    }
  });

  return (
    <>
      <above>
        <div className={filler ? "filler-hg" : "d-none"}></div>
        <div className="container-fluid above">
          <div className="row my-5 py-5">
            <div className="col-6">
              <img src="" alt="" />
            </div>
            <div className="col-6">
              <h1 className="mt-5 pt-5">Il progetto</h1>
              <p className=" mr-5 mt-3 pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                soluta ea esse iste eius, non illo aliquid atque hic nisi,
                quidem fuga impedit consectetur quisquam laboriosam ipsam
                voluptatem. Ut, aliquid?
                <div className="row mt-5">
                  <a href="#" className="btn btn-danger rounded-pill">
                    Continua
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </above>
      <section>
        <div className="container-fluid bg-info">
          <div className="col-6">
            <h1 className="mt-5 pt-5">I Corsi</h1>
            <p className=" mr-5 mt-3 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
              fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
              aliquid?
              <div className="row mt-5">
                <a href="#" className="btn btn-danger rounded-pill">
                  Continua
                </a>
              </div>
            </p>
          </div>
          <div className="row my-5 py-5">
            <div className="col-6">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid bg-warning">
          <div className="row my-5 py-5">
            <div className="col-6">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-6">
            <h1 className="mt-5 pt-5">I Prodotti</h1>
            <p className=" mr-5 mt-3 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              soluta ea esse iste eius, non illo aliquid atque hic nisi, quidem
              fuga impedit consectetur quisquam laboriosam ipsam voluptatem. Ut,
              aliquid?
              <div className="row mt-5 p-4">
                <a href="#" className="btn btn-danger rounded-pill">
                  Continua
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Progetto;
