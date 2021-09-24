//
//유저 닉네임으로 유저관련 데이터 호출하는 API
//
export function getUserInfo(userId: string) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url:
        "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        userId +
        "?api_key=RGAPI-160ab3ef-4ebd-4f24-ad80-70ac486ead64",
      success: function (response) {
        let data = {
          name: response.name,
          accountId: response.accountId,
        };
        resolve(data);
      },
      error: function () {
        resolve(false);
      },
    });
  });
}
