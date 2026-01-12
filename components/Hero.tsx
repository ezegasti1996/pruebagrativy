import React from 'react';
import { PlayCircle, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors cursor-default select-none" ref={counterRef}>
            <div className="flex -space-x-3">
              {[
                "/hero_student_1.webp",
                "/hero_student_2.webp",
                "/hero_student_3.webp"
              ].map((url, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121212] bg-gray-800 overflow-hidden relative z-10 shadow-md">
                  <img src={url} alt="Student" width={40} height={40} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all" loading="eager" decoding="async" />
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
                  <CountUp start={345} end={counterInView ? 1000 : 345} duration={2.5} prefix="+" />
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
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-[#0A0A0A] transform-gpu will-change-transform">
              <img
                src="/emi-hero.webp"
                srcSet="/emi-hero-mobile.webp 500w, /emi-hero.webp 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Mentor Emi de la Sierra"
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Weekly Sales Card */}
            <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 glass p-5 rounded-[24px] w-[260px] md:w-[310px] animate-float-medium shadow-[0_0_40px_rgba(255,153,0,0.15)] transform-gpu will-change-transform">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">VENTAS SEMANALES</p>
                  <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight tabular-nums text-white">
                    <CountUp
                      start={74454}
                      end={counterInView ? 104458 : 74454}
                      duration={2.5}
                      separator=","
                      decimals={2}
                      prefix="$"
                    />
                  </h3>
                </div>
                <div className="bg-green-500/15 border border-green-500/30 text-green-400 text-[9px] px-2 py-1 rounded-lg font-black flex items-center gap-1 animate-pulse">
                  <TrendingUp className="w-3 h-3" />
                  +44.38%
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amazon shadow-[0_0_20px_rgba(255,153,0,0.6)] rounded-full transition-all duration-[2500ms] ease-out"
                    style={{ width: counterInView ? '82%' : '0%' }}
                  ></div>
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
                loading="eager"
                decoding="async"
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
    </section >
  );
};

export default Hero;
