// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCP_dzafEk6y0dHK1ZtNUBwqlI2-Xfl-SY',
  authDomain: 'platforms-for-progress.firebaseapp.com',
  databaseURL: 'https://platforms-for-progress-default-rtdb.firebaseio.com',
  projectId: 'platforms-for-progress',
  storageBucket: 'platforms-for-progress.appspot.com',
  messagingSenderId: '108726206780',
  appId: '1:108726206780:web:13261fa1a58624801a5e39',
  measurementId: 'G-Q341QLSYR4'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const firestore = getFirestore(app);
