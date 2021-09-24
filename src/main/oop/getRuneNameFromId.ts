export function getRuneNameFromId(runeId: number[]) {
  let runeName: [] = [];
  $.ajax({
    type: "post",
    url: "/getdata/runeName",
    data: JSON.stringify(runeId),
    contentType: "application/json",
    async: false,
    success: function (data) {
      runeName = data;
    },
    error: function () {
      console.log("getSpellName error");
    },
  });

  return runeName;
}
