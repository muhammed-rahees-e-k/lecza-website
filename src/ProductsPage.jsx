import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    { id: 1, src: '/01_living_room.png', title: 'Statuario Marble', category: 'Natural Stones' },
    { id: 2, src: '/02_bathroom.png', title: 'Matte Grey Porcelain', category: 'Porcelain Tiles' },
    { id: 3, src: '/03_kitchen.png', title: 'Travertine Classico', category: 'Natural Stones' },
    { id: 4, src: '/04_commercial_space.png', title: 'Terrazzo Blend', category: 'Ceramic Tiles' },
    { id: 5, src: '/05_outdoor_space.png', title: 'Rustic Slate', category: 'Outdoor' },
    { id: 6, src: '/06_retail_space.png', title: 'Polished Onyx', category: 'Natural Stones' },
    { id: 7, src: '/07_tile_details.png', title: 'Modern Basin', category: 'Sanitaryware' },
    { id: 8, src: '/01_living_room.png', title: 'Wood Effect Ceramic', category: 'Ceramic Tiles' },
  ];

  const categories = ['All', 'Ceramic Tiles', 'Porcelain Tiles', 'Natural Stones', 'Sanitaryware', 'Outdoor'];

  const filteredItems = activeTab === 'All' 
    ? productItems 
    : productItems.filter(item => item.category === activeTab);

  return (
    <div className="products-page-container">
      <header className={`site-header light-header ${isScrolled ? 'scrolled' : ''}`} id="top">
        <Link to="/" className="brand" aria-label="LECZA home">
          <img src="/LECZA-LOGO.png" alt="LECZA Logo" className="brand-logo" />
          <span className="brand-text-new"><strong>LECZA</strong><small>BY GLADCRAFT</small></span>
        </Link>

        <nav id="site-nav-new" className={isMobileMenuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="/#top" onClick={() => setIsMobileMenuOpen(false)}>Home <span className="dot"></span></a>
          <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About Us <span className="dot"></span></a>
          <Link to="/products" className="active" onClick={() => setIsMobileMenuOpen(false)}>Products <span className="dot"></span></Link>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Collection <span className="dot"></span></Link>
          <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us <span className="dot"></span></a>
        </nav>

        <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="site-nav-new">
          <span className="dark-bar"></span><span className="dark-bar"></span><span className="dark-bar"></span><span className="sr-only">Open menu</span>
        </button>
      </header>

      <main className="products-page-main">
        <div className="products-page-title-section">
          <p className="eyebrow-new">OUR CATALOG</p>
          <h1>Exceptional Products</h1>
          <p className="products-page-subtitle">
            Browse our full catalog of premium tiles, natural stones, and sanitaryware.<br />
            Find the perfect material for your next project.
          </p>
        </div>

        <div className="products-filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="detailed-products-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="detailed-product-item">
              <div className="product-image-wrapper">
                <img src={item.src} alt={item.title} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
              </div>
              <div className="product-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="site-footer-new">
        <div className="footer-top">
          <div className="footer-cta">
            <h2>Ready to elevate<br /><em>your space?</em></h2>
            <a href="/#top" className="footer-btn">Start a Project <span>↗</span></a>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/products">Products</Link>
              <Link to="/gallery">Collection</Link>
              <a href="/#about">About Us</a>
              <a href="/#reviews">Reviews</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>Hillton Convention Center<br />Manjeri, Malappuram<br />Kerala - 676122</p>
              <a href="mailto:cladcraftinnovations@gmail.com" className="footer-contact-link">cladcraftinnovations@gmail.com</a>
              <a href="tel:+919745055044" className="footer-contact-link">+91 97450 55044</a>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="https://wa.me/919745055044">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Link to="/" className="brand footer-brand-new">
            <img src="/LECZA-LOGO.png" alt="LECZA Logo" style={{ height: '40px', objectFit: 'contain' }} />
            <span className="brand-text-new footer-brand-text"><strong>LECZA</strong><small>BY GLADCRAFT</small></span>
          </Link>
          <p className="copyright-new">
            © {new Date().getFullYear()} LECZA BY GLADCRAFT | Designed & Developed by <a href="https://www.seconders.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#921313', fontWeight: '600', textDecoration: 'none' }}>www.seconders.tech</a>
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
