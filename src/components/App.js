import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
