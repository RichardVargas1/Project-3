import React, { Component } from "react";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class politicsPage extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Speech Share</strong>
              </h1>
              <h2 className="text-center">Browse through this website for some videos.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default politicsPage;