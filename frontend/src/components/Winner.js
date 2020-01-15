import React, { Component } from "react";
import Leaderboard from "./Leaderboard";

class Winner extends Component {
  render() {
    return (
      <>
        <p>
          You placed in the top 10! Enter your initials to be immortalized
          forever (or whenever you get bumped off the leaderboard).
        </p>

        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="initials"
            maxLength="3"
            onChange={this.changeHandler}
          />
          <button type="submit"> Enter </button>
        </form>

        <Leaderboard leaderboard={this.props.leaderboard} />
      </>
    );
  }
}

export default Winner;

// TODO: Add initials
