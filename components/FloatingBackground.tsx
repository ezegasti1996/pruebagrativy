
import React, { useEffect, useRef } from 'react';

const FloatingBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let mouseX = 0;
    let mouseY = 0;

    const updateParallax = () => {
      if (!containerRef.current) return;
      
      const items = containerRef.current.querySelectorAll('.parallax-item');
      items.forEach((item, index) => {
        const depth = ((index % 3) + 1) * 0.15;
        
        // Combine mouse parallax (desktop only) and scroll parallax (universal)
        const scrollOffset = lastScrollY * depth * 0.5;
        const mouseOffsetX = (window.innerWidth < 768) ? 0 : mouseX * depth;
        const mouseOffsetY = (window.innerWidth < 768) ? 0 : mouseY * depth;
        
        (item as HTMLElement).style.transform = `translate3d(${mouseOffsetX}px, ${scrollOffset + mouseOffsetY}px, 0)`;
      });
      
      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      mouseX = (window.innerWidth / 2 - e.clientX) * 0.05;
      mouseY = (window.innerHeight / 2 - e.clientY) * 0.05;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070A]">
      
      <div className="absolute inset-0 w-full h-full">
         {/* Top Right Purple Glow */}
         <div className="absolute -top-[10%] -right-[20%] w-[90%] h-[50%] bg-[#7C3AED]/15 blur-[80px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
         
         {/* Middle Left Amazon Orange Glow */}
         <div className="absolute top-[30%] -left-[30%] w-[100%] h-[40%] bg-[#FF9900]/10 blur-[90px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
         
         {/* Bottom Pink Glow */}
         <div className="absolute -bottom-[10%] right-[0%] w-[80%] h-[40%] bg-[#EC4899]/10 blur-[80px] rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '4s', animationDuration: '9s' }}></div>

         {/* Giant Watermark */}
         <div className="absolute top-[15%] right-[-15%] w-[80%] opacity-[0.02] rotate-[-15deg] pointer-events-none z-0">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" 
                alt="Background Brand" 
                className="w-full brightness-0 invert"
            />
         </div>

         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Parallax Items (Optimized for performance) */}
      <div className="parallax-item absolute top-[12%] left-[60%] opacity-[0.04] w-32 h-32 rotate-[15deg]">
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="w-full h-full brightness-0 invert" alt="" />
      </div>

      <div className="parallax-item absolute top-[45%] left-[15%] opacity-[0.03] w-48 h-48 -rotate-[10deg]">
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="w-full h-full brightness-0 invert" alt="" />
      </div>

      <div className="parallax-item absolute bottom-[25%] right-[20%] opacity-[0.05] w-24 h-24 rotate-[5deg]">
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="w-full h-full brightness-0 invert" alt="" />
      </div>

      <div className="parallax-item absolute top-[5%] left-[30%] opacity-[0.025] w-20 h-20 -rotate-[25deg]">
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="w-full h-full brightness-0 invert" alt="" />
      </div>

      <div className="parallax-item absolute bottom-[10%] left-[45%] opacity-[0.03] w-32 h-32 rotate-[12deg]">
         <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="w-full h-full brightness-0 invert" alt="" />
      </div>

      <div className="parallax-item absolute top-[25%] right-[5%] opacity-30 w-40 h-40">
         <img src="https://pngimg.com/uploads/box/box_PNG56.png" className="w-full h-full grayscale brightness-50 contrast-125 rotate-[25deg]" alt="" />
      </div>
      
      <div className="parallax-item absolute top-[5%] left-[5%] opacity-30 w-32 h-32 rotate-12">
        <img src="https://pngimg.com/uploads/box/box_PNG56.png" className="w-full h-full grayscale brightness-50 contrast-125" alt="" />
      </div>

      <div className="hidden md:block absolute top-[45%] left-[8%] font-heading font-black text-6xl md:text-9xl text-white opacity-[0.03] whitespace-nowrap tracking-tighter select-none">
        #1 BEST SELLER
      </div>
    </div>
  );
};

export default FloatingBackground;
