import * as React from "react";
import * as ReactDOM from "react-dom";
import { useParams } from "react-router";
import PlayerList from "../../playerList/PlayerList";
import ResultBar from "./ResultBar";

export const GameInfoDetail = (props: any) => {
  console.log(props.gameData);

  function view() {
    props.view();
  }
  return (
    <>
      <div className="gameInfoDetail sub">
        <p>
          <i className="fas fa-window-close" onClick={view}></i>
        </p>
        <ResultBar />
        <PlayerList />
      </div>
    </>
  );
};
