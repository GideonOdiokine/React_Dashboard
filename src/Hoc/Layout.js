import React from "react";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <div>
      <Topbar />
      {props.children}
    </div>
  );
}

export default Layout;
