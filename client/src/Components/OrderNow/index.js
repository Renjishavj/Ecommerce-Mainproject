import React from 'react';
import AddAddress from './AddAddress';
import ConfirmOrder from './ConfirmOrder';
import PayNow from './PayNow';
import Header from '../HomePage/Header';
import Editaddress from "./Editaddress"
import './Order.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Footer from "../HomePage/Footer"
function OrderPage() {
  return (
    <>
      <Header />
      <div className='ind-payment'>
        <div>
          <Link to="/orderpage/addaddress">
            <button className='payhead-btns'>Add Address</button>
          </Link>
        </div>
        <div>
          <Link to="/orderpage/confirm">
            <button className='payhead-btns'>Confirm Order</button>
          </Link>
        </div>
        <div>
          <Link to="/orderpage/paypage">
            <button className='payhead-btns'>Payment</button>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/addaddress" element={<AddAddress />} />
          <Route path="/confirm" element={<ConfirmOrder />} />
          <Route path="/paypage" element={<PayNow />} />
          <Route path='/editaddress' element={<Editaddress/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default OrderPage;
