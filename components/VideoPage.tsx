
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingBackground from './FloatingBackground';

const VideoPage = () => {
    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-amazon selection:text-black flex flex-col">
            <FloatingBackground />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center p-4 pt-24 pb-12">
                <div className="max-w-4xl w-full space-y-8 animate-fade-in-up">

                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-amazon/30 bg-amazon/10 text-amazon text-xs font-bold tracking-wider mb-2">
                            PASO 2
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black font-heading leading-tight">
                            Mira cómo funciona <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#FF9900] to-[#EC4899]">
                                el sistema FBA
                            </span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            En este breve video te explico exactamente cómo escalar tu tienda de 0 a 10k/mes utilizando la infraestructura de Amazon.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,153,0,0.15)] group">
                        {/* Decorative Elements around video */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#FF9900] to-[#EC4899] opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>

                        <iframe
                            className="relative w-full h-full bg-[#05070A]"
                            src="https://www.youtube.com/embed/jfKfPfyJRdk"
                            title="Amazon FBA Explained"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* CTA Section below video */}
                    <div className="text-center pt-8">
                        <button className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-black py-4 px-8 rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1">
                            QUIERO APLICAR AL PROGRAMA
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Solo quedan 3 plazas disponibles para este mes.
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VideoPage;
