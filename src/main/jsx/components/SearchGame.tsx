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
      if (userInfo == false) {
        setState(false);
        setIconState(false);
      }
      // getGamListFromAccountId.ts
      getGamListFromAccountId(userInfo.accountId).then((data: any) => {
        //게임Id 리스트 8개
        let matchListArr: any = [];
        for (let i = 0; i < 8; i++) {
          let _data = {
            accountId: data.accountId,
            gameIdList: data.matches[i].gameId,
          };
          matchListArr.push(_data);
        }

        //게임정보 list
        let Arr: any[] = [];
        for (let i = 0; i < matchListArr.length; i++) {
          let a = getGameData1(
            matchListArr[i].gameIdList,
            matchListArr[i].accountId
          );
          Arr.push(a);
        }
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
          {gameDataArr.map((list) => (
            <SearchDataList key={list.gameId} list={list} />
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
        <div className="gameData-BackGround">
          <div className="gameData">
            <GameData displayState={state}></GameData>
          </div>
        </div>
      </section>
      <GameInfoDetail />
    </>
  );
};

export default SearchGame;
