import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { Link } from "react-router-dom";
import { GameInfoDetail } from "../GameInfoDetail/GameInfoDetail";
import { getCampNameFromId } from "../../../../oop/getCampNameFromId";
import { champNameReturnReg } from "../../../../oop/champNameReturnReg";
import { getSpellNameFromId } from "../../../../oop/getSpellNameFromId";
import { getRuneNameFromId } from "../../../../oop/getRuneNameFromId";
import { dateTypeRef } from "../../../../oop/dateTypeRef";

const SearchDataList = (props: any) => {
  // GameInfoDetail 에 index넘겨죽;
  function _getListIndex() {
    props.getListIndex(props.index);
  }

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
  // className = Items 부분선언
  let itemList: any[] = [];
  itemList.push(data.participantGameData[data.me - 1].item0);
  itemList.push(data.participantGameData[data.me - 1].item1);
  itemList.push(data.participantGameData[data.me - 1].item2);
  itemList.push(data.participantGameData[data.me - 1].item6);
  itemList.push(data.participantGameData[data.me - 1].item3);
  itemList.push(data.participantGameData[data.me - 1].item4);
  itemList.push(data.participantGameData[data.me - 1].item5);

  // className=Stats 변수선언
  //레벨
  let champLevel = data.participantGameData[data.me - 1].champLevel;
  //CS
  let totalCS = data.participantGameData[data.me - 1].totalCS;
  let perCS = (totalCS / 60).toFixed(1);
  //킬 관여
  let totalKill = 0;
  let KillInfo = 0;
  if (1 <= data.me && data.me <= 5) {
    for (let i = 0; i < 5; i++) {
      totalKill = totalKill + data.participantGameData[i].kills;
    }
  } else if (6 <= data.me && data.me <= 10) {
    for (let i = 5; i < 10; i++) {
      totalKill = totalKill + data.participantGameData[i].kills;
    }
  }
  KillInfo = Math.round(
    ((data.participantGameData[data.me - 1].kills +
      data.participantGameData[data.me - 1].assists) /
      totalKill +
      Number.EPSILON) *
      100
  );

  //className = KDA 변수선언
  //kill
  let kill = data.participantGameData[data.me - 1].kills;
  //death
  let death = data.participantGameData[data.me - 1].deaths;
  //assist
  let assist = data.participantGameData[data.me - 1].assists;
  //KDA 평균
  let Ratio = ((kill + assist) / death).toFixed(2);

  // className="gameSettingInfo" 변수선언
  //챔프이미지
  let meChampId = [];
  meChampId.push(data.participantGameData[data.me - 1].championId);
  let meChampdata: any[] = getCampNameFromId(meChampId);
  //스펠 이미지
  let spellArr: any[] = [];
  spellArr.push(data.participantGameData[data.me - 1].spell1Id);
  spellArr.push(data.participantGameData[data.me - 1].spell2Id);
  let spellName: string[] = getSpellNameFromId(spellArr);
  //룬 이미지
  let meRuneArr: any[] = [];
  meRuneArr.push(data.participantGameData[data.me - 1].perk);
  meRuneArr.push(data.participantGameData[data.me - 1].subperk);
  let runeName: string[] = getRuneNameFromId(meRuneArr);

  // className="GameStats" 변수선언
  // 플레이 시간
  let _gameDuration = (data.gameDuration / 60).toFixed();
  let minute = _gameDuration.toString().substr(0, 2) + "분 ";
  let second = (data.gameDuration % 60) + "초";
  let gameDuration = minute + second;
  // 승패 결과
  let result: boolean = data.participantGameData[data.me - 1].win;
  // 게임생성 일정
  let gameCreation = new Date(data.gameCreation);
  let today = new Date();
  let timeStamp = Math.ceil(
    (today.getTime() - gameCreation.getTime()) / (1000 * 3600 * 24)
  );
  // 게임타입
  let gameType = "";
  if (data.queueId == 420) {
    gameType = "솔로 랭크";
  } else if (data.queueId == 440) {
    gameType = "자유 5:5 랭크";
  } else if (data.queueId == 450) {
    gameType = "무작위 총력전";
  } else {
    gameType = "사용자 설정 게임";
  }

  return (
    <>
      <div
        className="gameDataList"
        style={{
          background: result
            ? "rgb(128,170,230) linear-gradient(135deg, rgba(128,170,230,0.8267682072829132) 96%, rgba(30,93,185,0.8267682072829132) 100%)"
            : "rgb(230,128,128) linear-gradient(135deg, rgba(230,128,128,0.8267682072829132) 95%, rgba(185,30,30,0.8267682072829132) 100%)",
        }}
        onClick={_getListIndex}
      >
        <div className="GameStats">
          <div className="gameType">{gameType}</div>
          <div className="timeStamp">
            {timeStamp == 0 ? "금일" : timeStamp + "일 전"}
          </div>
          <div className="bar"></div>
          <div className="gameResult">{result ? "승리" : "패배"}</div>
          <div className="gameLength">{gameDuration}</div>
        </div>
        <div className="gameSettingInfo">
          <div className="champImage">
            <img
              className="champImg"
              src={
                "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/" +
                meChampdata[0].champName +
                ".png"
              }
            />
          </div>
          <div className="summonerSpell">
            <div className="spell">
              <img
                src={
                  "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/" +
                  spellName[0] +
                  ".png"
                }
                alt=""
              />
            </div>
            <div className="spell">
              <img
                src={
                  "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/" +
                  spellName[1] +
                  ".png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="runes">
            <div className="rune-S">
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/img/" + runeName[0]
                }
                alt=""
              />
            </div>
            <div className="rune">
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/img/" + runeName[1]
                }
                alt=""
              />
            </div>
          </div>
          <div className="champName">{meChampdata[0].champNameKR}</div>
        </div>
        <div className="KDA">
          <div className="_KDA">
            <span className="Kill"> {kill}</span> /
            <span className="Death" style={{ color: "#C62605" }}>
              {death}
            </span>{" "}
            /<span className="Assist">{assist}</span>
          </div>
          <div className="KDARatio">
            <span className="KDARatio">{Ratio}</span> 평점
          </div>
        </div>
        <div className="Stats">
          <div className="Level"> 레벨 {champLevel}</div>
          <div className="CS">
            <span className="CS tip">{totalCS}</span>({perCS}) CS
          </div>
          <div className="KillInfo">킬관여 {KillInfo}%</div>
        </div>
        <div className="Items">
          <div className="ItemList">
            {itemList.map((list, index) => {
              return (
                <div className="Item" key={index}>
                  {list !== 0 ? (
                    <img
                      src={
                        "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/item/" +
                        list +
                        ".png"
                      }
                      alt=""
                    />
                  ) : (
                    <div className="NoItem"></div>
                  )}
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
