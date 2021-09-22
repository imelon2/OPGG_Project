//
// gameId로
// 해당 게임의 정보 호출 하는 API

import { any } from "prop-types";

//
export function getGameData1(gameID : number, accountId : number) {    
            let data;  

            $.ajax({
                type: 'GET',
                url : "https://kr.api.riotgames.com/lol/match/v4/matches/"+gameID+"?api_key=RGAPI-984bbde3-46c6-43f3-8543-d0ad70aecd2d",
                async : false,
                success : function(response) {

                    // 선형 알고리즘
                    let LinearSearchArr:any =[];
                    let participantId ;
                    for(let i =0; i < response.participantIdentities.length ; i++) {
                        let data = {
                            participantId : response.participantIdentities[i].participantId,
                            accountId : response.participantIdentities[i].player.accountId
                        }
                        LinearSearchArr.push(data)
                    }

                    for(let i = 0 ; i < LinearSearchArr.length; i++){
                        if(LinearSearchArr[i].accountId == accountId) {
                            participantId = LinearSearchArr[i].participantId
                        }
                    }

                    console.log(participantId);
                    



                    let gameData = {
                        gameId : response.gameId, 
                        gameCreation :  response.gameCreation, 
                        gameType :response.gameType,
                        queueId : response.queueId,
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
                        participantGameData : new Array(),
                        participantInfo : new Array()
                }

                        // 참가자 정보
                        for(let i = 0 ; i < response.participantIdentities.length ; i++) {
                            gameData.participantInfo.push(response.participantIdentities[i].player.summonerName)
                        }
    
    
                        //팀1 벤챔프
                        for (let i = 0; i < response.teams[0].bans.length; i++) {
                            let _ban1 = {
                                teamBanChampId : response.teams[0].bans[i].championId ? response.teams[0].bans[i].championId : "noBan"
                            }
                            gameData.teams[0].bans[i] =_ban1;
                        }
    
                        //팀2 벤챔프
                        for (let i = 0; i < response.teams[1].bans.length; i++) {
                            let _ban2 = {
                                teamBanChampId : response.teams[1].bans[i].championId ? response.teams[1].bans[i].championId : "noBan"
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
    
                            gameData.participantGameData.push(data);
    
                            }
                            data = gameData
                            }
                        })

                    return data;
}
