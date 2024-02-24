import React from 'react'
import Admin from "./Admin"
import AdminHeader from './Admin'
import AdminSidebar from './AdminSidebar'
import AddProduct from './AddProduct'
import {Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard'
import DeleteProduct from './DeleteProduct'
function AdminPage() {
  return (
    <>
    <AdminHeader/>
    <div className='ind-main'>
      <div><AdminSidebar/></div>
      <div>
        <Routes>
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/deleteproduct" element={<DeleteProduct/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default AdminPage
