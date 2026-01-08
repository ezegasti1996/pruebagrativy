import React from 'react';

// Helper for the bar chart visualization
const AmazonBarChart: React.FC<{ bars: number[], color: string, className?: string }> = ({ bars, color, className = "" }) => (
    <>
        <style>{`
            @keyframes grow-up {
                from { transform: scaleY(0); }
                to { transform: scaleY(1); }
            }
            .animate-grow-up {
                animation: grow-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
        `}</style>
        <div className={`flex items-end justify-between h-32 gap-[3px] mt-4 mb-6 ${className}`}>
            {bars.map((height, i) => (
                <div
                    key={i}
                    style={{
                        height: `${height}%`,
                        animationDelay: `${i * 30}ms`
                    }}
                    className={`flex-1 rounded-t-[2px] bg-gradient-to-t from-[#FF9900] to-[#ffc400] opacity-90 hover:opacity-100 hover:shadow-[0_0_15px_rgba(255,153,0,0.6)] transition-all duration-300 animate-grow-up origin-bottom`}
                ></div>
            ))}
        </div>
    </>
);

const Results: React.FC = () => {
    return (
        <section className="py-24 bg-bg-dark border-y border-white/5 relative z-10 overflow-hidden">
            {/* Background decoration */}


            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                        RESULTADOS DE <span className="text-amazon italic">ALUMNOS</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">

                    {/* Card 1: Student - Cristian M. (Image 3 Ref) */}
                    <div className="bg-white text-gray-900 rounded-[20px] p-1 shadow-2xl font-sans relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-800">

                        {/* Student Header */}
                        <div className="bg-gray-50 px-4 py-3 rounded-t-[16px] border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src="/carlos.png" alt="Alumno" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm leading-tight">Cristian M.</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Alumno: 12º Mes</p>
                                </div>
                            </div>
                            <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-wider flex items-center gap-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Verificado
                            </span>
                        </div>

                        <div className="p-4">
                            {/* Status */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-green-700 font-bold text-xs">Marca Privada</span>
                                </div>
                                <div className="flex gap-1 opacity-30">
                                    <span className="w-1 h-1 bg-black rounded-full"></span>
                                    <span className="w-1 h-1 bg-black rounded-full"></span>
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <div className="text-xs text-gray-500 font-medium mb-1">Año hasta la fecha</div>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tight">282.400 <span className="text-xl">EUR</span></h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end text-green-600 font-bold text-sm mb-1">
                                        <span>+160%</span>
                                    </div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase">Crecimiento</p>
                                </div>
                            </div>

                            {/* Chart - Hype Data */}
                            <AmazonBarChart
                                bars={[10, 15, 12, 18, 25, 30, 45, 55, 65, 80, 85, 95, 100]}
                                color="bg-[#FF9900]"
                            />

                            {/* Grid Stats */}
                            <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                                <div className="bg-white p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Hoy</p>
                                    <p className="font-black text-gray-900 text-lg">1.298 €</p>
                                </div>
                                <div className="bg-white p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Margen</p>
                                    <p className="font-black text-gray-900 text-lg">28%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Student - Sofia L. (Image 2 Ref - 402k) */}
                    <div className="bg-white text-gray-900 rounded-[20px] p-1 shadow-2xl font-sans relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-800">

                        {/* Student Header */}
                        <div className="bg-gray-50 px-4 py-3 rounded-t-[16px] border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src="/sofia.png" alt="Alumno" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm leading-tight">Sofía L.</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Alumna: 8º Mes</p>
                                </div>
                            </div>
                            <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-wider flex items-center gap-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Verificado
                            </span>
                        </div>

                        {/* Metrics */}
                        <div className="p-4 pt-2">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
                                <span className="text-xs font-bold text-gray-400">Escalando Producto</span>
                                <span className="text-xs font-bold text-gray-600">amazon seller</span>
                            </div>

                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tight">402.000 <span className="text-xl">EUR</span></h3>
                                    <div className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-wide">Últimos 12 meses</div>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold">
                                        <span>+128%</span>
                                        <svg className="w-3 h-3 ml-1 fill-current" viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Chart - Hype Data */}
                            <AmazonBarChart
                                bars={[20, 25, 30, 45, 50, 60, 65, 80, 85, 90, 95, 100]}
                                color="bg-[#E88B00]"
                            />

                            {/* Grid Stats */}
                            <div className="bg-white border-t border-gray-100 pt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase">Facturación Total</p>
                                    <p className="font-black text-gray-900 text-xl">400k+</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase">Pedidos Activos</p>
                                    <p className="font-black text-gray-900 text-xl">154</p>
                                </div>
                            </div>
                        </div>

                        {/* Telegram overlay effect */}
                        <div className="absolute top-16 right-4 opacity-5 pointer-events-none">
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-2.02-1.35-2.92-1.96-.9-.63-.32-.98.2-.1.52.52 1.48 1.43 2.05 1.95.83.75 1.59 1.44 2.37 2.15.2.18.57.54.57.85 0 .17-.05.34-.14.49-.25.41-1.03.65-1.55.77-1.12.26-2.58.39-3.79.39-3.56 0-6.18-1.53-6.18-4.7 0-3.13 2.25-5.26 6.07-5.26 3.12 0 5.3 1.96 5.3 4.6 0 2.53-1.6 4.39-4.25 4.39-1.25 0-2.28-.66-2.65-1.42-.1-.2-.23-.29-.44-.29-.3 0-.52.27-.47.6.14 1.12.7 2.65 1.45 3.32.48.43 1.15.68 1.83.68 2.38 0 4.15-1.85 4.15-4.45 0-3.23-2.65-5.75-6.55-5.75-3.68 0-6.4 2.76-6.4 6.4 0 1.25.35 2.45.95 3.5.15.25.1.55-.1.75-.2.2-.55.25-.8.1C4.45 15.65 4 13.9 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 .28-.02.55-.05.82z" /></svg>
                        </div>
                    </div>

                    {/* Card 3: Student - Javier R. (Image 0 Ref - 188.5k) - CONVERTED TO WHITE */}
                    <div className="bg-white text-gray-900 rounded-[20px] p-1 shadow-2xl font-sans relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-800">

                        {/* Student Header */}
                        <div className="bg-gray-50 px-4 py-3 rounded-t-[16px] border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src="/javier.png" alt="Alumno" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800 text-sm leading-tight">Javier R.</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Alumno: 18º Mes</p>
                                </div>
                            </div>
                            <span className="bg-blue-100 text-blue-700 text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-wider flex items-center gap-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Verificado
                            </span>
                        </div>

                        <div className="p-4">
                            {/* Status */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-green-700 font-bold text-xs">Ventas Globales</span>
                                </div>
                                <div className="text-gray-400 text-xs">Actualizado 2:20 PM</div>
                            </div>

                            {/* Metrics */}
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <div className="text-xs text-gray-500 font-medium mb-1">Últimos 12 meses</div>
                                    <h3 className="text-4xl font-black text-gray-900 tracking-tight">188.500 <span className="text-xl">EUR</span></h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end text-green-600 font-bold text-sm mb-1">
                                        <span>+82%</span>
                                    </div>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase">Período anterior</p>
                                </div>
                            </div>

                            {/* Chart */}
                            <AmazonBarChart
                                bars={[17, 16, 18, 14, 19, 13, 15, 11, 10, 13, 12, 22, 11]}
                                color="bg-[#FF9900]"
                            />

                            {/* Grid Stats */}
                            <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
                                <div className="bg-white p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Ventas Hoy</p>
                                    <p className="font-black text-gray-900 text-lg">144 €</p>
                                </div>
                                <div className="bg-white p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Unidades</p>
                                    <p className="font-black text-gray-900 text-lg">7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Results;