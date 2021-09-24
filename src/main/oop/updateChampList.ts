//
// 챔피언 리스트 업데이트
//
export function updateChampList() {
  var settings = {
    url: "https://ddragon.leagueoflegends.com/api/versions.json",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    let version = response[0];
    var settings = {
      url:
        "https://ddragon.leagueoflegends.com/cdn/" +
        version +
        "/data/ko_KR/champion.json",
      method: "GET",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      const arr = [];
      for (let key in response.data) {
        let items = {
          champName: response.data[key].id,
          champNameKR: response.data[key].name,
          champId: response.data[key].key,
        };
        arr.push(items);
      }

      $.ajax({
        type: "post",
        url: "update/champList",
        data: JSON.stringify(arr),
        contentType: "application/json",
        success: function () {
          console.log("champList update success");
        },
        error: function () {
          console.log("champList update erroe");
        },
      });
    });
  });
}
