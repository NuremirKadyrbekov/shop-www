import React from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="hero">
            <div className="overlay-gradient" />

            <div className="hero-content fade-in">
                <h1>Свежие продукты каждый день</h1>
                <p>Быстро. Вкусно. По-домашнему.</p>
              <Link to={'/pro'}><button className="btn"> К покупкам
                </button></Link>
            </div>

            <div className="floating-icons">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`icon icon-${i + 1}`} />
                ))}
            </div>

            <div className="scroll-down">
                <span />
            </div>
        </section>
    )
}