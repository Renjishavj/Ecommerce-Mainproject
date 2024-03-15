import React from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaPlus,
  FaTags,
  FaUsers,
  FaStore,
  FaExchangeAlt,
} from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="main-sidebar">
      <div className="hov-spann">
        <FaTachometerAlt className="dashboarsicons" />
        <Link to="dashboard">
          <span className="icon-text">
            <button className="side-btns">Dashboard</button>
          </span>
        </Link>
      </div>
      <div  className="hov-spann">
        <FaBox className="dashboarsicons" />
        <Link to="products">
        <span className="icon-text">
          <button className="side-btns">Products</button>
        </span>
        </Link>
      </div>
      <div  className="hov-spann">
        <FaPlus className="dashboarsicons" />
        <Link to="addproduct">
          <span className="icon-text">
            <button className="side-btns">Add Products</button>
          </span>
        </Link>
      </div>
      
     
      <div  className="hov-spann">
        <FaTags className="dashboarsicons" />
        <Link to="addcatogories">
        <span className="icon-text">
          <button className="side-btns">Categories</button>
        </span>
        </Link>
      </div>
      <div  className="hov-spann">
        <FaPlus className="dashboarsicons" />
       <Link to="addcategories">
          <span className="icon-text">
            <button className="side-btns"> Categories</button>
          </span>
        </Link>
      </div>
      <div  className="hov-spann">
        <FaUsers className="dashboarsicons" />
        <Link to="userpage">
        <span className="icon-text">
          <button className="side-btns">Users</button>
        </span>
        </Link>
      </div>
      <div  className="hov-spann">
        <FaStore className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Orders</button>
        </span>
      </div>
      <div  className="hov-spann">
        <FaExchangeAlt className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Transactions</button>
        </span>
      </div>
    </div>
  );
}

export default AdminSidebar;
