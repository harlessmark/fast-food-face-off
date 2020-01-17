import React, { Component } from "react";
import Winner from "./Winner";
import Loser from "./Loser";

class GameOver extends Component {
  constructor(props) {
    super(props);

    const leaderboard = Array.from(this.props.state.games)
      .sort((a, b) => {
        return b.attributes.score - a.attributes.score;
      })
      .slice(0, 10);

    this.state = {
      leaderboard
    };
  }

  render() {
    return (
      <>
        {this.props.state.currentGame.score >
        this.state.leaderboard[9].attributes.score ? (
          <Winner
            state={this.props.state}
            leaderboard={this.state.leaderboard}
            updateInitials={this.props.updateInitials}
            changeHandler={this.props.changeHandler}
          />
        ) : (
          <Loser
            state={this.props.state}
            leaderboard={this.state.leaderboard}
          />
        )}
      </>
    );
  }
}

export default GameOver;
