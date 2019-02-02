import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './webPages/homePage';
import Politics from './webPages/politicsPage';
import Sports from './webPages/sportsPage';
import Films from './webPages/filmsPage';
import Login from "./components/Login";
import SignUp from "./components/Sign-Up";
import Footer from "./components/Footer";
// import SearchBar from './components/Search';
// import youtubeSearch from 'youtube-api-search';
// import VideoList from './components/video-list';
// import VideoDetail from './components/video-detail'
import "./App.css";

// import key from "./";
// const API_KEY = 'AIzaSyDpkI-jTmCIWJ0-ZljHhNo3XiIFj4-OvPg';
class App extends Component {
  constructor() {
    super()
    this.state = {
      userLoggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        this.setState({
          userLoggedIn: true,
          username: response.data.user.username
        })
      } else {
        this.setState({
          userLoggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar updateUser={this.updateUser} userLoggedIn={this.state.userLoggedIn} />
            <Route
              path="/"
              render={() =>
                <Home
                  loggedIn={this.state.loggedIn}
                />}
            />
            <Route
              path="/politics"
              render={() =>
                <Politics
                  loggedIn={this.state.loggedIn}
                />}
            />
            <Route
              path="/sports"
              render={() =>
                <Sports
                  loggedIn={this.state.loggedIn}
                />}
            />
            <Route
              path="/films"
              render={() =>
                <Films
                  loggedIn={this.state.loggedIn}
                />}
            />
            <Route
              path="/login"
              render={() =>
                <Login
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/sign-up"
              render={() =>
                <SignUp
                  SignUp={this.SignUp}
                />}
            />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;