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
      api: "http://localhost:3000/games",
      leaderboard: null,
      firstFood,
      secondFood,
      mostCalories,
      games: null,
      currentGame: {
        id: null,
        score: null,
        initials: null
      },
      display: "instructions"
    };
  }

  componentDidMount() {
    // listens for left or right arrow press
    document.addEventListener("keydown", this.logKey);

    fetch(this.state.api)
      // retreives all Games played
      .then(res => res.json())
      .then(({ data }) =>
        this.setState({
          games: data
        })
      );
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

    fetch(this.state.api, {
      // creates new Game instance
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        game: {
          score: 0,
          initials: "aaa"
        }
      })
    });

    fetch(this.state.api)
      // sets id in State
      .then(res => res.json())
      .then(
        ({ data }) =>
          this.setState({
            currentGame: {
              id: data.length,
              score: 0,
              initials: ""
            }
          }),
        this.setState({
          display: "game on"
        })
      );

    let leaderboard = Array.from(this.state.games)
      // gets current top 10 scores
      .sort((a, b) => {
        return b.attributes.score - a.attributes.score;
      })
      .slice(0, 10);

    this.setState({
      leaderboard
    });
  };

  gameOver = () => {
    this.setState({
      display: "game over"
    });
  };

  clickHandler = e => {
    // right / wrong game logic
    if (e.target.src === this.state.mostCalories.attributes.image) {
      this.setState({
        currentGame: {
          id: this.state.currentGame.id,
          score: this.state.currentGame.score + 1,
          initials: ""
        }
      });
      this.newFoods();
    } else {
      this.gameOver();
    }
  };

  logKey = e => {
    // TODO: REFACTOR?
    if (e.key === "ArrowLeft") {
      if (this.state.firstFood === this.state.mostCalories) {
        this.setState({
          currentGame: {
            id: this.state.currentGame.id,
            score: this.state.currentGame.score + 1,
            initials: ""
          }
        });
        this.newFoods();
      } else {
        this.gameOver();
      }
    }

    if (e.key === "ArrowRight") {
      if (this.state.secondFood === this.state.mostCalories) {
        this.setState({
          currentGame: {
            id: this.state.currentGame.id,
            score: this.state.currentGame.score + 1,
            initials: ""
          }
        });
        this.newFoods();
      } else {
        this.gameOver();
      }
    }
  };

  changeHandler = e => {
    this.setState({
      currentGame: {
        id: this.state.currentGame.id,
        score: this.state.currentGame.score,
        initials: e.target.value
      }
    });
  };

  updateInitials = e => {
    e.preventDefault();

    fetch(`${this.state.api}/${this.state.currentGame.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        game: {
          id: this.state.currentGame.id,
          score: this.state.currentGame.score,
          initials: this.state.currentGame.initials
        }
      })
    });

    const newCurrentGame = {
      id: this.state.currentGame.id,
      attributes: {
        score: this.state.currentGame.score,
        initials: this.state.currentGame.initials
      }
    };

    const newGamesArray = [...this.state.games, newCurrentGame];

    let leaderboard = Array.from(newGamesArray)
      // updates new leaderboard
      .sort((a, b) => {
        return b.attributes.score - a.attributes.score;
      })
      .slice(0, 10);

    this.setState({
      leaderboard
    });

    this.setState({
      // clears input field
      currentGame: {
        id: this.state.currentGame.id,
        score: this.state.currentGame.score,
        initials: ""
      }
    });
  };

  render() {
    return (
      <>
        <Navbar />
        {this.state.display === "instructions" ? (
          <Instructions clickHandler={this.newGame} />
        ) : null}

        {this.state.display === "game on" ? (
          <Game state={this.state} clickHandler={this.clickHandler} />
        ) : null}

        {this.state.display === "game over" && this.state.games ? (
          <GameOver
            state={this.state}
            updateInitials={this.updateInitials}
            changeHandler={this.changeHandler}
          />
        ) : null}
        <Footer />
      </>
    );
  }
}
export default App;

// <img src={logo} alt="GitHub logo" id="github-logo" />
