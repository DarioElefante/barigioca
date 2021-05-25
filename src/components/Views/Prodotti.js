import HalfHeader from "../HalfHeader.js";
import Cards from "../Cards";

function Prodotti({ productCatalog }) {
  return (
    <>
      <HalfHeader />
      <div className="container my-5">
        <div className="row justify-content-around">
          {productCatalog.map((product) => (
            <Cards id={product.name} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Prodotti;
