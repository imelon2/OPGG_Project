
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