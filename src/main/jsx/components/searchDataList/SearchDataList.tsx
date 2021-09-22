import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { Link } from "react-router-dom";
import { GameInfoDetail } from "../../GameInfoDetail";
import { getCampNameFromId } from "../../../oop/getCampNameFromId";
import { champNameReturnReg } from "../../../oop/champNameReturnReg";

const SearchDataList = (props: any) => {
  let data = props.list;

  // ClassName=Players 부분 자료 선언
  let List1: any[] = [];
  let List2: any[] = [];
  let ChampIdArr = [];
  for (let i = 0; i < data.participantGameData.length; i++) {
    ChampIdArr.push(data.participantGameData[i].championId);
  }

  let champNameArr: any[] = getCampNameFromId(ChampIdArr);

  for (let i = 0; i < 5; i++) {
    const reg = /[ \.\']/gi;
    let Team = {
      champ: champNameArr[i].champName,
      champKR: champNameArr[i].champNameKR.replace(reg, ""),
      user: props.list.participantInfo[i],
    };
    List1.push(Team);
  }
  for (let i = 5; i <= 9; i++) {
    let Team = {
      champ: champNameArr[i].champName,
      champKR: champNameArr[i].champNameKR,
      user: props.list.participantInfo[i],
    };
    List2.push(Team);
  }

  let itemList = [1001, 1001, 1001, 1001, 1001, 1001, 1001];

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
          <div className="summonerSpell">
            <div className="spell">
              <img
                src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/SummonerFlash.png"
                alt=""
              />
            </div>
            <div className="spell">
              <img
                src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/SummonerFlash.png"
                alt=""
              />
            </div>
          </div>
          <div className="runes">
            <div className="rune-S">
              <img
                src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"
                alt=""
              />
            </div>
            <div className="rune">
              <img
                src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png"
                alt=""
              />
            </div>
          </div>
          <div className="champName">르블랑</div>
        </div>
        <div className="KDA">
          <div className="_KDA">
            <span className="Kill">11</span> /<span className="Death">4</span> /
            <span className="Assist">11</span>
          </div>
          <div className="KDARatio">
            <span className="KDARatio">5.50:1</span> 평점
          </div>
        </div>
        <div className="Stats">
          <div className="Level"> 레벨 16</div>
          <div className="CS">
            <span className="CS tip">254 (8.2)</span> CS
          </div>
          <div className="KillInfo">킬관여 63%</div>
        </div>
        <div className="Items">
          <div className="ItemList">
            {itemList.map((list, index) => {
              return (
                <div className="Item" key={index}>
                  <img
                    src={
                      "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/item/" +
                      list +
                      ".png"
                    }
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="Players">
          <div className="Team">
            {List1.map((list, index) => {
              return (
                <div className="Summoner" key={index}>
                  <div
                    className="chmapNameKR"
                    id={list.champKR + props.list.gameId}
                    style={{ display: "none" }}
                  >
                    {list.champKR}
                  </div>
                  <div className="ChampImg">
                    <img
                      onMouseOver={() => {
                        $("#" + list.champKR + props.list.gameId).css(
                          "display",
                          "block"
                        );
                      }}
                      onMouseOut={() => {
                        $("#" + list.champKR + props.list.gameId).css(
                          "display",
                          "none"
                        );
                      }}
                      src={
                        "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/" +
                        list.champ +
                        ".png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="SummonerName">{list.user}</div>
                </div>
              );
            })}
          </div>
          <div className="Team">
            {List2.map((list, index) => {
              return (
                <div className="Summoner" key={index}>
                  <div
                    className="chmapNameKR"
                    id={list.champKR + props.list.gameId}
                    style={{ display: "none" }}
                  >
                    {list.champKR}
                  </div>
                  <div className="ChampImg">
                    <img
                      onMouseOver={() => {
                        $("#" + list.champKR + props.list.gameId).css(
                          "display",
                          "block"
                        );
                      }}
                      onMouseOut={() => {
                        $("#" + list.champKR + props.list.gameId).css(
                          "display",
                          "none"
                        );
                      }}
                      src={
                        "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/" +
                        list.champ +
                        ".png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="SummonerName">{list.user}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDataList;
