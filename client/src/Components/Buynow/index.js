import React from 'react'
import Header from "../HomePage/Header"
import Footer from "../HomePage/Footer"
import Cartbilling from '../CartPage/Cartbilling'
import Cart from "../CartPage/cart"
import "./Buynow.css"
function BuynowPage() {
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

export default BuynowPage
