import React from "react";
import CartSingle from "../CartPage/CartSingle";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Context/LoginContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import noimg from "../../Images/noimage.jpg"
import { useLocation } from 'react-router-dom';


function ConfirmOrder() {
  const [addresses, setAddresses] = useState([]);
  const { user } = useLogin();
  const [outOfStock, setOutOfStock] = useState(false);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const Product = state?.product;
  const quantity = state?.quantity;
  console.log("receivingggg",Product)
  console.log(quantity)

  useEffect(() => {
    const email = user.email;
    fetchAddresses(email);
   
  }, [ user.email]);

  const fetchAddresses = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:3300/route/fetchaddress/${email}`
      );
      const fetchedAddresses = response.data.addresses;
      setAddresses(fetchedAddresses);
      console.log(addresses);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };
 const handleGoToPay=()=>{
  try {
   
    console.log("pro count",Product.count)
    console.log("product.quandity",Product.quantity)

    const quantity = parseInt(document.querySelector(".price-qty").value, 10);
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid non-negative quantity for the product.");
      return;
    }
   
    if (quantity > Product.count) {
      alert(`Limit exceeded.Available stock.${Product.count}`);
      return;
    }

    const selectedAddress = addresses.find((address) => {
      const radioElement = document.getElementById(`address-radio-${address._id}`);
      return radioElement.checked;
    });

    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }

    

    navigate("/orderpage/paypage");
  } catch (error) {
    console.log(error);
    alert("please select the address or product")
  }
  
 }

  return (
    <>
      <div className="address-view">
        <h2 className="address-head">Your Address</h2>
         
        {addresses.map((address, index) => (
         
          <div key={index} className="conf-div">
            <div className="add-mapone-conf">
              <div>
                <input type="radio"  name="address" className="radio-confirm" id={`address-radio-${address._id}`}/>
              </div>
              <div>
                <h5>ContactName: {address.contactName}</h5>
              </div>
              <div>
                <h5>Mobile: {address.mobile}</h5>
              </div>
              <div>
                <h5>House: {address.street}</h5>
              </div>
            </div>
            <div className="add-mapone">
              <div>
                {" "}
                <h5>City: {address.city}</h5>
              </div>
              <div>
                <h5>ZipCode: {address.zipCode}</h5>
              </div>
              
            </div>
          </div>
        
        ))}
      </div>
      


      <div className="conf-div">
        {Object.keys(Product).length > 0 ? (
    <>
      <div>
        <img src={Product.image} className="img-confirm" alt="noimage" />
      </div>
      <div>
        <h3>{Product.title}</h3>
        <h3>{Product.price}</h3>
        <p>{Product.description}</p>
        <input type="number" className="price-qty"  placeholder={Product.quantity} />
      </div>
    </>
  ) : (
    <div>
      <img src={noimg} className="img-cara" alt="noimage" />
      <p>Loading product details...</p>
    </div>
  )}
            
      </div>

      <div className="conf-btn">
        <div>
          {" "}
         
            <button className="next-btn" id="pay-btn" onClick={handleGoToPay}>Pay Now</button>
         
        </div>
       
      </div>
    </>
  );
}

export default ConfirmOrder;
