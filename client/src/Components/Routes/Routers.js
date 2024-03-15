import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "../HomePage";
import ForgotPage from "../ForgotPassword";
import ShopbyPage from "../Shopby";
import Shopkeyboard from "../ShopKeyboard";
import SinglePage from "../SingleItem";
import ShopPage from "../Shop";
import CartPage from "../CartPage";
import BuynowPage from "../Buynow";
import AdminPage from "../Admin";
import { useLogin } from "../../Context/LoginContext";
import AddAddress from "../OrderNow/AddAddress";
import OrderPage from "../OrderNow";
import MyOrders from "../OrderNow/MyOrders";
import UserOrder from "../OrderNow/UserOrder";

function Routers() {
  const { setLoggedIn, setUser } = useLogin();
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      console.log(storedUser);
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/guitars" element={<ShopbyPage />} />
        <Route path="/keyboards" element={<Shopkeyboard />} />
        <Route path="/singleitem/:_id" element={<SinglePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cartpage/:email" element={<CartPage />} />
        <Route path="/buynow" element={<BuynowPage />} />
        <Route path="/adminpage/*" element={<AdminPage />} />
        <Route path="/orderpage/*" element={<OrderPage/>} />
        <Route path="/addaddress" element={<AddAddress/>} />
        <Route path="/myorders" element={<MyOrders/>} />
        <Route path="/userorder" element={<UserOrder/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
