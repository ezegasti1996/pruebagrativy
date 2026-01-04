import React from 'react';
import { X, User, Mail, MessageSquare, ArrowRight, Lock } from 'lucide-react';

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos a tu CRM o Email
        alert("¡Datos enviados! Redirigiendo a la clase...");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-[#0F1115] border border-white/10 rounded-[30px] w-full max-w-md p-8 shadow-[0_0_50px_rgba(255,153,0,0.15)] animate-fade-in-up overflow-hidden">

                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED] via-[#FF9900] to-[#EC4899]"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amazon/10 mb-4 text-amazon animate-pulse">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black font-heading text-white mb-2">
                        ACCESO A LA <span className="text-amazon italic">CLASE</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Completa tus datos para desbloquear el entrenamiento gratuito de 0 a 10k/mes con Amazon FBA.
                    </p>
                </div>

                <form action="https://formsubmit.co/emiclipsvirales@gmail.com" method="POST" className="space-y-4">
                    <input type="hidden" name="_next" value="https://emii-13hn.vercel.app/video" />
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Name Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Nombre Completo</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amazon transition-colors">
                                <User className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="nombre"
                                required
                                placeholder="Ej. Juan Pérez"
                                className="w-full bg-[#05070A] border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amazon/50 focus:ring-1 focus:ring-amazon/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Tu Mejor Email</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amazon transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="juan@email.com"
                                className="w-full bg-[#05070A] border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amazon/50 focus:ring-1 focus:ring-amazon/50 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* WhatsApp Input */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">WhatsApp</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amazon transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <input
                                type="tel"
                                name="whatsapp"
                                required
                                placeholder="+34 600 000 000"
                                className="w-full bg-[#05070A] border border-white/10 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amazon/50 focus:ring-1 focus:ring-amazon/50 transition-all placeholder:text-gray-600"
                                onKeyPress={(e) => {
                                    // Prevent non-numeric input if desired, or leave open
                                }}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-black py-4 rounded-xl mt-6 shadow-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                    >
                        VER CLASE AHORA
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[10px] text-center text-gray-500 mt-4">
                        Tus datos están 100% seguros. No hacemos spam.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LeadFormModal;