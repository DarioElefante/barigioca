import HalfHeader from "../HalfHeader.js";
import Cards from "../Cards";

function Prodotti() {
  return (
    <>
      <HalfHeader />
      <div className="container my-5">
        <div className="row justify-content-around">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Prodotti;
