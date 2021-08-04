import React from "react";

function FeaturedDetails({ title, img, value }) {
  return (
    <>
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{value}</span>
          <img src={img} alt="analysis" />
        </div>
      </div>
    </>
  );
}

export default FeaturedDetails;
