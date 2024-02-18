import React from "react";
import dress from "../../Images/dress.jpg";
import denim from "../../Images/denim.jpg"
import west from "../../Images/west.jpg"
import top from "../../Images/Tops.jpg"
import cow from "../../Images/cow.jpg"
import boh from "../../Images/bohemian.jpg"
import footwear from "../../Images/footwear.jpg" 
import scarf from "../../Images/scarf.jpg"
import shoes from "../../Images/shoes.jpg"
import access from "../../Images/access.jpg"
import sun from "../../Images/sun.jpg"
import man from "../../Images/man.jpg"
import sports from "../../Images/sports.jpg"
import watch from "../../Images/watch.jpg"
import wall from "../../Images/wall.jpg"
import belt from "../../Images/belt.jpg"
import { Link } from "react-router-dom";

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
              <Link to="/guitars">
                <button className="title-catt">Electric Guitars</button>
                
                </Link>
              </div>
              
            </div>
            <div className="round-childs">
              <div>
                <img src={denim} alt="" className="img-dress"></img>
              </div>
              <div>
              <Link to="/keyboards">
                <button className="title-catt">KeyBoards</button>
                
                </Link>
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
                  value="Basses"
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
                  value="Micro Phones"
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
                  value="Drums and percussions"
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
                  value="Violin"
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
                  value="Piano"
                />
              </div>
            </div>
            <div className="round-childs">
              <div>
                <img src={dress} alt="" className="img-dress"></img>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Title"
                  className="title-catt"
                  value="Electric Keyboard"
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
                  value="Flute"
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
                  value="Timpani"
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
                  value="Synthesizer"
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
                  value="Digital Piano"
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
                  value="Sitar"
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
                  value="Banjo"
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
                  value="Accordion"
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
                  value="MIDI Controllers"
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
