import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class PoliticsPage extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">
              <strong>Famous Political Speeches</strong>
            </h1>
            <h2 className="text-center">Browse through this webpage for some full text speeches, and their videos.</h2>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default PoliticsPage;