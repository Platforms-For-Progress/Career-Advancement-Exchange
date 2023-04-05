import { useReducer } from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import "./Internal.css";
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

function goToCard(rid) {
  navigate("/story/" + rid);
  window.location.reload();
}

function goToCreate() {
  navigate("/create");
  window.location.reload();
}

const Internal = () => {
  const [requestsData, setRequestsData] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminStatus = await firestore.getAdminStatus(user.uid);
        if (!adminStatus || adminStatus < 2) {
          navigate("/profile");
          window.location.reload();
          alert("You must be a superadmin (adminStatus == 2) to view internal");
        } else {
          const requests = await getDocs(firestore.requestsCollection);
          const requestsData = requests.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setRequestsData(requestsData);
        }
      } else {
        navigate("/login");
        window.location.reload();
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="internalz">
      <div className="create" onClick={goToCreate}>
        Create User Requested Website (/create now deprecated, manually add via
        firebase console)
      </div>
      {requestsData.map((request) => (
        <div className="card2" key={request.id}>
          <div className="card-body">
            <h5 className="card-title">Request: {request.id}</h5>
            <p className="card-text">Requester ID: {request.user_id}</p>

            <button
              className="btn btn-primary"
              onClick={() => {
                goToCard(request.id);
                window.location.reload();
              }}
            >
              View Request
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/edit/" + request.id);
                window.location.reload();
              }}
            >
              Edit Request
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Internal;
