import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homePage from "./webPages/homePage";
import politicsPage from "./webPages/politicsPage";
import sportsPage from "./webPages/sportsPage";
import filmPage from "./webPages/filmPage";
import Navbar from "./components/Navbar";
import SearchBar from './components/Search';
import youtubeSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail'
// import key from "./";
import logo from "./logo.svg";
import "./App.css";

const API_KEY = 'AIzaSyDpkI-jTmCIWJ0-ZljHhNo3XiIFj4-OvPg';
class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    this.videoSearch('Politics');
}

videoSearch(searchTerm) {
  youtubeSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });

}
  render() {
    return (
      <div>
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
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={homePage} />
//           <Route exact path="/politics" component={politicsPage} />
//           <Route exact path="/sports" component={sportsPage} />
//           <Route exact path="/film" component={filmPage} />
//         </Switch>
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>
//     </Router>
//   );
// }

export default App;
