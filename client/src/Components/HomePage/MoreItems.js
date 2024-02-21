import React from 'react'
import "./Style.css"
import dress from "../../Images/dresss.jpg"
import { Link } from "react-router-dom";


function MoreItems() {
    
  return (
    <>
    <div className='more-main'>
    <div className='more-Items'>
        <Link to="/Singleitem">
        <div className='more-single-item-one'>
            <div className='for-img'>
                <img src={dress} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <input type="text" placeholder='Title' className='more-single-attr'/>
            </div>
            <div className='for-rating'>
                <input type="text" name="" id="" placeholder='rating' className='more-single-attr-rating' />
            </div>
            <div className='for-price'>
                <input type="text" placeholder='price' className='more-single-attr'/>
            </div>
        </div>

        </Link>
        <Link to="/Singleitem">
        <div className='more-single-item-two'>
            <div className='for-img'>
                <img src={dress} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <input type="text" placeholder='Title' className='more-single-attr'/>
            </div>
            <div className='for-rating'>
                <input type="text" name="" id="" placeholder='rating' className='more-single-attr-rating' />
            </div>
            <div className='for-price'>
                <input type="text" placeholder='price' className='more-single-attr'/>
            </div>
        </div>
        </Link>
        <Link to="/Singleitem">
        <div className='more-single-item-three'>
            <div className='for-img'>
                <img src={dress} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <input type="text" placeholder='Title' className='more-single-attr'/>
            </div>
            <div className='for-rating'>
                <input type="text" name="" id="" placeholder='rating' className='more-single-attr-rating' />
            </div>
            <div className='for-price'>
                <input type="text" placeholder='price' className='more-single-attr'/>
            </div>
        </div>
        </Link>
        <div className='more-single-item-four'>
            <div className='for-img'>
                <img src={dress} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <input type="text" placeholder='Title' className='more-single-attr'/>
            </div>
            <div className='for-rating'>
                <input type="text" name="" id="" placeholder='rating' className='more-single-attr-rating' />
            </div>
            <div className='for-price'>
                <input type="text" placeholder='price' className='more-single-attr'/>
            </div>
        </div>
        <div className='more-single-item-five'>
            <div className='for-img'>
                <img src={dress} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <input type="text" placeholder='Title' className='more-single-attr'/>
            </div>
            <div className='for-rating'>
                <input type="text" name="" id="" placeholder='rating' className='more-single-attr-rating' />
            </div>
            <div className='for-price'>
                <input type="text" placeholder='price' className='more-single-attr'/>
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default MoreItems
