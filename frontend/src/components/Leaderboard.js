import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Leaderboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="auto">
            <ol className="display-5">
              {this.props.leaderboard.map(item => {
                return (
                  <li key={item.id}>
                    {item.attributes.initials.toUpperCase()}{" "}
                    {item.attributes.score}
                  </li>
                );
              })}
            </ol>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Leaderboard;
