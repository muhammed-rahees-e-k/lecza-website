import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <p className="products-eyebrow">OUR PRODUCTS</p>
        <div className="products-title-row">
          <h2 className="products-title">
            Materials that<br />
            define <em>excellence.</em>
          </h2>
          <div className="products-title-right">
            <p className="products-description">
              Discover a wide range of premium tiles,<br />
              natural stones, and sanitaryware tailored<br />
              for modern, enduring spaces.
            </p>
            <Link to="/products" className="products-explore-btn">
              View All Products <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="products-grid">
        <div className="product-category-card">
          <img src="/01_living_room.png" alt="Ceramic Tiles" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Ceramic Tiles</h3>
            <p>Versatile and durable solutions.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card">
          <img src="/02_bathroom.png" alt="Porcelain Tiles" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Porcelain Tiles</h3>
            <p>High performance, sleek finish.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card">
          <img src="/03_kitchen.png" alt="Natural Stone" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Natural Stone</h3>
            <p>Timeless beauty from the earth.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card">
          <img src="/07_tile_details.png" alt="Sanitaryware" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Sanitaryware</h3>
            <p>Elegance meets everyday function.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
