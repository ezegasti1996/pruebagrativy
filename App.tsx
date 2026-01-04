
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Simple routing check
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (pathname === '/video') {
    return <VideoPage />;
  }

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (showWarning) {
        setShowWarning(false);
      }
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Dynamic unlock threshold: 40% of viewport height or 400px
          const threshold = Math.min(window.innerHeight * 0.4, 400);
          if (window.scrollY > threshold) {
            setIsUnlocked(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-bg-dark text-white selection:bg-amazon selection:text-black">
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

      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
      <WarningModal isOpen={showWarning} onClose={closeWarning} />
    </div>
  );
}

export default App;
