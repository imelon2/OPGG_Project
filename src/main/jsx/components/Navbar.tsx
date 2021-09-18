import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import * as $ from "jquery";

const Navbar = () => {
  function navbarOnAnimation() {
    $("nav").css("top", "0px");
  }

  function navbarOutAnimation() {
    $("nav").css("top", "-60px");
  }

  return (
    <nav onMouseOver={navbarOnAnimation} onMouseOut={navbarOutAnimation}>
      <div className="nav1">
        <Link to="/">SearchGame</Link>
      </div>
      <div className="nav2">
        <Link to="/SearchCustomGame">Search Custom Game</Link>
      </div>
      <div className="nav3">MyCustom Game Info</div>
      <div className="nav4">Players Info</div>
    </nav>
  );
};

export default Navbar;
