import React, { Component } from "react";

class Game extends Component {
  componentDidMount() {
    // begins countdown
    this.props.countdown();
  }

  render() {
    return (
      <>
        <div>
          <h3>{this.props.state.firstFood.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.props.state.firstFood.attributes.restaurant_logo}
            alt="restaurant logo"
          />
          <img
            onClick={this.props.clickHandler}
            src={this.props.state.firstFood.attributes.image}
            alt="fast food"
          />
        </div>

        <div>
          <h3>{this.props.state.secondFood.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.props.state.secondFood.attributes.restaurant_logo}
            alt="restaurant logo"
          />
          <img
            onClick={this.props.clickHandler}
            src={this.props.state.secondFood.attributes.image}
            alt="fast food"
          />
        </div>
        <h1>{this.props.state.timer}</h1>
      </>
    );
  }
}

export default Game;
