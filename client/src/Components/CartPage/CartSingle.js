import React from "react";
import noimg from "../../Images/noimage.jpg";
import "./Cart.css";

function CartSingle(user,removeItemFromCart) {
  console.log(user);

  const  handleRemove = () => {
    removeItemFromCart(user.product.id);
  }
  return (
    <div className="cart">
      <div>
        <img src={user.product.image} alt="" className="cart-img" />
      </div>
      <div className="cart-one-right">
        <div>
          <h2 className="inp-cart">{user.product.title}</h2>
        </div>
        <div>
          <select name="size" id="sizeSelect" placeholder="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-Large">X-Large</option>
          </select>
        </div>
        <div>
          <h2 className="inp-cart">{user.product.price}</h2>
        </div>
        <div>
          <input type="number" placeholder={user.product.quantity} />
        </div>
        <div>
          <button  onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartSingle;
