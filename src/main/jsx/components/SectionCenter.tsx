import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import { getGameData } from "../../oop/getGameData";
import { getCampNameId } from "../../oop/getCampNameId";


const SectionCenter = () => {
    const inputRef:any = React.createRef();
    const gettest = (event:any) => {
        event.preventDefault(event);

        // const name = inputRef.current.value;
        // let b =  new getGameData(name);
        // b.dataAPI().then(function(data : number) {
        //     console.log(data);
        // });  
        let test = new getCampNameId();
        let testLog = test.test();
        console.log(testLog);
    }

        

    return (
        <div>
            <section className="center">
                <div className="background">
                    <h2>Search Data</h2>
                        <form className="gameID" onSubmit={gettest}>
                        <input ref={inputRef} type="text" placeholder="게임아이디"/>
                        <button className="add-button">add</button>
                        </form>
                    <div className="team1">
                        <div className="_team1">
                            <h1>1팀</h1>
                            <div className="participant" id="ID1"></div>
                            <div className="participant" id="ID2"></div>
                            <div className="participant" id="ID3"></div>
                            <div className="participant" id="ID4"></div>
                            <div className="participant" id="ID5"></div>
                        </div>
                    </div>
                    <div className="team2">
                        <div className="_team2">
                            <h1>2팀</h1>
                            <div className="participant" id="ID6"></div>
                            <div className="participant" id="ID7"></div>
                            <div className="participant" id="ID8"></div>
                            <div className="participant" id="ID9"></div>
                            <div className="participant" id="ID10"></div>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
}

export default SectionCenter;