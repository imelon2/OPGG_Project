import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import SearchDataList from "./searchDataList/SearchDataList";
import { getGamListFromAccountId } from "../../oop/getGamListFromAccountId";
import { undateSpellList } from "../../oop/updateSpellList";
import { getGameData1 } from "../../oop/getGameData1";
import { getUserInfo } from "../../oop/getUserInfo";
import { GameInfoDetail } from "../GameInfoDetail";

const SearchGame = () => {
  const [iconState, setIconState] = React.useState<any>(false);
  const [state, setState] = React.useState<any>();
  const [gameDataArr, setGameDataArr] = React.useState<any[]>([]);

  function IconMotion() {
    return iconState ? <i className="fas fa-spinner"></i> : <></>;
  }

  function SearchUserData() {
    //로딩모션
    setIconState(true);
    let searchId = $("#playerNameSearchBar").val();

    // getUserInfo.ts
    getUserInfo(searchId).then((userInfo: any) => {
      // getGamListFromAccountId.ts
      getGamListFromAccountId(userInfo.accountId).then((matchList: any[]) => {
        //게임Id 리스트 10개
        let matchListArr: number[] = [];
        for (let i = 0; i < 10; i++) {
          matchListArr.push(matchList[i].gameId);
        }

        //게임정보 list
        let Arr: any[] = [];
        for (let i = 0; i < 10; i++) {
          let a = getGameData1(matchListArr[i]);
          Arr.push(a);
        }

        console.log(Arr);
        setGameDataArr(Arr);
        setIconState(false);
      });
    });

    $("#playerNameSearchBar").val() ? setState(true) : setState(false);
    // -------------------retrun----------------------
  }

  function GameData(props: any) {
    if (props.displayState) {
      return (
        <>
          {gameDataArr.map((list, index) => (
            <SearchDataList list={list} key={index} />
          ))}
          <button>더보기</button>
        </>
      );
    } else if (props.displayState == false) {
      return (
        <>
          <h1>전적기록이 없습니다</h1>
          <h1>소환사명을 확인해주세요</h1>
        </>
      );
    }
    return <></>;
  }

  return (
    <>
      <section className="searchGame">
        <div className="searchBar">
          <input
            id="playerNameSearchBar"
            type="text"
            placeholder="소환사명..."
          />
          <IconMotion />
          <button onClick={SearchUserData}>.GG</button>
        </div>
        <div className="gameData">
          <GameData displayState={state}></GameData>
        </div>
      </section>
      <GameInfoDetail />
    </>
  );
};

export default SearchGame;
