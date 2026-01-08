import React, { useEffect, useRef } from 'react';
import { Search, Package, TrendingUp, CheckCircle2, Truck, BarChart3, Zap, Globe2, DollarSign, ScanSearch, Factory, Euro, Plane, Navigation } from 'lucide-react';

const Benefits: React.FC = () => {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    observerRef.current?.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -100px 0px', // Trigger closer to view for better perfo
            threshold: 0.01
        });

        document.querySelectorAll('.animate-on-scroll-target').forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">

            {/* SVG Definitions for Icon Gradients - Simplified */}
            <svg width="0" height="0" className="absolute block">
                <defs>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                    <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Background Elements - Optimized (Gradient instead of Blur) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

            <div className="text-center mb-12 md:mb-16 lg:mb-24 relative z-10 animate-on-scroll-target opacity-0 translate-y-8 transition-transform duration-700 ease-out will-change-transform">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                    TU NEGOCIO EN <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFB84D]">PILOTO AUTOMÁTICO</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Card 1: Product Intelligence (Cyan/Tech) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden animate-on-scroll-target opacity-0 translate-y-8 transition-all duration-500 will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                            <ScanSearch className="w-7 h-7" stroke="url(#cyan-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-cyan-400 transition-colors duration-300">ALGORITMO PROPIO</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            No adivines. Usamos datos masivos para detectar productos con <span className="text-white font-bold group-hover:text-cyan-300 transition-colors">alta demanda y baja competencia</span> antes que nadie.
                        </p>

                        {/* UI Simulation: Scanning */}
                        <div className="mt-auto bg-[#05070A] rounded-xl border border-white/5 p-4 relative overflow-hidden group/card shadow-inner isolate transform-gpu">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 z-20 animate-scan-vertical opacity-80 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-gray-800 border border-white/5"></div>
                                        <div className="space-y-1">
                                            <div className="w-16 h-1.5 rounded bg-gray-700/50"></div>
                                            <div className="w-10 h-1.5 rounded bg-gray-800/50"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                        <div className="text-[10px] font-bold text-gray-500">Scanning...</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded bg-cyan-950/40 border border-cyan-400/30 transform translate-y-2 opacity-50 scale-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30">
                                            <Zap className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-cyan-300 tracking-wider">WINNER</div>
                                            <div className="text-[9px] text-cyan-400/70 font-mono tracking-tight">$ Profit: High</div>
                                        </div>
                                    </div>
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Automated Logistics (FBA) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden animate-on-scroll-target opacity-0 translate-y-8 transition-all duration-500 will-change-transform" style={{ transitionDelay: '100ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF9900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#FF9900]/10 to-orange-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-[#FF9900]/20 shadow-[0_0_30px_rgba(255,153,0,0.05)]">
                            <Package className="w-7 h-7" stroke="url(#orange-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-[#FF9900] transition-colors duration-300">LOGÍSTICA FBA</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            Tú vendes, <span className="text-white font-bold group-hover:text-orange-300 transition-colors">Amazon envía.</span> El almacenamiento, empaquetado y atención al cliente funcionan 24/7 sin ti.
                        </p>

                        {/* UI Simulation: Shipping - Optimized */}
                        <div className="mt-auto bg-[#05070A] rounded-xl border border-white/5 h-[140px] relative overflow-hidden group/card flex flex-col justify-between p-4 shadow-inner transform-gpu">
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                            <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-gray-800 -translate-y-1/2 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[#FF9900] animate-slide-right opacity-50"></div>
                            </div>
                            <div className="flex justify-between items-center relative z-10 w-full px-2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-[#1A1D25] border border-gray-700 flex items-center justify-center z-10 shadow-lg">
                                        <Package className="w-3.5 h-3.5 text-gray-500" />
                                    </div>
                                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider bg-[#05070A]/80 px-1 rounded">Stock</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF9900] p-1.5 rounded-full shadow-lg z-20 animate-truck-travel">
                                    <Truck className="w-3.5 h-3.5 text-black fill-black/20" />
                                </div>
                                <div className="flex flex-col items-center gap-2 relative">
                                    <div className="w-8 h-8 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/50 flex items-center justify-center z-10 overflow-hidden relative">
                                        <DollarSign className="w-4 h-4 text-[#FF9900]" />
                                    </div>
                                    <span className="text-[8px] font-bold text-[#FF9900] uppercase tracking-wider bg-[#05070A]/80 px-1 rounded">Client</span>
                                </div>
                            </div>
                            <div className="text-center mt-auto">
                                <span className="bg-[#FF9900]/5 text-[#FF9900] text-[8px] font-black px-3 py-1.5 rounded-full border border-[#FF9900]/20 tracking-wider">
                                    ⚡ AUTO-FULFILLMENT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Global Scaling (OPTIMIZED) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden animate-on-scroll-target opacity-0 translate-y-8 transition-all duration-500 will-change-transform" style={{ transitionDelay: '200ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                            <Globe2 className="w-7 h-7" stroke="url(#purple-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-purple-400 transition-colors duration-300">DOMINIO GLOBAL</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            Tu negocio sin fronteras. Desde la fábrica en <span className="text-white font-bold">China</span> directamente a los almacenes de <span className="text-white font-bold">USA</span> y <span className="text-white font-bold">España</span>.
                        </p>

                        {/* UI Simulation: Map - Optimized */}
                        <div className="mt-auto bg-[#020408] rounded-xl border border-white/10 h-[180px] relative overflow-hidden group/card isolate transform-gpu">

                            {/* Darker Map Background - Image based to avoid SVG render cost if possible, but keeping SVG for consistency */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen pointer-events-none">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                                    alt="World Map"
                                    className="w-[180%] max-w-none h-full object-cover object-center filter invert brightness-50 sepia-[1] hue-rotate-[180deg] saturate-[200%]"
                                    loading="lazy"
                                />
                            </div>

                            {/* Simple CSS Radar Scan */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent w-[50%] h-full -skew-x-12 animate-scan-radar opacity-50 pointer-events-none"></div>

                            {/* SVG Layer for Paths - Removed filters */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                                <path
                                    d="M 280 80 Q 150 20 60 70"
                                    fill="none"
                                    stroke="rgba(168, 85, 247, 0.2)"
                                    strokeWidth="1.5"
                                    strokeDasharray="2 4"
                                />
                                <circle r="2" fill="#fff">
                                    <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear">
                                        <mpath href="#path-cn-usa" />
                                    </animateMotion>
                                </circle>

                                <path
                                    id="path-cn-usa" // Hidden definition for mpath
                                    d="M 280 80 Q 150 20 60 70"
                                    fill="none"
                                    stroke="transparent"
                                />
                            </svg>

                            {/* Nodes Layer - Simplified */}
                            <div className="relative w-full h-full z-20">
                                {/* China */}
                                <div className="absolute right-[10%] top-[40%] flex flex-col items-center">
                                    <div className="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse"></div>
                                    <span className="mt-1 text-[8px] font-bold text-amber-500/80">CN</span>
                                </div>
                                {/* USA */}
                                <div className="absolute left-[15%] top-[30%] flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-900/80 border border-blue-500/50 flex items-center justify-center text-[10px]">🇺🇸</div>
                                    <div className="absolute -top-4 -right-4 text-[8px] text-green-400 font-bold animate-pulse">+$299</div>
                                </div>
                                {/* Spain */}
                                <div className="absolute left-[48%] top-[32%] flex flex-col items-center">
                                    <div className="w-6 h-6 rounded-full bg-red-900/80 border border-red-500/50 flex items-center justify-center text-[10px]">🇪🇸</div>
                                    <div className="absolute -top-4 -right-4 text-[8px] text-green-400 font-bold animate-pulse">+$145</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .animate-fade-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @keyframes scan-radar {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(250%) skewX(-12deg); }
        }
        .animate-scan-radar {
            animation: scan-radar 4s linear infinite;
        }

        @keyframes scan-vertical {
            0% { top: 0; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
            animation: scan-vertical 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes slide-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-slide-right {
            animation: slide-right 4s linear infinite;
        }
        
        @keyframes truck-travel {
             0% { transform: translate(-150%, -50%); opacity: 0; }
             10% { opacity: 1; }
             85% { opacity: 1; }
             100% { transform: translate(150%, -50%); opacity: 0; }
        }
        .animate-truck-travel {
            animation: truck-travel 4s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Benefits;