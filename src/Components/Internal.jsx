import { useReducer } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './Internal.css';
// import {}
// import { Navigate } from 'react-router-dom';
import { navigate } from '@reach/router';
import {connectAuthEmulator} from 'firebase/auth';
import { auth, firestore } from '../base';
import { getDatabase } from 'firebase/database';
import { doc, getDocs, getDoc, getFirestore, collection } from "firebase/firestore";
import { validateArgCount } from '@firebase/util';
import {useEffect} from 'react'
// function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;
  
// };
function goToCard(uid) {
    navigate('/story/'+uid)
    window.location.reload();
}
function goToCreate() {
    navigate('/create');
    window.location.reload();
}
async function getAdmin(uid) {
    const db = getFirestore();
    const docRef = doc(db, "admins", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return true;
    } else {
    // doc.data() will be undefined in this case
        console.log("No such document!");
        console.log("no user");
        console.log(uid);
            navigate("/profile");
            window.location.reload();
            return  false;
    }
};
const Internal = () => {
    
    onAuthStateChanged(auth, (user) => {
        if (user && getAdmin(user.uid)) {
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
        
    const [info, setInfo] = useState([]);
   async function getItems() {
        
        // const db = getFirestore();
        const querySnapshot = await getDocs(collection(firestore, "userRequestedWebsites"));
        const map = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            map.push(doc);
            var ele = doc.data();
            setInfo(arr => [...arr , doc.data()]);
            
            // webz.push(doc);
        });
        return map;
       

    };
    const [tasks, setTasks] = useState([]);
    const [once, setOnce] = useState(true);

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
    if (once) {
        getItems();
        setOnce(false);
    }
    const data =[{"name":"test1"},{"name":"test2"}];
    console.log(info.length);
    console.log(info.at(0));
    // const db = getFirestore();
    const webz = [];
    // const webz2 = getItems();

  return (
    <div className='internalz'>
    {/* <div className='card2'> */}
    <div className='create' onClick={goToCreate}>Create User</div>
    {info.map(function(d, idx){
        // <div className='card2'>
         return (<p className='card2' onClick={()=>goToCard(d.uid)}>{d.firstName} {d.lastName}<br></br>User ID: {d.uid}</p>)
        //  </div>
       })}
    {/* </div> */}
    
    {/* <ul>{getItems()}</ul> */}
    </div>
    
  );
};
export default Internal;