import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Customers from "./Customers";
import Contact from "./Contact";
import About from "./About";
import Product from "./Product";
import Error from "./Error";
import Details from "./Details";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/customers">
          <Customers />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
