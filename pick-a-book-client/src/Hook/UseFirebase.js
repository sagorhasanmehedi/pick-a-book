import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../Firebase/Init.firebase";

initializeFirebase();

const UseFirebase = () => {
  const auth = getAuth();

  // google login
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { googleLogin };
};

export default UseFirebase;
