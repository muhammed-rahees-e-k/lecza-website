import React from 'react';
import './Reviews.css';

const reviewsData = [
  {
    text: "The quality of LECZA large format vitrified slabs in our latest luxury villa in Manjeri exceeded expectations. Flawless surface flatness, zero batch variation, and top-tier durability.",
    name: "Ar. Farooq Rahman",
    role: "Lead Architect, Studio Vista, Calicut",
    image: "https://ui-avatars.com/api/?name=Ar.+Farooq+Rahman&background=f4f4f4&color=333"
  },
  {
    text: "We sourced both terracotta roof tiles and natural granite cladding from LECZA for a 40-unit premium township. The timely supply and export-grade consistency are truly commendable.",
    name: "K. Narayanan",
    role: "MD, Apex Builders, Kochi",
    image: "https://ui-avatars.com/api/?name=K.+Narayanan&background=f4f4f4&color=333"
  },
  {
    text: "We have been importing natural slate and designer tiles from CLADCRAFT INNOVATIONS LLP for our UAE hotel projects. Exceptional packaging, pristine finishes, and solid reliability.",
    name: "Jameel Al-Ghamdi",
    role: "Procurement Lead, Gulf Horizon, Dubai",
    image: "https://ui-avatars.com/api/?name=Jameel+Al-Ghamdi&background=f4f4f4&color=333"
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header" data-aos="fade-up">
          <div className="reviews-title-area">
            <span className="reviews-eyebrow">REVIEWS</span>
            <h2 className="reviews-title">
              What our clients<br />say <em>about us.</em>
            </h2>
            <div className="reviews-big-quote-container">
              <span className="reviews-big-quote">“</span>
              <div className="reviews-quote-line"></div>
            </div>
          </div>

          <div className="reviews-subtitle-area">
            <div className="reviews-vertical-divider"></div>
            <div className="reviews-subtitle-content">
              <p>We take pride in delivering surfaces<br />that inspire trust and elevate spaces.<br />Here's what our clients have to say<br />about their experience with Lecza.</p>
              <div className="reviews-carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-cards-wrapper">
          {reviewsData.map((review, idx) => (
            <div className="review-card" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} key={idx}>
              <div className="review-card-top">
                <div className="review-stars">
                  {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="review-quote-icon">“</span>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <img src={review.image} alt={review.name} />
                <div className="review-author-info">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-stats-banner" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-item">
            <div className="stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Trusted by</span>
              <strong className="stat-value">1000+</strong>
              <span className="stat-sub">Happy Clients</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Overall Rating</span>
              <strong className="stat-value">4.9/5</strong>
              <span className="stat-sub">Based on 500+ reviews</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><circle cx="8" cy="10" r="1" fill="currentColor"></circle><circle cx="12" cy="10" r="1" fill="currentColor"></circle><circle cx="16" cy="10" r="1" fill="currentColor"></circle></svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Google Reviews</span>
              <strong className="stat-value">4.8/5</strong>
              <div className="stat-sub-stars">
                <span className="tiny-stars">★★★★★</span> <span className="stat-sub">(320+)</span>
              </div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            </div>
            <div className="stat-details">
              <span className="stat-label">Client Satisfaction</span>
              <strong className="stat-value">98%</strong>
              <span className="stat-sub">Would recommend us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
