export function undateSpellList() {
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
        "/data/en_US/summoner.json?data",
      method: "GET",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      let spellArr = [];
      for (let key in response.data) {
        let items = {
          spellName: response.data[key].id,
          spellId: response.data[key].key,
        };
        spellArr.push(items);
      }

      $.ajax({
        type: "post",
        url: "update/spellList",
        data: JSON.stringify(spellArr),
        contentType: "application/json",
        success: function () {
          console.log("spell data update success");
        },
        error: function () {
          console.log("spell data update error");
        },
      });
    });
  });
}
