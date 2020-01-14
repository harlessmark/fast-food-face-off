import React, { Component } from "react";
import "./App.css";
import Foods from "./foods.json";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    const firstFood = Foods[Math.floor(Math.random() * Foods.length)];

    const filteredList = Foods.filter(
      foodItem => foodItem.attributes.calories !== firstFood.attributes.calories
    );

    const secondFood =
      filteredList[Math.floor(Math.random() * filteredList.length)];

    const mostCalories =
      firstFood.attributes.calories > secondFood.attributes.calories
        ? firstFood
        : secondFood;

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

  newFoods = () => {
    const newFirstFood = Foods[Math.floor(Math.random() * Foods.length)];

    const filteredList = Foods.filter(
      foodItem =>
        foodItem.attributes.calories !== newFirstFood.attributes.calories
    );

    const newSecondFood =
      filteredList[Math.floor(Math.random() * filteredList.length)];

    const newMostCalories =
      newFirstFood.attributes.calories > newSecondFood.attributes.calories
        ? newFirstFood
        : newSecondFood;

    this.setState({
      firstFood: newFirstFood,
      secondFood: newSecondFood,
      mostCalories: newMostCalories
    });
  };

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

  gameOver = () => {
    fetch("http://localhost:3000/games")
      .then(res => res.json())
      .then(({ data }) =>
        this.setState({
          games: data
        })
      );
    this.setState({
      display: "game over"
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
      this.newFoods();
    } else {
      this.gameOver();
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

        {this.state.display === "game over" ? (
          <GameOver state={this.state} />
        ) : null}
        <Footer />
      </div>
    );
  }
}
export default App;
