import * as React from "react";
import * as ReactDOM from "react-dom";

const PlayerList = (props: any) => {
  let testPlayer1 = [1, 1, 1, 1, 1];
  let testPlayer2 = [1, 1, 1, 1, 1];
  return (
    <>
      <div className="totalPlayers">
        <div className="_totalPlayers">
          <div className="players">
            <div className="team1">
              {testPlayer1.map(() => {
                return (
                  <>
                    <div>
                      <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Ari.png" />
                      <div className="con">
                        <div className="playerName">짱씨퀸</div>
                        <div className="kda">5/5/5</div>
                        <div className="graph">
                          <span id="bar1-change"></span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="team2">
              {testPlayer2.map(() => {
                return (
                  <>
                    <div>
                      <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Ari.png" />
                      <div className="con">
                        <div className="playerName">짱씨퀸</div>
                        <div className="kda">5/5/5</div>
                        <div className="graph">
                          <span id="bar1-change"></span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerList;
