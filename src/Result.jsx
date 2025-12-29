

function Result () {

  const scores = {
    wins  : 0,
    loss: 0,
    tie: 0 
  }

  return (
    <div className="result">
      wins = {scores.wins}
      loss = {scores.loss}
      tie = {scores.tie}
      
    </div>
  )

}

export default Result;