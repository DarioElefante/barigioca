import HalfHeader from "../HalfHeader.js";
import Cards from "../Cards";

function Prodotti() {
  return (
    <>
      <HalfHeader />
      <div className="container my-5">
        <div className="row justify-content-around">
          <div className="my-5">
            <Cards />
          </div>
          <div className="my-5">
            <Cards />
          </div>
          <div className="my-5">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Prodotti;
