import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/ldcakes" component={Home} />
          <Route path="/ldcakes/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
