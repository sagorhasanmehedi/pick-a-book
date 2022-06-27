import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebase;
