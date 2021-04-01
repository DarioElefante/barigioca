const Footer = () => {
  return (
    <footer className="container-fluid bg-dark">
      <div className="row py-5">
        <div className="col-12 col-md-6">
          <img src="" alt="" />
          <ul className="text-light list-unstyled">
            <li>indirizzo</li>
            <li>telefono</li>
            <li>email</li>
          </ul>
        </div>
        <div className="col-12 col-md-6 text-right px-5">
          <ul className="text-light list-unstyled">
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
            <li>link5</li>
          </ul>
        </div>
      </div>
      <div className="row bg-main">
        <div className="col-12 text-center">p-iva</div>
      </div>
    </footer>
  );
};

export default Footer;
