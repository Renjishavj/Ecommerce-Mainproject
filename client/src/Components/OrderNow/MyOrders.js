import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function MyOrders() {
  const location = useLocation();
  const verificationData = location.state?.verificationData;
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');
  console.log(verificationData)

  useEffect(() => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Adding 7 days
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString(undefined, options);
    setEstimatedDeliveryDate(formattedDate);
  }, []);


  return (
    <div className='order-success'>
      <FaRegCheckCircle  className='tick-circle'/>
     <h1>Order Placed Successfully</h1>
     <p>Estimated delivery date: {estimatedDeliveryDate}</p>
     <p className='ordernumber'>Your order number is {verificationData.id}</p>
    <Link to="/">
     <button className='backtoshop'>Back to Shop</button>
     </Link>
    </div>
  )
}

export default MyOrders
