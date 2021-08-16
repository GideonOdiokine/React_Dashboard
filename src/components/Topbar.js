import React, { useState } from "react";
import Mininavbar from "./MiniNav/Mininavbar";

import "./topbar.css";
// import pix from "../img/avatarPro.png";
function Topbar() {
  const [burger, setBurger] = useState(false);

  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <div className="topbar">
      <div className="burger" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {burger && <Mininavbar burger={burger} setBurger={setBurger} />}
      <div className="topRight  class">
        <h2>Mr. Gidysmart</h2>
        <div className="avatar-img"></div>
      </div>
    </div>
  );
}

export default Topbar;
