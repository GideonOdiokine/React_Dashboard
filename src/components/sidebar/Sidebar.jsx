import React from "react";
import "./Sidebar.css";
import Logo from "../../img/Logo.png";
import OrderImg from "../../img/order_nav.png";
import HomeIcon from "../../img/home.png";
import user from "../../img/user.png";
import LogoutBtn from "../../img/logout.png";
import bg from "../../img/bg.png";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebar__nav">
            <div className="sidebarTitle">
              <img src={Logo} alt="logo" />{" "}
            </div>
            <ul className="sidebarList">
              <NavLink exact activeClassName="active-link" to="/">
                <li className="sidebarListItem ">
                  <img src={HomeIcon} alt="order-img" className="sidebarIcon" />
                  Home
                </li>
              </NavLink>
              <NavLink exact activeClassName="active-link" to="/order">
                <li className="sidebarListItem">
                  <img src={OrderImg} alt="order-img" className="sidebarIcon" />
                  Orders
                </li>
              </NavLink>
              <NavLink exact activeClassName="active-link" to="/rider">
                <li className="sidebarListItem">
                  <img src={user} alt="nav_user" className="sidebarIcon" />
                  Dispatch Riders
                </li>
              </NavLink>
            </ul>
            <img src={bg} alt="sidebar" className="sidebar_bg" />
            <button>
              <img src={LogoutBtn} alt="btn" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
