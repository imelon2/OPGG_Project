
export class champNameReturnReg {

    champNameReturnRegUrl(data:string[])  {
       const reg = /[ \.]/gi ;
   
       let champUrl : string[] = [];
       for (let i =0;i < data.length; i++){
           let spaceReq = data[i];
           let champCleanN = spaceReq.replace(reg, '')
           let url = "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/" + champCleanN + ".png";
           champUrl.push(url);
       }
       return champUrl;

}

    champNameReturnRegString(data:string[])  {
        const reg = /[ \.]/gi ;

        let champUrl : string[] = [];
        for (let i =0;i < data.length; i++){
            let spaceReq = data[i];
            let champCleanN = spaceReq.replace(reg, '')
            champUrl.push(champCleanN);
        }
        return champUrl;

    }

}
