import React from "react";
import CartSingle from "../CartPage/CartSingle";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Context/LoginContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import noimg from "../../Images/noimage.jpg"

function ConfirmOrder() {
  const [addresses, setAddresses] = useState([]);
  const { user } = useLogin();
  useEffect(() => {
    const email = user.email;
    console.log(email);
    fetchAddresses(email);
  }, []);

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

      <div className="cong-pro-details">
                <div><img src={noimg} alt="" className="img-confirm" /></div>
                <div>
                <h3>name</h3>
                <h3>price</h3>
                <h3>quandity</h3>
                </div>
            
      </div>

      <div className="conf-btn">
        <div>
          {" "}
          <Link to="/orderpage/paypage">
            <button className="next-btn">Next</button>
          </Link>
        </div>
        <div>
          <button className="addanother-btn">Add Another Address</button>
        </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
