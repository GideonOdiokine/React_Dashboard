import React from "react";
import "./login.css";
import Logo from "../../img/logo1.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <img src={Logo} alt="logo" />
        <div className="form1">
          <p>Welcome back! please log in to continue</p>
          <form>
            <div className="form-input">
              <input type="text" placeholder="Username or email" />
            </div>
            <div className="form-input">
              <input type="email" placeholder="Password" />
            </div>
            <Link>
              <span>Forgot Password?</span>
            </Link>
            <Link to="/dashboard">
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
