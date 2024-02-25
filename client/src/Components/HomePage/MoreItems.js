import React from 'react'
import "./Style.css"
import dress from "../../Images/dresss.jpg"
import { Link ,useParams} from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';

function MoreItems() {
    
    let { _id } = useParams();
    const [products, setProducts] = useState([]);
  
      useEffect(() => {
          
          const fetchData = async () => {
            try {
              const response = await axios.get(`http://localhost:3300/product/${_id}`); 
              setProducts(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []); 

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
                <h3 className='more-single-attr'>{products.title}</h3>
                
            </div>
            <div className='for-rating'>
                <h3 className='more-single-attr-rating'>{products.rating}</h3>
                
            </div>
            <div className='for-price'>
                <h3 className='more-single-attr'>{products.price}</h3>
                
            </div>
        </div>

        </Link>
        {/*
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
  </div>*/}
    </div>
    </div>
    </>
    
  )
}

export default MoreItems
