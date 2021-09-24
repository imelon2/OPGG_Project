//
//spellId로 spell영어 이름으로 호출하는 API
//
export function getSpellNameFromId(spellId: number[]) {
  let spellName: [] = [];

  $.ajax({
    type: "post",
    url: "/getdata/spellName",
    data: JSON.stringify(spellId),
    contentType: "application/json",
    async: false,
    success: function (data) {
      spellName = data;
    },
    error: function () {
      console.log("getSpellName error");
    },
  });

  return spellName;
}
