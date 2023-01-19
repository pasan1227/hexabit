import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALbTpu2kKihSsW5no_cLPiIFh-hTltLZg",
  authDomain: "hexabit-71c65.firebaseapp.com",
  projectId: "hexabit-71c65",
  storageBucket: "hexabit-71c65.appspot.com",
  messagingSenderId: "1011623441476",
  appId: "1:1011623441476:web:ed475d8626acbcfdfab811"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);