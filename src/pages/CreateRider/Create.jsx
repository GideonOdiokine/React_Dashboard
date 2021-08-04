import React from "react";
import Form from "../../components/Form/Form";
import Topbar from "../../components/Topbar";
// import { Link } from "react-router-dom";

function Create() {
  return (
    <div className="home container">
      <Topbar />
      <div className="featured_top ">
        <h2 className="featured__Title small">Add Dispatch Rider</h2>
      </div>
      <Form />
    </div>
  );
}

export default Create;
