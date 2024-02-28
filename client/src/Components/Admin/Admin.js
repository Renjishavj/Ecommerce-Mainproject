import React from 'react'
import {Link} from "react-router-dom"

import {
    FaSearch,
    } from "react-icons/fa";
import "./Admin.css"

function AdminHeader() {

  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem('user')
    window.location.href = "/";
  };
 
  return (
    <div className='admin-main'>
        <div><h1 className='admin-admin'>Admin</h1></div>
    <div className='admin-header'>
        <div><button className='adminbtns'>Home</button></div>
        <div><button className='adminbtns'>Products</button></div>
        <div><button className='adminbtns'>About</button></div>
        <div><button className='adminbtns'>Contact</button></div>
        <div className='search-bar'>
        <div><FaSearch className='icon-admin'/></div>
           <div><input type="text" placeholder='search'  className='search-admin'/></div> 
           
        </div>
        
          <div className="icon-div"><button onClick={logOut} className='logout-admin'>Log out</button></div>
        
     </div>
     </div>
  )
}

export default AdminHeader
