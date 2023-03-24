import React, { useEffect } from "react";
import { useState } from "react";
import { auth, firestore } from "../base";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { render } from "@testing-library/react";

import "./DBDashboard.css";

const DBDashboard = () => {
  const [displayDocs, setDisplayDocs] = useState({});
  const [collectionPaths, setCollectionPaths] = useState([
    "test",
    "users",
    "requests",
  ]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is signed in");
  //       console.log("user:", user);
  //       console.log("auth user:", auth.currentUser);
  //     } else {
  //       console.log("User is signed out");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    const fetchDocs = async () => {
      const docsByPath = {};
      for (const path of collectionPaths) {
        docsByPath[path] = await getDocsAtPath(path);
      }
      setDisplayDocs(docsByPath);
    };
    fetchDocs();
  }, [collectionPaths]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in");
      console.log("user:", user);
      // console.log("auth user:", auth.currentUser);
    } else {
      console.log("User is signed out");
    }
  });

  const addCurrentUser = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("No user signed in");
      return;
    }
    const firstname = prompt("Enter your first name");
    const lastname = prompt("Enter your last name");
    const admin_status = prompt("Admin status (0,1,2)");
    await firestore.addUser(
      user.uid,
      user.email,
      firstname,
      lastname,
      admin_status
    );
    window.location.reload();
  };

  // Returns a list of documents at the given path in the firestore
  const getDocsAtPath = async (path) => {
    const collectionRef = collection(firestore.db, path);
    const querySnapshot = await getDocs(collectionRef);
    const docs = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return docs;
  };

  const renderDocs = (docsToDisplay) => {
    // Group the documents by ID
    if (!docsToDisplay) return <p>No data to display.</p>;
    const docsById = docsToDisplay.reduce((acc, doc) => {
      if (doc.id in acc) {
        acc[doc.id].push(doc);
      } else {
        acc[doc.id] = [doc];
      }
      return acc;
    }, {});

    // Render each group of documents
    return (
      <div>
        {Object.entries(docsById).map(([id, docs]) => (
          <div key={id}>
            <ul>
              {docs.map((doc) => (
                <li key={doc.id}>
                  <pre>{JSON.stringify(doc, null, 2)}</pre>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderCollectionPaths = () => {
    if (displayDocs.length === 0) return <p>No data to display.</p>;
    return (
      <ul>
        {collectionPaths.map((path, i) => (
          <li key={path}>
            <h3>Contents of {path}</h3>
            {renderDocs(displayDocs[path])}
          </li>
        ))}
      </ul>
    );
  };

  if (!auth.currentUser) return <p>Not logged in.</p>;
  return (
    <div className="db-dash">
      <h1>Database Testing Dashboard</h1>
      <h2>
        Welcome, {auth.currentUser.displayName} (UID: {auth.currentUser.uid})
      </h2>
      <button onClick={addCurrentUser}>Add yourself to users collection</button>
      <h2>Firestore Contents</h2>
      {renderCollectionPaths()}
    </div>
  );
};

export default DBDashboard;
