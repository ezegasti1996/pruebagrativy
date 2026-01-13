
import React, { useState } from 'react';

const VideoViralista = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            setIsLocked(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 font-sans selection:bg-[#00cfcf] selection:text-black">

            {/* Encabezado estilo Viralista */}
            <div className="max-w-4xl w-full text-center mb-12 space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
                    <span className="block mb-2">¿QUIERES ESCALAR?</span>
                    <span className="text-[#00cfcf] block">ACCEDE AL MÉTODO PREMIUM</span>
                </h1>

                <div className="max-w-2xl mx-auto pt-4">
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        Deja de ganar centavos con métodos públicos.<br className="hidden md:block" />
                        Desbloquea el <span className="text-white border-b-2 border-white/30">Método Premium</span> y escala tu facturación hoy mismo.
                    </p>
                </div>
            </div>

            {/* Contenedor del Video + Bloqueo */}
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,207,207,0.15)] border border-white/10">

                {/* VIDEO DE FONDO */}
                {!isLocked ? (
                    <iframe
                        src="https://player.vimeo.com/video/1151415308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        className="w-full h-full"
                        title="Clase Privada"
                    ></iframe>
                ) : (
                    <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center">
                        <div className="text-white/10 font-black text-6xl md:text-8xl italic uppercase select-none tracking-tighter">PREMIUM</div>
                    </div>
                )}

                {/* EL CANDADO (OVERLAY CONTENIDO DENTRO DEL VIDEO COMO VIRALISTA) */}
                {isLocked && (
                    <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-white text-center">
                        <div className="max-w-md w-full animate-fade-in space-y-8">
                            <div className="space-y-2">
                                <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                    Vídeo Exclusivo: Cómo acceder al método premium
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight">Acceso VIP</h2>
                                <p className="text-gray-400 font-medium">
                                    Estás a un paso de las mejores ofertas. Completa tus datos.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00cfcf] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Tu Nombre"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00cfcf] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Tu Mejor Email"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#00cfcf] hover:bg-[#00e6e6] text-black font-black py-5 rounded-full text-xl transition-all uppercase tracking-wide shadow-xl active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M4.5 3L15.5 10L4.5 17V3Z" /></svg>
                                    VER CLASE AHORA
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            {/* Trust Indicator below video */}
            {!isLocked && (
                <div className="mt-12 text-center animate-fade-in">
                    <button className="bg-[#00cfcf] hover:bg-[#00e6e6] text-black font-black py-4 px-10 rounded-full text-xl transition-all uppercase tracking-wide shadow-[0_0_30px_rgba(0,207,207,0.3)] flex items-center gap-3">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M4.5 3L15.5 10L4.5 17V3Z" /></svg>
                        QUIERO AGENDAR MI LLAMADA
                    </button>
                </div>
            )}

            {/* Footer simple dark */}
            <div className="mt-20 text-gray-600 text-[10px] uppercase font-bold tracking-[0.3em]">
                © {new Date().getFullYear()} IPHONE MACIA - MÉTODO PREMIUM
            </div>
        </div>
    );
}

export default VideoViralista;
