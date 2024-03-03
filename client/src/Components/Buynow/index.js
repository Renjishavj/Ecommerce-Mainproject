import React from 'react'
import Header from "../HomePage/Header"
import Footer from "../HomePage/Footer"
import Cartbilling from '../CartPage/Cartbilling'

import "./Buynow.css"
import CartShop from '../CartPage/CartShop'
function BuynowPage() {
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

export default BuynowPage
