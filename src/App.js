
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Router } from "@reach/router";
import Contact from "./Components/Contact";
import Involved from "./Components/Involved";
import PastWork from "./Components/PastWork";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
// import Profile from "./Components/Profile";
// import Request from "./Components/Request";
import Internal from "./Components/Internal";
import Story from "./Components/Story";
import Edit from "./Components/Edit";
import { useEffect } from "react";
import Create from "./Components/Create";
import Assign from "./Components/Assign";
// import Status from "./Components/Status";
// import Collab from "./Components/Collab";
import DBDashboard from "./Components/DBDashboard";
import ViewRequests from "./Components/ViewRequests";
import ManageAdmin from "./Components/ManageAdmin";
import Upload from './Components/Upload';
import React from 'react';
import Loading from './Pages/Pre-Deployment Screen/Loading';
import Portfolios from "./Pages/Portfolios/Portfolio";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import LoginLanding from "./Pages/LoginLanding/LoginLanding";
import Profile from "./Pages/Profile/Profile";
import Resources from "./Pages/Resources/Resources";
import CAPE from "./Pages/Resources/CAPE/CAPE";
import Request from "./Pages/Profile/Request/Request";
import Collab from "./Pages/Profile/CollabSpace/Collab";
import Landing from "./Pages/Profile/Request/Landing";
import Status from "./Pages/Profile/Request/Status";
import EditForm from "./Pages/Profile/Request/EditForm";
import Message from "./Pages/Profile/Request/Message";
import Links from "./Pages/Links/Links";


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
        <Home path="/" default />
        <About path="/about" />
        <Portfolios path="/pastwork" />
        <GetInvolved path="/involved" />
        <LoginLanding path="/login" />
        <Profile path="/profile" />
        <Resources path="/resources" />
        <CAPE path="/resources/cape" />
        <Request path="/request" />
        <Collab path="/collab/:rid" />
        <Landing path="/request/:rid" />
        <Status path="/status/:rid" />
        <EditForm path="/edit/:rid" />
        <Message path="/message/:rid" />
        <Links path="/links" />
        {/* <Loading path="/" /> */}
        {/* <Home path="/home" default />
        <About path="/about" />
        <Contact path="/contact" />
        <Involved path="/involved" />
        <PastWork path="/pastwork" />
        <Login path="/login" />
        <SignUp path="/signup" />
        <Profile path="/profile" />
        <Request path="/request/" />
        <Internal path="/internal" />
        <Create path="/create" />
        <Status path="/status/:rid" />
        <Assign path="/assign/:rid" />
        <Edit path="/edit/:rid" />
        <Story path="/story/:rid" />
        <Collab path="/collab/:rid" />
        <DBDashboard path="/dbdashboard" />
        <ViewRequests path="/request/:uid" />
        <ManageAdmin path="/manageadmin" />
        <Upload path="/upload"/> */}

      </Router>
      {/* <p>Hello Mate</p> */}
    </div>
  );
}

export default App;
