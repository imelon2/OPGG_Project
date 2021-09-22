//
//챔프ID를 챔프영어 이름으로 호출하는 API
//
export function getCampNameFromId(champIdList : Number|String[]) {

    return new Promise(function(resolve, reject)  {
        $.ajax({
            type: "post",
            url: "getdata/champNameList",
            data: JSON.stringify(champIdList),
            contentType: "application/json"
        }).done(function(data: any[]) {
            resolve(data);
        })

    })
}