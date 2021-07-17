import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect sticky="top" expand="md" bg="dark" variant="dark">
        <Container fluid="xl">
          <Navbar.Brand><b>Robert McLean</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/robert-mclean">GitHub</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/robert-h-mclean">LinkedIn</Nav.Link>
              <Nav.Link href="TODO">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
