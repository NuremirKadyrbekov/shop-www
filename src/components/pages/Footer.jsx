import React from 'react'
import '../Css/Footer.css'
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Назик</h2>
          <p>Свежие продукты каждый день</p>
        </div>

        <div className="footer-links">
          <a href="#home">Главная</a>
          <a href="#catalog">Ассортимент</a>
          <a href="#delivery">Доставка</a>
          <a href="#contacts">Контакты</a>
        </div>

        <div className="footer-contact">
          <a href="tel:+123456789">
            <FaPhoneAlt /> <span>+996 123 456 789</span>
          </a>
          <a href="mailto:info@nazik.kg">
            <FaEnvelope /> <span>info@nazik.kg</span>
          </a>
        </div>

        <div className="footer-socials">
          <a href="#"> <FaInstagram /> </a>
          <a href="#"> <FaFacebookF /> </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Назик. Все права защищены.</p>
      </div>
    </footer>
  )
}



