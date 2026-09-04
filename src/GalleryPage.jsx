import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import './GalleryPage.css';

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = ['All', 'Living Areas', 'Bathrooms', 'Kitchens', 'Commercial', 'Outdoor', 'Details'];
  const tabsRef = useRef(null);

  const categoryParam = searchParams.get('category');
  const initialTab = useMemo(() => {
    if (!categoryParam) return 'All';
    const matched = categories.find(
      cat => cat.toLowerCase() === categoryParam.toLowerCase() ||
        (cat === 'Living Areas' && categoryParam.toLowerCase().includes('living')) ||
        (cat === 'Bathrooms' && categoryParam.toLowerCase().includes('bath')) ||
        (cat === 'Kitchens' && categoryParam.toLowerCase().includes('kitchen')) ||
        (cat === 'Commercial' && (categoryParam.toLowerCase().includes('commercial') || categoryParam.toLowerCase().includes('retail')))
    );
    return matched || 'All';
  }, [categoryParam]);

  const [activeTab, setActiveTab] = useState(initialTab);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (categoryParam) {
      const matched = categories.find(
        cat => cat.toLowerCase() === categoryParam.toLowerCase() ||
          (cat === 'Living Areas' && categoryParam.toLowerCase().includes('living')) ||
          (cat === 'Bathrooms' && categoryParam.toLowerCase().includes('bath')) ||
          (cat === 'Kitchens' && categoryParam.toLowerCase().includes('kitchen')) ||
          (cat === 'Commercial' && (categoryParam.toLowerCase().includes('commercial') || categoryParam.toLowerCase().includes('retail')))
      );
      if (matched) {
        setActiveTab(matched);
      }
    }
  }, [categoryParam]);

  useEffect(() => {
    if (tabsRef.current) {
      const activeEl = tabsRef.current.querySelector('.filter-tab.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleTabClick = (cat) => {
    setActiveTab(cat);
    if (cat === 'All') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const galleryItems = [
    { id: 1, src: '/01_living_room.png', title: 'Living Room', category: 'Living Areas' },
    { id: 2, src: '/02_bathroom.png', title: 'Bathroom', category: 'Bathrooms' },
    { id: 3, src: '/03_kitchen.png', title: 'Kitchen', category: 'Kitchens' },
    { id: 4, src: '/04_commercial_space.png', title: 'Commercial Space', category: 'Commercial' },
    { id: 5, src: '/05_outdoor_space.png', title: 'Outdoor Space', category: 'Outdoor' },
    { id: 6, src: '/06_retail_space.png', title: 'Retail Space', category: 'Commercial' },
    { id: 7, src: '/07_tile_details.png', title: 'Tile Details', category: 'Details' },
  ];

  const filteredItems = useMemo(() => {
    return activeTab === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="gallery-page-container">
      <header className={`site-header light-header ${isScrolled ? 'scrolled' : ''}`} id="top">
        <Link to="/" className="brand" aria-label="LECZA home">
          <img src="/logo.png" alt="LECZA Logo" className="brand-logo" />
        </Link>

        <nav id="site-nav-new" className={isMobileMenuOpen ? 'open' : ''} aria-label="Main navigation">
          <Link to="/#" onClick={() => setIsMobileMenuOpen(false)}>Home <span className="dot"></span></Link>
          <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)}>About Us <span className="dot"></span></Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products <span className="dot"></span></Link>
          <Link to="/gallery" className="active" onClick={() => setIsMobileMenuOpen(false)}>Collection <span className="dot"></span></Link>
          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us <span className="dot"></span></Link>
        </nav>

        <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="site-nav-new">
          <span className="dark-bar"></span><span className="dark-bar"></span><span className="dark-bar"></span><span className="sr-only">Open menu</span>
        </button>
      </header>

      <main className="gallery-page-main">
        <div className="gallery-page-title-section" data-aos="fade-up">
          <p className="eyebrow-new">OUR COLLECTION</p>
          <h1>Discover Our Detailed Gallery</h1>
          <p className="gallery-page-subtitle">
            Explore our extensive range of premium tiles and natural stones.<br />
            Designed to elevate any space.
          </p>
        </div>

        <div className="filter-tabs-wrapper" data-aos="fade-up" data-aos-delay="100">
          <button
            className="tab-scroll-btn prev-btn"
            onClick={() => scrollTabs('left')}
            aria-label="Previous categories"
          >
            ‹
          </button>
          <div className="gallery-filter-tabs" ref={tabsRef}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => handleTabClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            className="tab-scroll-btn next-btn"
            onClick={() => scrollTabs('right')}
            aria-label="Next categories"
          >
            ›
          </button>
        </div>

        <div className="detailed-gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="detailed-gallery-item">
              <img src={item.src} alt={item.title} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
              <div className="item-overlay">
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
            {/* <Link to="/#" className="footer-btn">Start a Project <span>↗</span></Link> */}
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
              <a href="https://www.instagram.com/lecza_clad.craft/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61568854973018" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://wa.me/919745055044" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="footer-branches-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', paddingBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', marginBottom: '20px', fontWeight: '700' }}>Branch Details</h4>
          <div className="footer-links-grid" style={{ gap: '30px' }}>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Ernakulam, Panayikulam</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />XIV/575C Ground Floor, Alangad<br />Panayikulam, Ernakulam 683511</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kollam, Mylakkad</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Bldg XVI/650, Adhichanallor Panchayath<br />Mylakkad P.O, Kollam 691571</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kannur, Narath</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Step Road, Narath<br />Kannur 670601</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Malappuram, Manjeri</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br />Door No. EP.15/352-361<br />Edavanna, Pathapiriyam, School Padi</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <Link to="/" className="brand footer-brand-new">
            <img src="/logo-footer.png" alt="LECZA Logo" style={{ height: '40px', objectFit: 'contain' }} />
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
