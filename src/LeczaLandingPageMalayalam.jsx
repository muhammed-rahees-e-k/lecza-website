import React, { useState } from 'react';
import Products from './Products';

export default function LeczaLandingPage() {
  const [activeSection, setActiveSection] = useState('top');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="#" aria-label="LECZA home">
          <img src="/logo.png" alt="LECZA Logo" className="brand-logo" />
        </a>
        <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="site-nav-new">
          <span className="dark-bar"></span><span className="dark-bar"></span><span className="dark-bar"></span><span className="sr-only">Open menu</span>
        </button>
        <nav id="site-nav-new" className={isMobileMenuOpen ? 'open' : ''} aria-label="Main navigation">
          <a className={activeSection === 'top' ? 'active' : ''} href="#" onClick={() => { setActiveSection('top'); setIsMobileMenuOpen(false); }}>ഹോം <span className="dot"></span></a>
          <a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={() => { setActiveSection('about'); setIsMobileMenuOpen(false); }}>ഞങ്ങളെക്കുറിച്ച് <span className="dot"></span></a>
          <a className={activeSection === 'products' ? 'active' : ''} href="#products" onClick={() => { setActiveSection('products'); setIsMobileMenuOpen(false); }}>ഉൽപ്പന്നങ്ങൾ <span className="dot"></span></a>
          <a className={activeSection === 'collection' ? 'active' : ''} href="#gallery" onClick={() => { setActiveSection('collection'); setIsMobileMenuOpen(false); }}>ശേഖരം <span className="dot"></span></a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={() => { setActiveSection('contact'); setIsMobileMenuOpen(false); }}>ബന്ധപ്പെടുക <span className="dot"></span></a>
        </nav>

        <p className="slogan">Build to last<br /><em>and design to impress</em></p>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Manjeri · Malappuram · Kerala</p>
            <h1 id="hero-title">Surfaces that hold<br /><em>a sense of place.</em></h1>
            <p className="hero-intro">Curated tiles and natural stones for spaces where material, light and lasting performance meet.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#collection">Explore collection <span>↘</span></a>
              <a className="text-link" href="#about">Our point of view <span>→</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract tile surface composition">
            <div className="art-line"></div>
            <div className="art-disc"></div>
            <p>DESIGNED<br />FOR<br />ENDURING<br />SPACES</p>
          </div>
          <div className="hero-footer">
            <span>01 / 04</span>
            <span>Surface solutions</span>
            <span>Scroll to discover ↓</span>
          </div>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About LECZA</span></div>
          <div className="about-body">
            <h2 id="about-title">More than products.<br /><em>Complete surface solutions.</em></h2>
            <div>
              <p>LECZA by CLADCRAFT INNOVATIONS LLP delivers more than just products — we deliver complete surface solutions crafted for modern spaces.</p>
              <p>Our extensive range of tiles and natural stones is thoughtfully curated to meet the evolving demands of contemporary architecture and interior design. Every product is developed to offer the perfect blend of strength, style, and long-lasting performance.</p>
              <p>From elegant natural stone finishes to precision-engineered tiles, our collection enhances both aesthetic appeal and functional durability across residential and commercial spaces.</p>
            </div>
          </div>
        </section>

        <Products />

        <section className="collection section" id="collection" aria-labelledby="collection-title">
          <div className="section-label"><span>02</span><span>The collection</span></div>
          <div className="collection-heading">
            <h2 id="collection-title">Material in its<br /><em>best expression.</em></h2>
            <p>Select a collection to explore the catalogue.</p>
          </div>
          <div className="category-grid" role="list">
            <a className="category tile-one" href="#products" data-category="Tiles" role="listitem">
              <span className="category-no">01</span>
              <div>
                <h3>Tiles</h3>
                <span className="category-link">View range <b>↗</b></span>
              </div>
            </a>
            <a className="category tile-two" href="#products" data-category="Natural Stones" role="listitem">
              <span className="category-no">02</span>
              <div>
                <h3>Natural<br />Stones</h3>
                <span className="category-link">View range <b>↗</b></span>
              </div>
            </a>
            <a className="category tile-three" href="#products" data-category="Clay Products" role="listitem">
              <span className="category-no">03</span>
              <div>
                <h3>Clay<br />Products</h3>
                <span className="category-link">View range <b>↗</b></span>
              </div>
            </a>
            <a className="category tile-four" href="#products" data-category="Bath Accessories" role="listitem">
              <span className="category-no">04</span>
              <div>
                <h3>Bath<br />Accessories</h3>
                <span className="category-link">View range <b>↗</b></span>
              </div>
            </a>
          </div>
          <div className="product-dock" id="products" tabIndex="-1">
            <div>
              <p className="eyebrow">Catalogue browser</p>
              <h3 id="product-heading">Select a collection</h3>
              <p id="product-copy">Catalogue product files have not been supplied in this task. Add the approved catalogue assets and product data to populate this area without changing the design.</p>
            </div>
            <a className="button button-dark" href="#inquiry">Request details <span>↗</span></a>
          </div>
        </section>

        <section className="testimonials section" id="media" aria-labelledby="voices-title">
          <div className="section-label"><span>03</span><span>In conversation</span></div>
          <div className="voices-heading">
            <h2 id="voices-title">A standard worth<br /><em>speaking about.</em></h2>
            <div className="carousel-controls">
              <button className="carousel-btn prev" aria-label="Previous testimonial">←</button>
              <button className="carousel-btn next" aria-label="Next testimonial">→</button>
            </div>
          </div>
          <div className="carousel" aria-live="polite">
            <article className="quote-card current">
              <span>“</span>
              <p>Thoughtful surfaces make a quiet but lasting impression.</p>
              <small>LECZA / Surface philosophy</small>
            </article>
            <article className="quote-card">
              <span>“</span>
              <p>Material choices should feel as good years later as they do on day one.</p>
              <small>LECZA / Surface philosophy</small>
            </article>
            <article className="quote-card">
              <span>“</span>
              <p>Every considered space begins with a foundation that performs.</p>
              <small>LECZA / Surface philosophy</small>
            </article>
          </div>
          <p className="review-note">Approved customer testimonials can be added here when available.</p>
        </section>

        <section className="numbers" aria-label="LECZA achievements">
          <div className="numbers-intro">
            <p className="eyebrow">The LECZA reach</p>
            <h2>Built on<br /><em>meaningful scale.</em></h2>
          </div>
          <dl>
            <div>
              <dt>500<sup>+</sup></dt>
              <dd>Dealers and distributors across Kerala, Karnataka and Tamil Nadu</dd>
            </div>
            <div>
              <dt>60<sup>+</sup></dt>
              <dd>Expert members</dd>
            </div>
            <div>
              <dt>3<sup>+</sup></dt>
              <dd>Export companies / markets: Dubai, India and Saudi</dd>
            </div>
            <div>
              <dt>∞</dt>
              <dd>Infinite collections</dd>
            </div>
          </dl>
        </section>

        <section className="inquiry section" id="inquiry" aria-labelledby="inquiry-title">
          <div className="inquiry-side">
            <p className="eyebrow">04 / Inquiry</p>
            <h2 id="inquiry-title">Let’s shape<br /><em>what’s next.</em></h2>
            <p>Tell us what you are creating. Our team will connect you with the right collection.</p>
          </div>
          <form className="inquiry-form">
            <label>
              Full name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Inquiry / message
              <textarea name="message" rows="3" required></textarea>
            </label>
            <button className="button button-red" type="submit">Send inquiry <span>↗</span></button>
            <p className="form-status" aria-live="polite"></p>
          </form>
        </section>

        <section className="contact-band" id="contact">
          <p>Begin a conversation</p>
          <a href="tel:+919745055044">+91 97450 55044 <span>↗</span></a>
        </section>
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
              <a href="#inquiry">Enquiry</a>
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
