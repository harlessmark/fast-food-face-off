import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    games: [],
    currentGame: {
      score: 0,
      initials: "",
      total_calories: 0
    },
    display: "instructions"
  };

  componentDidMount() {
    // fetches games, restaurants and foods data on page load

    fetch("http://localhost:3000/games")
      .then(response => response.json())
      .then(({ data }) =>
        this.setState({
          games: data
        })
      );
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

  render() {
    return (
      <div>
        <Navbar />
        <img src={logo} alt="GitHub logo" id="github-logo" />

        {this.state.display === "instructions" ? (
          <Instructions clickHandler={this.newGame} />
        ) : null}

        {this.state.display === "game on" ? <Game state={this.state} /> : null}

        <Footer />
      </div>
    );
  }
}

export default App;
