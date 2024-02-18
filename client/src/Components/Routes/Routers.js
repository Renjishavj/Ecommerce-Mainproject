import { Routes,Route,BrowserRouter } from "react-router-dom";
import React from 'react'
import HomePage from "../HomePage";
import ForgotPage from "../ForgotPassword";
import ShopbyPage from "../Shopby";
import Shopkeyboard from "../ShopKeyboard";
import SinglePage from "../SingleItem";
import ShopPage from "../Shop";


function Routers() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/forgotpassword" element={<ForgotPage/>}/>
      <Route path="/guitars" element={<ShopbyPage/>}/>
      <Route path="/keyboards" element={<Shopkeyboard/>}/>
      <Route path="/singleitem" element={<SinglePage/>}/>
      <Route path="/shop" element={<ShopPage/>}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default Routers

