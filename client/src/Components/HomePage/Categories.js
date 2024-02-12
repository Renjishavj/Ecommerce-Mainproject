import React from "react";
import dress from "../../Images/dresss.jpg";
import denim from "../../Images/denim.jpg"
import west from "../../Images/west.jpg"
import top from "../../Images/Tops.jpg"
import cow from "../../Images/cow.jpg"
import boh from "../../Images/bohemian.jpg"
import footwear from "../../Images/footwear.jpg" 
import jwell from "../../Images/jwell.jpg"
import bags from "../../Images/bags.jpg"
import scarf from "../../Images/scarf.jpg"
import shoes from "../../Images/shoes.jpg"
import access from "../../Images/access.jpg"
import cowboots from "../../Images/cowboots.jpg"
import sun from "../../Images/sun.jpg"
import man from "../../Images/man.jpg"
import sports from "../../Images/sports.jpg"
import watch from "../../Images/watch.jpg"
import wall from "../../Images/wall.jpg"
import belt from "../../Images/belt.jpg"

function Categories() {
  return (
    <>
      <div className="catogories-main">
        <p className="catogories-heading">Shop By Categories</p>
        <div className="shop-main">
          <div className="scroll-div">
            <div className="round-childs">
              <div>
                <img src={west} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value=" Western Dresses"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={denim} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Denim Wear"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={top} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Tops and Blouses"
                />
              </div>
            </div>
            
            
            <div className="round-childs">
              <div>
                <img src={cow} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Cowgirl Chic"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={boh} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Bohemian Style"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={footwear} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Footwear"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={jwell} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Jwellery"
                />
              </div>
            </div>
            
            <div className="round-childs">
              <div>
                <img src={bags} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Bags"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={scarf} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Scarves and Wraps"
                />
              </div>
            </div>
          </div>
          <div className="scroll-div">
            <div className="round-childs-btm">
              <div>
                <img src={man} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Western Shirts"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={access} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Hair Accessories"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={cowboots} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Cowbot Boots"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={shoes} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Shoe"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={sports} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Sports wear"
                />
              </div>
            </div>
            
            <div className="round-childs-btm">
              <div>
                <img src={watch} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Watches"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={wall} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Wallets"
                />
              </div>
            </div>
            
            <div className="round-childs-btm">
              <div>
                <img src={belt} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Belts"
                />
              </div>
            </div>
            <div className="round-childs-btm">
              <div>
                <img src={sun} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Sunglasses"
                />
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
