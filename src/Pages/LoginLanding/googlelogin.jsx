import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {connectAuthEmulator} from 'firebase/auth';
import { auth, firestore } from '../../base';
// function getCustomAuth() {
//   const auth = getAuth();
//   connectAuthEmulator(auth, 'http://127.0.0.1:9099/',  { disableWarnings: true });
//   return auth;
  
// };
const googlelogin = () => {
    // const auth = getCustomAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // const db2 = getFirestore();
          setDoc(doc(firestore,"users", user.uid), {
                uid: user.uid,
                firstName: user.displayName,
                // lastName: lname,
                // idea: ideas,
                role: "user"
                
                
            });
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;

        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorCode);
        alert(errorMessage);
        // ...
      });
};
export default googlelogin;
