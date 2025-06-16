import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Layout from './components/pages/Layout'
import Cart from './components/pages/Cart'
import Order from './components/pages/Order'
import Map from './components/pages/Map'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pro' element={<Order/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/map' element={<Map/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}