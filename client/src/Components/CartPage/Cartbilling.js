import React from 'react'
import { useProduct } from "../../Context/ProductContext"
import { useState,useEffect } from 'react';


function Cartbilling({ cart }) {
  
  console.log(cart)

if (!cart) {
  return <p>No product data available</p>;
}


const getTotalItems = () => {
  if (!cart || !cart.length) {
    return 0;
  }

  return cart.reduce((total, item) => total + item.quantity, 0);
};

const getTotalAmount = () => {
  if (!cart || !cart.length) {
    return 0;
  }

  return cart.reduce((total, item) => {
    const itemPrice = item.quantity === 1 ? item.price : item.price * item.quantity;
    return total + Number(itemPrice); // Convert itemPrice to number
  }, 0);
};

  return (
    <div className='cart-price'>
      
       <div><h2>{getTotalItems()} Items</h2></div>
        <div>
          <label htmlFor=""  className='totalamt-inp'>TotalAmount:</label>
             <input type='text' value={getTotalAmount()} readOnly  className='totalamt-inp'/> 
          </div>
        <div className='each-cartbtn'>
          <button className='cart-cartbutton'>Place Order</button>
        </div>
     
    </div>
  )
}

export default Cartbilling
