import { useContext, createContext, useState } from "react";
const LoginContext = createContext(null);

//states
export const LoginContextProvider = ({ children }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState({});

  //functions
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  
  const toggleVisiblelogin = () => {
    setRegisterVisible(false);
    setLoginVisible(!isLoginVisible);
   
  };
 

  const toggleVisibleRegister = () => {
    // Set isLoginVisible to false if isRegisterVisible is true
    setLoginVisible(false);
    setRegisterVisible(!isRegisterVisible);
  };

  //exports
  let data = {
    isDropdownVisible: isDropdownVisible,
    isLoginVisible: isLoginVisible,
    isRegisterVisible: isRegisterVisible,
    toggleDropdown: toggleDropdown,
    toggleVisibleRegister: toggleVisibleRegister,
    toggleVisiblelogin: toggleVisiblelogin,
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
    user: user,
    setUser: setUser,
    email: email,
    setEmail:setEmail
  };
  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
  return useContext(LoginContext);
};
