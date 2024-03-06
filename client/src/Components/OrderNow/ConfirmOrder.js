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

  const { state } = useLocation();
  const _id = state?._id;
  const quantity = state?.quantity;
  console.log("receivingggg",_id)
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


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (_id) {
          console.log("produts",_id);
          const response = await axios.get(`http://localhost:3300/product/${_id}`);
           
          setProduct(response.data.product);
          console.log(response.data);
          setOutOfStock(response.data.product.count > 0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [_id]); 
  return (
    <>
      <div className="address-view">
        <h2 className="address-head">Your Address</h2>
        {addresses.map((address, index) => (
          <div key={index}>
            <div className="add-mapone">
              <div>
                <h3>ContactName: {address.contactName}</h3>
              </div>
              <div>
                <h3>Mobile: {address.mobile}</h3>
              </div>
              <div>
                <h3>House: {address.street}</h3>
              </div>
            </div>
            <div className="add-mapone">
              <div>
                {" "}
                <h3>City: {address.city}</h3>
              </div>
              <div>
                <h3>ZipCode: {address.zipCode}</h3>
              </div>
              <div>
                <Link to="/orderpage/editaddress">
                <button className="edt-address">Edit</button>
                </Link>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="conf-div">
        {Object.keys(_id).length > 0 ? (
    <>
      <div>
        <img src={_id.image} className="img-confirm" alt="noimage" />
      </div>
      <div>
        <h3>{_id.title}</h3>
        <h3>{_id.price}</h3>
        <p>{_id.description}</p>
        <input type="number" className="price-qty" placeholder="0" defaultValue={1} />
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
          <Link to="/orderpage/paypage">
            <button className="next-btn">Next</button>
          </Link>
        </div>
       
      </div>
    </>
  );
}

export default ConfirmOrder;
