import React from "react";
import "./ball.css";

const Ball = ({ path, rows, betStarted }) => {
  const ballStyle = {
    backgroundColor: "red",
    borderRadius: "50%",
    width: `${5 / rows}em`,
    height: `${5 / rows}em`,
  };

  const ballDivStyle = {
    position: "absolute",
    top: "-2em",
    left: "0",
  };

  return (
    <div style={ballDivStyle} className='ball-div'>
      <div style={ballStyle} className='ball'></div>
    </div>
  );
};

export default Ball;