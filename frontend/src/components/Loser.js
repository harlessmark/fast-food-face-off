import React, { Component } from "react";
import Leaderboard from "./Leaderboard";

class Loser extends Component {
  render() {
    return (
      <>
        <p>
          But you didn't place in the top 10 :( I suggest you admire this
          leaderboard of <b>winners</b> and try again.
        </p>
        <Leaderboard leaderboard={this.props.leaderboard} />
      </>
    );
  }
}

export default Loser;
