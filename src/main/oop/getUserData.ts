export function getUserData(userName:string) {
    var settings = {
        "url": "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ userName +"?api_key=RGAPI-5348731e-fa55-4d57-a537-2d9a4eb54eba",
        "method": "GET",
        "timeout": 0,
      };

      return new Promise(function(resolve, reject) {
      $.ajax(settings).done(function (response) {
          console.log(response.accountId);
          
        resolve(response.accountId);
      });
    })
}
