import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info-area">
          <span className="contact-eyebrow">CONTACT US</span>
          <h2 className="contact-title">Let's shape<br /><em>what's next.</em></h2>
          <p className="contact-intro">Tell us what you are creating. Our team will connect you with the right collection.</p>
          
          <div className="contact-details">
            <div className="contact-detail-block">
              <strong>Visit Us</strong>
              <p>Hillton Convention Center<br/>Manjeri, Malappuram<br/>Kerala - 676122</p>
            </div>
            <div className="contact-detail-block">
              <strong>Call Us</strong>
              <p><a href="tel:+919745055044">+91 97450 55044</a></p>
            </div>
            <div className="contact-detail-block">
              <strong>Email Us</strong>
              <p><a href="mailto:cladcraftinnovations@gmail.com">cladcraftinnovations@gmail.com</a></p>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <form className="premium-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-group">
              <input type="tel" id="phone" name="phone" placeholder=" " />
              <label htmlFor="phone">Phone Number (Optional)</label>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
              <label htmlFor="message">Your Inquiry</label>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
