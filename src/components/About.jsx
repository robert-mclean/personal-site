import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class About extends Component {
  render() {
    return (
        <Row className="title-section">
          <Col className="align-self-center">
            <div class="large-heading align-self-center">
              <h1><span className="text-primary font-weight-bold">Hello!</span></h1>
              <h1>My name is Robert.</h1>
              <p>I'm a Software Engineer with experience developing full stack web applications. Currently working on financial services technology.</p>
              <p>UNC - Chapel Hill graduate with a B.S. in Computer Science.</p>
            </div>
            <br/>
            <Button variant="outline-primary" size="lg">Contact Me</Button>
          </Col>
        </Row>
    );
  }
}

export default About;
