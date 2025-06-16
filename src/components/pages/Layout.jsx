import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Css/Layout.css'
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
