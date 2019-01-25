import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./webPages/homePage";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Router>
  );
}

export default App;
