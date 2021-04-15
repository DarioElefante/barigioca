import Flippy, { FrontSide, BackSide } from "react-flippy";

function Prodotti() {
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      src="https://picsum.photos/200/300" // to use toggle method like this.flippy.toggle()
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
            className="img-fluid mx-auto"
            src="https://picsum.photos/400/550"
            alt=""
          />
        </div>
      </FrontSide>
      <BackSide style={{ backgroundColor: "#175852" }} className="rounded ">
        {" "}
        <div className="py-3">
          <h4>Product description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            rerum, quo magni quis dolores repudiandae debitis in quidem quasi.
            Nulla modi tempore sunt. Totam quae magnam aliquam error molestias
            aut.
          </p>
        </div>
      </BackSide>
    </Flippy>
  );
}

export default Prodotti;
