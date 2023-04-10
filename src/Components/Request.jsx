import { useReducer } from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "./Request.css";
import { navigate } from "@reach/router";
// import { useNavigate } from 'react-router-dom';
// import {Route, useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { useEffect } from "react";
import { auth, firestore } from "../base";

const Request = () => {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ideas, setIdeas] = useState("");
  const [requestReason, setRequestReason] = useState("");
  const [requestOtherReason, setRequestOtherReason] = useState("");

  // const onFnameChange = (event) => setFname(event.target.value);
  // const onLnameChange = (event) => setLname(event.target.value);
  const onNameChange = (event) => setName(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.value);
  const onIdeaChange = (event) => setIdeas(event.target.value);
  const onRequestReasonChange = (event) => setRequestReason(event.target.value);
  const onRequestOtherReasonChange = (event) =>
    setRequestOtherReason(event.target.value);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/signin");
        window.location.reload();
      } else {
        const usersCollection = firestore.usersCollection;
        const userDocRef = doc(usersCollection, user.uid);
        const userDocSnap = await getDoc(userDocRef);
        const userData = userDocSnap.data();

        // setFname(userData.firstname);
        // setLname(userData.lastname);
        setName(userData.name);
        setEmail(userData.email);
      }
    });
    return () => unsubscribe;
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    // if (fname == "" || lname == "" || email == "") {
    //   alert("Please fill out all fields");
    // }
    if (!user || name == "" || email == "") {
      alert("Please fill out all fields");
      return;
    }

    const req_id = await firestore.addRequest(
      user.uid,
      {
        request_reason:
          requestReason !== "Other" ? requestReason : requestOtherReason,
        request_idea: ideas,
        // request_fname: fname,
        // request_lname: lname,
        request_name: name,
        request_email: email,
      },
      0,
      []
    );

    navigate("/status/" + req_id);
    window.location.reload();
  };

  const navContact = () => {
    navigate("/contact");
    window.location.reload();
  };

  return (
    <div className="req">
      <div className="req2">
        <div className="mainform">
          <form className="formmy">
            <p>
              Please fill out this short form and we will email you with further
              information
            </p>
            <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={onNameChange}
                required
              ></input>
            </div>
            {/* <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter your last name"
                value={lname}
                onChange={onLnameChange}
                required
              ></input>
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={onEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                What are some things you would want to include on your website?{" "}
                <br></br>Any secret talents or fun facts?<br></br>*This doesn't
                need to be comprehensive and is just a starting point*
              </label>
              <textarea
                className="form-control"
                id="ideas"
                rows="3"
                value={ideas}
                onChange={onIdeaChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="reasonSelect">Reason for Request</label>
              <select
                className="form-control"
                id="reasonSelect"
                value={requestReason}
                onChange={onRequestReasonChange}
              >
                <option value="">Select a reason</option>
                <option value="seeking employment">Seeking Employment</option>
                <option value="looking for freelance work">
                  Looking for Freelance Work
                </option>
                <option value="want to showcase work to potential clients">
                  Want to Showcase Work to Potential Clients
                </option>
                <option value="building personal brand">
                  Building Personal Brand
                </option>
                <option value="looking to switch careers">
                  Looking to Switch Careers
                </option>
                <option value="showcasing personal projects">
                  Showcasing Personal Projects
                </option>
                <option value="seeking collaboration opportunities">
                  Seeking Collaboration Opportunities
                </option>
                <option value="want to improve digital presence">
                  Want to Improve Digital Presence
                </option>
                <option value="need website for personal or professional blog">
                  Need Website for Personal or Professional Blog
                </option>
                <option value="other">Other</option>
              </select>
              {requestReason === "other" && (
                <div className="form-group">
                  <label htmlFor="otherReasonInput">Please Specify:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherReasonInput"
                    value={requestOtherReason}
                    onChange={onRequestOtherReasonChange}
                  />
                </div>
              )}
            </div>
            <button type="submit" className="submits" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
        <div className="row">
          <div className="col-md">
            <h3>FAQ</h3>
            <p>Click here to view common questions</p>
          </div>
          <div className="col-md" onClick={navContact}>
            <h3>Contact Us</h3>
            <p>Click here to send us a message</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Request;
