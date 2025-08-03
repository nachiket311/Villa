import React from "react";

export default function Experiancecard(props) {
  return (
    <div className="Exp-main">
      <div className="Exp-card-container">
        <div className="Card-container">
          <div className="Number">{props.Data.Number}</div>
          <div className="Content">{props.Data.Content}</div>
        </div>
      </div>
      <div className="top-Round"></div>
    </div>
  );
}
