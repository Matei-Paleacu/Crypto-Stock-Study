import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc6Ynhh8DWzdECfcPUR1wG3PU_zzqSwZ8",
  authDomain: "trading-crypto-3a2e3.firebaseapp.com",
  projectId: "trading-crypto-3a2e3",
  storageBucket: "trading-crypto-3a2e3.appspot.com",
  messagingSenderId: "190378644784",
  appId: "1:190378644784:web:434f9bb91d2860916664f5",
  measurementId: "G-S0BSBL8DDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);