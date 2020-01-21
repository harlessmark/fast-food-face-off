import React, { Component } from "react";
import Winner from "./Winner";
import Loser from "./Loser";

class GameOver extends Component {
  render() {
    return (
      <>
        {this.props.state.timer === 0 ? (
          <button onClick={this.props.playAgain}>Play Again?</button>
        ) : (
          <p>Play again in {this.props.state.timer}</p>
        )}

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
      </>
    );
  }
}

export default GameOver;
