//
//챔프ID를 챔프영어 이름으로 호출하는 API
//
export function getCampNameFromId(champIdList : Number|String[]) {
    let dataReturn:[] = [];
        $.ajax({
            type: "post",
            url: "getdata/champNameList",
            data: JSON.stringify(champIdList),
            contentType: "application/json",
            async : false
        }).done(function(data: []) {
            dataReturn = data
        })

        return dataReturn;
 }