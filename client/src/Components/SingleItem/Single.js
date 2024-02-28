import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import noimg from "../../Images/noimage.jpg";
import "./Single.css";
import { Link,useParams } from "react-router-dom";
import axios from "axios"
import { useState,useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


function Single() {
  let { _id } = useParams();
  const [products, setProducts] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3300/product/${_id}`); 
            setProducts(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
  return (
    
    <div className="car-div">
      
      <div>
        <Carousel>
          <div>
            <img src={products.image}  className="img-cara"/>
          </div>
          <div>
            <img src={products.cartone} alt="" className="img-cara"/>
          </div>
          <div>
            <img src={products.carttwo} alt="" className="img-cara"/>
          </div>
          <div>
            <img src={products.carrthree} alt="" className="img-cara"/>
          </div>
        </Carousel>
      </div>
      <div className="desc-product">
        <div>
        <div>
        <h1  className="pro-title">{products.title}</h1>
        </div>
        <div className="rating-desc">
          <div><h3 className="pro-rating">{products.rating}</h3></div>
          <div className="star-rating">
          <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={2.9} precision={4.5} readOnly />
          </Stack>
          </div>
            
        </div>
        <div>
        <h3 className="pro-price">{products.price}</h3>
           
        </div>
        <div>
            <h4  className="pro-desc" placeholder="">{products.description}</h4>
        </div>
        <div className="divi-cart">
        <div>
            <input type="number" className="price-qty"  placeholder="0"/>
        </div>
        
        <Link to="/cartpage">
        <div>
            <button className="addtocart-btn">Add to Cart</button>
        </div>
        </Link>
        <Link to="/buynow">
        <div>
            <button className="buynow-btn">Buy Now</button>
        </div>
        </Link>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Single;