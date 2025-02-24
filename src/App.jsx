import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import SubCategory from './Admin/SubCategory'
import SubmitPgae from './components/login/SubmitPgae'
import NotFound from './NotFound'
import LoginPage from './components/login/LoginPage'
import { jwtDecode } from 'jwt-decode'
import { Toaster } from 'react-hot-toast'
import Success from './components/main/Success'
import PaymentPage from './components/main/PaymentPage'
import ResetPassword from './components/login/ResetPassword'
import Coupon from './Admin/Coupon'


function App() {
  const role = localStorage.getItem('role')
  const location = useLocation().pathname
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');
  const refreshToken = localStorage.getItem('refreshToken');
  const [expire, setExpire] = useState(localStorage.getItem('exp' || ''))
  useEffect(() => {
    if (token) {
      // apiInstance.post(
      //   'Auth/refresh-token',
      //   `"${token}"`,
      //   {
      //     headers: {
      //       'accept': '*/*',
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // ).then(res => {
      //   navigate('/my-account')
      //   console.log('Success:', res)
      // })
      //   .catch(err =>
      //     console.error('Errorum:', err)
      //   );
      const decodedToken = jwtDecode(token)
      setExpire(decodedToken.exp)
      // console.log('exp date' + expire)
      const rol = (decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
      localStorage.setItem("role", rol)
      // console.log('refresh: ' + refreshToken)
      // console.log('acces: ' + token)
    }
  }, [token]);


  useEffect(() => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
    if (location === "/hangfire") {
      if (role === "Admin") {
        window.location.href = "https://hikmat059-001-site1.ptempurl.com/hangfire";
      } else {
        navigate("/notfound");
      }
    }
  }, [location, role])
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='/details/:proid' element={<Details />} />
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
          <Route path='/paymentsucceed' element={<Success />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          
          

        </Route>

        <Route path='/admin' element={role == 'Admin' ? <AdminLayout /> : <NotFound />}>
          <Route index element={<Product />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/subcategory' element={<SubCategory />} />
          <Route path='/admin/tag' element={<Tag />} />
          <Route path='/admin/coupon' element={<Coupon/>} />
        </Route>
        <Route path='/submit' element={<SubmitPgae />} />
        <Route path='/loginpage' element={<LoginPage />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </>
  )
}

export default App
