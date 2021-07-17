import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

class Body extends Component {
  render() {
    return (
        <Container>
            <About />
            <Experience />
            <Projects />
        </Container>
    );
  }
}

export default Body;
