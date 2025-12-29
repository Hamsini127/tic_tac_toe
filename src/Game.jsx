import "./styles/game.css"
import Result from "./Result";
import TicTacToeBox from "./TicTacToeBox";

function Game () {
  return (
    <div className = "game">
      <Result />
      <TicTacToeBox />

    </div>
  );
}

export default Game;