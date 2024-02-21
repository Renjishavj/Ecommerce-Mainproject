import React from 'react';
import { FaTachometerAlt, FaBox, FaPlus, FaTags, FaUsers, FaStore, FaExchangeAlt } from 'react-icons/fa';
import './Admin.css'; 

function AdminSidebar() {
  return (
    <div className='main-sidebar'>
      <div>
        <FaTachometerAlt className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Dashboard</button></span>
      </div>
      <div>
        <FaBox className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Products</button></span>
      </div>
      <div>
        <FaPlus className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Add Products</button></span>
      </div>
      <div>
        <FaTags className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Categories</button></span>
      </div>
      <div>
        <FaUsers className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Users</button></span>
      </div>
      <div>
        <FaStore className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Sellers</button></span>
      </div>
      <div>
        <FaExchangeAlt className='dashboarsicons' />
        <span className='icon-text'><button className='side-btns'>Transactions</button></span>
      </div>
    </div>
  );
}

export default AdminSidebar;
