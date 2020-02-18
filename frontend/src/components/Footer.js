import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <Container className="fixed-bottom">
    <Row className="justify-content-center">
      <Col sm="auto">
        <p>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/superhackerman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Super Hacker Man
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Footer;
