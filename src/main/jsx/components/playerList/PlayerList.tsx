import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";



const PlayerList = (props : any) =>  {

    const champDate = [];
    
    for(let key in props.champData) {
        champDate.push(props.champData[key])
    }
    console.log(champDate[0]);
    return(
        <div className="totalPlayers">
            <div className="_totalPlayers">
                <div className="players">
                    <ul className="team1">
                    <li>
                            <img src={props.champImgUrl[0]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[0]?.champK}/{champDate[0]?.champD}/{champDate[0]?.champA}</p>
                                <div className="graph">
                                    <span id="bar1-change">{champDate[0]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[1]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[1]?.champK}/{champDate[1]?.champD}/{champDate[1]?.champA}</p>
                                <div className="graph">
                                    <span id="bar2-change">{champDate[1]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[2]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[2]?.champK}/{champDate[2]?.champD}/{champDate[2]?.champA}</p>
                                <div className="graph">
                                    <span id="bar3-change">{champDate[2]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[3]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[3]?.champK}/{champDate[3]?.champD}/{champDate[3]?.champA}</p>
                                <div className="graph">
                                    <span id="bar4-change">{champDate[3]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[4]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
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
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[5]?.champK}/{champDate[5]?.champD}/{champDate[5]?.champA}</p>
                                <div className="graph">
                                    <span id="bar6-change">{champDate[5]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[6]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[6]?.champK}/{champDate[6]?.champD}/{champDate[6]?.champA}</p>
                                <div className="graph">
                                    <span id="bar7-change">{champDate[6]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[7]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[7]?.champK}/{champDate[7]?.champD}/{champDate[7]?.champA}</p>
                                <div className="graph">
                                    <span id="bar8-change">{champDate[7]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[8]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
                                <p>{champDate[8]?.champK}/{champDate[8]?.champD}/{champDate[8]?.champA}</p>
                                <div className="graph">
                                    <span id="bar9-change">{champDate[8]?.totalDamage}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={props.champImgUrl[9]} />
                            <div className="con">
                                <input type="text" placeholder="유저명을 입력해주세여" />
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
    );
}

export default PlayerList; 