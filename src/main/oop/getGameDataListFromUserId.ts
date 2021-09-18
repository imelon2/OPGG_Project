

export function getGameDataListFromUserId(userId : string) {
    var settings = {
        "url": "https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+ userId +"?api_key=RGAPI-5348731e-fa55-4d57-a537-2d9a4eb54eba",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response.matches[0]);
      });

}