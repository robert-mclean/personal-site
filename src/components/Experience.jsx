import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Experience extends Component {
  render() {
    return (
        <Row className="body-section">
          <Container>
            <h2>Work Experience</h2>
            <Container className="employment-table">
              <Row>
                <Col className="text-right">
                  <p class="font-weight-bold">nCino</p>
                  <p>Software Engineer</p>
                </Col>
                <Col xs={1}>
                </Col>
                <Col className="text-left">
                  <p>Feb 2021 - Present</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-right">
                  <p class="font-weight-bold">nCino</p>
                  <p>Associate Software Engineer</p>
                </Col>
                <Col xs={1}>
                </Col>
                <Col className="text-left">
                  <p>Jun 2019 - Jan 2021</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-right">
                  <p class="font-weight-bold">University of North Carolina at Chapel Hill</p>
                  <p>Undergraduate Teaching Assistant</p>
                </Col>
                <Col xs={1}>
                </Col>
                <Col className="text-left">
                  <p>Jan 2019 - May 2019</p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>
    );
  }
}

export default Experience;
