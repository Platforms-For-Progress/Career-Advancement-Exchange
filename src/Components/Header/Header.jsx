import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from 'react';

import "./Header.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../base";
import { navigate } from "@reach/router";


function Header() {
  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
        setName(user.displayName);
      } else {
        console.log("no user");
        setSignedIn(false);
      }
    });
    return () => unsubscribe;
  }, []);


  const logout = async () => {
    await auth.signOut();
    navigate("/login");
    window.location.reload();
  };

  return (
    <Navbar className="color-nav" expand="lg" sticky="top">
      <Navbar.Brand href="/" className="spacing">
        Career Advancement Exchange
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          
        </Nav>
        {/* <div className="header-right-side"> */}
        
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/resources">Resources</Nav.Link>
        <Nav.Link href="/pastwork">Portfolios</Nav.Link>
          <Nav.Link href="/involved">Get Involved</Nav.Link>
          
          {/* <Nav.Link href="/contact">Contact Us</Nav.Link> */}
          <div>
            {signedIn ? <Nav.Link href="/profile">Profile</Nav.Link> : <></>}
          </div>
          <div>
            {signedIn ? (
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </div>
          {/* </div> */}

     
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
