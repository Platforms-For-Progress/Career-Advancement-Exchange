import Container from "react-bootstrap/Container";
// import {Nav} from 'react-bootstrap/Nav';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import {Navbar} from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem'
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
// import MenuItem from 'react-bootstrap/DropdownMenu'
import "./Header.css";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../base";
import { navigate } from "@reach/router";
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     setSignedIn(true);
  //     setName(user.displayName);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     console.log("no user");
  //     setSignedIn(false);
  //   }
  // });

  const logout = async () => {
    await auth.signOut();
    navigate("/login");
    window.location.reload();
  };

  return (
    <Navbar className="color-nav" expand="lg" sticky="top">
      <Navbar.Brand href="/home" className="spacing">
        Career Advancement Exchange
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/involved">Get Involved</Nav.Link>
          <Nav.Link href="/pastwork">Past Work</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <div>
            {signedIn ? <Nav.Link href="/profile">Profile</Nav.Link> : <></>}
          </div>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
        </Nav>
        {/* <span class="navbar-text spanned"> 
      Login / Signup
     </span> */}
        {/* <Nav className="me-auto"> */}
        <div className="spanned">
          <div>
            {signedIn ? (
              <Nav.Link onClick={logout}>Log Out</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login / Signup</Nav.Link>
            )}
          </div>
          {/* {signedIn && <Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      
    </Nav.Link>
     
     }
     {!signedIn && <Nav.Link>
        <Nav.Link href="/login">Login / Signup</Nav.Link>
        </Nav.Link>
      } */}
        </div>

        {/* </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
