import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Order from "./pages/OrderList/Order.jsx";
import Rider from "./pages/DispatchRider/Rider.jsx";
import Create from "./pages/CreateRider/Create.jsx";
import Layout from "./components/Layout.js";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route exact path="/order">
            <Layout>
              <Order />
            </Layout>
          </Route>
          <Route path="/rider">
            <Layout>
              <Rider />
            </Layout>
          </Route>
          <Route path="/create">
            <Layout>
              <Create />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
