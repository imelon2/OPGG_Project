import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { getGameData } from "../../oop/getGameData";
import { getCampNameFromId } from "../../oop/getCampNameFromId";
import PlayerList from "./playerList/PlayerList";
import { champNameReturnReg } from "../../oop/champNameReturnReg";


declare global {
    interface Window {
        FB:any;
    }
}

const SearchCustomGame = () => {
    const [champImgUrl,setChampImgUrl] = React.useState<string[]>([]);
    const [champData, setChampData] = React.useState<any[]>([]);


    const inputRef : React.MutableRefObject<any>= React.useRef();


    const _getGameData = (event:any) => {
         event.preventDefault(event);
        //  게임ID가져오기
        const gameID: number = inputRef.current.value;
        
        let DataApi =  new getGameData(gameID);
        DataApi.dataAPI().then(function(data : any[]) {

            console.log(data);
            // champId로 영어이름 갖고오기
            let champIdList = [];
            let playerDataList : any[] = [];
            for (let i = 0; i < 10; i++) {
                // 챔프이름 구별
                let champId = data[i].championId;
                champIdList.push(champId);

                // 챔프 KDA 구별
                let _champData ={
                    gameId : Number,
                    participant : String,
                    gameCreation : Number,
                    champ : String,
                    title : String,
                    win : Boolean,
                    champK:Number,
                    champD:Number,
                    champA:Number,
                    gold: Number,
                    totalDamage: Number
                }
                _champData.gameId = data[10].gameId
                _champData.participant = null;
                _champData.gameCreation = data[10].gameCreation;
                _champData.title = null;
                _champData.win = data[i].win;
                _champData.champ = data[i].championId;
                _champData.champK = data[i].kills;
                _champData.champD = data[i].deaths;
                _champData.champA = data[i].assists;
                _champData.gold = data[i].goldEarned;
                _champData.totalDamage = data[i].totalDamageDealtToChampions;

                playerDataList.push(_champData)
            }
            // 챔프id -> 챔프영어이름
            getCampNameFromId(champIdList).then((data : any[]) => {

                let champReg = new champNameReturnReg();
                //정규화된 챔프이름[] 리턴
                let champUrl = champReg.champNameReturnRegUrl(data);

                // 챔프 이미지 보여주기
                setChampImgUrl(champUrl);
            });   
                //플레이어 KDA보여주기
                setChampData(playerDataList);


            // 딜그래프 전환
                //최댓값 호출
                const damageArr : number[] = [];
                let maxNum:number = 0;
                for (let i = 0; i < playerDataList.length ; i++) {
                    const _damage = playerDataList[i].totalDamage;   
                    damageArr.push(_damage);  
                }

                for(var i = 0; i < damageArr.length; i++) {
                    // maxNum의 값과 현재 값을 비교해서 maxNum값을 가장 큰 값으로 유지
                    if (maxNum < damageArr[i]) {
                        maxNum = damageArr[i];
                    }
                }
                // 그래프max 값 결정
                let num = maxNum.toString();
                let barMax = Math.ceil(maxNum/(Math.pow(10,num.length -1)))*(Math.pow(10,num.length -1));

                // 플레이어 각자 딜량 배열
                let perDamagePercent = [];
                for(let a of damageArr){
                    let perDamage = a/(barMax*0.01);

                    perDamagePercent.push(perDamage.toFixed(0));
                }

                //딜 그래프 css 바꾸기
                for(let i = 1; i < perDamagePercent.length + 1; i++) {
                    $("#bar"+[i]+"-change").css('width',perDamagePercent[i-1]+'%')
                    $("#bar"+[i]+"-change").show();
                    $("#bar"+[i]+"-change").attr("id","bar"+[i]); 
                }
                for(let i = 1; i < perDamagePercent.length + 1; i++) {
                        document.documentElement.style.setProperty('--my-start'+[i],perDamagePercent[i-1]+'%');
                    }
                setTimeout(() => {
                    for(let i = 1; i < perDamagePercent.length + 1; i++) {
                    $("#bar"+[i]).attr("id","bar"+[i]+"-change"); 
                    }
                }, 1);


                //승패결과값 리턴
                if(data[11].win == 'Win'){
                    $('.result1').text("Win");
                    $('.result2').text("Lose");
                } else {
                    $('.result1').text("Lose");
                    $('.result2').text("Win");
                }

                //검색 후 결과 애니메이션
                $('.totalPlayers').css("opacity", "10");


        });  
    };

    return (
        <>
                    <div className="teamNav">
                        <div>TEAM 1</div>
                        <div className="result1"></div>
                        <div>
                            <form className="gameID" onSubmit={_getGameData}>    
                            <input ref={inputRef} type="text" placeholder="게임아이디"/>
                            <button>Search GameData</button>
                            </form>
                        </div>
                        <div className="result2"></div>
                        <div>TEAM 2</div>
                    </div>
                    <PlayerList champImgUrl={...champImgUrl} champData={...champData} />
        </>
    );
}

export default SearchCustomGame;