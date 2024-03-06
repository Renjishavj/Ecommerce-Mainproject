import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./Single.css";
import { useLogin } from "../../Context/LoginContext";

function Single() {
  let { _id } = useParams();
  const [product, setProduct] = useState({});
  const { loggedIn, user, setUser } = useLogin();
  const [outOfStock, setOutOfStock] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //console.log(_id);
        const response = await axios.get(
          `http://localhost:3300/product/${_id}`
        );
        setProduct(response.data.product);
        //console.log(response.data);
        setOutOfStock(response.data.product.count > 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [_id]);

  useEffect(() => {
    if (user.cart) {
      setIsInCart(user.cart.some(({ productId }) => -productId === -_id));
    }
  }, [user.cart]);

  const handleAddToCart = async () => {
    if (!loggedIn) {
      alert("Please log in");
    } else {
      const quantity =
        parseInt(document.querySelector(".price-qty").value) || 1;

      try {
        console.log(
          user.email,
          _id,
          quantity,
          product.image,
          product.price,
          product.title
        );
        const response = await axios.post("http://localhost:3300/route/cart", {
          email: user.email,
          _id: _id,
          quantity: quantity,
          image: product.image,
          price: product.price,
          title: product.title,
        });
        console.log(response.data.message);
        alert("added to cart");
        setIsAddedToCart(true);
        setIsInCart(true);

        const updatedCart = [
          ...user.cart,
          {
            productId: _id,
            quantity: quantity,
            image: product.image,
            price: product.price,
            title: product.title,
          },
        ];
        const updatedUser = { ...user, cart: updatedCart };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  /*useEffect(() => {
      if (localStorage.getItem('user')) {
        const usercart = JSON.parse(localStorage.getItem('user'));
        console.log(usercart)
  
        if (usercart && usercart.cart) {
          const isInCart = usercart.cart.some(item => item.productId === _id);
           setIsInCart(isInCart);
           return console.log(isInCart)
          
        } 
        
      }
    }, [_id]);*/

  const goToCart = () => {
    console.log("Redirecting to Cart");
  };
  return (
    <div className="car-div">
      <div className="card-single">
        <Carousel>
          <div>
            <img src={product.image} className="img-cara" alt="noimage" />
          </div>
          <div>
            <img src={product.cartone} alt="1" className="img-cara" />
          </div>
          <div>
            <img src={product.carttwo} alt="2" className="img-cara" />
          </div>
          <div>
            <img src={product.cartthree} alt="3" className="img-cara" />
          </div>
        </Carousel>
      </div>
      <div className="desc-product">
        <div>
          <div>
            <h1 className="pro-title">{product.title}</h1>
          </div>
          <div className="rating-desc">
            <div>
              <h3 className="pro-rating">{product.rating}</h3>
            </div>
            <div className="star-rating">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.9}
                  precision={4.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div>
            <h3 className="pro-price">{product.price}</h3>
          </div>
          <div>
            <h4 className="pro-desc" placeholder="">
              {product.description}
            </h4>
          </div>
          <div className="divi-cart">
            <div>
              <input type="number" className="price-qty" placeholder="0" />
            </div>

            <div>
              {!isInCart ? (
                <button className="addtocart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              ) : (
                <Link to={`/cartpage/${user.email}`}>
                  <button className="gotocart-btn" onClick={goToCart}>
                    Go to Cart{" "}
                  </button>
                </Link>
              )}
            </div>

            <div>
              <Link to="/orderpage/addaddress" state={{ product: product, quantity: quantity}}>
                <button className="buynow-btn">Buy Now</button>
              </Link>
            </div>

            <div>
              {!outOfStock ? (
                <h3 className="outofstock">Out of Stock</h3>
              ) : (
                <h3 className="outofstock"></h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
