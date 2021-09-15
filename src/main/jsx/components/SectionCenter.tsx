import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { getGameData } from "../../oop/getGameData";
import { getCampNameId } from "../../oop/getCampNameId";
import { getCampNameFromId } from "../../oop/getCampNameFromId";
import PlayerList from "./playerList/PlayerList";
import { champNameReturnReg } from "../../oop/champNameReturnReg";


const SectionCenter = () => {
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
                let _champData ={
                    win : Boolean,
                    champK:Number,
                    champD:Number,
                    champA:Number,
                    gold: Number,
                    totalDamage: Number
            }

                champIdList.push(champId);
                // 챔프 KDA 구별
                _champData.win = data[i].win;
                _champData.champK = data[i].kills;
                _champData.champD = data[i].deaths;
                _champData.champA = data[i].assists;
                _champData.gold = data[i].goldEarned;
                _champData.totalDamage = data[i].totalDamageDealtToChampions;

                playerDataList.push(_champData)
            }
            getCampNameFromId(champIdList).then((data : any[]) => {
                //챔프 이름 정규화 리턴
                let champUrl = champNameReturnReg(data);
                // 챔프 이미지 보여주기
                setChampImgUrl(champUrl);
            });   
            //플레이어 KDA보여주기
                setChampData(playerDataList);
                console.log(playerDataList);
                

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
                    $("#bar"+[i]+"-change").css('width',perDamagePercent[i-1]+'%');
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

        });  
    };

    return (
        <div>
            <section className="center">
                <div className="background">
                    <div className="teamNav">
                        <div>TEAM 1</div>
                        <div>win</div>
                        <div>
                            <form className="gameID" onSubmit={_getGameData}>    
                            <input ref={inputRef} type="text" placeholder="게임아이디"/>
                            <button>Search GameData</button>
                            </form>
                        </div>
                        <div>lose</div>
                        <div>TEAM 2</div>
                    </div>
                    <PlayerList champImgUrl={...champImgUrl} champData={...champData} />
                    <div className="gameStats">
                        <div className="_gameStats">

                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
}

export default SectionCenter;