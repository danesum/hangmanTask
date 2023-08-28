//import needed dependencies
import "./App.css";
import Drawing from "./sections/Drawing";
import Word from "./sections/Word";
import Letters from "./sections/Letters";
import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //set state variables
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  //set incorrect letters variable by filtering our random word
  //to for letters it does not include
  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  //define win and lose conditions
  const loser = incorrectLetters.length >= 10;

  const winner = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  //handle our guess onclick event by checking if our list of guessed letters
  //already includes the letter, if it does not we add it to the list of
  //guessed letters by appending it at the end
  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  //function for getting a random word from an API and its useeffect to
  //call the API once on render and then not again.
  async function getWord() {
    let response = await fetch(`https://random-word-api.herokuapp.com/word`);
    let data = await response.json();
    setWord(data.toString().toUpperCase());
  }

  useEffect(() => {
    getWord();
  }, []);

  return (
    <div className="hangman-body">
      {/* hidden div that only shows when a user wins or loses */}
      <div className="win-lose">
        {winner && "You win! Refresh to play again."}
        {loser && "You lose - refresh to try again."}
      </div>
      {/* set our Drawing element by passing the no. of incorrect letters so far 
      which determines which drawing to show*/}
      <Drawing numIncorrect={incorrectLetters.length} />
      <h1>
        {/* set our word element by passing our randomly selected word and 
        our current list of guessed letters*/}
        <Word randomWord={word} currentLetters={guessedLetters} />
      </h1>
      <div className="letters-container">
        {/* set our letters element by passing the function for handling new
        guessed letters */}
        <Letters handleGuess={handleGuess} />
      </div>
      {/* buttons for requesting help or refreshing the game */}
      <div className="btns">
        <Button
          variant="primary"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload Game
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            alert(
              `How to play Hangman:\nHangman is a simple word guessing game where the goal is to find an unknown word by guessing which letters it contains.\nYou have 10 chances to guess the word by clicking one letter at a time.\nIf the letter is in the word, it will appear on the empty lines in place of a blank character.\nIf it is incorrect, the drawing will update until the stick figure man is fully hanged (and you lose.)\nGood luck!`
            );
          }}
        >
          Help
        </Button>
      </div>
    </div>
  );
}

export default App;

//ref: Web Dev Simplified (2022) This is a great beginner react/typescript project, YouTube. Available at: https://www.youtube.com/watch?v=-ONUyenGnWw (Accessed: 28 August 2023).
