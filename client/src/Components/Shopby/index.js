import React from 'react'
import "./Shopby.css"
import MoreItems from '../HomePage/MoreItems'
import Footer from "../HomePage/Footer"
import Header from "../HomePage/Header"
function ShopbyPage() {
  return (
    <>
    <Header/>
    <h1 className='guitars-head'>Electric Guitars</h1>
    <MoreItems/>
   
    <Footer/>
    </>
  )
}

export default ShopbyPage
