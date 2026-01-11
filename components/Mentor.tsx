import React, { useState, useEffect } from 'react';
import { X, Maximize2, UserCheck, TrendingUp } from 'lucide-react';

const SalesCounter: React.FC = () => {
    const countRef = React.useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const end = 213;
        const duration = 2500;
        const startTime = Date.now();
        let animationFrameId: number;

        const update = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4); // Ease out quart

            const current = Math.floor(12 + (end - 12) * ease);
            if (countRef.current) {
                countRef.current.innerText = current.toString();
            }

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(update);
            }
        };

        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <span ref={countRef} className="text-white text-sm ml-1">12</span>;
};

const Mentor: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-20 relative z-10 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className={`group bg-gradient-to-r from-[#0F1115] to-[#05070A] rounded-[30px] md:rounded-[50px] border border-white/5 p-4 sm:p-6 md:p-12 lg:p-20 relative transition-all duration-700 ${isExpanded ? 'ring-2 ring-amazon/30 shadow-[0_0_80px_rgba(255,153,0,0.15)]' : 'hover:border-amazon/30'}`}>

                    <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-amazon/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-amazon/10"></div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Image Side - Luxury Framing */}
                        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-[480px] h-[550px] sm:h-[650px] group/mentor">
                                {/* Glow Effect Behind */}
                                <div className="absolute -inset-4 bg-amazon/20 blur-3xl rounded-full opacity-0 group-hover/mentor:opacity-100 transition-opacity duration-1000"></div>

                                {/* Main Image Card */}
                                <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl z-10 bg-[#05070A]">
                                    <img
                                        src="/emi-pool.webp"
                                        srcSet="/emi-pool-mobile.webp 500w, /emi-pool.webp 1200w"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        alt="Emi de la Sierra"
                                        className="w-full h-full object-cover object-center transition-all duration-1000 group-hover/mentor:scale-110 group-hover/mentor:rotate-1"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                </div>

                                {/* Floating Stats Card - Ultra Premium */}
                                <div className="absolute bottom-8 -right-4 lg:-right-12 z-20 glass-dark p-6 md:p-8 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-700 group-hover/mentor:translate-x-2 group-hover/mentor:-translate-y-2">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="bg-amazon/10 px-3 py-1 rounded-full border border-amazon/30">
                                            <span className="text-amazon text-[10px] font-black uppercase tracking-[0.2em]">Verified Partner</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Total Sales Revenue</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-amazon text-2xl font-black">$</span>
                                            <span className="text-white text-5xl md:text-6xl font-black tracking-tighter tabular-nums">25M<span className="text-amazon text-3xl font-heading">+</span></span>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-amazon/20 flex items-center justify-center border border-amazon/30">
                                            <TrendingUp className="w-6 h-6 text-amazon" />
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-sm uppercase tracking-tight">Ventas Hoy</p>
                                            <p className="text-green-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1">
                                                <SalesCounter /> Unidades
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Amazon Icon */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20 animate-float-slow z-0 grayscale invert">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                                        className="w-full h-full object-contain"
                                        alt="Amazon"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Text Side - High Impact */}
                        <div className="text-left lg:pl-10">
                            <div className="inline-block bg-amazon/10 text-amazon text-[10px] font-black px-4 py-2 rounded-lg border border-amazon/20 mb-8 uppercase tracking-[0.4em]">
                                El Método Sierra
                            </div>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading mb-8 leading-[0.95] tracking-tighter text-white">
                                APRENDE DE <br />
                                QUIEN YA LO HA <br />
                                <span className="text-amazon italic">LOGRADO.</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                                <p>
                                    <span className="text-white font-bold text-xl block mb-2 font-heading">¿Cansado de gurús que no venden?</span>
                                    Soy Emi de la Sierra, y he facturado <span className="text-white font-black border-b-2 border-amazon/50">+$25M USD</span> en Amazon FBA aplicando un sistema replicable.
                                </p>
                                <p className="text-sm opacity-80">
                                    He cometido todos los errores para que tú no tengas que hacerlo. Hoy ayudo a personas comprometidas a construir activos reales en el mercado más grande del mundo.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-800 overflow-hidden">
                                                <img src={`/hero_student_${i}.webp`} alt="Student" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="flex text-amazon text-xs">
                                            {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                                        </div>
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest mt-0.5">+1,000 Alumnos</p>
                                    </div>
                                </div>
                                <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
                                <div className="text-left">
                                    <p className="text-amazon font-black text-2xl leading-none">4.9/5</p>
                                    <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest mt-1">Satisfaction Rate</p>
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