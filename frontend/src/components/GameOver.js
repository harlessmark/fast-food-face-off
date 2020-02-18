import React, { Component } from "react";
import Winner from "./Winner";
import Loser from "./Loser";
import { Container, Row, Col, Button } from "react-bootstrap";

class GameOver extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.props.state.currentGame.score >
            this.props.state.leaderboard[9].attributes.score ? (
              <Winner
                leaderboard={this.props.state.leaderboard}
                currentGame={this.props.state.currentGame}
                updateInitials={this.props.updateInitials}
                changeHandler={this.props.changeHandler}
              />
            ) : (
              <Loser leaderboard={this.props.state.leaderboard} />
            )}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="atuo">
            <Button onClick={this.props.playAgain}>Play Again?</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GameOver;
