import React, { Component } from "react";
import Leaderboard from "./Leaderboard";

class Winner extends Component {
  render() {
    return (
      <>
        <p>
          You placed in the top 10! Enter your initials to be immortalized
          forever (or up until you get bumped off the leaderboard).
        </p>

        <form onSubmit={this.props.submitHandler}>
          <input
            type="text"
            value={this.props.initials}
            placeholder="Your Initials"
            maxLength="3"
            onChange={this.props.changeHandler}
          />
          <button type="submit" onClick={this.props.updateInitials}>
            {" "}
            Enter{" "}
          </button>
        </form>

        <Leaderboard leaderboard={this.props.leaderboard} />
      </>
    );
  }
}

export default Winner;
