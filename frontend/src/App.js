import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

const newGame = e => {};

class App extends Component {
  state = {
    games: {},
    restaurants: {},
    foods: {}
  };

  componentDidMount() {
    // fetches games, restaurants and foods data on page load
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
  }

  render() {
    return (
      <div>
        <Navbar />
        <Instructions clickHandler={newGame} />
        <Footer />
      </div>
    );
  }
}

export default App;
