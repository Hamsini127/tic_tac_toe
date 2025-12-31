import { useState } from "react"
import "../styles/card.css"
import o from "../assets/o.png"
import x from "../assets/x.png"
import blank from "../assets/blank.png"

function Card(props) {
const imgSrc = (props.value === "X" ? x : props.value === "O" ? o : null)
/* image's opacity is set to 0 first and when clicked set to 1 with a smooth transitionn 
   when not clicked, blank image is displayed*/
  return(
    <div className = "card" onClick={props.onClick}>
      <img className={`img ${imgSrc&&"show"}`}src={imgSrc || blank} alt={props.value} />
    </div>

  )

}

export default Card;