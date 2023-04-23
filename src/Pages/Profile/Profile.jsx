import React, { useState, useEffect, useReducer } from "react";
import { TypeAnimation } from "react-type-animation";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { navigate } from "@reach/router";
import { auth, firestore } from "../../base";
import { setDoc, doc, getDoc } from "firebase/firestore";
import "./Profile.css";

const Profile = () => {
  const [userAdminStatus, setUserAdminStatus] = useState(null);
  const [userHasRequest, setUserHasRequest] = useState(false);
  const [rid, setRid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User is signed in");
        const admin_status = await firestore.getAdminStatus(user.uid);
        const user_requests = await firestore.getRequestsByUser(user.uid);
        // setUserAdminStatus(admin_status);
        console.log("admin status:", admin_status);
        setUserAdminStatus(admin_status);
        setUserHasRequest(user_requests.length > 0);
        setRid(user_requests[0].id);
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
    // navigate("/request/" + auth.currentUser.uid);
    navigate("/request");
    window.location.reload();
  };

  const navManageAdmin = () => {
    navigate("/manageadmin");
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

  const navViewRequests = () => {
    navigate("/request/" +  auth.currentUser.uid);
    window.location.reload();

  };

  const goToCollab = () => {
    // navigate("/collab/" + rid);
    // window.location.reload();
    window.location.href = "/collab/" + rid;
    };

    const goToEdit = () => {
        // navigate("/edit/" + rid);
        // window.location.reload();
        window.location.href = "/edit/" + rid;
    };

    const goToStatus = () => {
        // navigate("/status/" + rid);
        // window.location.reload();
        window.location.href = "/status/" + rid;
    };

    const goToMessage = () => {
        // navigate("/message/" + rid);
        // window.location.reload();
        window.location.href = "/message/" + rid;
    };

  const addCurrentUser = async () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name");
    const email = user.email;
    const adminStatus = parseInt(prompt("Enter your admin status"));
    if (!firstName || !lastName || !email || !adminStatus) {
      alert("Please enter all fields");
      return;
    }
    await firestore.addUser(uid, email, firstName, lastName, adminStatus);
    window.location.reload();
  };

  const changeAdminStatus = async () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const adminStatus = parseInt(prompt("Enter your admin status"));
    await firestore.changeAdminStatus(uid, adminStatus);
    window.location.reload();
  };

  return (
    <div className="Profile">
      {auth.currentUser ? (
        <div className="rightside">
          <h2>Welcome, {auth.currentUser.displayName}</h2>
              {/* <h2>Admin status: {userAdminStatus}</h2>
              <div>
                <button onClick={changeAdminStatus} className="btn btn-primary">
                  Change Admin Status
                </button>
              </div> */}
          <p onClick={logout}>Not you? Click here to log out!</p>
        </div>
      ) : (
        <div className="rightside">
          <h2>
            Welcome, <div className="spinner-border" role="status"></div>
          </h2>
        </div>
      )}

      <div className="leftside">
        <div className="row-z">
          <div>
            {userAdminStatus >= 1 ? (
              <>
                <div className="column" onClick={navManageAdmin}>
                  <h3>Manage Admins</h3>
                  <p>Click here to manage admin status of users</p>
                </div>
              </>
            ) : (
              <></>
            )}
            {userAdminStatus >= 1 ? (
              <div className="column" onClick={navDBDashboard}>
                <h3>Database Dashboard</h3>
              </div>
            ) : (
              <></>
            )}
            {userAdminStatus >= 1 ? (
              <>
                <div className="column" onClick={navInternal}>
                  <h3>Internal</h3>
                  <p>Click here to manage user requested websites</p>
                </div>
              </>
            ) : (
              <></>
            )}

            <div>
             
              {userHasRequest ? (
                <div className="column">
                  <h3>Manage Request</h3>
                    <div className="subcolumn" onClick={goToEdit}>
                        <p>Edit Request Form</p>

                    </div>
                    <div className="subcolumn" onClick={goToStatus}>
                        <p>View Request Status</p>
                    </div>
                    <div className="subcolumn" onClick={goToCollab}>
                        <p>Visit Collaboration Space</p>
                    </div>
                    <div className="subcolumn" onClick={goToMessage}>
                        <p>Message Admin</p>
                    </div>
                </div>
              ) : (
                <div className="column" onClick={toReq}>
                <h3>Request a personal website</h3>
                <p>
                  Request a personal website to showcase your skills and
                  projects
                </p>
              </div>
              )}
              
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
