import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Profile.css';
// import { Navigate } from 'react-router-dom';
import { navigate } from '@reach/router';


const Profile = () => {
    const [name, setName] = useState("");
    const [str, setStr] = useState("");
    // const auth = getAuth();
    // const user = auth.currentUser;
    // if (user !== null) {
    //     setName(user.displayName);
    //     console.log(name);
    // }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user.displayName);
        console.log("here");
        setName(user.displayName);
        setStr("Welcome, " + user.displayName);
        // ...
    } else {
        // User is signed out
        // ...
        console.log("no user");
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