import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN_RbgkNFv3IAumAhW73Tsz6t7Wbdds4s",
  authDomain: "accounting-63503.firebaseapp.com",
  projectId: "accounting-63503",
  storageBucket: "accounting-63503.appspot.com",
  messagingSenderId: "629099776498",
  appId: "1:629099776498:web:7ddd7dba92a0987599836b",
  measurementId: "G-PPTDMBG8G2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };