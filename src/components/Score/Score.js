import React from "react";
import "./Score.css";

const Score = props => (
  <div className="score-count">
   {
       props.status === "gameover" ?
       <div>Game Over!  Click a Puppy to play again!</div>
       :
       props.status === "gamewon" ?
       <div>You WON!  Click a Puppy to play again!</div>
       :
       <div>
       <div className="total-count">
        <span>Score: </span>
        <span>{props.total}</span>
       </div>
    <div>
      <span>Goal: </span>
      <span>{props.goal}</span>
    </div>

      <p className="App-intro">
          Try not to click the same image twice!
        </p>
     </div>

   }
    
  </div>
);

export default Score;
