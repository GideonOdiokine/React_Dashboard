import React from "react";
// import { Link } from "react-router-dom";
import "./featuredInfo.css";
import groupBtn from "../../img/group.png";
import AnalysisImg from "../../img/analysis.png";
import ContactImg from "../../img/contact.png";
import MoneyImg from "../../img/money.png";
import OrderImg from "../../img/order.png";
import Table from "../Table/Table";
import FeaturedDetails from "./FeaturedDetails";

function FeaturedInfo() {
  const th = [
    "CUSTOMER",
    "PICKUP",
    "DROP OFF",
    "SENDERS PHONE NO",
    "DISPATCH RIDER",
    "AMOUNT",
    "STATUS",
  ];
  const td = [
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Amsterdam",
      dropOff: "Kathmandu",
      Gsm: "(653)832-8822",
      rider: "Richard Oliver",
      amount: "N2,800",
      status: "Delivered",
    },
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Melbourne",
      dropOff: "Chicago",
      Gsm: "(648)837-1385",
      rider: "Rachel Reynolds",
      amount: "N2,800",
      status: "free",
    },
    {
      name: "Mr. Jonathan Okoro",
      pickup: "Melbourne",
      dropOff: "Chicago",
      Gsm: "(648)837-1385",
      rider: "Rachel Reynolds",
      amount: "N2,800",
      status: "Enroute",
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
    <div className="featuredWrapper">
      <div className="featured_top">
        <h2 className="featured__Title">Home</h2>
   
          <button>
            <img src={groupBtn} alt="btn" />
            CREATE ACCOUNT
          </button>
 
      </div>
      <div className="featured">
        <FeaturedDetails
          img={AnalysisImg}
          title="ENROUTE DELIVERIES"
          value={250}
        />
        <FeaturedDetails img={ContactImg} title="NEW ORDERS" value={20} />
        <FeaturedDetails
          img={MoneyImg}
          title="CLOSING BALANCE"
          value={"N230,000"}
        />
        <FeaturedDetails img={OrderImg} title="COMPLETED ORDERS" value={250} />
      </div>
      <Table th={th} td={td} btnTxt="Show More" />
    </div>
  );
}

export default FeaturedInfo;
