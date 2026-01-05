import React, { useState, useEffect } from 'react';
import { X, Maximize2, UserCheck, TrendingUp } from 'lucide-react';

const Mentor: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [salesCount, setSalesCount] = useState(12);

    useEffect(() => {
        const end = 213;
        const duration = 2500;
        const startTime = Date.now();

        const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const current = Math.floor(12 + (end - 12) * ease);
            setSalesCount(current);

            if (progress === 1) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 relative z-10 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className={`group bg-gradient-to-r from-[#0F1115] to-[#05070A] rounded-[40px] md:rounded-[50px] border border-white/5 p-6 md:p-12 lg:p-20 relative transition-all duration-700 ${isExpanded ? 'ring-2 ring-amazon/30 shadow-[0_0_80px_rgba(255,153,0,0.15)]' : 'hover:border-amazon/30'}`}>

                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amazon/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-amazon/10"></div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Interactive Image Side */}
                        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start perspective-2000">
                            <div
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="relative w-full max-w-[450px] h-[600px] md:h-[550px] cursor-pointer"
                            >
                                {/* THE "BACK" IMAGE (The one that comes to front) */}
                                <div
                                    className={`absolute inset-0 rounded-[30px] md:rounded-[40px] overflow-hidden border-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl
                                    ${isExpanded
                                            ? 'z-40 scale-100 md:scale-110 border-amazon/50 rotate-0 translate-y-0 shadow-[0_40px_100px_rgba(0,0,0,0.8)]'
                                            : 'z-10 scale-100 border-white/10 rotate-0 shadow-black'
                                        }
                                `}
                                >
                                    <img
                                        src="/emi-pool.jpg"
                                        alt="Emi de la Sierra"
                                        className={`w-full h-full object-cover object-top transition-transform duration-1000 ${isExpanded ? 'scale-100' : 'scale-110 group-hover:scale-105'}`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-40' : 'opacity-60'}`}></div>

                                    {isExpanded && (
                                        <div className="absolute top-6 right-6 z-50 bg-black/50 backdrop-blur-xl p-2 rounded-full border border-white/20 text-white hover:bg-amazon hover:text-black transition-colors animate-fade-in">
                                            <X className="w-6 h-6" />
                                        </div>
                                    )}
                                </div>

                                {/* THE "FRONT" CARD (The one that goes to back) */}
                                <div
                                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-12 lg:left-auto lg:top-auto lg:right-[-20px] lg:translate-x-0 lg:translate-y-0 z-20 bg-[#021024]/90 backdrop-blur-2xl border border-white/10 p-4 lg:p-6 rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] w-[85%] max-w-[260px] lg:max-w-[280px] text-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                    ${isExpanded
                                            ? 'translate-y-[140%] opacity-0 lg:opacity-100 lg:translate-y-[120%] lg:translate-x-[20%] lg:rotate-12 blur-[1px]'
                                            : 'opacity-100 scale-100 rotate-0 hover:rotate-0 hover:border-amazon hover:shadow-[0_0_40px_rgba(255,153,0,0.4)]'
                                        }
                                `}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-[#FF9900] font-heading font-black text-2xl lg:text-3xl uppercase tracking-tighter">TU MENTOR</h3>
                                        <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF9900] to-transparent mb-4 opacity-60"></div>

                                    <div className="space-y-1 mb-4">
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">TOTAL REVENUE:</p>
                                        <p className="text-white text-4xl lg:text-5xl font-black tracking-tight leading-none animate-shake-vertical inline-block">
                                            <span className="text-2xl align-top mr-1 text-amazon">+</span>$25M
                                        </p>
                                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Verified Seller</p>
                                    </div>

                                    {/* Push Venta Line */}
                                    <div className="mb-0 lg:mb-4 bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl py-2 px-3 flex items-center justify-center gap-2 animate-pulse-slow">
                                        <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                                        <span className="text-green-400 text-[10px] lg:text-[11px] font-black tracking-wide uppercase">Ventas hoy: <span className="text-white text-sm ml-1">{salesCount}</span></span>
                                    </div>

                                    <div className="hidden lg:flex pt-3 border-t border-white/5 justify-between items-center">
                                        <div className="text-left">
                                            <p className="text-[#FF9900] text-[10px] font-black tracking-wider uppercase">Expert</p>
                                            <p className="text-white text-xs font-bold">Emi de la Sierra</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-amazon text-black flex items-center justify-center">
                                            <UserCheck className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Amazon Icon - Stays at bottom */}
                                <div className={`absolute -bottom-6 -left-6 w-24 h-24 transition-all duration-700 ${isExpanded ? 'opacity-0 translate-y-4' : 'opacity-60 animate-float-slow'}`}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                                        className="w-full h-full object-contain brightness-0 invert"
                                        alt="Amazon"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={`transition-all duration-700 ${isExpanded ? 'opacity-20 blur-[2px] scale-95 lg:opacity-100 lg:blur-0 lg:scale-100' : 'opacity-100 blur-0 scale-100'}`}>
                            <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 leading-tight text-left">
                                APRENDE DE QUIEN <br />
                                YA HA <span className="text-amazon inline-block transform hover:scale-110 transition-transform duration-300 cursor-cell underline decoration-amazon/30 decoration-4 underline-offset-4">VENDIDO.</span>
                            </h2>

                            <div className="space-y-6 text-gray-300 text-lg font-medium leading-relaxed pl-0 lg:pl-6 border-l-0 lg:border-l-4 border-amazon/30 text-left">
                                <p>
                                    <span className="text-white font-bold block mb-1">Soy Emi de la Sierra.</span>
                                    <span className="text-amazon font-bold bg-amazon/10 px-2 py-0.5 rounded border border-amazon/20 inline-block mt-2">+$25M USD</span> facturados. Más de 8 años vendiendo online, con libertad financiera absoluta.
                                </p>
                            </div>

                            <div className="mt-8 lg:mt-12 flex items-center justify-start gap-6 p-4 lg:p-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white">4.9/5</span>
                                    <div className="flex text-amazon text-sm space-x-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                                    </div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Valoración</span>
                                </div>
                                <div className="h-10 w-px bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white">500+</span>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Alumnos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
            .perspective-2000 {
                perspective: 2000px;
            }
            @keyframes fade-in {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in {
                animation: fade-in 0.4s ease-out forwards;
            }
            @keyframes shake-vertical {
                0%, 100% { transform: translateY(0); }
                25% { transform: translateY(-2px); }
                75% { transform: translateY(2px); }
            }
            .animate-shake-vertical {
                animation: shake-vertical 2s ease-in-out infinite;
            }
        `}</style>
        </section>
    );
};

export default Mentor;