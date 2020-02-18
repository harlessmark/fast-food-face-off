import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import { Container, Row, Col } from "react-bootstrap";

class Loser extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4 mb-3">
          <Col sm="auto">
            <h1>
              <b>GAME OVER</b>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto">
            <Leaderboard leaderboard={this.props.leaderboard} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Loser;
