import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Request.css';
import { navigate  } from '@reach/router';
// import { useNavigate } from 'react-router-dom';
// import {Route, useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import {doc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util';
import { useEffect } from 'react';
import { auth, firestore } from '../base';
// import { await } from 'react-router-dom';
// import {await}
// import {connectAuthEmulator} from 'firebase/auth';

// function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;
  
// };
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
    const [uid, setUid] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [ideas, setIdeas] = useState("");
    const [data, setUserData] = useState([]);
    // const auth = getCustomAuth();
    const user = auth.currentUser;
    
    // const db2 = getFirestore();
    const onFnameChange = (event) => setFname(event.target.value);
    const onLnameChange = (event) => setLname(event.target.value);
    const onIdeaChange = (event) => setIdeas(event.target.value);
    // useEffect(() => {
        
    //     db2.collection("userRequestedWebsites/"+user.uid).onSnapshot((snapshot) => {
    //       setUserData(
    //         snapshot.docs.map((doc) => ({
    //           firstName: fname,
    //           lastName: lname,
    //           idea: ideas
    //         }))
    //       );
    //     });
    //     console.log({ data });
    //   }, []);
      
    //   const submit = () => {
        // set user 
        // setUserData(["sCpKK  00mitXa7NM4FW0gyfJBkeO2"])
        async function submit() {
            
            setUid(user.uid);
        // db=getFirestore();
    
            console.log(user.uid);
            // e.preventDefault();
            // db2.collection("userRequestedWebsites/"+user.uid).add({
            // const db2 = getFirestore();
            setDoc(doc(firestore,"userRequestedWebsites", user.uid), {
                uid: user.uid,
                firstName: fname,
                lastName: lname,
                idea: ideas,
                
                
            }).then(()=> {
                setFname("");
                setLname("");
                setIdeas("");
                setUid("");
                navigate("/profile");
                window.location.reload();

            });
                
            
            // var collection = getFirestore().collection("userRequestedWebsites");
            // collection.add("hello","goodbye");
            console.log("submit called")
            
            // TODO: navigate to status when created
            // window.location.reload();
            

            // alert("You have been added to our database! You will hear back from us within a week :)");
        };
      
        

    // const writeUserData = (e) => { 
    //     console.log('writing user data');
        
    //     // const auth = getAuth();
        
    //     const auth = getAuth();
    //     const user = auth.currentUser;
    //     setUid(user.uid);
       
    
    //     console.log(user.uid);
    //     const db = getDatabase();
    //     const ref = ref(db, "userRequestedWebsites/" + "1")
    //     const userRef = ref.child(user.uid);
    //     userRef.set({
    //         firstName: fname,
    //         lastName: lname,
    //         idea: ideas
    //     })
    //     // const db = getFirestore();
    //     // function onCreate() {
    //     // const setData = async() =>
    //     // async (dispatch) => {
    //     //     try {
    //     //         await user.set(doc(db, "userRequestedWebsites", "1"), {
    //     //             firstName: "Los Angeles",
    //     //             lastName: "CA",
    //     //             idea: "USA"
    //     //           });
    //     //           alert("donr")
    //     //     } catch (error) {
    //     //         alert("whoops");
    //     //     }
        // };
        // setData();
        
            // set(ref(db, "userRequestedWebsites/" + "1"), {
            //     // username: name,
            //     // console.log("added to db");
            //     firstName: fname,
            //     lastName: lname,
            //     idea: ideas

            //     // email: email,
            // // profile_picture : imageUrl
            // }).then(()=> {
            //     alert("added to db");
            //     console.log("beep boop");
            // }).catch((error) => {
            //     alert(error);
            // });
            // console.log("added to db");
    // }
    //     // alert("added to db");
        
        // onCreate();
        //     }
    // }
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
          <div className="form-group">
              <label htmlFor="exampleFormControlInput1">First Name</label>
              <input type="fname" className="form-control" id="fname" placeholder="First Name" onChange={onFnameChange}>
              </input></div>
              <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Last Name</label>
              <input type="lname" className="form-control" id="lname" placeholder="Last Name" onChange={onLnameChange}>
              </input></div>

              {/* <div class="form-group">
              <label for="exampleFormControlInput1">First Name</label>
              <input type="fname" class="form-control" id="fname" placeholder="First Name">
              </input></div> */}
          <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">What are some things you would want to include on your website? <br></br>Any secret talents or fun facts?<br></br>*This doesn't need to be comprehensive and is just a starting point*</label>
              <textarea className="form-control" id="websitegoals" rows="3" onChange={onIdeaChange}></textarea>
          </div>
          <div className="submits" onClick={submit}><p>Submit</p></div>
          
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