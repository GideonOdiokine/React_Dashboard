import React from "react";
import "./form.css";

function Form() {
  return (
    <div className="form" >
      <form className="form__group">
        <div className="form-control">
          <label>FULL NAME</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>EMAIL</label>
          <input type="email" />
        </div>
        <div className="form-control">
          <label>PHONE NO.</label>
          <input type="number" />
        </div>
        <div className="form-control">
          <label>SCHOOL</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Form;
