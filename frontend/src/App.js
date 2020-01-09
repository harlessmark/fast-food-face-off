import React, { Component } from "react";
import "./App.css";
import Foods from "./foods.json";

import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import Footer from "./components/Footer";

class App extends Component {
  // TODO: Brady said the super is wrong

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
      mostCalories,
      games: [],
      currentGame: {
        score: 0,
        initials: "",
        total_calories: 0
      },
      display: "instructions"
    };
  }

  newGame = e => {
    e.preventDefault();

    fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        game: {
          score: 0,
          initials: "",
          total_calories: 0
        }
      })
    });
    this.setState({
      display: "game on"
    });
  };

  clickHandler = e => {
    if (e.target.src === this.state.mostCalories.attributes.image) {
      this.setState({
        currentGame: {
          score: this.state.currentGame.score + 1,
          initials: "",
          total_calories:
            this.state.currentGame.total_calories +
            this.state.mostCalories.attributes.calories
        }
      });
      console.log("correct!");
    } else {
      console.log("GAME OVER");
      // change this.state.display to "game over"
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <img src={logo} alt="GitHub logo" id="github-logo" />

        {this.state.display === "instructions" ? (
          <Instructions clickHandler={this.newGame} />
        ) : null}

        {this.state.display === "game on" ? (
          <Game state={this.state} clickHandler={this.clickHandler} />
        ) : null}

        <Footer />
      </div>
    );
  }
}

export default App;
