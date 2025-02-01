import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Main from './main/Main'
import About from './main/About'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/about' element={<About/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
