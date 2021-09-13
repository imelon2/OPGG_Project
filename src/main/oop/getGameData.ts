export class getGameData {
  gameID: number;

  constructor(gameID : number) {
    this.gameID = gameID;
  }

    dataAPI() {
        var settings = {
            "url": "https://kr.api.riotgames.com/lol/match/v4/matches/"+this.gameID+"?api_key=RGAPI-431a10de-0ef9-4c9d-8d14-cee345c6901b",
            "method": "GET",
            "timeout": 0,
          };
          return new Promise(function(resolve, reject) {
            $.ajax(settings).done(function (response) {
              let forData = response;

              resolve(forData);
            });
        })         
    }

  }
