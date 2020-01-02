import React from "react";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Instructions clickHandler={newGame} />
      <Footer />
    </div>
  );
}

export default App;
