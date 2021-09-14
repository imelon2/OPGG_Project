import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { getGameData } from "../../oop/getGameData";
import { getCampNameId } from "../../oop/getCampNameId";
import { getCampNameFromId } from "../../oop/getCampNameFromId";


const SectionCenter = () => {
    const [champName,setChampName] = React.useState();
    const [champUrl, setChampUrl] = React.useState();
    // "http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/" + {champName} + ".png"
    const inputRef : React.MutableRefObject<any>= React.useRef();
    const idRef = React.useRef;

    const _getGameData = (event:any) => {
         event.preventDefault(event);
        //  게임ID가져오기
        const gameID: number = inputRef.current.value;

        let DataApi =  new getGameData(gameID);
        DataApi.dataAPI().then(function(data : any[]) {
            console.log(data);
            let champIdList : Number|String[] = [];

            for (let i = 0; i < 10; i++) {
                let champId = data[i].championId;
                champIdList.push(champId);
            }

            console.log(champIdList);
            
            // champId로 영어이름 갖고오기
            getCampNameFromId(champIdList);

            // for (let i = 0 ; i < 10; i++)  {
            //     $("#participantId"+ i).val()
            // }


 
            
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
                    <div className="totalPlayers">
                        <div className="_totalPlayers">
                            <div className="players">
                                <table>
                                    <tr>
                                        <div className="team1" id="participantId0">
                                            <img src={champUrl} />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2" id="participantId5">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1" id="participantId1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2" id="participantId6">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1" id="participantId2">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2" id="participantId7">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1" id="participantId3">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2" id="participantId8">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1" id="participantId4">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2" id="participantId9">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
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