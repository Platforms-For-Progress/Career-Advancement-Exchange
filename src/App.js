import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import { Router } from "@reach/router";
import Contact from "./Components/Contact";
import Involved from "./Components/Involved";
import PastWork from "./Components/PastWork";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Request from "./Components/Request";
import Internal from "./Components/Internal";
import Story from "./Components/Story";
import Edit from "./Components/Edit";
import { useEffect } from "react";
import Create from "./Components/Create";
import Assign from "./Components/Assign";
import Status from "./Components/Status";
import Collab from "./Components/Collab";
import DBDashboard from "./Components/DBDashboard";

function App() {
  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);
  return (
    <div className="background">
      <Header />
      <Router>
        <Home path="/home" default />
        <About path="/about" />
        <Contact path="/contact" />
        <Involved path="/involved" />
        <PastWork path="/pastwork" />
        <Login path="/login" />
        <SignUp path="/signup" />
        <Profile path="/profile" />
        <Request path="/request/:uid" />
        <Internal path="/internal" />
        <Story path="/story/:uid" />
        <Edit path="/edit/:uid" />
        <Create path="/create" />
        <Assign path="/assign/:uid" />
        <Status path="/status/:uid" />
        <Collab path="/collab/:uid" />
        <DBDashboard path="/dbdashboard" />
      </Router>
      {/* <p>Hello Mate</p> */}
    </div>
  );
}

export default App;
