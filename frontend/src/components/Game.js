import React, { Component } from "react";
import Foods from "../foods.json";

class Game extends Component {
  constructor(props) {
    const firstFood = Foods[Math.floor(Math.random() * Foods.length)];

    const filteredList = Foods.filter(
      foodItem => foodItem.attributes.calories !== firstFood.attributes.calories
    );

    const secondFood =
      filteredList[Math.floor(Math.random() * filteredList.length)];

    let mostCalories = {};

    if (firstFood.attributes.calories > secondFood.attributes.calories) {
      mostCalories = firstFood;
    } else {
      mostCalories = secondFood;
    }

    super(props);
    this.state = {
      firstFood,
      secondFood,
      mostCalories
    };
  }

  // TODO: destructure and remove "attributes" in JSON file

  render() {
    return (
      <>
        <div>
          <h3>{this.state.firstFood.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.state.firstFood.attributes.restaurant_logo}
            alt="restaurant logo"
          />
        </div>

        <div>
          <h3>{this.state.secondFood.attributes.name}</h3>
          <img
            className="food-logo"
            src={this.state.secondFood.attributes.restaurant_logo}
            alt="restaurant logo"
          />
        </div>
      </>
    );
  }
}

export default Game;
