import React, { useEffect, useRef } from 'react';
import { PlayCircle, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const studentCountRef = useRef<HTMLSpanElement>(null);
  const salesCountRef = useRef<HTMLHeadingElement>(null);
  const counterContainerRef = useRef<HTMLDivElement>(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted.current) {
          hasCounted.current = true;

          const duration = 8000; // Optimized duration
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Split into Fast and Slow phases for "HYPE" feel
            const threshold = 0.2;

            // Student Counter Logic
            let currentStudentVal;
            if (progress < threshold) {
              const p = progress / threshold;
              const ease = 1 - Math.pow(1 - p, 3);
              currentStudentVal = Math.floor(345 + (850 - 345) * ease);
            } else {
              const p = (progress - threshold) / (1 - threshold);
              const ease = 1 - Math.pow(1 - p, 2);
              currentStudentVal = Math.floor(850 + (1000 - 850) * ease);
            }
            if (studentCountRef.current) {
              studentCountRef.current.innerText = `+${currentStudentVal}`;
            }

            // Sales Counter Logic
            let currentSalesVal;
            if (progress < threshold) {
              const p = progress / threshold;
              const ease = 1 - Math.pow(1 - p, 3);
              currentSalesVal = 74454 + (99998 - 74454) * ease;
            } else {
              const p = (progress - threshold) / (1 - threshold);
              const ease = 1 - Math.pow(1 - p, 2);
              currentSalesVal = 99998 + (104458 - 99998) * ease;
            }
            if (salesCountRef.current) {
              salesCountRef.current.innerText = `$${currentSalesVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }

            // Progress Bar Animation (Direct Style Update)
            if (counterContainerRef.current) {
              // We can't easily reach the specific child via ref here without drilling, 
              // but avoiding React render is priority.
              // For now, we rely on CSS transition triggered when we adding a class or similar?
              // Actually the original code used 'hasCounted' state to trigger width change.
              // We can simulate this by finding the bar.
              const bar = document.getElementById('progress-bar-sales');
              if (bar) bar.style.width = '82%';
            }

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (counterContainerRef.current) observer.observe(counterContainerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 z-10 px-6 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

        {/* Column 1: Text Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight font-heading will-change-transform">
            APRENDE A <br />
            CREAR UNA <br />
            <span className="text-amazon">TIENDA</span> EN <br />
            AMAZON Y <br />
            <span className="bg-amazon text-black px-4 py-1.5 inline-block mt-2 shadow-[0_0_30px_rgba(255,153,0,0.4)] animate-badge-move origin-center">
              VENDE EN 72H
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-lg mb-8 leading-relaxed font-medium">
            Selecciono por ti el producto para que
            <span className="inline-block bg-red-600 text-white font-black text-sm md:text-base px-2 py-0.5 rounded transform -rotate-2 mx-1.5 shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-500/50 hover:scale-105 transition-transform">
              NO pierdas tiempo
            </span> y
            <span className="block mt-4 text-2xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFC04D] to-[#FF9900] italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,153,0,0.4)] leading-none pb-2">
              TE MONTO LA TIENDA
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={onOpenModal}
              className="relative group px-12 py-5 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-4 shadow-2xl overflow-hidden transition-all hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer w-full sm:w-auto transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-opacity group-hover:opacity-90"></div>
              <span className="relative z-10 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 fill-white/20" />
                VER CLASE GRATIS
              </span>
            </button>
          </div>

          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors cursor-default select-none" ref={counterContainerRef}>
            <div className="flex -space-x-3">
              {[
                "/hero_student_1.png",
                "/hero_student_2.png",
                "/hero_student_3.png"
              ].map((url, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121212] bg-gray-800 overflow-hidden relative z-10 shadow-md">
                  <img src={url} alt="Student" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-amazon text-black flex items-center justify-center relative z-20 text-[10px] font-black shadow-lg">
                <span className="animate-pulse-slow">+99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span ref={studentCountRef} className="text-white font-black text-lg leading-none tabular-nums tracking-tight">
                  +345
                </span>
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">
                Alumnos Facturando
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Visual Elements */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] group">

            {/* Label "SOY EMILIANO" - Clean & Subtle Version */}
            <div className="absolute top-6 left-6 md:-left-10 z-[60] animate-float-slow pointer-events-none will-change-transform">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amazon shadow-[0_0_10px_#FF9900] animate-pulse"></div>
                <span className="font-heading font-black text-sm md:text-lg text-white uppercase tracking-widest whitespace-nowrap">
                  Soy Emiliano
                </span>
              </div>
            </div>

            {/* Main Mentor Image */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-[#0A0A0A] transform-gpu">
              <img
                src="/emi-hero.jpg"
                alt="Mentor Emi de la Sierra"
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Weekly Sales Card */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 glass p-5 rounded-[24px] w-[260px] md:w-[310px] animate-float-medium shadow-[0_0_40px_rgba(255,153,0,0.15)] transform-gpu">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">VENTAS SEMANALES</p>
                  <h3 ref={salesCountRef} className="text-2xl md:text-3xl font-black font-heading tracking-tight tabular-nums text-white">
                    $74,454.00
                  </h3>
                </div>
                <div className="bg-green-500/15 border border-green-500/30 text-green-400 text-[9px] px-2 py-1 rounded-lg font-black flex items-center gap-1 animate-pulse">
                  <TrendingUp className="w-3 h-3" />
                  +44.38%
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div id="progress-bar-sales" className="h-full bg-amazon shadow-[0_0_20px_rgba(255,153,0,0.6)] rounded-full transition-all duration-[2000ms] ease-out w-0"></div>
                </div>
                <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                  <span>MON</span>
                  <span>WED</span>
                  <span className="text-amazon">FRI</span>
                </div>
              </div>
            </div>

            {/* Floating Amazon Icon */}
            <div className="absolute top-8 -right-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-2xl -rotate-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 will-change-transform">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                alt="Amazon"
                className="w-10 h-10 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-glow { text-shadow: 0 0 10px rgba(255, 153, 0, 0.5); }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
