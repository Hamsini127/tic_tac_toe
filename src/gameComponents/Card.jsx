import { useState } from "react";
import "../styles/card.css"
import o from "../assets/o.png"
import x from "../assets/x.png"

function Card(props) {
const imgSrc = (props.value === "X" ? x : props.value === "O" ? o : null);
  return(
    <div className = "card" onClick={props.onClick}>
      
      <img className={`img ${imgSrc&&"show"}`}src={imgSrc} alt={props.value} />
      

    </div>

  );

}

export default Card;