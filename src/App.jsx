import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Main from './components/main/Main'
import Details from './components/main/Details'
import Products from './components/main/Products'
import WishList from './components/main/WishList'
import Bag from './components/main/Bag'
import Contact from './components/main/Contact'
import MediaPage from './components/main/MediaPage'
import About from './components/main/About'
import MyAccount from './components/login/MyAccount'
import OrderTracking from './components/main/OrderTracking'
import Blog from './components/main/Blog'
import CheckOut from './components/main/CheckOut'
import AdminLayout from './layout/AdminLayout'
import Product from './Admin/Product'
import Category from './Admin/Category'
import Tag from './Admin/Tag'
import { ToastContainer, toast } from 'react-toastify';
import SubCategory from './Admin/SubCategory'
import SubmitPgae from './components/login/SubmitPgae'
import NotFound from './NotFound'
import LoginPage from './components/login/LoginPage'


function App() {
  const  role=localStorage.getItem('role')
  const location = useLocation().pathname
  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }, [location])
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='/details' element={<Details />} />
          <Route path='/shop' element={<Products />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Bag />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/media/*' element={<MediaPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/order-tracking' element={<OrderTracking />} />
          <Route path='/my-account' element={<MyAccount />} />

        </Route>

        <Route path='/admin' element={role=='Admin' ? <AdminLayout /> : <NotFound/>}>
          <Route index element={<Product />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/subcategory' element={<SubCategory />} />
          <Route path='/admin/tag' element={<Tag />} />
        </Route>
        <Route path='/submit' element={<SubmitPgae />} />
        <Route path='/loginpage' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
