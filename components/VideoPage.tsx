import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingBackground from './FloatingBackground';
import { Lock } from 'lucide-react';

// Declaration for Vimeo API
declare global {
    interface Window {
        Vimeo: any;
    }
}

const VideoPage = () => {
    const [showCTA, setShowCTA] = useState(false);
    const playerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load Vimeo Player API script
        const tag = document.createElement('script');
        tag.src = "https://player.vimeo.com/api/player.js";
        tag.async = true;
        document.body.appendChild(tag);

        tag.onload = () => {
            if (window.Vimeo && containerRef.current) {
                const iframe = containerRef.current.querySelector('iframe');
                if (iframe) {
                    const player = new window.Vimeo.Player(iframe);
                    playerRef.current = player;

                    player.on('timeupdate', (data: any) => {
                        player.getDuration().then((duration: number) => {
                            if (duration > 0 && (data.seconds / duration) > 0.5) {
                                setShowCTA(true);
                            }
                        });
                    });
                }
            }
        };

        return () => {
            if (playerRef.current) {
                playerRef.current.unload();
            }
            document.body.removeChild(tag);
        };
    }, []);

    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-amazon selection:text-black flex flex-col">
            <FloatingBackground />
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center p-4 pt-24 pb-12 relative z-10">
                <div className="max-w-4xl w-full space-y-8 animate-fade-in-up">

                    {/* Header Section */}
                    <div className="text-center space-y-6 px-4">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-amazon/30 bg-amazon/10 text-amazon text-[10px] md:text-xs font-black tracking-widest mb-2 animate-badge-move">
                            SOLO SI HAS VISTO LA CLASE
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.1] tracking-tight text-white mb-4">
                            EL Método con el que mis alumnos consiguen <br className="hidden md:block" />
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#FF9900] to-[#EC4899] animate-gradient-x pb-2">
                                facturar 10.000 €
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            en menos de 15 días desde 0
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
                            En solo 5 minutos entenderás como puedes estar <span className="text-white font-bold decoration-amazon underline decoration-2 underline-offset-2">vendiendo pasado mañana</span> después de ver esto.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative w-full aspect-[9/16] md:aspect-video max-w-sm md:max-w-4xl mx-auto rounded-[30px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,153,0,0.15)] group bg-[#05070A]" ref={containerRef}>
                        {/* Decorative Elements around video */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#FF9900] to-[#EC4899] opacity-20 blur-lg group-hover:opacity-40 transition-opacity pointer-events-none"></div>

                        {/* Vimeo Player Embed */}
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
                            <iframe
                                src="https://player.vimeo.com/video/1151415308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="FBA"
                            ></iframe>
                        </div>
                    </div>

                    {/* CTA Section below video */}
                    <div className="text-center pt-8 min-h-[120px]">
                        {showCTA ? (
                            <div className="animate-fade-in-up">
                                <button className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-black py-4 px-8 rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1 text-lg">
                                    SOLICITAR MI TIENDA AHORA
                                </button>
                                <p className="text-xs text-gray-500 mt-3 animate-pulse">
                                    ¡Solo quedan 3 plazas disponibles para este mes!
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-gray-500 gap-2 opacity-50 transition-opacity duration-1000">
                                <Lock className="w-5 h-5 mb-1" />
                                <p className="text-sm">El botón se desbloqueará al ver el 50% del video...</p>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VideoPage;
