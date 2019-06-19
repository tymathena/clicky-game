import React from "react";
import "./style.css"


function Card (props) {
  return (
    <button onClick={props.clickFn}>
    <div className="card">
      <div className="img-container">
        <img src={props.img} width="500px" height="300px"/>
      </div>
    </div>
    </button>
  );
}

export default Card;