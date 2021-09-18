import { error } from "jquery";
import { stringify } from "querystring";

export class getGameData {
  gameID: number;

  constructor(gameID : number) {
    this.gameID = gameID;
  }

    dataAPI() {
        var settings = {
            "url": "https://kr.api.riotgames.com/lol/match/v4/matches/"+this.gameID+"?api_key=RGAPI-5348731e-fa55-4d57-a537-2d9a4eb54eba",
            "method": "GET",
            "timeout": 0,
          };
          return new Promise(function(resolve, reject) {
            $.ajax(settings).done(function (response) {
             
              let forData = [] ;

              for (let i = 0; i < 10; i++) {
                // 플레이어 정보
                let scMinions  = response.participants[i].stats.totalMinionsKilled;
                let scNeutralMinios = response.participants[i].stats.neutralMinionsKilled;
                let playInfo = 
                { participantId : response.participants[i].participantId,
                  participant : "",
                  teamId : response.participants[i].teamId,
                  championId : response.participants[i].championId,
                  win : response.participants[i].stats.win,
                  kills : response.participants[i].stats.kills,
                  deaths : response.participants[i].stats.deaths,
                  assists : response.participants[i].stats.assists,
                  totalDamageDealtToChampions :  response.participants[i].stats.totalDamageDealtToChampions,
                  goldEarned : response.participants[i].stats.goldEarned,
                  totalCS : scMinions + scNeutralMinios
                }

                forData.push(playInfo);
              }

              // 게임 정보
              let matchInfo = {
                  gameId : response.gameId,
                  gameCreation : response.gameCreation,
                  gameDuration : response.gameDuration,
              }
              forData.push(matchInfo);


              // 팀 정보
              for (let i = 0; i < 2; i++) {
                
                let matchTeamInfo = {
                  teamId : response.teams[i].teamId,
                  win : response.teams[i].win,
                  bans : [{
                    championId : Number || String
                }]
              }
              for (let j = 0; j < response.teams[i].bans.length; j++) {
                let _bans = {
                  championId : response.teams[i].bans[j].championId !== undefined ? response.teams[i].bans[j].championId : "none"
                }
                matchTeamInfo.bans.push(_bans);
              }
              
              forData.push(matchTeamInfo);
                
              }

              resolve(forData);
            });
        })         
    }


  }
