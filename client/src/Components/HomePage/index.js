import React from 'react'
import "./Style.css"
import Header from './Header'
import Categories from './Categories'
import Footer from './Footer'
import MoreItems from './MoreItems'
import Banner from './Banner'
import { useState } from 'react'


function HomePage() {

 
  return (
    <>
    <div className='main'>
    <Header/>
    
    <Banner/>
   
    <Categories/>
    
    <h1 className='more-heading'>More To Love</h1>
    <MoreItems/>
    <MoreItems/>
    <MoreItems/>
    <MoreItems/>
    <MoreItems/>
    <Footer/>
    </div>
    
    </>
   
    
  )
}

export default HomePage
