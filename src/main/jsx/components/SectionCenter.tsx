import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { getGameData } from "../../oop/getGameData";
import { getCampNameId } from "../../oop/getCampNameId";


const SectionCenter = () => {
    const [champName,setChampName] = React.useState();
    const inputRef : React.MutableRefObject<any>= React.useRef();

    const gettest = (event:any) => {
         event.preventDefault(event);

        const name: number = inputRef.current.value;
        let DataApi =  new getGameData(name);
        DataApi.dataAPI().then(function(data) {
            console.log(data);
        });  
        // let test = new getCampNameId();
        // let testLog = test.updateChampList();
    };
    return (
        <div>
            <section className="center">
                <div className="background">
                    <div className="teamNav">
                        <div>TEAM 1</div>
                        <div>win</div>
                        <div>
                            <form className="gameID" onSubmit={gettest}>    
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
                                        <div className="team1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                            <span>1995.10.01</span>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="team1">
                                            <img src="http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png" />
                                            <div className="con">
                                                <input type="text" placeholder="유저명을 입력해주세여" />
                                                <p>K/D/A</p>
                                                <span style={{width: "70%"}}>75%</span>
                                            </div>
                                        </div>
                                        <div className="team2">
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