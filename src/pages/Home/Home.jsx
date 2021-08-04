import React from "react";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import Topbar from "../../components/Topbar";

import "./Home.css";

function Home() {
  return (
    <div className="home container">
      <Topbar />
      <FeaturedInfo />
    </div>
  );
}

export default Home;
