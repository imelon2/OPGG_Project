import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { Link } from "react-router-dom";
import { GameInfoDetail } from "../../GameInfoDetail";

const SearchDataList = (props: any) => {
  let test = props.list;
  console.log(test.participantGameData[0].assists);

  return (
    <>
      <div className="gameDataList">
        <div className="GameStats">
          <div className="gameType">자유 5:5 랭크</div>
          <div className="timeStamp">하루 전</div>
          <div className="bar"></div>
          <div className="gameResult">패배</div>
          <div className="gameLength">38분50초</div>
        </div>
        <div className="gameSettingInfo">
          <div className="champImage">
            <img
              className="champImg"
              src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDataList;
