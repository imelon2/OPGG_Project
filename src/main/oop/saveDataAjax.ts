

export function saveDataAjax(saveData:any[]) {
    let id = saveData[0].gameId;
    return new Promise(function(resolve, reject)  {
        $.ajax({
            type: "post",
            url: "getdata/checkDup",
            data: JSON.stringify(id),
            contentType: "application/json",
            success : function(data) {
                if(data == ""){
                    $.ajax({
                        type: "post",
                        url: "getdata/saveData",
                        data: JSON.stringify(saveData),
                        contentType: "application/json"
                    }).done(function() {
                        resolve("Success Save Data");
                        reject("Error From SaveDataAjax")
                    })
                } else if (data == id) {
                    resolve ("이미 저장된 게임데이터 입니다.")
                }
            }
        })
    })
}