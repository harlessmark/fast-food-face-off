import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

class Game extends Component {
  componentDidMount() {
    // begins countdown
    this.props.gameCountdown();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4 mb-4">
          <Col sm="auto">
            <h1 className="display-3">
              {this.props.state.isCorrect ? (
                <h1 className="display-3">CORRECT</h1>
              ) : this.props.state.isCorrect === false ? (
                <h1 className="display-3">WRONG</h1>
              ) : (
                this.props.state.timer
              )}
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} lg="auto">
            <Card
              className="mb-4"
              onClick={this.props.clickHandler}
              style={{ width: "20rem" }}
              id={this.props.state.firstFood.attributes.image}
            >
              <Card.Img
                variant="top"
                src={this.props.state.firstFood.attributes.image}
                alt="fast food"
              />
              <Card.Body>
                <Card.Title
                  className={
                    this.props.state.mostCalories === this.props.state.firstFood
                      ? this.props.state.showCalories
                        ? "correct"
                        : null
                      : this.props.state.showCalories
                      ? "incorrect"
                      : null
                  }
                >
                  {this.props.state.showCalories
                    ? this.props.state.firstFood.attributes.calories
                    : this.props.state.firstFood.attributes.name}{" "}
                  Calories
                </Card.Title>
                <Card.Text>
                  {this.props.state.firstFood.attributes.restaurant.replace(
                    "+",
                    " "
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg="auto">
            <Card
              onClick={this.props.clickHandler}
              style={{ width: "20rem" }}
              id={this.props.state.secondFood.attributes.image}
            >
              <Card.Img
                variant="top"
                src={this.props.state.secondFood.attributes.image}
                alt="fast food"
              />
              <Card.Body>
                <Card.Title
                  className={
                    this.props.state.mostCalories ===
                    this.props.state.secondFood
                      ? this.props.state.showCalories
                        ? "correct"
                        : null
                      : this.props.state.showCalories
                      ? "incorrect"
                      : null
                  }
                >
                  {this.props.state.showCalories
                    ? this.props.state.secondFood.attributes.calories
                    : this.props.state.secondFood.attributes.name}{" "}
                  Calories
                </Card.Title>
                <Card.Text>
                  {this.props.state.secondFood.attributes.restaurant.replace(
                    "+",
                    " "
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto mb-2">
            <h3 sm="mb-5">
              {this.props.state.currentGame.score === 1
                ? "KILLING SPREE"
                : null}
              {this.props.state.currentGame.score === 2
                ? "KILLING FRENZY"
                : null}
              {this.props.state.currentGame.score === 3 ? "RUNNING RIOT" : null}
              {this.props.state.currentGame.score === 4 ? "RAMPAGE" : null}
              {this.props.state.currentGame.score === 5 ? "UNTOUCHABLE" : null}
              {this.props.state.currentGame.score === 6 ? "INVINCIBLE" : null}
              {this.props.state.currentGame.score === 7
                ? "INCONVEIVABLE"
                : null}
              {this.props.state.currentGame.score === 8
                ? "UNFRIGGENBELIEVEABLE"
                : null}
              {this.props.state.currentGame.score >= 9 ? "COMEBACK" : null}
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
