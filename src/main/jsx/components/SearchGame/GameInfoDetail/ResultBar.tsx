import * as React from "react";
import * as ReactDOM from "react-dom";

const ResultBar = () => {
  return (
    <>
      {" "}
      <div className="teamNav">
        <div>TEAM 1</div>
        <div className="result1">Win</div>
        <div>15:14</div>
        <div className="result2">Lose</div>
        <div>TEAM 2</div>
      </div>
    </>
  );
};

export default ResultBar;
