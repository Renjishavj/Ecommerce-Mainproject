import React from 'react'
import Admin from "./Admin"
import AdminHeader from './Admin'
import AdminSidebar from './AdminSidebar'
import AddProduct from './AddProduct'
import {Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard'
import DeleteProduct from './DeleteProduct'
import UpdateProduct from './UpdateProduct'
import Footer from "../HomePage/Footer"
import "./Admin.css"
import Products from './Products'
import Users from './Users'
import Categories from "./Categories"
import AddCategory from './AddCategory'
import OrdersAdmin from './OrdersAdmin'
function AdminPage() {
  return (
    <>
    <AdminHeader/>
    <div className='ind-main'>
      <div><AdminSidebar/></div>
      <div className='admin-content'>
        <Routes>
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/deleteproduct" element={<DeleteProduct/>}/>
        <Route path="/updateproduct" element={<UpdateProduct/>}/>
        <Route path="/products/*" element={<Products/>}/>
        <Route path="/userpage" element={<Users/>}/>
        <Route path='/addcatogories' element={<Categories/>}/>
        <Route path='/addcategories' element={<AddCategory/>}/>
        <Route path="/viewall" element={<OrdersAdmin/>}/>
        </Routes>
      </div>
      
    </div>
    
    <Footer/>
    </>
  )
}

export default AdminPage
