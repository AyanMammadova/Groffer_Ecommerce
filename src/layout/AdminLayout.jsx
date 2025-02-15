import React from 'react'
import Header from '../Admin/Header'
import { Outlet } from 'react-router-dom'
import AdminLogin from '../Admin/AdminLogin'

function AdminLayout() {
  
  return (
    <>
      <div className='bg-black text-white w-[100%] min-h-[100vh] pb-[50px]'>
        <AdminLogin/>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout
