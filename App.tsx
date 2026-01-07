
import React, { useState, useEffect } from 'react';
import FloatingBackground from './components/FloatingBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';
import Benefits from './components/Benefits';
import Mentor from './components/Mentor';
import Closing from './components/Closing';
import Footer from './components/Footer';
import LeadFormModal from './components/LeadFormModal';
import WarningModal from './components/WarningModal';

import VideoPage from './components/VideoPage';
import BackgroundMusic from './components/BackgroundMusic';

import Loader from './components/Loader';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simple routing check
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    // Fake loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Handle content unlock based on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Dynamic unlock threshold: 40% of viewport height or 400px
      const threshold = Math.min(window.innerHeight * 0.4, 400);
      if (window.scrollY > threshold) {
        setIsUnlocked(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check immediately
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle auto-closing warning on scroll
  useEffect(() => {
    if (!showWarning) return;

    const closeOnScroll = () => {
      // Small threshold to avoid accidental closures on click-jitter
      if (window.scrollY > 20) {
        setShowWarning(false);
      }
    };

    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [showWarning]);

  const closeModal = () => setIsModalOpen(false);
  const closeWarning = () => setShowWarning(false);

  const handleHeroAction = () => {
    if (isUnlocked) {
      setIsModalOpen(true);
    } else {
      setShowWarning(true);
    }
  };

  const handleClosingAction = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-amazon selection:text-black font-sans antialiased">
      <Loader isLoading={isLoading} />

      {pathname === '/video' ? (
        <VideoPage />
      ) : (
        <>
          <BackgroundMusic />
          <FloatingBackground />

          <Header />

          <main className="relative">
            <Hero onOpenModal={handleHeroAction} />
            <Results />
            <Benefits />
            <Mentor />
            <Closing onOpenModal={handleClosingAction} />
          </main>

          <Footer />
        </>
      )}

      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
      <WarningModal isOpen={showWarning} onClose={closeWarning} />
    </div>
  );
}

export default App;
