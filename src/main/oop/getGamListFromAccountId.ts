//
// 유저의 accountId로
// 유저의 전적 리스트를 호출하는 api
//
export function getGamListFromAccountId(accountId : string) {
    var settings = {
        "url": "https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/"+ accountId +"?api_key=RGAPI-9ea370e2-4d4b-4ab4-840e-44a33bd87b3a",
        "method": "GET",
        "timeout": 0,
      };
      
      return new Promise(function(resolve, reject) {
      $.ajax(settings).done(function (response) {
        resolve(response.matches);
      })
    });

}