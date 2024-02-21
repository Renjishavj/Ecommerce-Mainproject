import React from 'react'
import Admin from "./Admin"
import AdminHeader from './Admin'
import AdminSidebar from './AdminSidebar'

function AdminPage() {
  return (
    <>
    <AdminHeader/>
    <div className='ind-main'>
      <div><AdminSidebar/></div>
      <div></div>
    </div>
    </>
  )
}

export default AdminPage
