import React, { Component } from "react";

class Game extends Component {
  state = {
    firstFood: {},
    secondFood: {},
    correctFood: "placeholder - either firstFood or secondFood, duh"
  };

  componentDidMount() {
    // selects random food from selected restaurants

    // const firstRestaurantID = parseInt(this.state.firstRestaurant.id);
    // const firstRestaurantFoods = this.props.state.foods.data.filter(function(
    //   restaurantFoods
    // ) {
    //   return restaurantFoods.attributes.restaurant_id === firstRestaurantID;
    // });
    //
    // const secondRestaurantID = parseInt(this.state.secondRestaurant.id);
    // const secondRestaurantFoods = this.props.state.foods.data.filter(function(
    //   restaurantFoods
    // ) {
    //   return restaurantFoods.attributes.restaurant_id === secondRestaurantID;
    // });
    //
    // this.setState({
    //   firstFood: Math.floor(Math.random() * firstRestaurantFoods.length),
    //   secondFood: Math.floor(Math.random() * secondRestaurantFoods.length)
    // });

    const allFoods = this.props.state.foods.data;

    console.log(allFoods);
    debugger;

    const firstFood = allFoods[Math.floor(Math.random() * allFoods.length)];
    const secondFood = allFoods[Math.floor(Math.random() * allFoods.length)];

    // TODO: firstFood and secondFood shouldn't have the same number of calories

    this.setState({
      firstFood,
      secondFood
    });
  }

  render(props) {
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
