import React, { useEffect } from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './components/main/Main'
import Details from './components/main/Details'
import Products from './components/main/Products'


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
        <Route path='/products' element={<Products/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
