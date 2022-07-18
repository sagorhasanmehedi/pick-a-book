import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [IsBookRemove, setIsBookRemove] = useState(true);
  const [Address, setAddress] = useState(null);
  const [isAddressChange, setisAddressChange] = useState(true);





// get user data
  useEffect(() => {
    setLoading(true);
    const data = JSON.parse(localStorage.getItem("User"));
    if (data) {
      setUser(data);
    }
    setLoading(false);
  }, []);

  // get user address
  useEffect(() => {
    setLoading(true);
    const Addressdata = JSON.parse(localStorage.getItem("Address"));
    if (Addressdata) {
      setAddress(Addressdata);
    }
    setLoading(false);
  }, [isAddressChange]);

  return (
    <authContext.Provider
      value={{
        user,
        loading,
        setUser,
        IsBookRemove,
        setIsBookRemove,
        Address,
        setAddress,
        isAddressChange,
        setisAddressChange,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
