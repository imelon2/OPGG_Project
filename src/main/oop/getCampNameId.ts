import { data } from "jquery";

export class getCampNameId {



   test() {
        var settings = {
            "url": "http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json?data",
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(settings).done(function (response) {
              let _champName  =[] ;
              let _champId  = [] ;
            for(let key in response.data) {
                _champName.push(response.data[key].name);
                _champId.push(response.data[key].key);  

            }
            console.log(_champName[0]);
            console.log(_champId[0]);
            

            const arr = [];
            for(let i = 0; i < _champName.length; i++) {
                let item = { champName : String, champId : Number }
                item.champName = _champName[i];
                item.champId = _champId[i];
                arr.push(item);
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
