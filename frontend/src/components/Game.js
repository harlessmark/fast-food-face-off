import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Game extends Component {
  componentDidMount() {
    // begins countdown
    this.props.gameCountdown();
  }

  render() {
    return (
      <>
        <div>
          <h1>
            {this.props.state.isCorrect ? (
              <h1>CORRECT</h1>
            ) : this.props.state.isCorrect === false ? (
              <h1>WRONG</h1>
            ) : (
              this.props.state.timer
            )}
          </h1>
        </div>

        <Card
          onClick={this.props.clickHandler}
          style={{ width: "28rem" }}
          id={this.props.state.firstFood.attributes.image}
        >
          <Card.Img
            variant="top"
            src={this.props.state.firstFood.attributes.image}
            alt="fast food"
          />
          <Card.Body>
            <Card.Title>
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

        <Card
          onClick={this.props.clickHandler}
          style={{ width: "28rem" }}
          id={this.props.state.secondFood.attributes.image}
        >
          <Card.Img
            variant="top"
            src={this.props.state.secondFood.attributes.image}
            alt="fast food"
          />
          <Card.Body>
            <Card.Title>
              {this.props.state.showCalories
                ? this.props.state.secondFood.attributes.calories
                : this.props.state.firstFood.attributes.name}{" "}
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
      </>
    );
  }
}

export default Game;
