import React from 'react'
import Header from "../HomePage/Header"
import Footer from "../HomePage/Footer"
import "./Cart.css"
import Cartbilling from './Cartbilling'
import CartShop from './CartShop'
function CartPage() {
  return (
    <>
    <Header/>
    <div className='main-cart'>
      <div><CartShop/></div>
      <div><Cartbilling/></div>
    </div>
    <Footer/>
    </>
  )
}

export default CartPage
