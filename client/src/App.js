
import Routers from "./Components/Routes/Routers";
import { LoginContextProvider } from "./Context/LoginContext";
import React from "react";
import { ProductContextProvider } from "./Context/ProductContext";


function App() {
  return (
   
   <LoginContextProvider>
    
    <Routers/>
    
    </LoginContextProvider>
   
   
  );
}

export default App;



