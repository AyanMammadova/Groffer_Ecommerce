import React from 'react'
import Header from '../Admin/Header'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
      <div className='bg-gray-200 min-h-[100vh] pb-[50px]'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout
