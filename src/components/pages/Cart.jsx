// Cart.jsx
import React, { useState, useEffect } from 'react'
import '../Css/Cart.css'

export default function Cart() {
  // Инициализация корзины из localStorage или дефолтного списка
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('nazikCart')
    if (saved) {
      return JSON.parse(saved).map(item => ({
        ...item,
        quantity: Number(item.quantity) || 1,
        price: Number(item.price) || 0
      }))
    }
    const defaultProducts = [
      { id: 2, name: 'Бананы', price: 90, image: '/images/banana.jpg', quantity: 1 },
      { id: 3, name: 'Морковь', price: 80, image: '/images/carrot.jpg', quantity: 1 },
      { id: 4, name: 'Хлеб', price: 40, image: '/images/bread.jpg', quantity: 1 }
    ]
    localStorage.setItem('nazikCart', JSON.stringify(defaultProducts))
    return defaultProducts
  })

  // Сохраняем корзину в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem('nazikCart', JSON.stringify(cart))
  }, [cart])

  // Обновление количества товара
  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ))
  }

  // Удаление товара
  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // Расчёт итоговой суммы
  const total = cart.reduce((sum, item) => {
    return sum + (Number(item.price) * Number(item.quantity))
  }, 0)

  return (
    <section className="cart">
      <h1 className="cart-title">Корзина</h1>
      <div className="cart-grid">
        {cart.length > 0 ? (
          cart.map(product => (
            <div key={product.id} className="cart-card">
              <img src={product.image} alt={product.name} className="cart-img" />
              <div className="cart-info">
                <h2>{product.name}</h2>
                <p>{product.price} сом/шт</p>
                <div className="cart-qty">
                  <button onClick={() => updateQty(product.id, -1)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => updateQty(product.id, 1)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeItem(product.id)}>×</button>
            </div>
          ))
        ) : (
          <p className="empty">Корзина пуста</p>
        )}
      </div>
      <div className="cart-summary">
        <p className="summary-text">
          Итого товаров: <strong>{cart.length}</strong>, общая сумма: <strong>{total} сом</strong>
        </p>
        <button className="btn" disabled={cart.length === 0}>
          Оформить заказ
        </button>
      </div>
    </section>
  )
}
