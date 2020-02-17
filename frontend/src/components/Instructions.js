import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Instructions extends Component {
  render() {
    return (
      <>
        <p>
          The game is simple. You'll be shown two randomly selected fast foods.
          Your task is to guess which one has the most calories. You get 1 point
          for each correct guess. Your game is over once you make an incorrect
          guess. Good luck!
        </p>
        <Button onClick={this.props.clickHandler}>NEW GAME</Button>
      </>
    );
  }
}

export default Instructions;
