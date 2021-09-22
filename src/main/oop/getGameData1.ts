//
// gameId로
// 해당 게임의 정보 호출 하는 API

import { any } from "prop-types";

//
export function getGameData1(gameID : number) {    
             let data;  

            $.ajax({
                type: 'GET',
                url : "https://kr.api.riotgames.com/lol/match/v4/matches/"+gameID+"?api_key=RGAPI-9ea370e2-4d4b-4ab4-840e-44a33bd87b3a",
                async : false,
                success : function(response) {
                    let gameData = {
                        gameId : response.gameId, 
                        gameCreation :  response.gameCreation, 
                        gameType :response.gameType,
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
                        participantInfo : {
                            player1Name : response.participantIdentities[0].player.summonerName,
                            player2Name : response.participantIdentities[1].player.summonerName,
                            player3Name : response.participantIdentities[2].player.summonerName,
                            player4Name : response.participantIdentities[3].player.summonerName,
                            player5Name : response.participantIdentities[4].player.summonerName,
                            player6Name : response.participantIdentities[5].player.summonerName,
                            player7Name : response.participantIdentities[6].player.summonerName,
                            player8Name : response.participantIdentities[7].player.summonerName,
                            player9Name : response.participantIdentities[8].player.summonerName,
                            player10Name : response.participantIdentities[9].player.summonerName,
                        }
                }
    
    
                    // gameData.gameId = response.gameId,
                    // gameData.gameCreation = response.gameCreation,
                    // gameData.gameType = response.gameType,
                    // gameData.teams[0].teamId= response.teams[0].teamId,
                    // gameData.teams[0].win = response.teams[0].win
                    // gameData.teams[0].bans = new Array()
                    // gameData.teams[1].teamId= response.teams[1].teamId,
                    // gameData.teams[1].win = response.teams[1].win
                    // gameData.teams[1].bans = new Array()
    
                    // gameData.participantGameData = new Array() ,
                    // gameData.participantInfo.player1Name =  response.participantIdentities[0].player.summonerName
                    // gameData.participantInfo.player2Name =  response.participantIdentities[1].player.summonerName
                    // gameData.participantInfo.player3Name =  response.participantIdentities[2].player.summonerName
                    // gameData.participantInfo.player4Name =  response.participantIdentities[3].player.summonerName
                    // gameData.participantInfo.player5Name =  response.participantIdentities[4].player.summonerName
                    // gameData.participantInfo.player6Name =  response.participantIdentities[5].player.summonerName
                    // gameData.participantInfo.player7Name =  response.participantIdentities[6].player.summonerName
                    // gameData.participantInfo.player8Name =  response.participantIdentities[7].player.summonerName
                    // gameData.participantInfo.player9Name =  response.participantIdentities[8].player.summonerName
                    // gameData.participantInfo.player10Name =  response.participantIdentities[9].player.summonerName
    
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
    
                            gameData.participantGameData.push(data);
    
                            }
                            data = gameData
                            }
                        })

                    return data;
}
