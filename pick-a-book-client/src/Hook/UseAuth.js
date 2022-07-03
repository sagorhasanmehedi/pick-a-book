import { useContext } from "react";
import { authContext } from "../Contex/AuthProvider";

const UseAuth = () => {
  return useContext(authContext);
};

export default UseAuth;
