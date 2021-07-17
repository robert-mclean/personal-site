import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class Projects extends Component {
  render() {
    return (
        <Row className="body-section">
          <Container>
            <h2>Featured Projects</h2>
            <Container className="my-5">
              <Row>
                <Col sm>
                  <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={""} />
                  <Card.Body>
                      <Card.Title>Project To Be Added</Card.Title>
                      <Card.Text>
                      TBD
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
                </Col>
                <Col sm>
                  <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={""} />
                  <Card.Body>
                      <Card.Title>Project To Be Added</Card.Title>
                      <Card.Text>
                      TBD
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>
    );
  }
}

export default Projects;
