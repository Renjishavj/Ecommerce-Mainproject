import React from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaPlus,
  FaTags,
  FaUsers,
  FaStore,
  FaExchangeAlt,
  FaMinus,
  
} from "react-icons/fa";
import "./Admin.css";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="main-sidebar">
      <div>
        <FaTachometerAlt className="dashboarsicons" />
        <Link to="dashboard">
          <span className="icon-text">
            <button className="side-btns">Dashboard</button>
          </span>
        </Link>
      </div>
      <div>
        <FaBox className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Products</button>
        </span>
      </div>
      <div>
        <FaPlus className="dashboarsicons" />
        <Link to="addproduct">
          <span className="icon-text">
            <button className="side-btns">Add Products</button>
          </span>
        </Link>
      </div>
      <div>
        <FaMinus className="dashboarsicons" />
        <Link to="deleteproduct">
          <span className="icon-text">
            <button className="side-btns">Delete Products</button>
          </span>
        </Link>
      </div>
      <div>
        <FaMinus  className="dashboarsicons" />
        <Link to="updateproduct">
          <span className="icon-text">
            <button className="side-btns">Update Products</button>
          </span>
        </Link>
      </div>
      <div>
        <FaTags className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Categories</button>
        </span>
      </div>
      <div>
        <FaUsers className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Users</button>
        </span>
      </div>
      <div>
        <FaStore className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Sellers</button>
        </span>
      </div>
      <div>
        <FaExchangeAlt className="dashboarsicons" />
        <span className="icon-text">
          <button className="side-btns">Transactions</button>
        </span>
      </div>
    </div>
  );
}

export default AdminSidebar;
