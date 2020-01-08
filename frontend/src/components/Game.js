import React, { Component } from "react";
import Foods from "../foods.json";

class Game extends Component {
  state = {
    firstFood: Foods[Math.floor(Math.random() * Foods.length)],
    secondFood: {},
    mostCalories: "placeholder"
  };

  componentDidMount() {
    this.setState(prevState => {
      const filteredList = Foods.filter(
        foodItem =>
          foodItem.attributes.calories !==
          prevState.firstFood.attributes.calories
      );
      return {
        secondFood:
          filteredList[Math.floor(Math.random() * filteredList.length)]
      };
    });
  }

  render() {
    console.log(this.state);
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

// setTimeout(() => {
//   // checks to see two foods' calories aren't the same
//   while (
//     this.state.firstFood.attributes.calories ===
//     this.state.secondFood.attributes.calories
//   ) {
//     console.log(this.state.firstFood.attributes.calories);
//     console.log(this.state.secondFood.attributes.calories);
//     debugger;
//
//     this.setState({
//       firstFood: Foods[Math.floor(Math.random() * Foods.length)]
//     });
//   }
// }, 500);
//
// if (
//   this.state.firstFood.attributes.calories >
//   this.state.secondFood.attributes.calories
// ) {
//   this.setState({
//     mostCalories: this.state.firstFood
//   });
// }
//
// if (
//   this.state.firstFood.attributes.calories >
//   this.state.secondFood.attributes.calories
// ) {
//   this.setState({
//     mostCalories: this.state.firstFood
//   });
// } else {
//   this.setState({
//     mostCalories: this.state.secondFood
//   });
// }
