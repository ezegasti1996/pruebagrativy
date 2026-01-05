import React from 'react';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#05070A]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Rebranded Logo - Refined animations */}
        <div className="flex items-center gap-3 cursor-pointer group select-none animate-float-slow">
          {/* Icon Container - Removed background glow/shadow */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF9900] to-[#E88B00] rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:rotate-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
              alt="Logo Icon"
              className="w-6 h-6 object-contain brightness-0 invert"
            />
          </div>

          {/* Text Container */}
          <div className="flex flex-col justify-center relative">
            <div className="flex items-baseline gap-[2px] relative group">
              <span className="text-xl font-black italic tracking-tighter text-white font-heading leading-none drop-shadow-md relative overflow-hidden px-0.5">
                FBA
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine pointer-events-none"></div>
              </span>
              <span className="text-xl font-black italic tracking-tighter text-[#FF9900] font-heading leading-none drop-shadow-md relative overflow-hidden pl-0.5 pr-6">
                ACADEMY
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine pointer-events-none animation-delay-1000"></div>
                {/* Sparkle positioned outside overflow px-0.5 */}
                <Sparkles className="absolute -top-3 -right-2 w-3 h-3 text-[#FF9900] animate-sparkle-pulse" />
              </span>
            </div>
            <div className="h-[2px] w-0 group-hover:w-full bg-white transition-all duration-500 ease-out rounded-full mt-0.5 opacity-50"></div>
          </div>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-[#FF9900]/10 to-purple-600/10 hover:from-[#FF9900]/20 hover:to-purple-600/20 border border-[#FF9900]/30 hover:border-[#FF9900] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,153,0,0.2)]">
          Área de Miembros
        </button>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          15% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 5s infinite ease-in-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes sparkle-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
          50% { transform: scale(1.3) rotate(20deg); opacity: 1; }
        }
        .animate-sparkle-pulse {
          animation: sparkle-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;