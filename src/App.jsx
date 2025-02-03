import React, { useEffect } from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './components/main/Main'
import Details from './components/main/Details'
import Products from './components/main/Products'
import WishList from './components/main/WishList'
import Bag from './components/main/Bag'
import Contact from './components/main/Contact'
import MediaPage from './components/main/MediaPage'
import Drop from './components/main/Drop'
import About from './components/main/About'


function App() {
  const location=useLocation().pathname
  useEffect(()=>{
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  },[location])
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/shop' element={<Products/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/media' element={<MediaPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
