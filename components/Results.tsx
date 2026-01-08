import React from 'react';
import { Menu, ScanLine, ChevronDown, ArrowRight, Globe } from 'lucide-react';

const AmazonSellerCard: React.FC<{
    student: { name: string; image: string; time: string };
    stats: {
        todaySales: string;
        todayUnits: string;
        totalSales: string;
        totalLabel: string;
        growth: string;
        periodLabel: string;
        bars: number[];
    };
    footer?: boolean;
}> = ({ student, stats, footer }) => {
    return (
        <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl border border-gray-200 font-sans relative group hover:scale-[1.02] transition-transform duration-500">
            {/* Amazon App Header */}
            <div className="bg-white border-b border-gray-100 p-3 flex justify-between items-center shadow-sm relative z-20">
                <div className="flex items-center gap-3">
                    <Menu className="text-gray-500 w-6 h-6" strokeWidth={1.5} />
                    <div className="flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" alt="ES" className="w-5 h-3.5 shadow-sm object-cover" />
                        <span className="text-xl font-bold text-gray-800 tracking-tight">amazon seller</span>
                    </div>
                </div>
                <ScanLine className="text-gray-400 w-6 h-6" strokeWidth={1.5} />
            </div>

            {/* Top Stats Row */}
            <div className="flex divide-x divide-gray-100 border-b border-gray-100 bg-gray-50/30">
                <div className="flex-1 p-3 min-w-[100px]">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-900">{stats.todaySales}</span>
                        <span className="text-xs text-gray-500 font-medium">EUR</span>
                    </div>
                    <div className="text-[11px] text-[#007185] flex items-center gap-1 font-medium mt-0.5">
                        Ventas hasta hoy <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
                <div className="flex-1 p-3 min-w-[100px]">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-gray-900">{stats.todayUnits}</span>
                    </div>
                    <div className="text-[11px] text-[#007185] flex items-center gap-1 font-medium mt-0.5">
                        Unidades hasta hoy <ArrowRight className="w-3 h-3" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-5 pb-8 relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 px-5 pt-32 pb-8 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                </div>

                <div className="flex justify-between items-center mb-1">
                    <span className="text-lg font-bold text-gray-800 flex items-center gap-1">
                        Ventas de prod... <ChevronDown className="w-5 h-5 text-gray-400" />
                    </span>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-gray-500 font-bold flex items-center gap-1">
                        {stats.totalLabel} <ChevronDown className="w-4 h-4 text-gray-400" />
                    </span>
                </div>

                <div className="mb-8 relative z-10">
                    <div className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-2">
                        {stats.totalSales} <span className="text-xl text-gray-500 font-bold">EUR</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#008a00] font-bold text-sm bg-[#008a00]/5 px-1.5 py-0.5 rounded">{stats.growth}</span>
                        <span className="text-gray-400 text-xs font-bold uppercase">{stats.periodLabel}</span>
                    </div>
                </div>

                {/* Chart - Precise CSS Bars */}
                <div className="h-40 flex items-end justify-between gap-[2px] relative z-20 pl-2">
                    <style>{`
                        @keyframes grow-up { from { transform: scaleY(0); } to { transform: scaleY(1); } }
                     `}</style>
                    {stats.bars.map((h, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1 h-full justify-end group/bar">
                            <div
                                style={{
                                    height: `${h}%`,
                                    animation: `grow-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                                    animationDelay: `${i * 30}ms`,
                                    transformOrigin: 'bottom'
                                }}
                                className="w-full bg-[#FF9900] rounded-t-[2px] shadow-[0_0_10px_rgba(255,153,0,0.0)] group-hover/bar:bg-[#ffad33] transition-all relative"
                            >
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {h}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer / Global Sales */}
            {footer && (
                <div className="bg-white border-t border-gray-100 p-4 flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-xs font-bold mb-0.5">Ventas globales hoy</p>
                        <p className="text-xl font-bold text-gray-900">{stats.todaySales} <span className="text-sm text-gray-500">EUR</span></p>
                    </div>
                    <div className="text-[#007185] flex items-center gap-1 text-sm font-bold cursor-pointer hover:underline">
                        <Globe className="w-4 h-4" />
                        Ver panel
                    </div>
                </div>
            )}

            {/* Floating Student Badge */}
            <div className="absolute top-16 right-4 flex items-center gap-2 bg-gray-900/90 backdrop-blur text-white text-xs pl-1 pr-3 py-1 rounded-full shadow-lg border border-white/10 z-30 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <img src={student.image} className="w-6 h-6 rounded-full border border-white/20" alt={student.name} />
                <div className="flex flex-col leading-none">
                    <span className="font-bold">{student.name}</span>
                    <span className="text-[9px] text-gray-400">{student.time}</span>
                </div>
            </div>
        </div>
    );
};

const Results: React.FC = () => {
    return (
        <section className="py-24 bg-bg-dark border-y border-white/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                        RESULTADOS DE <span className="text-amazon italic text-[#FF9900]">ALUMNOS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">

                    {/* Card 1: Cristian (Image 3) */}
                    <AmazonSellerCard
                        student={{ name: "Cristian M.", image: "/carlos.png", time: "12º Mes" }}
                        stats={{
                            todaySales: "1.298",
                            todayUnits: "29",
                            totalSales: "282,4 mil",
                            totalLabel: "Año hasta la fecha",
                            growth: "160% ↑",
                            periodLabel: "Año pasado",
                            bars: [15, 20, 18, 25, 30, 45, 55, 65, 75, 80, 90, 95, 100]
                        }}
                    />

                    {/* Card 2: Sofia (Image 2) */}
                    <AmazonSellerCard
                        student={{ name: "Sofía L.", image: "/sofia.png", time: "8º Mes" }}
                        stats={{
                            todaySales: "560",
                            todayUnits: "47",
                            totalSales: "402,0 K",
                            totalLabel: "Últimos 12 meses",
                            growth: "+4% ↑",
                            periodLabel: "Período anterior",
                            bars: [25, 28, 40, 45, 30, 50, 45, 55, 30, 35, 28, 26]
                        }}
                    />

                    {/* Card 3: Javier (Image 0) */}
                    <AmazonSellerCard
                        student={{ name: "Javier R.", image: "/javier.png", time: "18º Mes" }}
                        stats={{
                            todaySales: "144",
                            todayUnits: "7",
                            totalSales: "188,5 mil",
                            totalLabel: "Últimos 12 meses",
                            growth: "82% ↑",
                            periodLabel: "Período anterior",
                            bars: [30, 28, 35, 25, 38, 20, 40, 18, 15, 25, 20, 45, 18]
                        }}
                        footer={true}
                    />

                </div>
            </div>
        </section>
    );
};

export default Results;