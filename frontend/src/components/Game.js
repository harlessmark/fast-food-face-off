import React, { Component } from "react";

class Game extends Component {
  state = {
    firstRestaurant: this.props.state.restaurants.data[
      Math.floor(Math.random() * 9)
    ],
    secondRestaurant: this.props.state.restaurants.data[
      Math.floor(Math.random() * 9)
    ],
    firstFood: "",
    secondFood: ""
  };

  render(props) {
    return (
      <>
        <div>
          <h3>{this.state.firstRestaurant.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.state.firstRestaurant.attributes.logo}
            alt="restaurant logo"
          />
        </div>
        <div>
          <h3>{this.state.secondRestaurant.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.state.secondRestaurant.attributes.logo}
            alt="restaurant logo"
          />
        </div>
      </>
    );
  }
}

export default Game;
