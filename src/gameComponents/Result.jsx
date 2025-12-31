import "../styles/result.css"

function Result (props) {



  return (
    <div className="result">
      <p className = "winner">{props.result}</p>
      {props.result &&
      <button className="again" onClick={props.clickFunc}>Play Again</button>
      }  
     
      
    </div>
  )

}

export default Result;