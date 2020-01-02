import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    games: {},
    currentGame: {
      score: 0,
      initials: "",
      total_calories: 0
    },
    restaurants: {},
    foods: {},
    display: ""
  };

  newGame = e => {
    e.preventDefault();
    fetch("http://localhost:3000/games")
      .then(response => response.json())
      .then(games =>
        this.setState({
          games
        })
      );

    fetch("https://api.jsonbin.io/b/5e0bbfcf02ce5777b8b583e6")
      .then(response => response.json())
      .then(restaurants =>
        this.setState({
          restaurants
        })
      );

    fetch("https://api.jsonbin.io/b/5e0bbf5f02ce5777b8b583b6")
      .then(response => response.json())
      .then(foods =>
        this.setState({
          foods
        })
      );

    this.setState({
      display: "game on"
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Instructions clickHandler={this.newGame} />
        <Footer />
      </div>
    );
  }
}

export default App;
