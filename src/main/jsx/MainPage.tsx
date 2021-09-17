import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchCustomGame from "./components/SearchCustomGame";
import SearchGame from "./components/SearchGame";

export interface HelloProps {
  compiler: string;
  framework: string;
}

class MainPage extends React.Component<HelloProps, {}> {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <section className="center">
            <div className="background">
              <Switch>
                <Route exact path="/wonhyeok">
                  <SearchGame />
                </Route>
                <Route path="/wonhyeok/SearchCustomGame">
                  <SearchCustomGame />
                </Route>
              </Switch>
            </div>
          </section>
        </>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <MainPage compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);

// 다른 jsx 불러올때
// module.exports = MainPage;
