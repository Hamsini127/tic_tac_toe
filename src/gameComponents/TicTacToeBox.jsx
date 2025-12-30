import Card from "./Card.jsx"
import "../styles/TicTacToeBox.css"
import { useState } from "react";

function calculateWinner(board) {

}

function TicTacToeBox () {
  

  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [x,setX] = useState(true);           

  const handleCardClick = (index) => {
    
    if (board[index] !== null) return;

    const nextBoard = [...board];
    nextBoard[index] = x ? "X" : "O";

    setBoard(nextBoard);
    setX(!x);
   
  };

  return(
    <div className="container">
      {board.map((value, idx) => (
        <Card
          key={idx}
          value={value}                 
          onClick={() => handleCardClick(idx)}
        />
      ))}
    </div>

  );
}

export default TicTacToeBox;