import React, { Component } from "react";
import Leaderboard from "./Leaderboard";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Winner extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4 mb-3">
          <Col sm="auto">
            <h1>
              <b>GAME OVER</b>
            </h1>
            <p>Enter your initials, you winner.</p>
          </Col>
        </Row>

        <Form>
          <Row className="justify-content-center">
            <Col sm="auto">
              <Form.Group onSubmit={this.props.submitHandler}>
                <Form.Control
                  type="text"
                  value={this.props.currentGame.initials}
                  maxLength="3"
                  onChange={this.props.changeHandler}
                />
              </Form.Group>
            </Col>
            <Col sm="auto">
              <Button
                variant="primary"
                type="submit"
                onClick={this.props.updateInitials}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="justify-content-center">
          <Col sm="auto">
            <Leaderboard leaderboard={this.props.leaderboard} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Winner;
