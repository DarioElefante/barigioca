import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contatti from "./components/Views/Contatti";
import Corsi from "./components/Views/Corsi";
import Prodotti from "./components/Views/Prodotti";
import Progetto from "./components/Views/Progetto";

function App() {
  return (
    <Router>
      <>
        <Nav />
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
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default App;
