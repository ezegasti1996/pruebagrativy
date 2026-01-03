
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Star, TrendingUp, PlayCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const HERO_NOTIFICATIONS = [
  {
    product: "Auriculares Wireless",
    profit: "+24.50 €",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80",
    time: "ahora"
  },
  {
    product: "Smartwatch Sport",
    profit: "+42.90 €",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80",
    time: "hace 2m"
  },
  {
    product: "Gaming Mouse RGB",
    profit: "+18.20 €",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=150&q=80",
    time: "hace 5m"
  }
];

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [studentCount, setStudentCount] = useState(105);
  const [hasCounted, setHasCounted] = useState(false);
  const [currentNotif, setCurrentNotif] = useState(0);
  const [showNotif, setShowNotif] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowNotif(true);
    const interval = setInterval(() => {
      setShowNotif(false);
      setTimeout(() => {
        setCurrentNotif(prev => (prev + 1) % HERO_NOTIFICATIONS.length);
        setShowNotif(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            const current = Math.floor(start + (end - start) * ease);
            setStudentCount(current);
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
    <section className="relative pt-24 md:pt-32 pb-24 overflow-hidden z-10 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div className="relative z-10 animate-fade-in-up">
          <div className="flex items-center mb-8 relative group cursor-default">
            <div className="z-20 bg-gradient-to-r from-[#FF9900] to-[#E88B00] text-black text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,153,0,0.5)] relative border border-white/20 transform transition-transform group-hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 fill-black animate-pulse" />
              <span className="tracking-wide">NEW</span>
            </div>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-r-full -ml-3 pl-6 pr-5 py-2 overflow-hidden animate-unfold origin-left backdrop-blur-md" style={{ maxWidth: 0, opacity: 0 }}>
              <span className="text-gray-300 text-[11px] font-black tracking-[0.25em] uppercase whitespace-nowrap min-w-max">
                MÉTODO <span className="text-[#FF9900] text-shadow-glow">2026</span>
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tight font-heading">
            APRENDE A <br />
            CREAR UNA <br />
            <span className="text-amazon">TIENDA</span> EN <br />
            AMAZON Y <br />
            <span className="bg-amazon text-black px-4 py-1.5 inline-block mt-2 shadow-[0_0_30px_rgba(255,153,0,0.4)] animate-badge-move origin-center">
              VENDE EN 72H
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-medium">
            Selecciono por ti el producto para que
            <span className="inline-block bg-red-600 text-white font-black text-sm md:text-base px-2 py-0.5 rounded transform -rotate-2 mx-1.5 shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-500/50 hover:scale-105 transition-transform">
              NO pierdas tiempo
            </span>
            en buscarlo y
            <span className="block mt-4 text-2xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] via-[#FFC04D] to-[#FF9900] italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,153,0,0.4)] leading-none pb-2">
              TE MONTO LA TIENDA.
            </span>
          </p>

          <div className="relative mb-14">
            {/* Amazon Seller Notification - Floating */}
            <div className={`absolute -top-20 left-0 z-30 transition-all duration-500 transform ${showNotif ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-[#2C2C2E]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl flex flex-col gap-2 w-[260px]">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center overflow-hidden">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="A" className="w-3 h-3 object-contain" />
                    </div>
                    <span className="text-[9px] font-bold text-white uppercase">AMAZON SELLER</span>
                  </div>
                  <span className="text-[9px] text-gray-400">{HERO_NOTIFICATIONS[currentNotif].time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded p-1 flex items-center justify-center shadow-sm shrink-0">
                    <img src={HERO_NOTIFICATIONS[currentNotif].img} alt="Product" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-bold leading-tight">¡Venta realizada!</p>
                    <p className="text-gray-400 text-[9px] leading-tight mb-0.5">{HERO_NOTIFICATIONS[currentNotif].product}</p>
                    <p className="text-[#FF9900] text-[10px] font-black">Beneficio: {HERO_NOTIFICATIONS[currentNotif].profit}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenModal}
                className="relative group px-8 py-5 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-4 shadow-2xl overflow-hidden transition-all hover:-translate-y-1 active:scale-95 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] transition-opacity group-hover:opacity-90"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 fill-white/20" />
                  VER CLASE GRATIS
                </span>
              </button>
              <button
                onClick={onOpenModal}
                className="px-8 py-5 rounded-2xl font-black text-black text-sm bg-amazon hover:bg-amazon-dark transition-all hover:-translate-y-1 active:scale-95 shadow-[0_10px_30px_rgba(255,153,0,0.3)] cursor-pointer"
              >
                QUIERO MI TIENDA AHORA
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4" ref={counterRef}>
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#05070A] bg-gray-800 overflow-hidden relative z-10 shadow-lg">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#05070A] bg-[#1A1D25] flex items-center justify-center relative z-0 text-[10px] font-bold text-gray-400">
                99+
              </div>
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest border-b-2 border-amazon/40 pb-1">
                <span className="text-white text-sm md:text-base mr-1 tabular-nums">+{studentCount}</span> ALUMNOS FACTURANDO
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
          <div className="relative w-full max-w-[450px]">
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
                  <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight">$104,458.03</h3>
                </div>
                <div className="bg-green-500/15 border border-green-500/30 text-green-400 text-[9px] px-2 py-1 rounded-lg font-black flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +44.38%
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-amazon w-[82%] shadow-[0_0_20px_rgba(255,153,0,0.6)]"></div>
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
