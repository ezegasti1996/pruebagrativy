import React from 'react';


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
                    <img
                        src="/result_cristian.png"
                        alt="Resultado Cristian"
                        className="w-full h-auto rounded-[20px] shadow-2xl border border-gray-200"
                        loading="lazy"
                        decoding="async"
                    />
                    <img
                        src="/result_sofia.png"
                        alt="Resultado Sofia"
                        className="w-full h-auto rounded-[20px] shadow-2xl border border-gray-200"
                        loading="lazy"
                        decoding="async"
                    />
                    <img
                        src="/result_javier.png"
                        alt="Resultado Javier"
                        className="w-full h-auto rounded-[20px] shadow-2xl border border-gray-200"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};

export default Results;