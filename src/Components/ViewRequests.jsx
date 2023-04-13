import React, { useState, useEffect } from "react";
import { navigate, useParams } from "@reach/router";
import { auth, firestore } from "../base";

const ViewRequests = () => {
  const { uid } = useParams();
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User is signed in");
        const user_requests = await firestore.getRequestsByUser(user.uid);
        setUserRequests(user_requests);
      } else {
        console.log("User is signed out");
        navigate("/login");
        window.location.reload();
      }
    });
    return () => unsubscribe;
  }, []);

  const navRequest = (rid) => {
    navigate("/status/" + rid);
    window.location.reload();
  };

  return (
    <div>
      <h1>View your requests, {auth.currentUser ? auth.currentUser.displayName : "user"}</h1>
      {userRequests.map((request) => {
        return (
          <div className="story1" onClick={() => navRequest(request.id)}>
            <h2>{request.id}</h2>
            <p>Status: {request.status}</p>
            <p>Ideas: {request.request_data.request_idea}</p>
            <p>Reason for request: {request.request_data.request_reason}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewRequests;
