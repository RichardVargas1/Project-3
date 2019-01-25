import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Homepage extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Speech Share</strong>
              </h1>
              <h2 className="text-center">Browse through this website for some videos.</h2>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homepage;