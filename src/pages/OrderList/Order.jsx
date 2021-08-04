import React from "react";
import Table from "../../components/Table/Table";
import Topbar from "../../components/Topbar";

import "./order.css";

function Order() {
  const th = [
    "CUSTOMER",
    "PICKUP",
    "DROP OFF",
    "SENDERS PHONE NO",
    "DISPATCH RIDER",
    "AMOUNT",
    "STATUS",
  ];
  const Icons = [];
  const td = [
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Amsterdam",
      dropOff: "Kathmandu",
      Gsm: "(653)832-8822",
      rider: "Richard Oliver",
      amount: "N2,800",
      status: "Canceled",
    },
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Melbourne",
      dropOff: "Chicago",
      Gsm: "(648)837-1385",
      rider: "Rachel Reynolds",
      amount: "N2,800",
      status: "Delivered",
    },
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Amsterdam",
      dropOff: "Kathmandu",
      Gsm: "(653)832-8822",
      rider: "Richard Oliver",
      amount: "N2,800",
      status: "Delivered",
    },
  ];
  return (
    <div className="home container">
      <Topbar />
      <div className="orderWrapper">
        <div className="orderTop">
          <h2 className="orderTop__Title">ALL ORDERS</h2>
          <div>
            <input type="date" className="input" />
            <select>
              <option>Status</option>
            </select>
            <button>Filter</button>
          </div>
        </div>
        <Table th={th} td={td} Icons={Icons} />
      </div>
    </div>
  );
}

export default Order;
