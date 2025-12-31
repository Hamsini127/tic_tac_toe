import Card from "./Card.jsx"
import "../styles/TicTacToeBox.css"
import { useState } from "react";
import Result from "./Result.jsx";
import { useLocation } from "react-router-dom";


function calculateWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      
      return board[a]; // "X" or "O"
    }
  }
  return null;
}

function TicTacToeBox () {
  
  const location = useLocation();
  const isSinglePlayer = location.state?.isSinglePlayer ?? true;
  console.log(isSinglePlayer)

  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [x,setX] = useState(true);   
  const winner = calculateWinner(board);
  
  const isTie = !winner && board.every(Boolean); 

  let result = "";
  if(winner == "X") result = "Player 1 won!"
  else if (winner == "O") result = "Player 2 won!";
  else if (isTie) result = "Draw!"

  //console.log(result)
  


  const handleCardClick = (index) => {
    if(winner) return;

    
    if (board[index] !== null) return;

    const nextBoard = [...board];
    nextBoard[index] = x ? "X" : "O";

    setBoard(nextBoard);

    setX(!x);
   
  };

  const resetGame=() => {
    setBoard(Array(9).fill(null));
    setX(true);
  }

  return(
    <>
    
    <div className = "game">
      <p className = "gameName">Tic Tac Toe</p>
      <div className="container">
        {board.map((value, idx) => (
          <Card
            key={idx}
            value={value}                 
            onClick={() => handleCardClick(idx)}
          />
        ))}
        </div>
        <Result result = {result} clickFunc = {()=>resetGame()} />
    </div>


    </>

    
  );
}

export default TicTacToeBox;