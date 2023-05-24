import { useReducer } from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "./Story.css";
// import {}
// import { Navigate } from 'react-router-dom';
import { navigate } from "@reach/router";
import { connectAuthEmulator } from "firebase/auth";
import { auth, firestore } from "../base";
import { getDatabase } from "firebase/database";
import {
  doc,
  getDocs,
  getDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import { validateArgCount } from "@firebase/util";
import { useEffect } from "react";
import { useParams } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function getCustomAuth() {
//   const auth = getAuth();
//   const authUrl = 'http://localhost:9099';
//   await fetch(authUrl);
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;

// };

const Story = () => {
  // super(props);

  const { rid } = useParams();
  const [lookupUID, setLookupUID] = useState("");
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [developed, setDeveloped] = useState("");
  const [special, setSpecial] = useState("");
  const [assigned, setAssigned] = useState("");

  function navEdit() {
    // navigate("/edit/" + lookupUID);
    navigate("/edit/" + rid);
    window.location.reload();
  }
  function navDelete() {
    console.log("delete");
  }
  function navAssign() {
    navigate("/assign/" + rid);
    window.location.reload();
    console.log("assign");
  }
  function navInternal() {
    navigate("/internal");
    window.location.reload();
  }

  async function getStoryInfo(rid) {
    // const db = getFirestore();
    const docRef = doc(firestore.db, "requests", rid);
    const docSnap = await getDoc(docRef);
    // const user = auth.currentUser;
    // const docRef2 = doc(firestore, "admins", user.uid);
    // const docSnap2 = await getDoc(docRef2);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      console.log(docSnap.data());
      const req_data = docSnap.data().request_data;
      const name = req_data.request_name;
      const idea = req_data.request_idea;
      const developedIdea = req_data.request_developed;
      const specialNotes = req_data.request_special;
      const admin_ids = docSnap.data().admin_ids;
      // const assignedTo = docSnap2.data().assignedTo;

      setName(name);
      setIdea(idea);
      setDeveloped(developedIdea);
      setSpecial(specialNotes);
      setAssigned(admin_ids);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      console.log("no user");
      //   console.log(uid);
      // navigate("/profile");
      // window.location.reload();
      // return  false;
    }
  }

  useEffect(() => {
    getStoryInfo(rid);
  }, [rid]);

  return (
    <div className="story">
      <div className="story1">
        <p>Request ID: {rid}</p>
        <p>Assigned to: {assigned} </p>
        <p>Name: {name}</p>
        <p>Initial Ideas: {idea}</p>
        <p>Documents: </p>
        <p>Developed Idea Notes: {developed} </p>
        <p>Special Notes: {special} </p>
      </div>
      <div className="edit_large">
        <div className="edit" onClick={() => navEdit()}>
          <p>Edit Entry</p>
        </div>
        <div className="edit" onClick={() => navDelete()}>
          <p>Delete Entry</p>
        </div>
        <div className="edit" onClick={() => navAssign()}>
          <p>Assign Person to Entry</p>
        </div>
        <div className="edit" onClick={navInternal}>
          <p>Return to dashboard</p>
        </div>
      </div>

      {/* <div className = 'story2' onClick={navInternal}><p>Return to dashboard</p></div> */}
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
