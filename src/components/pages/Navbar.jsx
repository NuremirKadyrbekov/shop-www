import React, { useState } from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Назик</div>

        <nav className={open ? 'nav open' : 'nav'}>
          <Link to="/">Главная</Link>
          <Link to="/pro">Товары</Link>
          <Link to={'/map'}>Карта</Link>
          <Link to='/cart'>Корзина</Link>
        </nav>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  )
}
