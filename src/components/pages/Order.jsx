import React, { useState, useEffect } from 'react'
import '../Css/Order.css'

import p1 from '../../assets/products/p1.png'
import p2 from '../../assets/products/p2.png'
import p3 from '../../assets/products/p3.png'
import p4 from '../../assets/products/p4.png'
import p5 from '../../assets/products/p5.png'
import p6 from '../../assets/products/p6.png'
import p7 from '../../assets/products/p7.png'



const PRODUCTS = [
  { id: 1, name: 'Морковь', price: 50, image: p1 },
  { id: 2, name: 'Яблоко', price: 25, image: p2},
  { id: 3, name: 'Помидор', price: 140, image: p3},
  { id: 4, name: 'Огурец', price: 50, image: p4 },
  { id: 5, name: 'Груша', price: 140, image: p5 },
  { id: 6, name: 'Картошка', price: 30, image: p6 },
  { id: 7, name: 'Сливочное масло', price: 70, image: p7 },

   { id: 8, name: 'Морковь', price: 50, image: p1 },
  { id: 9, name: 'Яблоко', price: 25, image: p2},
  { id: 10, name: 'Помидор', price: 140, image: p3},
  { id: 11, name: 'Огурец', price: 50, image: p4 },
  { id: 12, name: 'Груша', price: 140, image: p5 },
  { id: 13, name: 'Картошка', price: 30, image: p6 },
  { id: 14, name: 'Сливочное масло', price: 70, image: p7 },

]

export default function Order() {
  const [cart, setCart] = useState(() => {
    // Загружаем из localStorage при инициализации
    const saved = localStorage.getItem('nazikCart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    // Сохраняем в localStorage при изменении корзины
    localStorage.setItem('nazikCart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  return (
    <section className="order">
      <h1>Ассортимент</h1>
      <div className="order-grid">
        {PRODUCTS.map(item => (
          <div key={item.id} className="order-card">
            <img src={item.image} alt={item.name} />
            <div className="order-info">
              <h2>{item.name}</h2>
              <p>{item.price} сом</p>
              <button className='btn' onClick={() => addToCart(item)}>Купить</button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Выбрано товаров: {cart.length}</h2>
      </div>
    </section>
  )
}