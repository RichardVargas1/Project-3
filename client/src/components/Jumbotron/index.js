import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";
class Jumbotron extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <div id="jumbotron">
              <h1 className="text-center">
                <strong>Welcome to Spech Share</strong>
              </h1>
              <h2 className="text-center">User's will be able to create a profile. From there, they will be able to view speeches from a multitude of websites. Be it famous speeches made in a political, sports or film setting. From there, they will have the option of being able to post these speeches on their profile, or share them with other people, if they so wish. These speeches will be in text format, as well as video format: linked together.</h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jumbotron;