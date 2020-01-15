import React, { Component } from "react";

class Leaderboard extends Component {
  render() {
    return (
      <ol>
        {this.props.leaderboard.map(item => {
          return (
            <li key={item.id}>
              {item.attributes.initials.toUpperCase()} {item.attributes.score}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default Leaderboard;
