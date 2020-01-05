import React, { Component } from "react";
import Foods from "../foods.json";

class Game extends Component {
  state = {
    firstFood: Foods[Math.floor(Math.random() * Foods.length)],
    secondFood: Foods[Math.floor(Math.random() * Foods.length)],
    mostCalories: "placeholder - either firstFood or secondFood, duh"
  };

  componentDidMount() {
    while (
      // to check that the two foods' calories are not the same
      // '!==' will be '===' once this while loop works correctly

      this.state.firstFood.attributes.calories !==
      this.state.secondFood.attributes.calories
    ) {
      console.log(this.state.firstFood.attributes.calories);
      console.log(this.state.secondFood.attributes.calories);
      debugger;
      // an infinite loop because the below code doesn't change state at all

      this.setState({
        firstFood: Foods[Math.floor(Math.random() * Foods.length)],
        secondFood: Foods[Math.floor(Math.random() * Foods.length)]
      });
    }
  }

  render() {
    return <></>;
  }
}

export default Game;

// <div>
//   <h3>{this.state.firstRestaurant.attributes.name}</h3>
//   <img
//     className="food-logo"
//     src={this.state.firstRestaurant.attributes.logo}
//     alt="restaurant logo"
//   />
// </div>
// <div>
//   <h3>{this.state.secondRestaurant.attributes.name}</h3>
//   <img
//     className="food-logo"
//     src={this.state.secondRestaurant.attributes.logo}
//     alt="restaurant logo"
//   />
// </div>
