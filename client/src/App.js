import AfterHeader from "./Components/AfterLogin/AfterHeader";
import Routers from "./Components/Routes/Routers";
import { LoginContextProvider } from "./Context/LoginContext";
import React from "react";


function App() {
  return (
   
   <LoginContextProvider>
    <Routers/>
    </LoginContextProvider>
   
   
  );
}

export default App;



