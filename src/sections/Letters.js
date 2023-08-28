import Button from "react-bootstrap/Button";

function Letters(props) {
  // define an array to create React elements out of
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let handleGuess = props.handleGuess;

  return (
    // create a group of buttons from all of the letters,
    //could use styling to indicate when it's been clicked
    //but ran out of time to implement
    <div className="hangman-letters">
      {alphabet.map((letter) => {
        return (
          <Button
            variant="outline-dark"
            onClick={() => handleGuess(letter)}
            letter={letter}
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
}

export default Letters;
