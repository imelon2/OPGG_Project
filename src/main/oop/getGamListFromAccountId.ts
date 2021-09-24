//
// 유저의 accountId로
// 유저의 전적 리스트를 호출하는 api
//
export function getGamListFromAccountId(accountId: string) {
  var settings = {
    url:
      "https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/" +
      accountId +
      "?api_key=RGAPI-160ab3ef-4ebd-4f24-ad80-70ac486ead64",
    method: "GET",
    timeout: 0,
  };

  return new Promise(function (resolve, reject) {
    $.ajax(settings).done(function (response) {
      let data = {
        accountId: accountId,
        matches: response.matches,
      };
      resolve(data);
    });
  });
}
