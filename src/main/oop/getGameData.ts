export class getGameData {
  gameID: number;

  constructor(gameID : number) {
    this.gameID = gameID;
  }

    dataAPI() {
        var settings = {
            "url": "https://kr.api.riotgames.com/lol/match/v4/matches/"+this.gameID+"?api_key=RGAPI-3bd9d7d3-bcd5-4441-9496-368a6e323b5f",
            "method": "GET",
            "timeout": 0,
          };
          return new Promise(function(resolve, reject) {
            $.ajax(settings).done(function (response) {
              let forData = {champ : response.participants[0].championId}
              resolve(forData);
            });
        })         
    }

  }
