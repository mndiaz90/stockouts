import React from "react";
import "./styles.css";

const ProgressBar = ({ bgcolor = "green", completed }) => {
  const progressBarFilled = {
    width: `${completed}%`,
    backgroundColor: bgcolor,
  };

  return (
    <div className="progress-bar">
      <span className="progress-bar__whcoverage">{completed}</span>
      <span className="progress-bar__percent">%</span>
      <span className="progress-bar__stockout">STOCKOUT</span>
      <div className="progress-bar__div progress-bar__div-empty"></div>
      <div className="progress-bar__div" style={progressBarFilled}></div>
    </div>
  );
};

export default ProgressBar;
