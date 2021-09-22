
//
//챔프 이미지를 호출하는 URL의 챔프이름에 특수 or 공백이 있으면 안되서
//챔프이름을 정규화해서 URL을 호출하는 API
//
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
        const reg = /[ \.\']/gi ;

        let champUrl : string[] = [];
        for (let i =0;i < data.length; i++){
            let spaceReq = data[i];
            let champCleanN : string = spaceReq.replace(reg, '')
            // console.log(champCleanN);
            let front = champCleanN.charAt(0);
            let behind = champCleanN.slice(1).toLowerCase();
            let result = front+behind
            console.log(result);
            
            champUrl.push(result);
        }
        return champUrl;

    }

}
