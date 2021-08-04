import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Order from "./pages/OrderList/Order.jsx";
import Rider from "./pages/DispatchRider/Rider.jsx";
import Create from "./pages/CreateRider/Create.jsx";
// import create from "./pages/CreateRider/create.jsx";

function App() {
  return (
    <Router>
      <div className="container flex">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route path="/rider">
            <Rider />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
