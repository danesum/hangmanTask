# Hangman App

This project simulates the children's game "Hangman" by allowing users to select letters one at a time 
to try and guess a random hidden word. 

## Installation

Make sure you have Node.js installed (https://nodejs.org/en/download) and copy all files over to a local directory. 
Then cd to that directory and type:

```bash
npm start
```

## Usage

To use the program, simply click on letters one at a time to try and guess if they are inside of the hidden word.
The hidden letters will update if your guess was correct, where if you're incorrect the drawing of the 
hangman will fill out until he is fully hanged and you lose. You have 10 attempts. 


## Limitations

- Ran out of time adding styling to indicate buttons that were already pressed.
- The hidden Win/Lose field tends to flash on load and I'm not clear on why at the moment. 
