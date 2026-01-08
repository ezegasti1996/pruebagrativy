import React from 'react';
import { Search, Package, TrendingUp, CheckCircle2, Truck, BarChart3, Zap, Globe2, DollarSign, ScanSearch, Factory, Euro, Plane, Navigation } from 'lucide-react';

const Benefits: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">

            {/* SVG Definitions for Icon Gradients */}
            <svg width="0" height="0" className="absolute block">
                <defs>
                    <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan 400 */}
                        <stop offset="100%" stopColor="#2563eb" /> {/* Blue 600 */}
                    </linearGradient>
                    <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" /> {/* Amber 400 */}
                        <stop offset="100%" stopColor="#ea580c" /> {/* Orange 600 */}
                    </linearGradient>
                    <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" /> {/* Purple 400 */}
                        <stop offset="100%" stopColor="#a855f7" /> {/* Purple 600 */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="text-center mb-12 md:mb-16 lg:mb-24 relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                    TU NEGOCIO EN <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-[#FFB84D] animate-gradient-x">PILOTO AUTOMÁTICO</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Card 1: Product Intelligence (Cyan/Tech) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '0ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-cyan-400/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                            <ScanSearch className="w-7 h-7" stroke="url(#cyan-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-cyan-400 transition-colors duration-300">ALGORITMO PROPIO</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            No adivines. Usamos datos masivos para detectar productos con <span className="text-white font-bold group-hover:text-cyan-300 transition-colors">alta demanda y baja competencia</span> antes que nadie.
                        </p>

                        {/* UI Simulation: Scanning with Flash */}
                        <div className="mt-auto bg-[#05070A] rounded-xl border border-white/5 p-4 relative overflow-hidden group/card shadow-inner isolate">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 animate-scan-vertical opacity-80 blur-[1px] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                            <div className="absolute inset-0 bg-cyan-400 mix-blend-overlay z-30 animate-flash-discovery opacity-0 pointer-events-none"></div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-gray-800 animate-pulse border border-white/5"></div>
                                        <div className="space-y-1">
                                            <div className="w-16 h-1.5 rounded bg-gray-700/50"></div>
                                            <div className="w-10 h-1.5 rounded bg-gray-800/50"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                        <div className="text-[10px] font-bold text-gray-500">Scanning...</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded bg-cyan-950/40 border border-cyan-400/30 transform translate-y-2 opacity-50 scale-95 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-100 relative z-10 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-cyan-400/20 flex items-center justify-center border border-cyan-400/30">
                                            <Zap className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-cyan-300 tracking-wider">WINNER FOUND</div>
                                            <div className="text-[9px] text-cyan-400/70 font-mono tracking-tight">$ Profit: Very High</div>
                                        </div>
                                    </div>
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Automated Logistics (FBA) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden hover:border-[#FF9900]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(255,153,0,0.15)] animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '200ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FF9900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#FF9900]/10 to-orange-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-[#FF9900]/20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-[0_0_30px_rgba(255,153,0,0.1)]">
                            <Package className="w-7 h-7" stroke="url(#orange-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-[#FF9900] transition-colors duration-300">LOGÍSTICA FBA</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            Tú vendes, <span className="text-white font-bold group-hover:text-orange-300 transition-colors">Amazon envía.</span> El almacenamiento, empaquetado y atención al cliente funcionan 24/7 sin ti.
                        </p>

                        {/* UI Simulation: Shipping */}
                        <div className="mt-auto bg-[#05070A] rounded-xl border border-white/5 h-[140px] relative overflow-hidden group/card flex flex-col justify-between p-4 shadow-inner">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                            <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-gray-800 -translate-y-1/2 overflow-hidden rounded-full">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FF9900] to-transparent animate-slide-right opacity-50"></div>
                            </div>
                            <div className="flex justify-between items-center relative z-10 w-full px-2">
                                <div className="flex flex-col items-center gap-2 group/wh">
                                    <div className="w-8 h-8 rounded-full bg-[#1A1D25] border border-gray-700 group-hover/wh:border-gray-500 group-hover/wh:bg-gray-800 transition-colors flex items-center justify-center z-10 shadow-lg">
                                        <Package className="w-3.5 h-3.5 text-gray-500" />
                                    </div>
                                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-wider bg-[#05070A]/80 px-1 rounded">Stock</span>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF9900] p-2 rounded-full shadow-[0_0_20px_rgba(255,153,0,0.6)] z-20 animate-truck-travel">
                                    <Truck className="w-4 h-4 text-black fill-black/20" />
                                </div>
                                <div className="flex flex-col items-center gap-2 relative">
                                    <div className="w-8 h-8 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,153,0,0.2)] overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center animate-toggle-dot">
                                            <div className="w-2.5 h-2.5 bg-[#FF9900] rounded-full"></div>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-green-500 animate-flash-money opacity-0">
                                            <DollarSign className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-black text-green-400 animate-float-cash opacity-0">
                                        +$
                                    </div>
                                    <span className="text-[8px] font-bold text-[#FF9900] uppercase tracking-wider bg-[#05070A]/80 px-1 rounded">Client</span>
                                </div>
                            </div>
                            <div className="text-center mt-auto">
                                <span className="bg-[#FF9900]/5 text-[#FF9900] text-[8px] font-black px-3 py-1.5 rounded-full border border-[#FF9900]/20 tracking-wider group-hover:bg-[#FF9900]/10 transition-colors">
                                    ⚡ AUTO-FULFILLMENT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Global Scaling (REBRANDED HOLO-LOGISTICS) */}
                <div className="group relative bg-[#0F1115] rounded-[30px] border border-white/5 p-1 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '400ms' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="bg-[#0A0C10] rounded-[28px] p-6 lg:p-8 h-full relative z-10 flex flex-col">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 border border-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                            <Globe2 className="w-7 h-7" stroke="url(#purple-gradient)" />
                        </div>

                        <h4 className="text-2xl font-black mb-4 font-heading text-white group-hover:text-purple-400 transition-colors duration-300">DOMINIO GLOBAL</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6 lg:mb-8">
                            Tu negocio sin fronteras. Desde la fábrica en <span className="text-white font-bold">China</span> directamente a los almacenes de <span className="text-white font-bold">USA</span> y <span className="text-white font-bold">España</span>.
                        </p>

                        {/* UI Simulation: Digital Holographic Map Rebranded */}
                        <div className="mt-auto bg-[#020408] rounded-xl border border-white/10 h-[180px] relative overflow-hidden group/card shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] isolate">

                            {/* Darker Map Background with High Contrast */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                                    alt="World Map"
                                    className="w-[180%] max-w-none h-full object-cover object-center filter invert brightness-50 sepia-[1] hue-rotate-[180deg] saturate-[200%]"
                                />
                            </div>

                            {/* Scanning Radar Line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent w-[50%] h-full -skew-x-12 animate-scan-radar opacity-50 blur-sm pointer-events-none"></div>

                            {/* SVG Layer for Animated High-Energy Paths */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                                <defs>
                                    <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#d8b4fe" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                    <filter id="glow-intense">
                                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Path 1: China (Right) -> USA (Left) */}
                                <path
                                    id="path-cn-usa-rebrand"
                                    d="M 280 80 Q 150 20 60 70"
                                    fill="none"
                                    stroke="rgba(168, 85, 247, 0.15)"
                                    strokeWidth="1.5"
                                    strokeDasharray="2 4"
                                />
                                {/* High Speed Packet 1 - SYNCHRONIZED 3s */}
                                <g filter="url(#glow-intense)">
                                    <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear" begin="0s">
                                        <mpath href="#path-cn-usa-rebrand" />
                                    </animateMotion>
                                    {/* Glowing Leading Edge */}
                                    <circle r="2" fill="#fff" />
                                    <path d="M-6,0 L0,0" stroke="url(#laserGrad)" strokeWidth="3" opacity="0.8" />
                                </g>

                                {/* Path 2: China (Right) -> Spain (Center) */}
                                <path
                                    id="path-cn-es-rebrand"
                                    d="M 280 80 Q 220 90 170 75"
                                    fill="none"
                                    stroke="rgba(168, 85, 247, 0.15)"
                                    strokeWidth="1.5"
                                    strokeDasharray="2 4"
                                />
                                {/* High Speed Packet 2 - SYNCHRONIZED 3s */}
                                <g filter="url(#glow-intense)">
                                    <animateMotion dur="3s" repeatCount="indefinite" rotate="auto" calcMode="linear" begin="0s">
                                        <mpath href="#path-cn-es-rebrand" />
                                    </animateMotion>
                                    <circle r="2" fill="#fff" />
                                    <path d="M-6,0 L0,0" stroke="url(#laserGrad)" strokeWidth="3" opacity="0.8" />
                                </g>
                            </svg>

                            {/* Nodes Layer - REBRANDED LOGOS */}
                            <div className="relative w-full h-full z-20">

                                {/* 1. China (Source Hub) - Factory Icon + China Label */}
                                <div className="absolute right-[10%] top-[40%] flex flex-col items-center group/cn">
                                    <div className="relative">
                                        {/* Hexagon Shape */}
                                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 clip-hexagon flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.5)] z-10 animate-pulse-slow">
                                            <Factory className="w-4 h-4 text-black fill-black/20" />
                                        </div>
                                        {/* Orbital Ring */}
                                        <div className="absolute inset-[-4px] rounded-full border border-amber-500/30 border-t-amber-400 animate-spin-slow"></div>
                                    </div>
                                    <span className="mt-2 text-[8px] font-black text-amber-400 uppercase tracking-widest bg-black/60 px-1.5 py-0.5 rounded border border-amber-500/20 shadow-lg backdrop-blur-md">CHINA</span>
                                </div>

                                {/* 2. USA (Market Terminal) - Flag in Logo */}
                                <div className="absolute left-[15%] top-[30%] flex flex-col items-center group/usa">
                                    <div className="relative">
                                        {/* Shockwave Flash Effect (Destello) - SYNCHRONIZED */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-white opacity-0 animate-shockwave" style={{ animationDelay: '2.8s' }}></div>

                                        {/* Glass Badge */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-900/80 to-black border border-blue-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md z-20 group-hover:border-blue-400 transition-all group-hover:scale-110">
                                            <span className="text-xl">🇺🇸</span>
                                        </div>
                                        {/* Tech Ring */}
                                        <div className="absolute inset-[-4px] rounded-full border border-blue-500/20 border-r-blue-400 animate-spin-reverse-slow"></div>

                                        {/* REVENUE POPUP - SYNCHRONIZED */}
                                        <div className="absolute -top-7 -right-6 animate-money-pop z-30" style={{ animationDelay: '2.8s' }}>
                                            <div className="bg-black/90 border border-green-500 text-green-400 text-[10px] font-black font-mono px-2 py-1 rounded shadow-[0_0_15px_rgba(34,197,94,0.6)] flex items-center gap-1">
                                                +$299
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Spain (Market Terminal) - Flag in Logo */}
                                <div className="absolute left-[48%] top-[32%] flex flex-col items-center group/es">
                                    <div className="relative">
                                        {/* Shockwave Flash Effect (Destello) - SYNCHRONIZED */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-white opacity-0 animate-shockwave" style={{ animationDelay: '2.8s' }}></div>

                                        {/* Glass Badge */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-b from-red-900/80 to-black border border-red-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.3)] backdrop-blur-md z-20 group-hover:border-red-400 transition-all group-hover:scale-110">
                                            <span className="text-xl">🇪🇸</span>
                                        </div>
                                        {/* Tech Ring */}
                                        <div className="absolute inset-[-4px] rounded-full border border-yellow-500/20 border-l-yellow-400 animate-spin-reverse-slow"></div>

                                        {/* REVENUE POPUP - SYNCHRONIZED */}
                                        <div className="absolute -top-7 -right-6 animate-money-pop z-30" style={{ animationDelay: '2.8s' }}>
                                            <div className="bg-black/90 border border-green-500 text-green-400 text-[10px] font-black font-mono px-2 py-1 rounded shadow-[0_0_15px_rgba(34,197,94,0.6)] flex items-center gap-1">
                                                +€145
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .clip-hexagon {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .animate-on-scroll {
            animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Sync Shockwave Animation - 3s cycle */
        @keyframes shockwave {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; border-width: 4px; }
            10% { opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; border-width: 0px; }
        }
        .animate-shockwave {
            animation: shockwave 3s ease-out infinite;
        }

        /* Radar Scan */
        @keyframes scan-radar {
            0% { transform: translateX(-150%) skewX(-12deg); }
            100% { transform: translateX(250%) skewX(-12deg); }
        }
        .animate-scan-radar {
            animation: scan-radar 4s linear infinite;
        }

        /* Money Pop Animation - 3s cycle */
        @keyframes money-pop {
            0% { opacity: 0; transform: scale(0.5) translateY(5px); }
            10% { opacity: 1; transform: scale(1.1) translateY(-5px); }
            20% { opacity: 1; transform: scale(1) translateY(-10px); }
            80% { opacity: 1; transform: scale(1) translateY(-10px); }
            100% { opacity: 0; transform: scale(0.8) translateY(-20px); }
        }
        .animate-money-pop {
            animation: money-pop 3s ease-out infinite;
        }
        
        /* Rotation Utils */
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
        }
        
        @keyframes spin-reverse-slow {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .animate-spin-reverse-slow {
            animation: spin-reverse-slow 8s linear infinite;
        }

        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.9; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Scan Animation */
        @keyframes scan-vertical {
            0% { top: 0; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
            animation: scan-vertical 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Flash Discovery Effect */
        @keyframes flash-discovery {
            0%, 50% { opacity: 0; }
            55% { opacity: 0.8; } /* Flash brightness */
            70% { opacity: 0; }
            100% { opacity: 0; }
        }
        .animate-flash-discovery {
            animation: flash-discovery 3s linear infinite; /* Synced with scan */
        }

        @keyframes slide-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-slide-right {
            animation: slide-right 4s linear infinite; /* Synced with truck */
        }
        
        /* Truck cycle is 4 seconds */
        @keyframes truck-travel {
             0% { transform: translate(-150%, -50%); opacity: 0; }
             10% { opacity: 1; }
             85% { opacity: 1; }
             100% { transform: translate(150%, -50%); opacity: 0; }
        }
        .animate-truck-travel {
            animation: truck-travel 4s linear infinite;
        }

        /* Money Flash Animations */
        @keyframes flash-money {
            0%, 75% { opacity: 0; transform: scale(0.8); }
            80% { opacity: 1; transform: scale(1.1); }
            90% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; }
        }
        .animate-flash-money {
            animation: flash-money 4s linear infinite;
        }

        @keyframes toggle-dot {
            0%, 75% { opacity: 1; }
            80%, 95% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-toggle-dot {
            animation: toggle-dot 4s linear infinite;
        }

        @keyframes float-cash {
            0%, 75% { opacity: 0; transform: translate(-50%, 0); }
            80% { opacity: 1; transform: translate(-50%, -10px); }
            95% { opacity: 0; transform: translate(-50%, -20px); }
            100% { opacity: 0; }
        }
        .animate-float-cash {
            animation: float-cash 4s linear infinite;
        }

        @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
        }
      `}</style>

            {/* Script to trigger animations on scroll */}
            <script dangerouslySetInnerHTML={{
                __html: `
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px 600px 0px',
            threshold: 0.01
        });
        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
      `}} />
        </section>
    );
};

export default Benefits;