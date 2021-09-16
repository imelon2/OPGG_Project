import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import SaveBar from "../SaveBar/Savebar";
import GameState from "../gameStates/GameDState";
import { getCampNameFromId } from "../../../oop/getCampNameFromId";



const PlayerList = (props : any) =>  {
    const champDate : any[] = [];
    for(let key in props.champData) {
        champDate.push(props.champData[key])
    }
    console.log(champDate);
    
    function saveData(title : any) { 
        if($('.participant').val() !== "" && title ){
            let saveData = [];
            let list = [];
            for(let l of champDate) {
                let data = l.champ;
                list.push(data);
            }
            getCampNameFromId(list).then((listOfChampName : []) => {

                for(let i = 0; i < 10; i ++) {

                let _saveData : any = {
                        gameId : string,
                        gameCreation,
                        title,
                        name,
                        K ,
                        D ,
                        A ,
                        champ,
                        victory,
                    }

                let participant = $('#participant' + i).val();
                    _saveData.gameId = champDate[i].gameId;
                    let date = new Date(1631372859651);
                    _saveData.gameCreation = toString(date);
                    _saveData.title = title;
                    _saveData.name = participant;
                    _saveData.K
                    _saveData.D
                    _saveData.A
                    _saveData.champ = listOfChampName[i];
                    _saveData.victory != champDate[i].win ? "승" : "패";
                }
    
                console.log(champDate);
            });










        } else if ($('.participant').val() == "") {
            alert("플레이어를 전부 입력해주세요.")
        } else if (title == "") {
            alert('제목을 정해주세요')
        }
        
    }

    
    return(
        <>
        <div className="totalPlayers">
            <div className="_totalPlayers">
                <div className="players">
                    <ul className="team1">
                    <li>
                            <img src={props.champImgUrl[0]} />
                            <div className="con">
                                <input className="participant" id="participant0" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[0]?.champK}/{champDate[0]?.champD}/{champDate[0]?.champA}</p>
                                <div className="graph">
                                    <span id="bar1-change">{champDate[0]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[1]} />
                            <div className="con">
                                <input className="participant" id="participant1" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[1]?.champK}/{champDate[1]?.champD}/{champDate[1]?.champA}</p>
                                <div className="graph">
                                    <span id="bar2-change">{champDate[1]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[2]} />
                            <div className="con">
                                <input className="participant" id="participant2" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[2]?.champK}/{champDate[2]?.champD}/{champDate[2]?.champA}</p>
                                <div className="graph">
                                    <span id="bar3-change">{champDate[2]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[3]} />
                            <div className="con">
                                <input className="participant" id="participant3" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[3]?.champK}/{champDate[3]?.champD}/{champDate[3]?.champA}</p>
                                <div className="graph">
                                    <span id="bar4-change">{champDate[3]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[4]} />
                            <div className="con">
                                <input className="participant" id="participant4" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[4]?.champK}/{champDate[4]?.champD}/{champDate[4]?.champA}</p>
                                <div className="graph">
                                    <span id="bar5-change">{champDate[4]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="team2">
                        <li>
                            <img src={props.champImgUrl[5]} />
                            <div className="con">
                                <input className="participant" id="participant5" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[5]?.champK}/{champDate[5]?.champD}/{champDate[5]?.champA}</p>
                                <div className="graph">
                                    <span id="bar6-change">{champDate[5]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[6]} />
                            <div className="con">
                                <input className="participant" id="participant6" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[6]?.champK}/{champDate[6]?.champD}/{champDate[6]?.champA}</p>
                                <div className="graph">
                                    <span id="bar7-change">{champDate[6]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[7]} />
                            <div className="con">
                                <input className="participant" id="participant7" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[7]?.champK}/{champDate[7]?.champD}/{champDate[7]?.champA}</p>
                                <div className="graph">
                                    <span id="bar8-change">{champDate[7]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[8]} />
                            <div className="con">
                                <input className="participant" id="participant8" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[8]?.champK}/{champDate[8]?.champD}/{champDate[8]?.champA}</p>
                                <div className="graph">
                                    <span id="bar9-change">{champDate[8]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[9]} />
                            <div className="con">
                                <input className="participant" id="participant9" type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[9]?.champK}/{champDate[9]?.champD}/{champDate[9]?.champA}</p>
                                <div className="graph">
                                    <span id="bar10-change">{champDate[9]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <GameState/>
        <SaveBar saveData = {saveData}/>
        </>
    );
}

export default PlayerList; 