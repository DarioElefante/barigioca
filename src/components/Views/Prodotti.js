import HalfHeader from "../HalfHeader.js";
import Cards from "../Cards";

function Prodotti() {
  const productCatalog = [
    {
      image: "publicmediaalabarda_spaziale.jpg",
      name: "Alabarda Spaziale",
      description: "Alabarda Spaziale",
    },
    {
      image: "publicmediaalabarda_spaziale.jpg",
      name: "Alabarda Spaziale",
      description: "Alabarda Spaziale",
    },
  ];

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
