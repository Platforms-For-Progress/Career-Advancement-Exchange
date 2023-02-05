import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Profile.css';
// import { Navigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import {connectAuthEmulator} from 'firebase/auth';
import { auth, firestore } from '../base';
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore';
// function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;
  
// };
const Profile = () => {
    const [name, setName] = useState("");
    const [str, setStr] = useState("");
    const [isAdmin,setIsAdmin] = useState(false);
    // const auth = getAuth();
    // const user = auth.currentUser;
    // if (user !== null) {
    //     setName(user.displayName);
    //     console.log(name);
    // }
    onAuthStateChanged(auth, (user) => {
      if (user ) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user.displayName);
          console.log(user.role)
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
    // const auth = getCustomAuth();const [isAdmin, setIsAdmin] = useState(false);
      async function getAdmin(uid) {
        // const db = firestore;
        const docRef = doc(firestore, "admins", uid);
        const docSnap = await getDoc(docRef);
        console.log(uid);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setIsAdmin(true);
          
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
            console.log("no user");
            console.log(uid);
            setIsAdmin(false);
        }
    };
    
    onAuthStateChanged(auth, (user) => {
      getAdmin(user.uid);
    if (user&&isAdmin) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user.displayName);
        console.log("here");
        setName(user.displayName);
        setStr("Welcome, " + user.displayName);
        // ...
    } else if (!isAdmin){
        // User is signed out
        // ...
        console.log("not admin");
        setName(user.displayName);
        setStr("Welcome, " + user.displayName);
        

    } else {
      navigate("/signin");
        window.location.reload();
    }
    });
    const logout = () => {
        auth.signOut();
        navigate("/signin");
        window.location.reload();
      };

      const toReq = () => {
        navigate("/request");
        window.location.reload();
      };
      const navInternal = () => {
        navigate("/internal");
        window.location.reload();
      }
      
    // const auth = getAuth();
    // const user = auth.currentUser;

    // if (user) {
    // // User is signed in, see docs for a list of available properties
    // // https://firebase.google.com/docs/reference/js/firebase.User
    // setName(user.displayName);
    // console.log(user.displayName);
    // console.log(auth.currentUser.displayName);
    // // ...
    // } else {
    // // No user is signed in.
    //     console.log("No user signed in");
    // }

  return (
    <div className="prof">
    <div className="rightside">
    <h1>{str}</h1>
    <p onClick={logout}>Not you? Click here to log out!</p>
   
    </div>
    
    <div className="leftside">
    <div class="row-z">
    <div>
      {
     isAdmin
      ? (
        <div class="column" onClick={navInternal}>
        <h3>Internal</h3>
        <p>Click here to manage user requested websites</p>
        </div>
      )
      : (
        <div>
        <div class="column" onClick={toReq}>

        <h3>Request a personal website</h3>
        <p>Request a personal website to showcase your skills and projects</p>

        </div>
            <div class="column">
            <h3>Check the status of your website</h3>
            <p>Check the status of your website and see when it will be ready</p>
        </div>
        <div class="column">
            <h3>Upload Documents</h3>
            <p>Submit documents/pictures/media to be added to your website</p>
        </div>
        </div>
      )
      }
      </div>
   
   
    <div class="column">
        <h3>Account Settings</h3>
        <p>Change your account settings and update your information</p>
    </div>
    
    </div>
    
    
    </div>
    </div>
  );
};
export default Profile;