import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <>
        <p>These are the instructions.</p>
        <button onClick={this.props.clickHandler}>NEW GAME</button>
      </>
    );
  }
}

export default Instructions;
