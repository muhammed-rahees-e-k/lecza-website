import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeczaLandingPage from './LeczaLandingPage.jsx';
import GalleryPage from './GalleryPage.jsx';
import ProductsPage from './ProductsPage.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import FloatingWhatsApp from './FloatingWhatsApp.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="splash-screen">
          <div className="splash-content">
            <img src="/logo.png" alt="LECZA Logo" className="splash-logo" />
          </div>
        </div>
      )}
      <Router>
        <FloatingWhatsApp />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<LeczaLandingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  );
}
