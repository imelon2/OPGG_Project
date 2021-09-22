//
// 챔피언 리스트 업데이트
// 
export class getCampNameId {

   updateChampList() {
        var settings = {
            "url": "http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json?data",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
            const arr = [];
            for(let key in response.data) {
                let items = {
                    champName : response.data[key].name,
                    champId : response.data[key].key
                } 
                arr.push(items);
            }

            $.ajax({
                type: "post",
                url: "update/champList",
                data: JSON.stringify(arr),
				contentType: "application/json",
                success: function() {
                    console.log("성공");
                },
                error : function() {
                    console.log("실패");
                    
                }
            })
          });

    }
}
