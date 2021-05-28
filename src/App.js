import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contatti from "./components/Views/Contatti";
import Corsi from "./components/Views/Corsi";
import Prodotti from "./components/Views/Prodotti";
import Progetto from "./components/Views/Progetto";
import { useEffect, useState } from "react";

function App() {
  const [navbar, setNav] = useState(false);
  const [smartmenu, setSmart] = useState(false);

  const productCatalog = [
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Alabarda Spaziale",
      description: "Alabarda Spaziale",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Alabarda Spaziale",
      description: "Alabarda Spaziale",
    },
  ];

  const corsi = [
    {
      image: "./media/alabarda_spaziale2.jpg",
      position: "First Slide",
      name: "Alabarda Spaziale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "./media/alabarda_spaziale2.jpg",
      position: "Second Slide",
      name: "Alabarda Spaziale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const navbarOnSCroll = () => {
    if (window.pageYOffset > 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", navbarOnSCroll);
  }, []);

  const displayMenu = () => {
    setSmart(!smartmenu);
  };

  return (
    <Router>
      <>
        <Nav navbar={navbar} smartmenu={smartmenu} displayMenu={displayMenu} />
        <Switch>
          <Route exact path="/">
            <Progetto productCatalog={productCatalog} corsi={corsi} />
          </Route>
          <Route path="/Corsi">
            <Corsi corsi={corsi} />
          </Route>
          <Route path="/Prodotti">
            <Prodotti productCatalog={productCatalog} />
          </Route>
          <Route path="/Contatti">
            <Contatti />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
