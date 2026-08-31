import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
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
            <Link to="/gallery" className="btn-primary-new">
              Explore All Projects <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="gallery-tabs">
        <button className="gallery-tab active">All Spaces</button>
        <button className="gallery-tab">Living Areas</button>
        <button className="gallery-tab">Bathrooms</button>
        <button className="gallery-tab">Kitchens</button>
        <button className="gallery-tab">Commercial</button>
        <button className="gallery-tab">Outdoor</button>
        <button className="gallery-tab">Tile Details</button>
      </div> */}

      <div className="gallery-grid">
        <div className="gallery-card item-living">
          <img src="/01_living_room.png" alt="Living Room" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><path d="M4 18v3h2v-3h12v3h2v-3M2 11h20v7H2zM4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path></svg>
            </div>
            <div className="card-text">
              <h3>Living Room</h3>
              {/* <p>Elegant surfaces for<br/>warm and welcoming spaces.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-bathroom">
          <img src="/02_bathroom.png" alt="Bathroom" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><path d="M2 12h20M7 12v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5z"></path></svg>
            </div>
            <div className="card-text">
              <h3>Bathroom</h3>
              {/* <p>Refined textures for<br/>a soothing experience.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-kitchen">
          <img src="/03_kitchen.png" alt="Kitchen" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line><line x1="12" y1="10" x2="12" y2="20"></line></svg>
            </div>
            <div className="card-text">
              <h3>Kitchen</h3>
              {/* <p>Surfaces that blend beauty<br/>with everyday function.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-commercial">
          <img src="/04_commercial_space.png" alt="Commercial Spaces" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line><line x1="4" y1="12" x2="20" y2="12"></line></svg>
            </div>
            <div className="card-text">
              <h3>Commercial Spaces</h3>
              {/* <p>Durable and stylish solutions<br/>for professional spaces.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-outdoor">
          <img src="/05_outdoor_space.png" alt="Outdoor Spaces" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><path d="M12 2L2 12h3v8h14v-8h3L12 2z"></path></svg>
            </div>
            <div className="card-text">
              <h3>Outdoor Spaces</h3>
              {/* <p>Built to endure. Designed<br/>to impress outdoors.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-retail">
          <img src="/06_retail_space.png" alt="Retail Spaces" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><path d="M3 6h18M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
            <div className="card-text">
              <h3>Retail Spaces</h3>
              {/* <p>Surfaces that elevate<br/>your brand environment.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>

        <div className="gallery-card item-details">
          <img src="/07_tile_details.png" alt="Tile Details" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('placeholder-bg'); }} />
          <div className="gallery-card-content">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#921313" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
            </div>
            <div className="card-text">
              <h3>Tile Details</h3>
              {/* <p>Close-up views of texture,<br/>finish and craftsmanship.</p> */}
            </div>
            {/* <button className="card-arrow">→</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
