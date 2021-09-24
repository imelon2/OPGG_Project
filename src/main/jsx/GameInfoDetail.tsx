import * as React from "react";
import * as ReactDOM from "react-dom";
import { useParams } from "react-router";

export const GameInfoDetail = (props: any) => {
  console.log(props.gameData);

  function view() {
    props.view();
  }
  return (
    <>
      <div className="gameInfoDetail">
        <p>
          <i className="fas fa-window-close" onClick={view}></i>
        </p>
        <h1>{props.gameData.gameId}</h1>
      </div>
    </>
  );
};
