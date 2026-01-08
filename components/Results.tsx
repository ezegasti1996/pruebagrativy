import React from 'react';
import { Menu, ScanLine, ChevronDown, ArrowRight, Globe } from 'lucide-react';

const AmazonSellerCard: React.FC<{
    student: { name: string; image: string };
    country: 'ES' | 'US';
    currency: 'EUR' | 'USD';
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
}> = ({ student, country, currency, stats, footer }) => {

    const flagUrl = country === 'ES'
        ? "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
        : "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";

    return (
        <div className="bg-white rounded-[20px] overflow-hidden shadow-2xl border border-gray-200 font-sans relative">
            {/* Amazon App Header */}
            <div className="bg-white border-b border-gray-100 p-2.5 flex justify-between items-center shadow-sm relative z-20">
                <div className="flex items-center gap-2.5">
                    <Menu className="text-gray-500 w-5 h-5" strokeWidth={1.5} />
                    <div className="flex items-center gap-1">
                        <img src={flagUrl} alt={country} className="w-4 h-3 shadow-sm object-cover" />
                        <span className="text-lg font-bold text-gray-800 tracking-tight">Amazon Seller</span>
                    </div>
                </div>
                <ScanLine className="text-gray-400 w-5 h-5" strokeWidth={1.5} />
            </div>

            {/* Top Stats Row */}
            <div className="flex divide-x divide-gray-100 border-b border-gray-100 bg-gray-50/30">
                <div className="flex-1 p-2.5 min-w-[100px]">
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-gray-900">{stats.todaySales}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{currency}</span>
                    </div>
                    <div className="text-[10px] text-[#007185] flex items-center gap-1 font-medium mt-0.5">
                        Ventas hasta hoy <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                </div>
                <div className="flex-1 p-2.5 min-w-[100px]">
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-gray-900">{stats.todayUnits}</span>
                    </div>
                    <div className="text-[10px] text-[#007185] flex items-center gap-1 font-medium mt-0.5">
                        Unidades hasta hoy <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-4 pb-6 relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 px-4 pt-28 pb-6 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                    <div className="w-full h-px bg-gray-300 border-t border-dashed border-gray-400"></div>
                </div>

                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-base font-bold text-gray-800 flex items-center gap-1">
                        Ventas de prod... <ChevronDown className="w-4 h-4 text-gray-400" />
                    </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-gray-500 font-bold flex items-center gap-1">
                        {stats.totalLabel} <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </span>
                </div>

                <div className="mb-6 relative z-10">
                    <div className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-1.5">
                        {stats.totalSales} <span className="text-lg text-gray-500 font-bold">{currency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#008a00] font-bold text-xs bg-[#008a00]/5 px-1.5 py-0.5 rounded">{stats.growth}</span>
                        <span className="text-gray-400 text-[10px] font-bold uppercase">{stats.periodLabel}</span>
                    </div>
                </div>

                {/* Chart - Precise CSS Bars */}
                <div className="h-32 flex items-end justify-between gap-[2px] relative z-20 pl-1">
                    <style>{`
@keyframes grow - up { from { transform: scaleY(0); } to { transform: scaleY(1); } }
`}</style>
                    {stats.bars.map((h, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1 h-full justify-end">
                            <div
                                style={{
                                    height: `${h}% `,
                                    animation: `grow - up 0.8s cubic - bezier(0.16, 1, 0.3, 1) forwards`,
                                    animationDelay: `${i * 30} ms`,
                                    transformOrigin: 'bottom'
                                }}
                                className="w-full bg-[#FF9900] rounded-t-[1px]"
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer / Global Sales */}
            {footer && (
                <div className="bg-white border-t border-gray-100 p-3 flex justify-between items-center">
                    <div>
                        <p className="text-gray-500 text-[10px] font-bold mb-0.5">Ventas globales hoy</p>
                        <p className="text-lg font-bold text-gray-900">{stats.todaySales} <span className="text-xs text-gray-500">{currency}</span></p>
                    </div>
                    <div className="text-[#007185] flex items-center gap-1 text-xs font-bold cursor-pointer hover:underline">
                        <Globe className="w-3.5 h-3.5" />
                        Ver panel
                    </div>
                </div>
            )}

            {/* Floating Student Badge */}
            <div className="absolute top-14 right-4 flex items-center gap-2 bg-gray-900/90 backdrop-blur text-white text-[10px] pl-1 pr-2.5 py-1 rounded-full shadow-lg border border-white/10 z-30">
                <img src={student.image} className="w-5 h-5 rounded-full border border-white/20" alt={student.name} />
                <div className="flex flex-col leading-none">
                    <span className="font-bold">{student.name}</span>
                </div>
            </div>
        </div>
    );
};

const Results: React.FC = () => {
    return (
        <section className="py-20 bg-bg-dark border-y border-white/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter font-heading text-white">
                        RESULTADOS DE <span className="text-amazon italic text-[#FF9900]">ALUMNOS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">

                    {/* Card 1: Cristian (Hype Verified) */}
                    <AmazonSellerCard
                        student={{ name: "Cristian M.", image: "/carlos.png" }}
                        country="ES"
                        currency="EUR"
                        stats={{
                            todaySales: "1.298",
                            todayUnits: "29",
                            totalSales: "282,4 mil",
                            totalLabel: "Año hasta la fecha",
                            growth: "+160% ↑",
                            periodLabel: "Año pasado",
                            bars: [15, 20, 18, 25, 30, 45, 55, 65, 75, 80, 90, 95, 100]
                        }}
                    />

                    {/* Card 2: Sofia (Hype Boosted) */}
                    <AmazonSellerCard
                        student={{ name: "Sofía L.", image: "/sofia.png" }}
                        country="US"
                        currency="USD"
                        stats={{
                            todaySales: "560",
                            todayUnits: "47",
                            totalSales: "402,0 K",
                            totalLabel: "Últimos 12 meses",
                            growth: "+128% ↑",
                            periodLabel: "Período anterior",
                            bars: [25, 20, 15, 25, 30, 25, 40, 50, 60, 75, 85, 95]
                        }}
                    />

                    {/* Card 3: Javier (Hype Boosted) */}
                    <AmazonSellerCard
                        student={{ name: "Javier R.", image: "/javier.png" }}
                        country="ES"
                        currency="EUR"
                        stats={{
                            todaySales: "144",
                            todayUnits: "7",
                            totalSales: "188,5 mil",
                            totalLabel: "Últimos 12 meses",
                            growth: "+82% ↑",
                            periodLabel: "Período anterior",
                            bars: [15, 18, 14, 20, 18, 25, 22, 35, 45, 60, 75, 85, 90]
                        }}
                        footer={true}
                    />

                </div>
            </div>
        </section>
    );
};

export default Results;