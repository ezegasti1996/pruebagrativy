import React from 'react';

// Helper for the bar chart visualization
const AmazonBarChart: React.FC<{ bars: number[], color: string, className?: string }> = ({ bars, color, className = "" }) => (
    <div className={`flex items-end justify-between h-32 gap-1 mt-6 mb-6 px-2 ${className}`}>
        {bars.map((height, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                <div
                    style={{ height: `${height}%` }}
                    className={`w-full rounded-sm ${color} opacity-90 transition-all duration-1000 ease-out origin-bottom hover:opacity-100`}
                ></div>
                {/* Tooltip on hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {height} ventas
                </div>
            </div>
        ))}
    </div>
);

const Results: React.FC = () => {
    return (
        <section className="py-24 bg-bg-dark border-y border-white/5 relative z-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                        RESULTADOS DE <span className="text-amazon italic">ALUMNOS</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Student - Carlos M. */}
                    <div className="relative group">
                        {/* Student Floating Badge */}
                        <div className="absolute -top-6 -left-4 z-20 flex items-center gap-3 bg-white pl-2 pr-4 py-2 rounded-full shadow-lg border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <img src="/carlos.png" alt="Alumno" className="w-12 h-12 rounded-full border-2 border-amazon shadow-sm object-cover" />
                                <div className="absolute -bottom-0 -right-0 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Carlos M.</p>
                                <p className="text-[10px] text-gray-500 font-medium">Alumno: 2º Mes</p>
                            </div>
                        </div>

                        {/* Phone UI Container */}
                        <div className="bg-white text-gray-900 rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-gray-900 relative max-w-sm mx-auto">
                            {/* App Header */}
                            <div className="bg-white border-b border-gray-200 p-4 pt-8 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Ventas</span>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <span className="text-sm font-bold text-gray-900">Hoy</span>
                                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </div>
                            </div>

                            {/* Main Metrics Area */}
                            <div className="p-5">
                                <div className="text-center mb-8">
                                    <span className="text-3xl font-black text-gray-900 block tracking-tight">€33,605.00</span>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-gray-500">Ventas</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center">
                                            ▲ 18.2%
                                        </span>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="relative h-40 w-full mb-8">
                                    <AmazonBarChart
                                        bars={[15, 25, 20, 35, 45, 30, 60, 50, 75, 40, 55, 70, 65, 80, 75, 60, 85, 90, 80, 70, 95]}
                                        color="bg-[#FF9900]"
                                        className="h-full"
                                    />
                                    {/* Month Labels */}
                                    <div className="flex justify-between text-[9px] text-gray-400 font-medium px-1 mt-2">
                                        <span>01</span>
                                        <span>07</span>
                                        <span>14</span>
                                        <span>21</span>
                                        <span>30</span>
                                    </div>
                                </div>

                                {/* Bottom Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Unidades</p>
                                        <p className="text-xl font-bold text-gray-900">142</p>
                                        <p className="text-[9px] text-green-600 font-bold mt-1">▲ 12% vs ayer</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Pedidos</p>
                                        <p className="text-xl font-bold text-gray-900">38</p>
                                        <p className="text-[9px] text-gray-400 font-medium mt-1">Igual que ayer</p>
                                    </div>
                                </div>
                            </div>

                            {/* App Bottom Nav Indicator */}
                            <div className="bg-white border-t border-gray-100 p-3 flex justify-around">
                                <div className="w-full h-1 bg-gray-300 rounded-full max-w-[100px] mx-auto opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Student - Sofia L. */}
                    <div className="relative group mt-8 md:mt-0">
                        {/* Student Floating Badge */}
                        <div className="absolute -top-6 -right-4 z-20 flex flex-row-reverse items-center gap-3 bg-white pl-4 pr-2 py-2 rounded-full shadow-lg border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                            <div className="relative">
                                <img src="/sofia.png" alt="Alumno" className="w-12 h-12 rounded-full border-2 border-[#E88B00] shadow-sm object-cover" />
                                <div className="absolute -bottom-0 -left-0 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-gray-900 text-sm">Sofía L.</p>
                                <p className="text-[10px] text-gray-500 font-medium h-3">4º Mes</p>
                            </div>
                        </div>

                        {/* Phone UI Container */}
                        <div className="bg-white text-gray-900 rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-gray-900 relative max-w-sm mx-auto">
                            {/* App Header */}
                            <div className="bg-white border-b border-gray-200 p-4 pt-8 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Ventas</span>
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        <span className="text-sm font-bold text-gray-900">Últimos 30 días</span>
                                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </div>
                            </div>

                            {/* Main Metrics Area */}
                            <div className="p-5">
                                <div className="text-center mb-8">
                                    <span className="text-3xl font-black text-gray-900 block tracking-tight">€9,019.45</span>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <span className="text-xs text-gray-500">Ventas</span>
                                        <span className="text-xs font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center">
                                            ▲ 273%
                                        </span>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="relative h-40 w-full mb-8">
                                    <AmazonBarChart
                                        bars={[10, 15, 20, 25, 40, 50, 45, 60, 55, 70, 80, 75, 90, 85, 95, 100, 90, 85, 80, 75, 70]}
                                        color="bg-[#E88B00]"
                                        className="h-full"
                                    />
                                    {/* Month Labels */}
                                    <div className="flex justify-between text-[9px] text-gray-400 font-medium px-1 mt-2">
                                        <span>SEM 1</span>
                                        <span>SEM 2</span>
                                        <span>SEM 3</span>
                                        <span>SEM 4</span>
                                    </div>
                                </div>

                                {/* Bottom Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Unidades</p>
                                        <p className="text-xl font-bold text-gray-900">324</p>
                                        <p className="text-[9px] text-green-600 font-bold mt-1">▲ 45% vs ant.</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Pedidos</p>
                                        <p className="text-xl font-bold text-gray-900">102</p>
                                        <p className="text-[9px] text-green-600 font-bold mt-1">▲ 12% vs ant.</p>
                                    </div>
                                </div>
                            </div>

                            {/* App Bottom Nav Indicator */}
                            <div className="bg-white border-t border-gray-100 p-3 flex justify-around">
                                <div className="w-full h-1 bg-gray-300 rounded-full max-w-[100px] mx-auto opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Student - Javier R. */}
                    <div className="bg-[#1E1E1E] text-white rounded-[20px] p-1 shadow-2xl font-sans relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-700">

                        {/* Student Header Dark */}
                        <div className="bg-[#2A2A2A] px-4 py-3 rounded-t-[16px] border-b border-gray-600 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img src="/javier.png" alt="Alumno" className="w-10 h-10 rounded-full border-2 border-[#FF9900] shadow-sm" />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-[#1E1E1E]"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-white text-sm leading-tight">Javier R.</p>
                                    <p className="text-[10px] text-gray-400 font-medium">Alumno: 8º Mes</p>
                                </div>
                            </div>
                            <span className="bg-[#FF9900]/20 text-[#FF9900] text-[9px] font-black uppercase px-2 py-1 rounded-full tracking-wider border border-[#FF9900]/30 flex items-center gap-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Verificado
                            </span>
                        </div>

                        <div className="p-4">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                    <span className="text-gray-300 font-bold text-xs">Tienda saludable</span>
                                </div>
                                <div className="text-gray-400 text-xs">Actualizado 9:05 PM</div>
                            </div>

                            {/* Metrics */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-1">
                                    <h3 className="text-4xl font-black text-white tracking-tight">25.550 <span className="text-xl text-gray-400">EUR</span></h3>
                                </div>
                                <p className="text-xs text-gray-400 mt-1">dic 1, 2024 hasta hoy</p>
                            </div>

                            {/* Chart */}
                            <div className="h-32 flex items-end justify-between gap-1 mb-6 border-b border-gray-700 pb-4">
                                {[15, 20, 18, 25, 30, 45, 80, 95, 85, 70, 60, 100].map((h, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1 w-full h-full justify-end">
                                        <div style={{ height: `${h}%` }} className="w-full bg-[#FF9900] rounded-t-[2px] opacity-90 hover:opacity-100 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>

                            {/* List Stats */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xl font-bold text-white">342,05 €</p>
                                        <p className="text-[10px] text-gray-500">Ventas hoy</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-white">29</p>
                                        <p className="text-[10px] text-gray-500">Unidades</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-t border-gray-800 pt-3">
                                    <div>
                                        <p className="text-xl font-bold text-white">44</p>
                                        <p className="text-[10px] text-gray-500">Pedidos activos</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex text-[#FF9900] text-xs">★★★★★</div>
                                        <p className="text-[10px] text-gray-500">Opinión vendedor</p>
                                    </div>
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