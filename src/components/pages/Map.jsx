// Map.jsx
import React from 'react'
import '../Css/Map.css'

export default function Map() {
  return (
    <section className="map-section">
      <h1 className="map-title">Зона доставки</h1>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999806803023!2d74.60939821566614!3d42.87322197918771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8f6d3d5b6fb%3A0x4f5e1d91b3f1a5b2!2z0KHRg9C_0YDQsNC90LXRgCwg0KLQsNC90LjQuSDQvNC-0LvQtCwg0JrQsNC60L7QstCwLCDQoNC10YHRgtC40Y8!5e0!3m2!1sru!2skg!4v1627665712345"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
)
}


