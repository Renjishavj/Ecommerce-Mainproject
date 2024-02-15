import { Routes,Route,BrowserRouter } from "react-router-dom";
import React from 'react'
import HomePage from "../HomePage";
import ForgotPage from "../ForgotPassword";


function Routers() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/forgotpassword" element={<ForgotPage/>}/>
      
    </Routes>
  </BrowserRouter>
   
  )
}

export default Routers

