import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { navigate } from "@reach/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
// import { provider } from '../base';
import "./Login.css";
import { firestore, signInWithGoogle } from "../base";
import googlelogin from "./googlelogin";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";
import { auth } from "../base";
// import {getCustomAuth} from '../base.js'
// async function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;

// };
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.displayName, " is signed in");
      navigate("/profile");
      window.location.reload();
    } else {
      console.log("signed out");
    }
  });

  const navSignUp = () => {
    navigate("/signup");
    window.location.reload();
  };

  const onGoogleLogin = () => {
    console.log("login");
    googlelogin();
  };

  const addUserIfNotExists = async (user) => {
    const usersCollection = firestore.usersCollection;
    const userDoc = doc(usersCollection, user.uid);
    const userDocSnap = await getDoc(userDoc);
    if (!userDocSnap.exists()) {
      console.log("user doesn't exist in db, adding them");
      const split = user.displayName.split(" ");
      if (split.length < 2) {
        alert("Please enter your full name in your Google account");
        return;
      }
      const firstName = split(" ")[0];
      const lastName = split(" ")[1];
      await firestore.addUser(user.uid, user.email, firstName, lastName, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("email:", email);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user signed in");
      // await addUserIfNotExists(auth.currentUser);
      setEmail("");
      setPassword("");
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      console.log("there was an error signing in");
      setPassword("");
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <TypeAnimation
        sequence={[
          "Login",
          () => {
            console.log("Done typing!"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="div"
        cursor={false}
        //   repeat={Infinity}
        style={{ fontSize: "2em", cursor: false }}
      />
      <div className="cont">
        <div className="section1">
          <button onClick={onGoogleLogin}>Login with Google</button>
        </div>
        <div className="middlecont">
          <p>OR</p>
        </div>
        <form>
          <div className="formy">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={onEmailChange}
              ></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              ></input>
            </div>
          </div>
          {/* <br></br> */}
          <button type="submit" onClick={handleSubmit} class="btn btn-primary">
            Submit
          </button>
          <br></br>
          <div className="add"></div>
          <p onClick={navSignUp}>Need to Sign Up? Click Here!</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
