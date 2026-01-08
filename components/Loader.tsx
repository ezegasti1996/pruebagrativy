import React from 'react';
import { createPortal } from 'react-dom';

interface LoaderProps {
    isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    // Note: Scroll locking logic is now in App.tsx as requested.

    // Use Portal to ensure fixed position is relative to viewport, ignoring parent transforms
    return createPortal(
        <div
            id="loader-overlay"
            className={`fixed inset-0 z-[9999999] bg-[#05070A] flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100 touch-none pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}

        >
            <div className="flex flex-col items-center">
                {/* Logo & Orbits Container */}
                <div className="relative w-40 h-40 flex items-center justify-center mb-10">
                    {/* Inner Orbit */}
                    <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

                    {/* Outer Orbit with Dot */}
                    <div className="absolute inset-0 rounded-full animate-spin-slow">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FF9900] rounded-full shadow-[0_0_15px_#FF9900]"></div>
                    </div>

                    {/* Amazon Icon */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                        alt="Loading..."
                        className="w-20 h-20 object-contain brightness-0 invert animate-pulse relative z-10"
                        fetchPriority="high"
                    />
                </div>

                {/* Loading Bar */}
                <div className="w-56 h-1 bg-white/5 rounded-full overflow-hidden mx-auto mb-6">
                    <div className="h-full bg-[#FF9900] animate-loading-bar shadow-[0_0_10px_#FF9900]"></div>
                </div>

                <p className="text-gray-500 text-xs font-black tracking-[0.4em] uppercase text-center animate-pulse">
                    CARGANDO
                </p>
            </div>

            <style>{`
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 70%; }
          100% { width: 100%; transform: translateX(0); }
        }
        .animate-loading-bar {
          animation: loading-bar 4s ease-out forwards;
        }
      `}</style>
        </div>,
        document.body
    );
};

export default Loader;
