import React from 'react';
import { CheckCircle2, TrendingUp, DollarSign, Package } from 'lucide-react';

interface ResultCardProps {
    name: string;
    image: string;
    profit: string;
    growth: string;
    category: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ name, image, profit, growth, category }) => (
    <div className="group relative bg-[#0F1115] rounded-[24px] border border-white/5 overflow-hidden flex flex-col hover:border-amazon/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
        {/* Amazon Header Simulation */}
        <div className="bg-[#131921] px-4 py-3 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-amazon rounded-sm flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="A" className="brightness-0" />
                </div>
                <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase italic">Seller Central</span>
            </div>
            <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] font-bold text-green-500 uppercase">Verificado</span>
            </div>
        </div>

        {/* Name & Quick Stats */}
        <div className="p-4 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-xs font-black">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-sm font-black text-white leading-none">{name}</h4>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{category}</span>
                </div>
            </div>
            <div className="text-right">
                <div className="flex items-center gap-1 text-green-400 font-black text-sm">
                    <TrendingUp className="w-3 h-3" />
                    {growth}
                </div>
                <div className="text-[9px] text-gray-500 font-bold tracking-tighter uppercase">Growth MoM</div>
            </div>
        </div>

        {/* Main Screenshot Container */}
        <div className="relative aspect-[4/3] bg-black overflow-hidden group-hover:bg-gray-900 transition-colors">
            <img
                src={image}
                alt={`Resultado de ${name}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
            />
            {/* Overlay Glass with Profit */}
            <div className="absolute bottom-3 left-3 right-3 glass-dark p-3 rounded-xl border border-white/10 backdrop-blur-md bg-black/40">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-0.5">NET PROFIT ESTIMATE</p>
                        <p className="text-lg font-black text-amazon tracking-tighter">
                            <span className="text-xs mr-0.5">$</span>{profit}
                        </p>
                    </div>
                    <div className="bg-amazon/10 p-2 rounded-lg border border-amazon/20">
                        <DollarSign className="w-4 h-4 text-amazon" />
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Meta */}
        <div className="p-3 bg-white/5 flex justify-between items-center border-t border-white/5">
            <div className="flex items-center gap-2">
                <Package className="w-3 h-3 text-gray-600" />
                <span className="text-[9px] font-bold text-gray-500 uppercase">Fulfillment by Amazon</span>
            </div>
            <CheckCircle2 className="w-3 h-3 text-amazon shadow-[0_0_10px_rgba(255,153,0,0.5)]" />
        </div>
    </div>
);

const Results: React.FC = () => {
    const students = [
        {
            name: "Cristian",
            image: "/result_cristian.webp",
            profit: "4,215.00",
            growth: "+145%",
            category: "Electrónica"
        },
        {
            name: "Sofía",
            image: "/result_sofia.webp",
            profit: "3,890.50",
            growth: "+89%",
            category: "Hogar & Cocina"
        },
        {
            name: "Javier",
            image: "/result_javier.webp",
            profit: "7,430.20",
            growth: "+210%",
            category: "Deportes"
        }
    ];

    return (
        <section className="py-24 bg-bg-dark border-y border-white/5 relative z-10 overflow-hidden" id="resultados">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-amazon/10 border border-amazon/20 px-4 py-1.5 rounded-full mb-6 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-amazon animate-pulse"></span>
                        <span className="text-amazon text-[10px] font-black uppercase tracking-widest">Casos de Éxito 2024</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-heading text-white">
                        RESULTADOS <span className="text-amazon italic">QUE HABLAN</span> POR SÍ SOLOS
                    </h2>
                    <p className="text-gray-400 font-medium">
                        No son promesas, son paneles reales de alumnos que ya están escalando sus tiendas utilizando nuestra metodología FBA.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
                    {students.map((student, index) => (
                        <ResultCard key={index} {...student} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Todas las cifras han sido auditadas y verificadas internamente
                    </p>
                </div>
            </div>

            {/* Background Light Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amazon/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        </section>
    );
};

export default Results;
