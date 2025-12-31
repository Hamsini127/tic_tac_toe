import HImg from "./HImg";
import Player from "./Player";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";




function Home() {
  const navigate = useNavigate();

  const startGame = (isSinglePlayer) => {
    navigate("/game", {
      state: { isSinglePlayer }
    });
  };
  return (

    <div className="home">
      <HImg />
      <div className = "playerBox">
        <Player 
          player = "1 Player" 
          onClick={() => startGame(true)}
        />
        <Player 
          player = "2 Players"
          onClick={() => startGame(false)}
        />

      </div>
      

    </div>
  )
  
}

export default Home;