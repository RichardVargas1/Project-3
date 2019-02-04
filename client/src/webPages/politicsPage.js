import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchBar from '../components/Search';
import youtubeSearch from 'youtube-api-search';
// import VideoList from '../components/video-list';
import VideoDetail from '../components/video-detail';
// import "./style.css";

const API_KEY = 'AIzaSyDpkI-jTmCIWJ0-ZljHhNo3XiIFj4-OvPg';
class PoliticsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('YouTube');
  }

  videoSearch(searchTerm) {
    youtubeSearch({ key: API_KEY, term: searchTerm }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {/* <h1 className="text-center">
              <strong>Famous Political Speeches</strong>
            </h1>
            <h2 className="text-center">Browse through this webpage for some full text speeches, and their videos.</h2> */}
            <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
            <VideoDetail video={this.state.selectedVideo} />
            {/* <VideoList
              onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
              videos={this.state.videos} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PoliticsPage;