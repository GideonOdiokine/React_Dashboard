import React from "react";
import { useHistory } from "react-router";

function TableHeadTitle() {
  const history = useHistory();
  console.log(history.location.pathname);
  return (
    <div>
      {history.location.pathname === "/order" && (
        <h2
          style={{
            padding: "18px",
            fontFamily: "sans-serif",
            color: "gray",
            fontWeight: "100",
            fontSize: "15px",
          }}
        >
          ORDERS
        </h2>
      )}
      {history.location.pathname === "/rider" && (
        <h2
          style={{
            padding: "18px",
            fontFamily: "sans-serif",
            color: "gray",
            fontWeight: "100",
            fontSize: "15px",
          }}
        >
          RIDERS
        </h2>
      )}
    </div>
  );
}

export default TableHeadTitle;
