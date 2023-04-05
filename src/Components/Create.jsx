import "./Create.css";
import React, { useState } from "react";
import { PageHeader, Input, Button, Card } from "antd";
import { Link, navigate } from "@reach/router";
import { TypeAnimation } from "react-type-animation";

// import { app } from "../base.js";
// import "./Signup.css";
// import { createUser } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { push, ref, set } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import {app} from "../base.js";
import { auth, db, firestore } from "../base.js";
import { getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { connectAuthEmulator } from "firebase/auth";
import { useEffect } from "react";
function getCustomAuth() {
  const auth = getAuth();

  connectAuthEmulator(auth, "http://127.0.0.1:9099/", {
    disableWarnings: true,
  });

  return auth;
}
const Create = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminStatus = await firestore.getAdminStatus(user.uid);
        if (!adminStatus || adminStatus < 1) {
          alert("You must be an admin to view this page");
          navigate("/profile");
          window.location.reload();
        }
      } else {
        navigate("/login");
        window.location.reload();
      }
    });
    return () => unsubscribe();
  }, []);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [uid, setUid] = useState("");
  const [ideas, setIdea] = useState("");
  const [special, setSpecial] = useState("");
  const [developed, setDeveloped] = useState("");

  const onEmailChange = (event) => setEmail(event.target.value);
  console.log(email);
  // const onPasswordChange = (event) =>/ setPassword(event.target.value);
  const onFirstNameChange = (event) => setFirstName(event.target.value);
  const onLastNameChange = (event) => setLastName(event.target.value);
  const onIdeaChange = (event) => setIdea(event.target.value);
  const onSpecialChange = (event) => setSpecial(event.target.value);
  const onDevelopedChange = (event) => setDeveloped(event.target.value);

  async function onRegister() {
    console.log("on click");
    console.log(firstName);
    console.log(lastName);
    console.log(ideas);
    console.log(developed);
    console.log(special);
    console.log(firestore);
    setDoc(doc(firestore, "userRequestedWebsites", firstName), {
      uid: firstName,
      firstName: firstName,
      lastName: lastName,
      idea: ideas,
      developed: developed,
      special: special,
    }).then(() => {
      alert(firstName + " added");
      setEmail("");
      // setPassword("")
      setFirstName("");
      setLastName("");
      setDeveloped("");
      setIdea("");
      setSpecial("");
      navigate("/internal");
      window.location.reload();
    });
    // })
  }
  // useEffect(()=> {

  // })
  // onRegister();
  // const auth = getAuth();
  // const user = auth.currentUser;
  // user.displayName = firstName;

  // navigate('/internal');
  // window.location.reload();

  return (
    <div className="creator">
      <div className="formmy2">
        <form>
          <div class="form-group2">
            <label for="fname">First Name:</label>
            <input
              type="fname"
              class="form-control2"
              id="fname"
              placeholder="First Name"
              onChange={onFirstNameChange}
            />
          </div>
          <div class="form-group2">
            <label for="fname">Last Name:</label>
            <input
              type="lname"
              class="form-control2"
              id="lname"
              placeholder="Last Name"
              onChange={onLastNameChange}
            />
          </div>
          <div class="form-group2">
            <label for="fname">Email:</label>
            <input
              type="lname"
              class="form-control22"
              id="email"
              placeholder="Email"
              onChange={onEmailChange}
            />
          </div>
          {/* <div class="form-group2">
            <label for="fname">Password:</label>
            <input type="lname" class="form-control2" id="pass"  placeholder="Password" onChange={onPasswordChange} />
        </div> */}
          {/* <div class="form-group2">
            <label for="fname">First Name:</label>
            <input type="fname" class="form-control2" id="fname" placeholder="First Name"/>
            <label for="fname">Last Name:</label>
            <input type="lname" class="form-control2" id="lname" placeholder="Last Name"/>
        </div>
         */}

          <div class="form-group2">
            <label for="exampleFormControlTextarea1">Initial Ideas:</label>
            <textarea
              class="form-control3"
              id="initideas"
              rows="3"
              onChange={onIdeaChange}
            ></textarea>
          </div>
          <div class="form-group2">
            <label for="exampleFormControlTextarea1">Developed Ideas:</label>
            <textarea
              class="form-control4"
              id="developed"
              rows="3"
              onChange={onDevelopedChange}
            ></textarea>
          </div>
          <div class="form-group2">
            <label for="exampleFormControlTextarea1">Special Notes:</label>
            <textarea
              class="form-control5"
              id="special"
              rows="3"
              onChange={onSpecialChange}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Documents:</label>
            <input type="file" class="form-control-file" id="documents" />
          </div>
        </form>
        <div className="edit" onClick={onRegister}>
          <p>Submit</p>
        </div>
      </div>
    </div>
  );
};
export default Create;
