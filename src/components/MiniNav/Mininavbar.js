import React from "react";
import { Link } from "react-router-dom";
import "./Mininavbar.css";

function Mininavbar({ burger, setBurger }) {
  return (
    <div>
      <nav id="nav" class={`nav ${burger} && expanded`}>
        
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => setBurger(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={() => setBurger(false)}>
              Order
            </Link>
          </li>
          <li>
            <Link to="/rider" onClick={() => setBurger(false)}>
              Dispatch Rider
            </Link>
          </li>
          <li className="logout__btn" ><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Mininavbar;
