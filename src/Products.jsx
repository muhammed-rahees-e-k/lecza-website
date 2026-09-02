import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="products-header" data-aos="fade-up">
        <p className="products-eyebrow">OUR PRODUCTS</p>
        <div className="products-title-row">
          <h2 className="products-title">
            Materials that<br />
            define <em>excellence.</em>
          </h2>
          <div className="products-title-right">
            <p className="products-description">
              Discover a wide range of premium clay, floor drains,<br />
              jalies, stones, and tiles tailored<br />
              for modern, enduring spaces.
            </p>
            <Link to="/products" className="btn-primary-new" style={{ alignSelf: 'flex-start' }}>
              View All Products <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="products-grid">
        <div className="product-category-card" data-aos="fade-up" data-aos-delay="100">
          <img src="/RED SHADOW TILE - F6206 240X60.png" alt="Clay" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Clay</h3>
            <p>Earthy and traditional designs.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card" data-aos="fade-up" data-aos-delay="200">
          <img src="/FLOOR DRAINS/LG222 3D.png" alt="Floor Drains" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Floor Drains</h3>
            <p>Premium quality drainage solutions.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card" data-aos="fade-up" data-aos-delay="300">
          <img src="/JALIES/LILLY JALI.png" alt="Jalies" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Jalies</h3>
            <p>Intricate and elegant architectural elements.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card" data-aos="fade-up" data-aos-delay="400">
          <img src="/BIDASAR BROWN SIZE12X12.png" alt="Stones" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Stones</h3>
            <p>Timeless beauty from the earth.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>

        <div className="product-category-card" data-aos="fade-up" data-aos-delay="500">
          <img src="/9803.png" alt="Tiles" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="product-category-content">
            <h3>Tiles</h3>
            <p>Versatile and durable surface solutions.</p>
            <Link to="/products" className="category-arrow">→</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
