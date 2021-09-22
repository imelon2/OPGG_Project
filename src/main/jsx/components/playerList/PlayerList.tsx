import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import SaveBar from "../SaveBar/Savebar";
import GameState from "../gameStates/GameDState";
import { getCampNameFromId } from "../../../oop/getCampNameFromId";
import { saveDataAjax } from "../../../oop/saveDataAjax";

const PlayerList = (props: any) => {
  let count = 0;
  $(".participant").change(function () {
    count = count + 1;
  });

  const champDate: any[] = [];
  for (let key in props.champData) {
    champDate.push(props.champData[key]);
  }

  function saveDataFn(title: any) {
    //유저명 + 타이틀명 예외처리
    if (count > 9 && title) {
      //최종데이터
      let saveDataList: any[] = [];
      //챔프id리스트
      let list = [];
      for (let l of champDate) {
        let data = l.champ;
        list.push(data);
      }

      //챔피언 영어이름 갖고오기
      // getCampNameFromId(list).then(function (champNameList: []) {
      //   for (let i = 0; i < 10; i++) {
      //     let participant = $("#participant" + i).val();

      //     let date = new Date(champDate[i].gameCreation);
      //     let year = date.getFullYear();
      //     let month = ("0" + (date.getMonth() + 1)).slice(-2);
      //     let day = ("0" + date.getDate()).slice(-2);
      //     let hours = ("0" + date.getHours()).slice(-2);
      //     let minutes = ("0" + date.getMinutes()).slice(-2);
      //     let seconds = ("0" + date.getSeconds()).slice(-2);

      //     let timeString =
      //       year +
      //       "-" +
      //       month +
      //       "-" +
      //       day +
      //       "::" +
      //       hours +
      //       ":" +
      //       minutes +
      //       ":" +
      //       seconds;

      //     let _saveData = {
      //       gameId: champDate[i].gameId,
      //       gameCreation: timeString,
      //       title: title,
      //       name: participant,
      //       champK: champDate[i].champK,
      //       champD: champDate[i].champD,
      //       champA: champDate[i].champA,
      //       champName: champNameList[i],
      //       victory: champDate[i].win ? "승" : "패",
      //     };
      //     saveDataList.push(_saveData);
      //   }

      //   // 데이터 저장
      //   saveDataAjax(saveDataList).then((message) => {
      //     alert(message);
      //   });
      // });
    } else {
      alert("플레이어와 제목을 입력해주세요.");
    }
  }

  return (
    <>
      <div className="totalPlayers">
        <div className="_totalPlayers">
          <div className="players">
            <ul className="team1">
              <li>
                <img src={props.champImgUrl[0]} />
                <div className="con">
                  <select id="participant0" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[0]?.champK}/{champDate[0]?.champD}/
                    {champDate[0]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar1-change">{champDate[0]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[1]} />
                <div className="con">
                  <select id="participant1" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[1]?.champK}/{champDate[1]?.champD}/
                    {champDate[1]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar2-change">{champDate[1]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[2]} />
                <div className="con">
                  <select id="participant2" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[2]?.champK}/{champDate[2]?.champD}/
                    {champDate[2]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar3-change">{champDate[2]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[3]} />
                <div className="con">
                  <select id="participant3" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[3]?.champK}/{champDate[3]?.champD}/
                    {champDate[3]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar4-change">{champDate[3]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[4]} />
                <div className="con">
                  <select id="participant4" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[4]?.champK}/{champDate[4]?.champD}/
                    {champDate[4]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar5-change">{champDate[4]?.totalDamage}</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="team2">
              <li>
                <img src={props.champImgUrl[5]} />
                <div className="con">
                  <select id="participant5" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[5]?.champK}/{champDate[5]?.champD}/
                    {champDate[5]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar6-change">{champDate[5]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[6]} />
                <div className="con">
                  <select id="participant6" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[6]?.champK}/{champDate[6]?.champD}/
                    {champDate[6]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar7-change">{champDate[6]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[7]} />
                <div className="con">
                  <select id="participant7" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[7]?.champK}/{champDate[7]?.champD}/
                    {champDate[7]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar8-change">{champDate[7]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[8]} />
                <div className="con">
                  <select id="participant8" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[8]?.champK}/{champDate[8]?.champD}/
                    {champDate[8]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar9-change">{champDate[8]?.totalDamage}</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={props.champImgUrl[9]} />
                <div className="con">
                  <select id="participant9" className="participant">
                    <option value="깜시">깜시</option>
                    <option value="상필">상필</option>
                    <option value="짱깨">짱깨</option>
                    <option value="이승">이승</option>
                    <option value="쥐">쥐</option>
                    <option value="게이">게이</option>
                    <option value="고기">고기</option>
                    <option value="휴지">휴지</option>
                    <option value="때">때</option>
                    <option value="정력">정력</option>
                    <option value="형원">형원</option>
                    <option value="A">용병</option>
                  </select>
                  <p>
                    {champDate[9]?.champK}/{champDate[9]?.champD}/
                    {champDate[9]?.champA}
                  </p>
                  <div className="graph">
                    <span id="bar10-change">{champDate[9]?.totalDamage}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GameState />
      <SaveBar saveDataFn={saveDataFn} />
    </>
  );
};

export default PlayerList;
