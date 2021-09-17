import { error } from "jquery";
import { stringify } from "querystring";

export class getGameData {
  gameID: number;

  constructor(gameID : number) {
    this.gameID = gameID;
  }

    dataAPI() {
        var settings = {
            "url": "https://kr.api.riotgames.com/lol/match/v4/matches/"+this.gameID+"?api_key=RGAPI-d5714ba2-0581-4ee2-84e0-18f823e1e8d9",
            "method": "GET",
            "timeout": 0,
          };
          return new Promise(function(resolve, reject) {
            $.ajax(settings).done(function (response) {
             
              let forData = [] ;

              for (let i = 0; i < 10; i++) {
                // 플레이어 정보
                let playInfo = 
                { participantId : Number,
                  participant : String,
                  teamId : Number,
                  championId : Number,
                  win : String,
                  kills : Number,
                  deaths : Number,
                  assists : Number,
                  totalDamageDealtToChampions : Number,
                  goldEarned : Number,
                  totalCS : Number
                }

                playInfo.participantId = response.participants[i].participantId
                playInfo.participant = null
                playInfo.teamId = response.participants[i].teamId
                playInfo.championId = response.participants[i].championId
                playInfo.win = response.participants[i].stats.win
                playInfo.kills = response.participants[i].stats.kills
                playInfo.deaths = response.participants[i].stats.deaths
                playInfo.assists = response.participants[i].stats.assists
                playInfo.totalDamageDealtToChampions = response.participants[i].stats.totalDamageDealtToChampions;
                playInfo.goldEarned =  response.participants[i].stats.goldEarned;
                let scMinions  = response.participants[i].stats.totalMinionsKilled;
                let scNeutralMinios = response.participants[i].stats.neutralMinionsKilled;
                playInfo.totalCS = scMinions + scNeutralMinios;

                forData.push(playInfo);
              }

              // 게임 정보
              let matchInfo = {
                gameId : Number,
                gameCreation : Number,
                gameDuration : Number,
              }
              matchInfo.gameId = response.gameId;
              matchInfo.gameCreation = response.gameCreation;
              matchInfo.gameDuration = response.gameDuration;
              forData.push(matchInfo);


              // 팀 정보
              for (let i = 0; i < 2; i++) {
                
                let matchTeamInfo = {
                  teamId : Number,
                  win : String,
                  bans : [{
                    championId : Number || String
                }]
              }
              matchTeamInfo.teamId = response.teams[i].teamId;
              matchTeamInfo.win = response.teams[i].win;

              for (let j = 0; j < response.teams[i].bans.length; j++) {
                let _bans = {
                  championId : Number || String
                }
                _bans.championId= response.teams[i].bans[j].championId !== undefined ? response.teams[i].bans[j].championId : "none";
                matchTeamInfo.bans.push(_bans);
                
              }
              
              forData.push(matchTeamInfo);
                
              }

              // let date = new Date(1631372859651);
              // console.log(date);
              //   let test = response.teams[0].bans[4].championId === false ? "123" : "none";


              // console.log(response.teams[0].bans[0].championId);
              
              resolve(forData);
            });
        })         
    }

  }
