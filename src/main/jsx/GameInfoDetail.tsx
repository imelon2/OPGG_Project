import * as React from "react";
import * as ReactDOM from "react-dom";
import { useParams } from "react-router";

export const GameInfoDetail = () => {
  const a = useParams();
  console.log(a);

  return (
    <>
      <div className="gameInfoDetail"></div>
    </>
  );
};
