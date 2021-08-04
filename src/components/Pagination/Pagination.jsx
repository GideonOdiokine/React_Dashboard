import React from "react";
import chevonLeft from "../../img/chevron-left.png";
import chevonRight from "../../img/chevron-right.png";

function Pagination() {
  return (
    <div style={{ marginTop: "13px" }}>
      <div className="orderIcon">
        <div>
          <img src={chevonLeft} alt="" />
        </div>
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>
          <img src={chevonRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
