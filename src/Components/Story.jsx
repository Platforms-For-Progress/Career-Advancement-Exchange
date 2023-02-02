import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Story.css';
// import {}
// import { Navigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import {connectAuthEmulator} from 'firebase/auth';
import { auth, firestore } from '../base';
import { getDatabase } from 'firebase/database';
import { doc, getDocs, getDoc, getFirestore, collection } from "firebase/firestore";
import { validateArgCount } from '@firebase/util';
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;
  
// };


const Story = () => {
    // super(props);
    
    const [lookupUID, setLookupUID] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [idea, setIdea] = useState("");
    const [developed, setDeveloped] = useState("");
    const [special, setSpecial] = useState("");
   
    function navEdit() {
        navigate("/edit/"+lookupUID);
        window.location.reload();

    }
    function navInternal() {
        navigate("/internal");
        window.location.reload();

    }

    async function getStoryInfo(uid) {
        // const db = getFirestore();
        const docRef = doc(firestore, "userRequestedWebsites", uid);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            
            const fname = docSnap.data().firstName;
            const lname = docSnap.data().lastName;
            const idea = docSnap.data().idea;
            const developedIdea = docSnap.data().developed;
            const specialNotes = docSnap.data().special;

            setFname(fname);
            setLname(lname);
            setIdea(idea);
            setDeveloped(developedIdea);
            setSpecial(specialNotes);
            // const  dataArr = [fname, lname,idea];
            // console.log(docSnap.data().firstName);
            // console.log(dataArr[1]);
            // docSnap.data().map(function(d,idx)) {
    
            // }
            // docSnap.data().map(function(d, idx) {
            //     dataArr.push(d.firstName);
    
            // })
    
            // return dataArr;
            // return true;
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
            console.log("no user");
            console.log(uid);
                // navigate("/profile");
                // window.location.reload();
                // return  false;
        }
    };
    
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         console.log(user.displayName);
    //         console.log(user.role)
    //         console.log("here");
    //         // setName(user.displayName);
    //         // setStr("Welcome, " + user.displayName);
            
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //         console.log("no user");
    //         navigate("/signin");
    //         window.location.reload();
    
    //     }
    //     });
        
    
    

    // const auth = getAuth();
    // const user = auth.currentUser;
    // if (user !== null) {
    //     setName(user.displayName);
    //     console.log(name);
    // }

    // const auth = getCustomAuth();
    
    // onAuthStateChanged(auth, (user) => {
    // if (user ) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     console.log(user.displayName);
    //     console.log("here");
      
    //     // ...
    // } else {
    //     // User is signed out
    //     // ...
    //     console.log("no user");
    //     navigate("/signin");
    //     window.location.reload();

    // }
    // });
    // const logout = () => {
    //     auth.signOut();
    //     navigate("/signin");
    //     window.location.reload();
    //   };

    //   const toReq = () => {
    //     navigate("/request");
    //     window.location.reload();
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
    // const data = getItems();
    // getItems();
    
    // const webz2 = getItems();
        // getStoryInfo()
        // let { uid } = useParams();
        // console.log(uid);
        // console.log("here");
        // const router = useRouter();
        // const uid = router.query.id;
        // this.props.match.params = this.props.match.params.bind(this);
        // let {uid} = this.props.match.params.uid;
        // console.log( {uid});
        // console.log(window.location.pathname);
        useEffect(()=> {
            const tempUID = window.location.pathname.slice(7,);
            setLookupUID(tempUID);
            console.log(tempUID);
            getStoryInfo(lookupUID);
            
            console.log("Important");
            // console.log(data[1]);
            // setFname(data.firstName);

        })
        
        // console.log(tempUID);
        
        // const qty = router.query.qty;
        // const size = router.query.size;


  return (
    <div className='story'>
        {/* <p>Hello!</p> */}
        <div className='story1'>
        <p>User ID: {lookupUID}</p>
        <p>First Name: {fname} <br></br>Last Name: {lname}</p>
        <p>Initial Ideas: {idea}</p>
        <p>Documents: </p>
        <p>Developed Idea Notes: {developed} </p>
        <p>Special Notes: {special} </p>
        <div className='edit' onClick={()=>navEdit()}><p>Edit Entry</p></div>
        </div>
        <div className = 'story2' onClick={navInternal}><p>Return to dashboard</p></div>
        {/* <p>{this.props.match.params.uid}</p> */}
    {/* <div className='card2'> */}
    {/* <div className='create'>Create User</div>
    {info.map(function(d, idx){
        // <div className='card2'>
         return (<p className='card2' onClick={goToCard}>{d.firstName} {d.lastName}<br></br>User ID: {d.uid}</p>)
        //  </div>
       })} */}
    {/* </div> */}
    
    {/* <ul>{getItems()}</ul> */}
    </div>
    
  );
};
export default Story;