export function undateSpellList() {
        var settings = {
            "url": "https://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/summoner.json?data",
            "method": "GET",
            "timeout": 0,
          };
          
            $.ajax(settings).done(function (response) {

                let spellArr  = [] ;
                for (let key in response.data) {
                    let items = {
                        spellName : response.data[key].id,
                        spellId : response.data[key].key
                    }
                    spellArr.push(items);
                }
                
                console.log(spellArr);
                
        })
    }
