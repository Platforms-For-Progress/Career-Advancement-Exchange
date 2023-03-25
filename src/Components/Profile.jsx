import React, { useState, useEffect, useReducer } from "react";
import { TypeAnimation } from "react-type-animation";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { navigate } from "@reach/router";
import { auth, firestore } from "../base";
import { setDoc, doc, getDoc } from "firebase/firestore";
import "./Profile.css";

const Profile = () => {
  const [userAdminStatus, setUserAdminStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User is signed in");
        const admin_status = await firestore.getAdminStatus(user.uid);
        // setUserAdminStatus(admin_status);
        console.log("admin status:", admin_status);
        setUserAdminStatus(admin_status);
      } else {
        console.log("User is signed out");
        navigate("/signin");
        window.location.reload();
      }
    });
    return () => unsubscribe;
  }, []);

  const logout = () => {
    auth.signOut();
    navigate("/signin");
    window.location.reload();
  };

  const toReq = () => {
    navigate("/request/" + auth.currentUser.uid);
    window.location.reload();
  };
  const navInternal = () => {
    navigate("/internal");
    window.location.reload();
  };

  const navDBDashboard = () => {
    navigate("/dbdashboard");
    window.location.reload();
  };

  const addCurrentUser = async () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name");
    const email = user.email;
    const adminStatus = parseInt(prompt("Enter your admin status"));
    await firestore.addUser(uid, email, firstName, lastName, adminStatus);
    window.location.reload();
  };

  return (
    <div className="prof">
      <div className="rightside">
        <h1>
          Welcome,{" "}
          {!auth.currentUser ? (
            <div className="spinner-border" role="status"></div>
          ) : (
            <>{auth.currentUser.displayName}</>
          )}
        </h1>
        <h2>Admin status: {userAdminStatus}</h2>
        <button
          onClick={addCurrentUser}
          className="btn btn-primary btn-large btn-block"
        >
          Add yourself to firestore
        </button>
        <p onClick={logout}>Not you? Click here to log out!</p>
      </div>

      <div className="leftside">
        <div className="row-z">
          <div>
            {userAdminStatus > 0 ? (
              <>
                <div className="column" onClick={navInternal}>
                  <h3>Internal</h3>
                  <p>Click here to manage user requested websites</p>
                </div>
                <div className="column" onClick={navDBDashboard}>
                  <h3>Database Dashboard</h3>
                </div>
              </>
            ) : (
              <></>
            )}
            <div>
              <div className="column" onClick={toReq}>
                <h3>Request a personal website</h3>
                <p>
                  Request a personal website to showcase your skills and
                  projects
                </p>
              </div>
              <div className="column">
                <h3>Check the status of your website</h3>
                <p>
                  Check the status of your website and see when it will be ready
                </p>
              </div>
              <div className="column">
                <h3>Upload Documents</h3>
                <p>
                  Submit documents/pictures/media to be added to your website
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <h3>Account Settings</h3>
            <p>Change your account settings and update your information</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
