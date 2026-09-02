import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Products from './Products';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Contact from './Contact';

export default function LeczaLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure render
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header light-header ${isScrolled ? 'scrolled' : ''}`} id="top">
        <a className="brand" href="#" aria-label="LECZA home">
          <img src="/logo.png" alt="LECZA Logo" className="brand-logo" />
        </a>

        <nav id="site-nav-new" className={isMobileMenuOpen ? 'open' : ''} aria-label="Main navigation">
          <a className={activeSection === '' ? 'active' : ''} href="#" onClick={() => { setActiveSection('top'); setIsMobileMenuOpen(false); }}>Home <span className="dot"></span></a>
          <a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={() => { setActiveSection('about'); setIsMobileMenuOpen(false); }}>About Us <span className="dot"></span></a>
          <a className={activeSection === 'products' ? 'active' : ''} href="#products" onClick={() => { setActiveSection('products'); setIsMobileMenuOpen(false); }}>Products <span className="dot"></span></a>
          <a className={activeSection === 'collection' ? 'active' : ''} href="#gallery" onClick={() => { setActiveSection('collection'); setIsMobileMenuOpen(false); }}>Collection <span className="dot"></span></a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={() => { setActiveSection('contact'); setIsMobileMenuOpen(false); }}>Contact Us <span className="dot"></span></a>
        </nav>

        <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="site-nav-new">
          <span className="dark-bar"></span><span className="dark-bar"></span><span className="dark-bar"></span><span className="sr-only">Open menu</span>
        </button>
      </header>

      <main id="main">
        <section className="hero-new" aria-labelledby="hero-title">
          <div className="hero-content-new">
            <div className="hero-text-block">
              <p className="eyebrow-new">MANJERI · MALAPPURAM · KERALA</p>
              <h1 id="hero-title" className="hero-title-new">Surfaces that<br />hold a sense<br /><em>of place.</em></h1>
              <p className="hero-intro-new">Curated tiles and natural stones for spaces<br />where material, light and lasting<br />performance meet.</p>
              <div className="hero-actions-new">
                <Link to="/gallery" className="btn-primary-new">Explore Collection <span>↗</span></Link>
                {/* <button className="btn-play-new">
                  <span className="play-icon-new">▶</span>
                  Watch Showcase
                </button> */}
              </div>
            </div>
            {/* <div className="slider-nav-new">
              <span className="slide-count-new"><strong>01</strong> / 03</span>
              <div className="slider-arrows-new">
                <button aria-label="Previous">←</button>
                <button aria-label="Next">→</button>
              </div>
            </div> */}
          </div>
        </section>

        <section className="features-bar-new">
          <div className="feature-item-new">
            <div className="feature-icon-new">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <div className="feature-text-new">
              <strong>Premium Quality</strong>
              <span>Curated with precision</span>
            </div>
          </div>
          <div className="feature-item-new">
            <div className="feature-icon-new">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <div className="feature-text-new">
              <strong>Timeless Designs</strong>
              <span>Inspired by nature</span>
            </div>
          </div>
          <div className="feature-item-new">
            <div className="feature-icon-new">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div className="feature-text-new">
              <strong>Built to Last</strong>
              <span>Durable &amp; reliable</span>
            </div>
          </div>
          <div className="feature-item-new">
            <div className="feature-icon-new">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <div className="feature-text-new">
              <strong>Perfect for Every Space</strong>
              <span>Walls, floors &amp; beyond</span>
            </div>
          </div>
          {/* <div className="whatsapp-button-new">
            <span className="lets-talk-new">Let's talk</span>
            <button className="wa-icon-btn-new">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </button>
          </div> */}
        </section>

        <section className="about-new-section" id="about">
          <div className="about-new-container">
            <div className="about-new-content">
              <div className="about-new-header animate-on-scroll">
                <span className="about-new-eyebrow">ABOUT US</span>
                <div className="about-new-line"></div>
              </div>
              <h2 className="about-new-title animate-on-scroll delay-100">
                More than surfaces.<br />We craft <em>experiences.</em>
              </h2>
              <p className="about-new-desc animate-on-scroll delay-200">
                LECZA by CLADCRAFT INNOVATIONS LLP delivers complete surface solutions crafted for modern spaces. We offer a thoughtfully curated range of premium tiles and natural stones that perfectly blend strength, style, and long-lasting performance for both residential and commercial projects.
              </p>

              <div className="about-new-features animate-on-scroll delay-300">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"></path><path d="M12 21l-4-12"></path><path d="M12 21l4-12"></path><path d="M2 9h20"></path></svg>
                  </div>
                  <h4>Premium Quality</h4>
                  <p>Sourced from trusted<br />manufacturers worldwide.</p>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  </div>
                  <h4>Built to Last</h4>
                  <p>Durable surfaces crafted to<br />stand the test of time.</p>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5z"></path></svg>
                  </div>
                  <h4>Timeless Design</h4>
                  <p>Collections that blend elegance<br />with everyday functionality.</p>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h4>Customer First</h4>
                  <p>Personalized service and support<br />at every step.</p>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 22l8-8"></path></svg>
                  </div>
                  <h4>Sustainable Choice</h4>
                  <p>Eco-conscious materials for a<br />better tomorrow.</p>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  </div>
                  <h4>Expertise You Trust</h4>
                  <p>Years of experience in tiles<br />and natural stones.</p>
                </div>
              </div>
            </div>

            <div className="about-new-image-wrapper animate-on-scroll delay-400">
              <div className="about-red-accent"></div>
              <img src="/about-img.jpeg" alt="Lecza curated surfaces and materials" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="about-placeholder-img"></div>' }} />
            </div>
          </div>

          <div className="about-new-stats animate-on-scroll delay-500">
            <div className="about-stat-item">
              <div className="about-stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="4" height="10"></rect><rect x="10" y="10" width="4" height="10"></rect><rect x="16" y="10" width="4" height="10"></rect><polygon points="12 2 2 8 22 8"></polygon><line x1="2" y1="22" x2="22" y2="22"></line></svg>
              </div>
              <div className="about-stat-text">
                <strong>500+</strong>
                <span>Dealers & Distributors</span>
                <small style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Across Kerala, Karnataka & Tamil Nadu</small>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
              </div>
              <div className="about-stat-text">
                <strong>60+</strong>
                <span>Expertise Specialists</span>
                <small style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Surface technologists & QA engineers</small>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="about-stat-text">
                <strong>3+</strong>
                <span>Export Destinations</span>
                <small style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Dubai (UAE), Saudi Arabia & Pan-India</small>
              </div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div className="about-stat-text">
                <strong>∞</strong>
                <span>Infinite Collections</span>
                <small style={{ display: 'block', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>Bespoke slab cuts & curated textures</small>
              </div>
            </div>
          </div>
        </section>

        <Products />

        <Gallery />



        <Reviews />

        <Contact />
      </main>

      <footer className="site-footer-new">
        <div className="footer-top">
          <div className="footer-cta">
            <h2>Ready to elevate<br /><em>your space?</em></h2>
            {/* <a href="#" className="footer-btn">Start a Project <span>↗</span></a> */}
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

        <div className="footer-branches-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', paddingBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', marginBottom: '20px', fontWeight: '700' }}>Branch Details</h4>
          <div className="footer-links-grid" style={{ gap: '30px' }}>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Ernakulam, Panayikulam</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br/>XIV/575C Ground Floor, Alangad<br/>Panayikulam, Ernakulam 683511</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kollam, Mylakkad</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br/>Bldg XVI/650, Adhichanallor Panchayath<br/>Mylakkad P.O, Kollam 691571</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Kannur, Narath</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br/>Step Road, Narath<br/>Kannur 670601</p>
            </div>
            <div className="footer-col" style={{ flex: '1 1 200px' }}>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>Malappuram, Manjeri</strong>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Clad Craft Innovations LLP<br/>Door No. EP.15/352-361<br/>Edavanna, Pathapiriyam, School Padi</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a className="brand footer-brand-new" href="#">
            <img src="/logo-footer.png" alt="LECZA Logo" style={{ height: '40px', objectFit: 'contain' }} />
          </a>
          <p className="copyright-new">
            © {new Date().getFullYear()} LECZA BY GLADCRAFT | Designed & Developed by <a href="https://www.seconders.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#921313', fontWeight: '600', textDecoration: 'none' }}>www.seconders.tech</a>
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
