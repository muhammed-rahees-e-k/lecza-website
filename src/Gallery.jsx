import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      src: '/01_living_room.png',
      title: 'Living Room',
      category: 'Living Areas',
      link: '/gallery?category=Living%20Areas',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <path d="M4 18v3h2v-3h12v3h2v-3M2 11h20v7H2zM4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
        </svg>
      )
    },
    {
      id: 2,
      src: '/02_bathroom.png',
      title: 'Bathroom',
      category: 'Bathrooms',
      link: '/gallery?category=Bathrooms',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <path d="M2 12h20M7 12v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5z"></path>
        </svg>
      )
    },
    {
      id: 3,
      src: '/03_kitchen.png',
      title: 'Kitchen',
      category: 'Kitchens',
      link: '/gallery?category=Kitchens',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <line x1="12" y1="10" x2="12" y2="20"></line>
        </svg>
      )
    },
    {
      id: 4,
      src: '/04_commercial_space.png',
      title: 'Commercial Spaces',
      category: 'Commercial',
      link: '/gallery?category=Commercial',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <line x1="12" y1="4" x2="12" y2="20"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
        </svg>
      )
    },
    {
      id: 5,
      src: '/05_outdoor_space.png',
      title: 'Outdoor Spaces',
      category: 'Outdoor',
      link: '/gallery?category=Outdoor',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <path d="M12 2L2 12h3v8h14v-8h3L12 2z"></path>
        </svg>
      )
    },
    {
      id: 6,
      src: '/06_retail_space.png',
      title: 'Retail Spaces',
      category: 'Commercial',
      link: '/gallery?category=Commercial',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      )
    },
    {
      id: 7,
      src: '/07_tile_details.png',
      title: 'Tile Details',
      category: 'Details',
      link: '/gallery?category=Details',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
      )
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryItems.length - cardsToShow);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header" data-aos="fade-up">
        <p className="gallery-eyebrow">GALLERY</p>
        <div className="gallery-title-row">
          <h2 className="gallery-title">
            Crafted for spaces.<br />
            Captured in <em>perfection.</em>
          </h2>
          <div className="gallery-title-right">
            <p className="gallery-description">
              Browse through a selection of our<br />
              finest projects featuring premium tiles<br />
              and natural stones, designed to<br />
              inspire and built to last.
            </p>
            <div className="gallery-carousel-controls">
              <div className="carousel-arrow-buttons">
                <button className="carousel-arrow-btn" onClick={prevSlide} aria-label="Previous slide">
                  ‹
                </button>
                <button className="carousel-arrow-btn" onClick={nextSlide} aria-label="Next slide">
                  ›
                </button>
              </div>
              <Link to="/gallery" className="btn-primary-new">
                Explore All Projects <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-carousel-container" data-aos="fade-up">
        <div
          className="gallery-carousel-slider"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
          }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-carousel-item"
              style={{ flex: `0 0 ${100 / cardsToShow}%` }}
            >
              <Link to={item.link} className="gallery-card">
                <img
                  src={item.src}
                  alt={item.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('placeholder-bg');
                  }}
                />
                <div className="gallery-card-content">
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-text">
                    <h3>{item.title}</h3>
                  </div>
                  <span className="card-arrow">↗</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="gallery-carousel-pagination">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`pagination-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
