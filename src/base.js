// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import {connectFirestoreEmulator} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// function getCustomAuth() {
//   const auth = getAuth();
//   connectAuthEmulator(auth, "127.0.0.1:9099");
//   return auth;
  
// };
function getCustomAuth() {
  const auth = getAuth();
  
  connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
  
  return auth;
  
};
function getCustomFirestore() {
  const db = getFirestore();
  connectFirestoreEmulator(db, 'localhost', 8080);
  return db;
};
function getCustomDb() {
  const db = getDatabase();
  if (window.location.hostname === "localhost") {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, "localhost", 9000);
  } 
  return db;
  
};
const firebaseConfig = {
  apiKey: "AIzaSyCP_dzafEk6y0dHK1ZtNUBwqlI2-Xfl-SY",
  authDomain: "platforms-for-progress.firebaseapp.com",
  databaseURL: "https://platforms-for-progress-default-rtdb.firebaseio.com",
  projectId: "platforms-for-progress",
  storageBucket: "platforms-for-progress.appspot.com",
  messagingSenderId: "108726206780",
  appId: "1:108726206780:web:13261fa1a58624801a5e39",
  measurementId: "G-Q341QLSYR4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const db = getDatabase(app);
// export const db = getCustomDb();
export const firestore = getFirestore(app);
// export const firestore = getCustomFirestore();
export const storage = getStorage(app);
const analytics = getAnalytics(app);

// export const auth = firebase.auth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
