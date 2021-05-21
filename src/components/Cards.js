import Flippy, { FrontSide, BackSide } from "react-flippy";

function Prodotti({ product }) {
  console.log(product.image);
  return (
    <div className="my-5">
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        src={product.image} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "300px", height: "400px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}
          className="p-0 mx-0 rounded "
        >
          <div className="container-fluid m-0 p-0">
            <img
              src="public\media\alabarda_spaziale.jpg"
              className="img-fluid mx-auto"
              alt=""
            />
          </div>
        </FrontSide>
        <BackSide style={{ backgroundColor: "#175852" }} className="rounded ">
          {" "}
          <div className="py-3">
            <h4 id="title">{product.name}</h4>
            <p id="description">{product.description}</p>
          </div>
        </BackSide>
      </Flippy>
    </div>
  );
}

export default Prodotti;
