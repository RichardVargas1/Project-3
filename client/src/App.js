import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import homePage from "./webPages/homePage";
import politicsPage from "./webPages/politicsPage";
import sportsPage from "./webPages/sportsPage";
import filmPage from "./webPages/filmPage";
import Navbar from "./components/Navbar";
import SignUp from "./components/Sign-Up";
import Login from "./components/Login";
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
            {/* <Route
              exact path="/"
              component={Home} /> */}
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