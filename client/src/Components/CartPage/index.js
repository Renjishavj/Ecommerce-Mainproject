import React from 'react'
import Cart from "../CartPage/cart"
import Header from "../HomePage/Header"
import Footer from "../HomePage/Footer"
import "./Cart.css"
import Cartbilling from './Cartbilling'
function CartPage() {
  return (
    <>
    <Header/>
    <div className='main-cart'>
      <div><Cart/></div>
      <div><Cartbilling/></div>
    </div>
    <Footer/>
    </>
  )
}

export default CartPage
