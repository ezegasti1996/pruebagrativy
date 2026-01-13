
import React, { useState } from 'react';

export default function VideoViralista() {
    const [isLocked, setIsLocked] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            setIsLocked(false); // Desbloquea el video
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 font-sans">

            {/* Encabezado estilo Viralista */}
            <div className="max-w-4xl w-full text-center mb-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    ATENCIÓN: Clase Exclusiva de Amazon FBA
                </h1>
                <p className="text-red-600 font-bold uppercase tracking-widest text-sm">
                    Acceso Restringido - Solo por tiempo limitado
                </p>
            </div>

            {/* Contenedor del Video + Bloqueo */}
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-white">

                {/* VIDEO DE FONDO (Vimeo Embed matching /video) */}
                {!isLocked ? (
                    <iframe
                        src="https://player.vimeo.com/video/1151415308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        className="w-full h-full"
                        title="Clase Privada"
                    ></iframe>
                ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                        {/* Thumbnail o placeholder */}
                        <div className="text-gray-700 font-bold text-xl uppercase tracking-tighter opacity-20 select-none">Video en espera...</div>
                    </div>
                )}

                {/* EL CANDADO (OVERLAY) */}
                {isLocked && (
                    <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white">
                        <div className="bg-white text-gray-900 p-8 rounded-lg max-w-md w-full shadow-2xl animate-fade-in relative">
                            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 tracking-tight">¡Estás a un paso!</h2>
                            <p className="text-gray-600 mb-6 text-center text-sm">
                                Ingresa tu nombre y correo para desbloquear la reproducción inmediata.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Tu Nombre</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border border-gray-300 rounded p-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                                        placeholder="Ej. Emiliano"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Tu Mejor Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full border border-gray-300 rounded p-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-300"
                                        placeholder="tu@email.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded text-xl transition-all uppercase tracking-wide shadow-lg transform active:scale-[0.98]"
                                >
                                    Ver Video Ahora ➤
                                </button>
                            </form>
                            <p className="text-xs text-center text-gray-400 mt-4">Tus datos están 100% seguros.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer simple */}
            <div className="mt-8 text-gray-500 text-sm font-medium">
                &copy; {new Date().getFullYear()} FBA Academy. Todos los derechos reservados.
            </div>
        </div>
    );
}
