import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// EMPLOYEE APP
const firebaseConfig = {
  apiKey: "AIzaSyBZ_ZiaNsS-kDmgm_Zf2TIdR4gPjPAPxyE",
  authDomain: "employee-app-87a6d.firebaseapp.com",
  databaseURL: "https://employee-app-87a6d.firebaseio.com",
  projectId: "employee-app-87a6d",
  storageBucket: "employee-app-87a6d.appspot.com",
  messagingSenderId: "937914548581",
  appId: "1:937914548581:web:a66207871be757fe4f218c"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);