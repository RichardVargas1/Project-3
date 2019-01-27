import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./webPages/homePage";
import politicsPage from "./webPages/politicsPage";
import sportsPage from "./webPages/sportsPage";
import filmPage from "./webPages/filmPage";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route exact path="/politics" component={politicsPage} />
          <Route exact path="/sports" component={sportsPage} />
          <Route exact path="/film" component={filmPage} />
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </Router>
  );
}

export default App;
