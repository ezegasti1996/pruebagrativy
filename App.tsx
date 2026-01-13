
import React, { useState, useEffect, Suspense } from 'react';
import './index.css'; // Global styles and smooth scroll

import FloatingBackground from './components/FloatingBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Loader from './components/Loader';

// Lazy load heavy components
import Results from './components/Results';
import Benefits from './components/Benefits';
import Mentor from './components/Mentor';
import Closing from './components/Closing';
import Footer from './components/Footer';

// Keep these as lazy for modals/subpages
const LeadFormModal = React.lazy(() => import('./components/LeadFormModal'));
const WarningModal = React.lazy(() => import('./components/WarningModal'));
const VideoPage = React.lazy(() => import('./components/VideoPage'));
const VideoViralista = React.lazy(() => import('./components/VideoViralista'));

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pathname, setPathname] = useState(window.location.pathname);

  // SCROLL LOCK LOGIC (Requested)
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('overflow-hidden-locked');
      document.documentElement.classList.add('overflow-hidden-locked');
    } else {
      document.body.classList.remove('overflow-hidden-locked');
      document.documentElement.classList.remove('overflow-hidden-locked');
    }
  }, [isLoading]);

  // Loading Strategy
  useEffect(() => {
    const waitForPageLoad = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', () => resolve());
      }
    });

    const isReturningUser = localStorage.getItem('has_visited_before');
    const minTime = isReturningUser ? 800 : 2500; // Accelerated for returning users

    const minimumDisplayTime = new Promise<void>((resolve) => {
      setTimeout(() => resolve(), minTime);
    });

    Promise.all([waitForPageLoad, minimumDisplayTime]).then(() => {
      setIsLoading(false);
      localStorage.setItem('has_visited_before', 'true');
    });
  }, []);

  // Routing
  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Unlock Content using IntersectionObserver (Top marker)
  useEffect(() => {
    const marker = document.createElement('div');
    marker.style.position = 'absolute';
    marker.style.top = '400px';
    marker.style.height = '1px';
    marker.style.width = '100%';
    marker.style.pointerEvents = 'none';
    document.body.appendChild(marker);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting || entries[0].boundingClientRect.top < 0) {
        setIsUnlocked(true);
      }
    }, { threshold: 0 });

    observer.observe(marker);
    return () => {
      observer.disconnect();
      marker.remove();
    };
  }, []);

  // Warning Modal Logic
  useEffect(() => {
    if (!showWarning) return;
    const closeOnScroll = () => {
      if (window.scrollY > 20) setShowWarning(false);
    };
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [showWarning]);

  const closeModal = () => setIsModalOpen(false);
  const closeWarning = () => setShowWarning(false);

  const handleHeroAction = () => {
    if (isUnlocked) setIsModalOpen(true);
    else setShowWarning(true);
  };

  const handleClosingAction = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-amazon selection:text-black font-sans antialiased">
      <Loader isLoading={isLoading} />

      {/* Content Hiding: completely unmount content when loading to ensure 0 visibility and 0 scrolling */}
      {isLoading ? null : (
        <>
          {pathname === '/video' ? (
            <Suspense fallback={null}>
              <VideoPage />
            </Suspense>
          ) : pathname === '/video2' ? (
            <Suspense fallback={null}>
              <VideoViralista />
            </Suspense>
          ) : (
            <>
              <FloatingBackground />
              <Header />
              <main className="relative">
                <Hero onOpenModal={handleHeroAction} />
                <Suspense fallback={null}>
                  <Results />
                  <Benefits />
                  <Mentor />
                  <Closing onOpenModal={handleClosingAction} />
                </Suspense>
              </main>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </>
          )}
        </>
      )}

      <Suspense fallback={null}>
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
        <WarningModal isOpen={showWarning} onClose={closeWarning} />
      </Suspense>
    </div>
  );
}

export default App;
