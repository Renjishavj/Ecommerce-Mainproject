import React from "react";
import CartSingle from "../CartPage/CartSingle";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../Context/LoginContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import noimg from "../../Images/noimage.jpg";
import { useLocation } from "react-router-dom";

function ConfirmOrder() {
  const [addresses, setAddresses] = useState([]);
  const { user } = useLogin();
  const [outOfStock, setOutOfStock] = useState(false);
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const { state } = useLocation();
  const Product = state?.product;
  console.log("receivingggg", Product);

  if (Array.isArray(Product) && Product.length > 0) {
    Product.forEach((Product, index) => {
      console.log(
        `Product ${index + 1} - count: ${Product.count}, quantity: ${
          Product.quantity
        }`
      );
    });
  } else {
    console.warn("Product is not an array or is empty");
  }

  const totalAmount = Product.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  console.log("total amt", totalAmount);
  
  useEffect(() => {
    const email = user.email;
    fetchAddresses(email);
  }, [user.email]);

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
  const handlePayment = async() => {
    try {
      let isQuantityValid = true;
  
      
      Product.forEach((product, index) => {
        const quantity = parseInt(document.querySelector(`.price-qty-${index}`).value, 10);
  
        if (isNaN(quantity) || quantity <= 0 || quantity > product.count) {
          alert(`Invalid quantity for products.${product.count} Left`);
          isQuantityValid = false;
        }
      });
  
      if (!isQuantityValid) {
        return;
      }
  
      const selectedAddress = addresses.find((address) => {
        const radioElement = document.getElementById(
          `address-radio-${address._id}`
        );
        return radioElement.checked;
      });
  
      if (!selectedAddress) {
        alert("Please select an address.");
        return;
      }


      const orderUrl = "http://localhost:3300/payment/orders";
      const {data}=await axios.post(orderUrl,{amount:totalAmount})
      if (data.success) {
        handleOpenRazorpay(data.order, data.amount);
      }
      else {
       alert("login required to check out");
      }

      console.log(data)
      
    } catch (error) {
      console.log(error);
      alert("Please select the address or product");
    }
  };


  // Open Razorpay modal
  const handleOpenRazorpay = (order, amount) => {
    const options = {
      // key: import.meta.env.RAZORPAY_API_KEY,
      key:"rzp_test_73fFNe1fHnCy3d",
      amount: Number(order.amount * 100),
      currency: order.currency,
      name: "Rhythmix",
      description: "Find the music thats right for you",
      order_id: order.id,
      //verify payment
      handler: async function (response) {
        const { data } = await axios.post("http://localhost:3300/payment/verify", {
          ...response,
          userOrder: Product,
          amount,
          email:user.email
        });
        if (data.success) {
          alert(data.message);
          
          navigate("/myorders", { state: { verificationData: order } });
        } else {
          console.log("error in verification");
        }
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  return (
    <>
    <div className="main-flex">
      <div className="address-view">
        <h2 className="address-head">Your Address</h2>

        {addresses.map((address, index) => (
          <div key={index} className="conf-div">
            <div className="add-mapone-conf">
              <div>
                <input
                  type="radio"
                  name="address"
                  className="radio-confirm"
                  id={`address-radio-${address._id}`}
                />
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
        {Array.isArray(Product) &&
          Product.map((product,index) => (
            <>
              <div>
                <img
                  src={product.image}
                  className="img-confirm"
                  alt="noimage"
                />
              </div>
              <div>
                <h3>{product.title}</h3>
                <h3>${(product.quantity * product.price).toFixed(2)}</h3>
                <p>{product.description}</p>
                <input
                  type="number"
                  className={`price-qty price-qty-${index}`}
                  placeholder={product.quantity}
                  value={product.quantity}
                />
              </div>
              
            </>
          ))}
      </div>

      <div className="conf-btn">
        <div>
          {" "}
          <button className="next-btn" id="pay-btn" onClick={handlePayment} >
            Pay Now
          </button>
          <div>
            {" "}
            <h3 className="hidden-price">Total ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ConfirmOrder;
