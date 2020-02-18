import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = () => (
  <Container className="mt-5">
    <Row className="justify-content-sm-center">
      <Col sm="auto">
        <h5>
          Fast Food Face-Off /{" "}
          <a
            href="https://github.com/superhackerboy/fast-food-face-off"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h5>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
