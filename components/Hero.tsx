
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Star, TrendingUp, PlayCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}



const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [studentCount, setStudentCount] = useState(105);
  const [heroSales, setHeroSales] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);

          const start = 105;
          const end = 500;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);

            setStudentCount(Math.floor(start + (end - start) * ease));
            setHeroSales(Math.floor(0 + (104458 - 0) * ease));

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden z-10 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        <div className="relative z-10 animate-fade-in-up">


          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight font-heading">
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
              className="relative group px-12 py-5 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-4 shadow-2xl overflow-hidden transition-all hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-opacity group-hover:opacity-90"></div>
              <span className="relative z-10 flex items-center gap-2">
                <PlayCircle className="w-5 h-5 fill-white/20" />
                VER CLASE GRATIS
              </span>
            </button>
          </div>

          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors cursor-default select-none" ref={counterRef}>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121212] bg-gray-800 overflow-hidden relative z-10 shadow-md">
                  <img src={`https://i.pravatar.cc/100?u=${i + 15}`} alt="Student" className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#121212] bg-amazon text-black flex items-center justify-center relative z-20 text-[10px] font-black shadow-lg">
                <span className="animate-pulse-slow">+99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-white font-black text-lg leading-none tabular-nums tracking-tight">
                  +{studentCount}
                </span>
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1">
                Alumnos Facturando
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
          <div className="relative w-full max-w-[380px] lg:max-w-[420px]">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5]">
              <img
                src="/emi-hero.jpg"
                alt="Mentor Emi de la Sierra"
                className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 glass p-5 rounded-[24px] w-[260px] md:w-[310px] animate-float-medium shadow-[0_0_40px_rgba(255,153,0,0.15)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Sales</p>
                  <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight tabular-nums">
                    ${heroSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </h3>
                </div>
                <div className="bg-green-500/15 border border-green-500/30 text-green-400 text-[9px] px-2 py-1 rounded-lg font-black flex items-center gap-1 animate-pulse">
                  <TrendingUp className="w-3 h-3" />
                  +44.38%
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-amazon shadow-[0_0_20px_rgba(255,153,0,0.6)] rounded-full transition-all duration-[2000ms] ease-out ${hasCounted ? 'w-[82%]' : 'w-0'}`}></div>
                </div>
                <div className="flex justify-between text-[10px] font-black text-gray-500 uppercase tracking-tighter">
                  <span>MON</span>
                  <span>WED</span>
                  <span className="text-amazon">FRI</span>
                </div>
              </div>
            </div>

            <div className="absolute top-8 -right-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-2xl -rotate-12 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                alt="Amazon Smile"
                className="w-10 h-10 md:w-14 md:h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-shadow-glow {
            text-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Hero;
