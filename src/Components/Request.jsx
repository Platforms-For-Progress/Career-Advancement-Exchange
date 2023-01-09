import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Request.css';
import { navigate  } from '@reach/router';
// import { useNavigate } from 'react-router-dom';
// import {Route, useNavigate} from 'react-router-dom';

const Request = () => {
    // const [name, setName] = useState("");
    // const [str, setStr] = useState("");
    // // const auth = getAuth();
    // // const user = auth.currentUser;
    // // if (user !== null) {
    // //     setName(user.displayName);
    // //     console.log(name);
    // // }

    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    // if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     console.log(user.displayName);
    //     console.log("here");
    //     setName(user.displayName);
    //     setStr("Welcome, " + user.displayName);
    //     // ...
    // } else {
    //     // User is signed out
    //     // ...
    //     console.log("no user");
    // }
    // });
    // const logout = () => {
    //     auth.signOut();
    //     window.open("/signin")
    //   };
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
    
    // const navigate = useNavigate();
    const contact = () => {
        
        console.log('contact');
        // signInWithGoogle();
        // googlelogin();
        navigate('/contact');
        window.location.reload();

      };
  return (
    <div className='req'>
    <div className='req2'>
    <div className='mainform'>
    <form className='formmy'>
    <p>Please fill out this short form and we will email you with further information</p>
          <div class="form-group">
              <label for="exampleFormControlInput1">First Name</label>
              <input type="fname" class="form-control" id="fname" placeholder="First Name">
              </input></div>
              <div class="form-group">
              <label for="exampleFormControlInput1">Last Name</label>
              <input type="lname" class="form-control" id="lname" placeholder="Last Name">
              </input></div>

              {/* <div class="form-group">
              <label for="exampleFormControlInput1">First Name</label>
              <input type="fname" class="form-control" id="fname" placeholder="First Name">
              </input></div> */}
          <div class="form-group">
              <label for="exampleFormControlTextarea1">What are some things you would want to include on your website?</label>
              <textarea class="form-control" id="websitegoals" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          
      </form>
      </div>
      <div className='row'>
        <div className='col-md'>
            <h3>FAQ</h3>
            <p>Click here to view common questions</p>
        </div>
        <div className='col-md' onClick={()=>contact()}>
            <h3>Contact Us</h3>
            <p>Click here to send us a message</p>
        </div>
      </div>
      </div>
      </div>
      
  );
};
export default Request;