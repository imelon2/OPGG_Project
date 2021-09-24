export function updateRuneList() {
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
        "/data/en_US/runesReforged.json",
      method: "GET",
      timeout: 0,
    };

    $.ajax(settings).done(function (response) {
      let data = [];

      for (let i = 0; i < response.length; i++) {
        let _data = {
          id: response[i].id,
          name: response[i].name,
          icon: response[i].icon,
        };
        data.push(_data);
      }
      for (let i = 0; i < response.length; i++) {
        for (let j = 0; j < response[i].slots.length; j++) {
          for (let k = 0; k < response[i].slots[j].runes.length; k++) {
            let _data = {
              id: response[i].slots[j].runes[k].id,
              name: response[i].slots[j].runes[k].name,
              icon: response[i].slots[j].runes[k].icon,
            };

            data.push(_data);
          }
        }
      }

      $.ajax({
        type: "post",
        url: "update/runeList",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function () {
          console.log("RuneList update success");
        },
        error: function () {
          console.log("RuneList update erroe");
        },
      });
    });
  });
}
