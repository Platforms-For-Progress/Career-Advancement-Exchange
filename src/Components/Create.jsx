import './Create.css'
import React, {useState} from 'react'
import { PageHeader, Input, Button, Card } from 'antd';
import { Link, navigate } from "@reach/router"
import { TypeAnimation } from 'react-type-animation';

// import { app } from "../base.js";
// import "./Signup.css";
// import { createUser } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { push, ref, set } from "firebase/database";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import {app} from "../base.js";
import { auth, db, firestore } from "../base.js";
import { getAuth } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import {connectAuthEmulator} from "firebase/auth";
import { useEffect } from 'react';
function getCustomAuth() {
  const auth = getAuth();
  
  connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
  
  return auth;
  
};
const Create = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        
        console.log(user.displayName);
        console.log("here");
        // setName(user.displayName);
        // setStr("Welcome, " + user.displayName);
        
        // ...
    } else {
        // User is signed out
        // ...
        console.log("no user");
        navigate("/signin");
        window.location.reload();

    }
    });
    const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
    // const onSignUp = (e) => {
        // setFirstName(document.getElementById('fname').value);
        
        // setLastName(document.getElementById('lname').value);
        //     // setPassword(document.getElementById('pass').value);
        // setEmail(document.getElementById('email').value);
        // setIdea(document.getElementById('initideas').value);
        // setSpecial(document.getElementById('special').value);
        // setDeveloped(document.getElementById('developed').value);
        
        // e.preventDefault();
        
        
        
        async function onRegister() {
            // do this differently maybe firebase admin sdk...

          // getAuth().createUser( {
          //   firstName: firstName,
          //   lastName: lastName,
          //   email: email
          // }).then((user)=> {
          //   setUid(user.user.uid);
          // });
          // useEffect(()=> {
            console.log("on click");
            console.log(firstName);
            console.log(lastName);
            console.log(ideas);
            console.log(developed);
            console.log(special);
            console.log(firestore);
            setDoc(doc(firestore,"userRequestedWebsites", firstName), {
              uid: firstName,
              firstName: firstName,
              lastName: lastName,
              idea: ideas,
              developed: developed,
              special: special
              
              
            }).then(()=> {
              alert(firstName + " added");
              setEmail("")
              // setPassword("")
              setFirstName("")
              setLastName("");
              setDeveloped("");
              setIdea("");
              setSpecial("");
              navigate("/internal");
              window.location.reload();
            });
          // })
             
              
             
            
            
        };
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
            <div className='formmy2'>
        <form>

        <div class="form-group2">
            <label for="fname">First Name:</label>
            <input type="fname" class="form-control2" id="fname"  placeholder="First Name" onChange={onFirstNameChange} />
            </div>
            <div class="form-group2">
            <label for="fname">Last Name:</label>
            <input type="lname" class="form-control2" id="lname" placeholder="Last Name" onChange={onLastNameChange} />
            </div>
            <div class="form-group2">
            <label for="fname">Email:</label>
            <input type="lname" class="form-control22" id="email" placeholder="Email" onChange={onEmailChange} />
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
            <textarea class="form-control3" id="initideas"  rows="3" onChange={onIdeaChange} ></textarea>
        </div>
        <div class="form-group2">
            <label for="exampleFormControlTextarea1">Developed Ideas:</label>
            <textarea class="form-control4" id="developed" rows="3" onChange={onDevelopedChange} ></textarea>
        </div>
        <div class="form-group2">
            <label for="exampleFormControlTextarea1">Special Notes:</label>
            <textarea class="form-control5" id="special" rows="3" onChange={onSpecialChange} ></textarea>
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Documents:</label>
            <input type="file" class="form-control-file" id="documents"/>
        </div>
        </form>
        <div className='edit' onClick={onRegister}><p>Submit</p></div>
        </div>
        
      </div>
      );
};
export default Create;