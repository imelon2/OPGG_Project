//
//유저 닉네임으로 유저관련 데이터 호출하는 API
//
export function getUserInfo(userId:string) {
      return new Promise(function(resolve, reject) {
          $.ajax({
              type: "GET",
              url : "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+userId+"?api_key=RGAPI-984bbde3-46c6-43f3-8543-d0ad70aecd2d",
              success: function(response) {
                let data = {
                    name:response.name,
                    accountId : response.accountId
                }
                resolve(data)
              },
              error: function() {
                resolve(false)
              }
          })
    })
}