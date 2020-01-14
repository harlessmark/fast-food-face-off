import React, { Component } from "react";
import Winner from "./Winner";
import Loser from "./Loser";

class GameOver extends Component {
  topTen = Array.from(this.props.state.games)
    .sort((a, b) => {
      return b.attributes.score - a.attributes.score;
    })
    .slice(0, 10);

  render() {
    debugger;
    return (
      <>
        <h1>GAME OVER</h1>
        <p>You got {this.props.state.currentGame.score} correct!</p>
      </>
    );
  }
}

export default GameOver;

// where to declare topTen variable?
// TODO: Add initials

// {this.props.state.currentGame.score > topTen.score ? (
//   <Winner />
// ) : (
//   <Loser />
// )}
