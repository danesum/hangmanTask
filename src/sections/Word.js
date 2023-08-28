function Word(props) {
  const word = props.randomWord;
  const guessedLetters = props.currentLetters;
  return (
    // return/update the display of the word by hiding unknown
    // letters and displaying known ones that are in the word
    <div className="hangman-word">
      {word.split("").map((letter, index) => (
        <span className="guess-letter" key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Word;
