import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "KEY-HERE",
  authDomain: "prompt-battle.firebaseapp.com",
  projectId: "prompt-battle",
  storageBucket: "prompt-battle.appspot.com",
  messagingSenderId: "1060910970767",
  appId: "1:1060910970767:web:a2ac0b87bb1e2115c0fdfa",
  measurementId: "G-YSQ8YRPWE8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
