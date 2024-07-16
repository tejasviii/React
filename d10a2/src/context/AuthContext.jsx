import React, { useState } from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isAuth: true,
    token: null,
  });

  const logIn = (token) => {
    setAuthDetails({ isAuth: true, token: token });
  };

  const logOut = () => {
    setAuthDetails({ isAuth: false, token: null });
  };

  return (
    <AuthContext.Provider value={{ authDetails, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
