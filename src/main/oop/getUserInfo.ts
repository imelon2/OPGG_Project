//
//유저 닉네임으로 유저관련 데이터 호출하는 API
//
export function getUserInfo(userId:string) {
    let settings = {
        "url": "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+userId+"?api_key=RGAPI-9ea370e2-4d4b-4ab4-840e-44a33bd87b3a",
        "method": "GET",
        "timeout": 0,
      };

      return new Promise(function(resolve, reject) {
        $.ajax(settings).done(function (response) {
            let data = {
                name:response.name,
                accountId : response.accountId
            }

            resolve(data);
            
        })
    })
}