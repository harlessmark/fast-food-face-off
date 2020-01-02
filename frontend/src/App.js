import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

const newGame = e => {
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
};

class App extends Component {
  state = {
    restaurants: {},
    foods: {}
  };

  componentDidMount() {
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
