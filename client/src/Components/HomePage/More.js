import React from 'react'
import "./Style.css"
import { Link } from "react-router-dom";

function More({product}) {
  return (
    <Link to="/Singleitem">
    <div className='more-single-item-one'>
            <div className='for-img'>
                <img src={product.image} alt="" className='more-dress'/>
            </div>
            <div className='for-title'>
                <h3 className='more-single-attr'>{product.title}</h3>
                
            </div>
            <div className='for-rating'>
                <h3 className='more-single-attr-rating'>{product.rating}</h3>
                
            </div>
            <div className='for-price'>
                <h3 className='more-single-attr'>{product.price}</h3>
                
            </div>
        </div>
        </Link>
  )
}

export default More
