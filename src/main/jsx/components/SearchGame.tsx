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
  const [index, setIndex] = React.useState<number>();

  //로딩 아이콘 진행시 : 미진행시
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
        for (let i = 0; i < 6; i++) {
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
  }

  // 검색 후 자료 보여주기
  function GameData(props: any) {
    if (props.displayState) {
      return (
        <>
          {gameDataArr.map((list, index) => (
            <SearchDataList
              key={list.gameId}
              index={index}
              list={list}
              getListIndex={getListIndex}
            />
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
  const [gameInfoDetailviewState, setGameInfoDetailviewState] =
    React.useState<boolean>(false);

  function getListIndex(num?: number) {
    setIndex(num);
    setGameInfoDetailviewState(true);
  }

  function view() {
    setGameInfoDetailviewState(false);
  }

  function GameInfoDetailview() {
    return gameInfoDetailviewState ? (
      <GameInfoDetail view={view} gameData={gameDataArr[index]} />
    ) : (
      <></>
    );
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
      <GameInfoDetailview />
    </>
  );
};

export default SearchGame;
