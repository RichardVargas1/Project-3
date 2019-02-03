import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class HomePage extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;