// auth.js

import { auth, firestore } from '.';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogleProvider = () =>
  signInWithPopup(auth, provider)
    .then((result) => result.user)
    .catch((error) => alert(error.message));

export const register = async (email, password, displayName) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  await user.updateProfile({ displayName });
  await firestore.collection('users').doc(user.uid).set({
    uid: user.uid,
    displayName,
    email
  });
  return user;
};

export const login = async (email, password) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const logout = async () => {
  await auth.signOut();
};

export const signInWithGoogle = async () => {
  const { user } = await signInWithGoogleProvider();
  const userRef = await firestore.collection('users').doc(user.uid);
  const userDoc = await userRef.get();
  if (!userDoc.exists) {
    await userRef.set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });
  }
  return user;
};
