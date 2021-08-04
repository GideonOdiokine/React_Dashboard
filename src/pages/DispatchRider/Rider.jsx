import React from "react";
import Table from "../../components/Table/Table";
import Topbar from "../../components/Topbar";
import groupBtn from "../../img/group.png";
import searchIcon from "../../img/path.png";
import { Link } from "react-router-dom";

import "./rider.css";

function Rider() {
  const th = [
    "PROFILE",
    "PHONE NUMBER",
    "EMAIL ADDRESS",
    "DAILY EARNING",
    "STATUS",
    "ACTION",
    // "STATUS",
  ];
  const Icons = [];
  const td = [
    {
      user: "Mr. Gideon Okoro",
      country: "Amsterdam",
      drop: "Kathmandu",
      phone: "(653)832-8822",
      statusD: "Free",
      action: "SELECT",
    },
    {
      user: "Mr. Gideon Okoro",

      country: "Amsterdam",
      drop: "Kathmandu",
      phone: "(653)832-8822",
      statusD: "Enroute",
      action: "SELECT",
    },
    {
      user: "Mr. Gideon Okoro",
      country: "Amsterdam",
      drop: "Kathmandu",
      phone: "(653)832-8822",
      statusD: "Delivered",
      action: "SELECT",
    },
    {
      user: "Mr. Gideon Okoro",
      country: "Amsterdam",
      drop: "Kathmandu",
      phone: "(653)832-8822",
      statusD: "Enroute",
      action: "SELECT",
    },
    {
      user: "Mr. Gideon Okoro",
      country: "Amsterdam",
      drop: "Kathmandu",
      phone: "(653)832-8822",
      statusD: "Enroute",
      action: "SELECT",
    },
  ];
  return (
    <div className="container home">
      <Topbar />
      <div className="orderWrapper">
        <div className="orderTop rider rider_top">
          <h2 className="orderTop__Title">Dispatch Riders</h2>
          <div>
            <div className="searchInput">
              <img src={searchIcon} alt="search" className="searchImg" />
              <input
                type="text"
                className="input"
                placeholder="Search email address"
              />
            </div>
           <Link to='/create' > <button>
              <img src={groupBtn} alt="btn" />
              CREATE ACCOUNT
            </button></Link>
          </div>
        </div>
        {/* <Table th={th} td={td} Icons={Icons} /> */}
      </div>
      <Table th={th} td={td} Icons={Icons} />
    </div>
  );
}

export default Rider;
