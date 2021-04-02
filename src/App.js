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

  const navbarOnSCroll = () => {
    if (window.pageYOffset > 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 770) {
      setNav(true);
    } else {
      document.addEventListener("scroll", navbarOnSCroll);
    }
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
            <Progetto />
          </Route>
          <Route path="/Corsi">
            <Corsi />
          </Route>
          <Route path="/Prodotti">
            <Prodotti />
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
