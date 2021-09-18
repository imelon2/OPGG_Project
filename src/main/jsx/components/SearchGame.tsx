import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import SearchDataList from "./searchDataList/SearchDataList";
import { getUserData } from "../../oop/getUserData";
import { getGameDataListFromUserId } from "../../oop/getGameDataListFromUserId";
import { undateSpellList } from "../../oop/updateSpellList";
import { getGameData1 } from "../../oop/getGameData1";

const SearchGame = () => {
  const [state, setState] = React.useState<any>(true);

  function searchUserData() {
    undateSpellList();
    getGameData1(5448600347);
    // // 유저 AccountId 가져오기
    // getUserData($("#playerNameSearchBar").val()).then((userId: string) => {
    //   //게임 리스트 가져오기
    //   getGameDataListFromUserId(userId);
    // });

    // $("#playerNameSearchBar").val() ? setState(true) : setState(false);
  }

  function UserButton(props: any) {
    if (props.displayState) {
      return (
        <>
          <SearchDataList />
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
          <button onClick={searchUserData}>.GG</button>
        </div>
        <div className="gameDataList">
          <UserButton displayState={state}></UserButton>
        </div>
      </section>
    </>
  );
};

export default SearchGame;
