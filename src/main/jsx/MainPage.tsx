import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import Navbar from "./components/Navbar";
import SectionCenter from "./components/SectionCenter";


export interface HelloProps { compiler: string; framework: string; }

class MainPage extends React.Component<HelloProps,{}> {

    render() {
        return (
            <>
            <Navbar/>
            <SectionCenter/>
            </>
        );
        
    }
 
}

 
ReactDOM.render(<MainPage compiler="TypeScript" framework="React"/>, document.getElementById('root'));

// 다른 jsx 불러올때
// module.exports = MainPage;