import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { connectFirestoreEmulator } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { listAll } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

function getCustomAuth() {
  const auth = getAuth();

  connectAuthEmulator(auth, "http://127.0.0.1:9099/", {
    disableWarnings: true,
  });

  return auth;
}

function getCustomFirestore() {
  const db = getFirestore();
  connectFirestoreEmulator(db, "localhost", 8081);
  return db;
}

function getFirestoreObject(db) {
  // Create users collection
  const usersCollection = collection(db, "users");
  const addUser = async (userId, email, name, admin_status) => {
    await setDoc(doc(usersCollection, userId), {
      email,
      name,
      admin_status,
    });
  };
  const getUser = async (userId) => {
    const docRef = doc(usersCollection, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  };
  const getUsers = async () => {
    const querySnapshot = await getDocs(query(usersCollection));
    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };

  const getAdmins = async () => {
    const querySnapshot = await getDocs(
      query(usersCollection, where("admin_status", ">=", 1))
    );
    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };

  const getAdminStatus = async (userId) => {
    const userDoc = doc(usersCollection, userId);
    const userSnap = await getDoc(userDoc);
    if (userSnap.exists()) {
      return userSnap.data().admin_status;
    } else {
      return 0;
    }
  };

  const changeAdminStatus = async (userId, admin_status) => {
    const userDoc = doc(usersCollection, userId);
    await setDoc(userDoc, { admin_status }, { merge: true });
  };

  // Create requests collection
  const requestsCollection = collection(db, "requests");
  const addRequest = async (user_id, request_data, status, admin_ids) => {
    const doc = await addDoc(requestsCollection, {
      user_id,
      request_data,
      status,
      admin_ids,
    });
    return doc.id;
  };
  const updateRequest = async (requestId, request_data, status) => {
    const docRef = doc(db, "requests", requestId);
    await setDoc(docRef, { request_data, status }, { merge: true });
  };
  const getRequest = async (requestId) => {
    const docRef = doc(db, "requests", requestId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  };




  // querys all requests made by userid
  const getRequestsByUser = async (userId) => {
    const querySnapshot = await getDocs(
      query(requestsCollection, where("user_id", "==", userId))
    );
    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };

  const addRequestAdmin = async (requestId, admin_id) => {
    const docRef = doc(db, "requests", requestId);
    // add admin_id to array of admin_ids in request
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const admin_ids = docSnap.data().admin_ids;
      if (admin_ids.includes(admin_id)) {
        return;
      }
      admin_ids.push(admin_id);
      await setDoc(docRef, { admin_ids }, { merge: true });
    }
  };

  const removeRequestAdmin = async (requestId, admin_id) => {
    const docRef = doc(db, "requests", requestId);
    // remove admin_id from array of admin_ids in request
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const admin_ids = docSnap.data().admin_ids;
      if (!admin_ids.includes(admin_id)) {
        return;
      }
      admin_ids.splice(admin_ids.indexOf(admin_id), 1);
      await setDoc(docRef, { admin_ids }, { merge: true });
    }
  };
  const uploadFile = async (file, rid) => {
    const storageRef = ref(storage, `/files/requestData/${rid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file).catch((error) => {
      switch (error.code) {
        case "storage/unauthorized":
          console.log("User doesn't have permission to access the object");
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          console.log("User canceled the upload");
          break;

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
      }
    });
    return uploadTask;


        
  };

  // return array of all files in firestrore storagge with their download url
  const getFiles = async (rid) => {
    // const listRef = ref(storage, "/files/requestData/"+rid);


    // const result = await listAll(listRef);
    // return result.items.map((item) => {
    //   return item.name;
    // });
    const listRef = ref(storage, "/files/requestData/"+rid);
    const result = await listAll(listRef);
    // if (result.items.length > 0){

    //   getDownloadURL(result.items[0]).then((url) => {
    //     console.log(url);
    //   });

    // }
    var urls = [];
    // print size of result.items
    // console.log(result.items.length);
    // console.log(result.items);
    for (const itemRef of result.items) {
      // All the items under listRef.
      // console.log(itemRef);
      // return all the urls
      const url = await getDownloadURL(itemRef);
      urls.push(url);
      
      // console.log(urls);
    }

    return urls;





    // return urls.map((item) => {
    //   console.log(item);
    //   return item;
    // });
  };

  // Return an object containing the required collections and documents
  return {
    db,
    usersCollection,
    getUser,
    getUsers,
    getAdmins,
    addUser,
    getAdminStatus,
    changeAdminStatus,
    requestsCollection,
    addRequest,
    uploadFile,
    getFiles,
    updateRequest,
    getRequest,
    getRequestsByUser,
    addRequestAdmin,
    removeRequestAdmin,
  };
}

function getCustomDb() {
  const db = getDatabase();
  if (window.location.hostname === "localhost") {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "localhost", 9000);
  }
  return db;
}

const firebaseConfig = {
  apiKey: "AIzaSyCP_dzafEk6y0dHK1ZtNUBwqlI2-Xfl-SY",
  authDomain: "platforms-for-progress.firebaseapp.com",
  databaseURL: "https://platforms-for-progress-default-rtdb.firebaseio.com",
  projectId: "platforms-for-progress",
  storageBucket: "platforms-for-progress.appspot.com",
  messagingSenderId: "108726206780",
  appId: "1:108726206780:web:13261fa1a58624801a5e39",
  measurementId: "G-Q341QLSYR4",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// export const auth = getCustomAuth();

export const db = getDatabase(app);
// export const db = getCustomDb();

const firestoreDb = getFirestore(app);
// const firestoreDb = getCustomFirestore();
export const firestore = getFirestoreObject(firestoreDb);

export const storage = getStorage(app);

const analytics = getAnalytics(app);

// export const uid = getUser();
// export const auth = firebase.auth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
