import "../styles/player.css"

function Player(props) {
  return (
    <button className = "player" onClick = {props.onClick}>
      {props.player} 
      
    </button>
  )
}

export default Player;