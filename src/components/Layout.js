import React from "react";
import Topbar from "./Topbar";
import "./layout.css";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer/Footer";
function Layout(props) {
  return (
    <div>
      <div className="flex container">
        <Sidebar />

        <div className="layout">
          <Topbar />
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
