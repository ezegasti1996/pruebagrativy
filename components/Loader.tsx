import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-[#05070A] flex flex-col items-center justify-center">
            <div className="relative">
                {/* Amazon Icon */}
                <div className="w-24 h-24 md:w-32 md:h-32 mb-8 relative flex items-center justify-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                        alt="Loading..."
                        className="w-full h-full object-contain brightness-0 invert animate-pulse"
                    />
                </div>

                {/* Loading Bar */}
                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-[#FF9900] animate-loading-bar shadow-[0_0_10px_#FF9900]"></div>
                </div>

                <p className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mt-4 text-center animate-pulse">
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
        </div>
    );
};

export default Loader;
