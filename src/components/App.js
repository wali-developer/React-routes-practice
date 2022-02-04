import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-router-dom";
import Home from "./Home";
import Customers from "./Customers";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/Customers">
            <Customers />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
