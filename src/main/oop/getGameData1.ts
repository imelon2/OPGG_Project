
export function getGameData1(gameID:number) {

        let settings = {
            "url": "https://kr.api.riotgames.com/lol/match/v4/matches/"+gameID+"?api_key=RGAPI-5348731e-fa55-4d57-a537-2d9a4eb54eba",
            "method": "GET",
            "timeout": 0,
          };

          return new Promise(function(resolve, reject) {
            $.ajax(settings).done(function (response) {
                console.log(response);
                let test = response.teams[0].bans[1].championId
                console.log(test);
                
                
                let gameData = {
                    gameId : response.gameId,
                    gameCreation : response.gameCreation,
                    gameType : response.gameType,
                    teams : 
                    [{
                            teamId : response.teams[0].teamId,
                            win : response.teams[0].win,
                            bans : new Array()
                        },{
                            teamId : response.teams[1].teamId,
                            win : response.teams[1].win,
                            bans : new Array()
                    }],
                    participantGameData : new Array() ,
                    participantInfo : {
                        player1Name : "",
                        player2Name : "",
                        player3Name : "",
                        player4Name : "",
                        player5Name : "",
                        player6Name : "",
                        player7Name : "",
                        player8Name : "",
                        player9Name : "",
                        player10Name : "",
                    }

                }

                //팀1 벤챔프
                for (let i = 0; i < response.teams[0].bans.length; i++) {
                    let _ban1 = {
                        teamBanChampId : response.teams[0].bans[i].championId
                    }
                    gameData.teams[0].bans[i] =_ban1;


                }
                //팀2 벤챔프
                for (let i = 0; i < response.teams[1].bans.length; i++) {
                    let _ban2 = {
                        teamBanChampId : response.teams[1].bans[i].championId
                    }
                    gameData.teams[1].bans[i] =_ban2;
                }


                //participantGameData 자료구도
                for(let i = 0 ; i < 10; i++) {
                    let totalMinionsKilled = response.participants[i].stats.totalMinionsKilled;
                    let neutralMinionsKilled = response.participants[i].stats.neutralMinionsKilled;
                    let data = {
                        participantid : response.participants[i].participantId,
                        win : response.participants[i].stats.win,
                        championId : response.participants[i].championId,
                        spell1Id : response.participants[i].spell1Id,
                        spell2Id : response.participants[i].spell2Id,
                        item0: response.participants[i].stats.item0,
                        item1:response.participants[i].stats.item1,
                        item2:response.participants[i].stats.item2,
                        item3:response.participants[i].stats.item3,
                        item4:response.participants[i].stats.item4,
                        item5:response.participants[i].stats.item5,
                        item6:response.participants[i].stats.item6,
                        kills:response.participants[i].stats.kills,
                        deaths:response.participants[i].stats.deaths,
                        assists:response.participants[i].stats.assists,
                        totalDamageDealt:response.participants[i].stats.totalDamageDealt,
                        gold:response.participants[i].stats.goldEarned,
                        totalCS: totalMinionsKilled + neutralMinionsKilled,
                        champLevel: response.participants[i].stats.champLevel,
                        role : response.participants[i].timeline.role,
                        lane : response.participants[i].timeline.lane
                        }

                    gameData.participantGameData[i] = data;
                }
            

                console.log(gameData);
                
                resolve(gameData);
            })
        })
    }
