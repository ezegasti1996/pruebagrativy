import React, { useEffect, useRef, useState } from 'react';
import { PlayCircle, CheckCircle2, Star, TrendingUp, AlertTriangle, Package } from 'lucide-react';

interface ClosingProps {
    onOpenModal: () => void;
}

interface NotificationData {
    title: string;
    message: React.ReactNode;
    time: string;
    type: 'payment' | 'sale';
}

const NOTIFICATIONS: NotificationData[] = [
    {
        title: "Pago transferido",
        time: "ahora",
        type: 'payment',
        message: <span className="text-gray-200">Amazon te ha enviado <span className="text-white font-bold">2.850,50 €</span></span>
    },
    {
        title: "¡Venta realizada!",
        time: "hace 2m",
        type: 'sale',
        message: (
            <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded border border-white/10 bg-white p-0.5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=100&q=80" alt="Monitor" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-gray-200 text-xs leading-tight">Monitor Gaming 27"</span>
                    <span className="text-[#FF9900] font-bold text-[10px]">Beneficio: +112,50 €</span>
                </div>
            </div>
        )
    },
    {
        title: "Pago transferido",
        time: "hace 4h",
        type: 'payment',
        message: <span className="text-gray-200">Amazon te ha enviado <span className="text-white font-bold">410,20 €</span></span>
    },
    {
        title: "¡Venta realizada!",
        time: "hace 12m",
        type: 'sale',
        message: (
            <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded border border-white/10 bg-white p-0.5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=100&q=80" alt="Chair" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-gray-200 text-xs leading-tight">Silla Ergonómica Pro</span>
                    <span className="text-[#FF9900] font-bold text-[10px]">Beneficio: +64,00 €</span>
                </div>
            </div>
        )
    },
    {
        title: "Resumen de ventas",
        time: "hace 8h",
        type: 'payment',
        message: <span className="text-gray-200">Ventas de hoy: <span className="text-white font-bold">1.450,25 €</span></span>
    },
    {
        title: "¡Venta realizada!",
        time: "hace 15m",
        type: 'sale',
        message: (
            <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded border border-white/10 bg-white p-0.5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=100&q=80" alt="Keyboard" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-gray-200 text-xs leading-tight">Teclado Mecánico RGB ⌨️</span>
                    <span className="text-[#FF9900] font-bold text-[10px]">Beneficio: +45,90 €</span>
                </div>
            </div>
        )
    },
    {
        title: "¡Venta realizada!",
        time: "hace 18m",
        type: 'sale',
        message: (
            <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded border border-white/10 bg-white p-0.5 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=100&q=80" alt="Smartwatch" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-gray-200 text-xs leading-tight">Smartwatch Deportivo ⌚</span>
                    <span className="text-[#FF9900] font-bold text-[10px]">Beneficio: +38,50 €</span>
                </div>
            </div>
        )
    }
];

const IOSNotification = ({
    title,
    message,
    time,
    delay = "0s",
    className = "",
    style = {},
    floatDuration = "6s"
}: {
    title: string,
    message: React.ReactNode,
    time: string,
    delay?: string,
    className?: string,
    style?: React.CSSProperties,
    floatDuration?: string
}) => (
    <div
        className={`relative bg-[#2C2C2E]/90 backdrop-blur-md rounded-[18px] w-full max-w-[340px] p-3.5 font-sans transition-all duration-500 cursor-default select-none group overflow-hidden ${className}`}
        style={{
            animationDelay: delay,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            ...style
        }}
    >
        <div className="animate-float-y" style={{ animationDuration: floatDuration }}>
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                    {/* Real Amazon Seller App Icon Look */}
                    <div className="w-6 h-6 rounded-[5px] bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
                            alt="A"
                            className="w-4 h-4 object-contain"
                        />
                    </div>
                    <span className="text-[10px] text-white/90 font-bold tracking-wide uppercase">AMAZON SELLER</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{time}</span>
            </div>

            <div className="flex gap-3">
                {/* Sidebar accent based on content content estimation or random? We'll make it generic Amazon style */}
                <div className="w-[3px] rounded-full bg-[#FF9900] h-auto opacity-80"></div>

                <div className="flex-1">
                    <h4 className="text-[14px] font-bold text-white mb-0.5 leading-tight">{title}</h4>
                    <div className="text-[13px] leading-[1.4] tracking-tight">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FloatingEmoji = ({ emoji, className, delay }: { emoji: string, className: string, delay: string }) => (
    <div
        className={`absolute text-6xl md:text-8xl select-none pointer-events-none animate-float-slow opacity-5 grayscale filter blur-[1px] ${className}`}
        style={{ animationDelay: delay }}
    >
        {emoji}
    </div>
);

const Closing: React.FC<ClosingProps> = ({ onOpenModal }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Use dynamic timing to cycle notifications
    useEffect(() => {
        let timeoutId: number;
        const rotate = () => {
            setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
            const nextDelay = 3000 + Math.random() * 2000;
            timeoutId = window.setTimeout(rotate, nextDelay);
        };
        timeoutId = window.setTimeout(rotate, 3500);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section ref={sectionRef} className="relative py-16 lg:py-24 px-6 overflow-hidden min-h-[700px] flex items-center bg-gradient-to-b from-bg-dark via-[#080a0f] to-black">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#EC4899]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <FloatingEmoji emoji="💰" className="top-[5%] left-[5%] rotate-[-15deg]" delay="0s" />
            <FloatingEmoji emoji="📦" className="bottom-[10%] left-[40%] rotate-[10deg]" delay="1s" />
            <FloatingEmoji emoji="📈" className="top-[15%] right-[10%] rotate-[-10deg] scale-50" delay="2s" />

            <div className="container mx-auto relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* LEFT CONTENT */}
                    <div className={`w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-inner">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF9900]"></span>
                            </span>
                            <span className="text-[10px] font-black text-[#FF9900] uppercase tracking-[0.2em]">Plazas Limitadas</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 lg:mb-8 font-heading leading-[1.05] tracking-tight">
                            TU TIENDA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">LISTA PARA VENDER</span>
                        </h2>

                        <p className="hidden lg:block text-gray-300 text-lg md:text-xl max-w-xl mb-8 font-medium leading-relaxed">
                            <span className="text-white font-bold">La notificación que cambiará tu día.</span> Aprende a recibir estos avisos cada mañana en tu móvil mientras tomas el primer café.
                        </p>

                        {/* MOBILE ROTATING NOTIFICATIONS AREA */}
                        {/* Fixed Height to 180px and careful overflow/margin handling to avoid border clipping */}
                        <div className="lg:hidden w-full flex flex-col items-center h-[180px] mb-8 mt-4 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120px] bg-[#FF9900]/5 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="relative w-full flex items-center justify-center h-full">
                                {NOTIFICATIONS.map((notif, idx) => {
                                    const length = NOTIFICATIONS.length;
                                    const diff = (idx - currentIndex + length) % length;

                                    // Stack Effect Logic (Cascading)
                                    let statusClasses = "opacity-0 pointer-events-none scale-90 -translate-y-12 absolute inset-0 m-auto h-fit z-0"; // Default hidden/behind state

                                    if (diff === 0) {
                                        // Front Card
                                        statusClasses = "opacity-100 scale-100 translate-y-0 z-30 absolute inset-0 m-auto h-fit shadow-2xl";
                                    } else if (diff === 1) {
                                        // 2nd in Stack
                                        statusClasses = "opacity-70 scale-95 -translate-y-3 z-20 absolute inset-0 m-auto h-fit blur-[0.5px]";
                                    } else if (diff === 2) {
                                        // 3rd in Stack
                                        statusClasses = "opacity-40 scale-90 -translate-y-6 z-10 absolute inset-0 m-auto h-fit blur-[1px]";
                                    } else if (diff === length - 1) {
                                        // Exiting/Previous Card (Fade out cleanly)
                                        statusClasses = "opacity-0 scale-105 translate-y-8 z-40 absolute inset-0 m-auto h-fit";
                                    }

                                    return (
                                        <div
                                            key={idx}
                                            className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${statusClasses} w-full flex justify-center p-2`}
                                            style={{ zIndex: diff === 0 ? 30 : (20 - diff) }}
                                        >
                                            <IOSNotification
                                                title={notif.title}
                                                time={notif.time}
                                                message={notif.message}
                                                className={diff === 0 ? "shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : ""}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={onOpenModal}
                                className="relative group px-10 py-5 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-3 shadow-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer bg-[#05070A] border border-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-100 group-hover:opacity-90 transition-opacity"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5 fill-white/20" />
                                    QUIERO VENDER EN AMAZON
                                </span>
                            </button>
                        </div>


                    </div>

                    {/* DESKTOP NOTIFICATIONS AREA */}
                    <div className={`hidden lg:flex w-full lg:w-2/5 relative flex-col items-center justify-center lg:justify-end transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>

                        <div className="flex flex-col gap-6 relative w-full max-w-[420px]">

                            <div className="absolute top-[20%] right-[0%] w-[400px] h-[400px] bg-[#FF9900]/5 blur-[100px] rounded-full pointer-events-none"></div>

                            {NOTIFICATIONS.slice(currentIndex % 5, (currentIndex % 5) + 3).map((notif, i) => (
                                <div
                                    key={notif.title + i}
                                    className={`transform transition-all duration-1000 ease-out animate-fade-in-up
                                    ${i === 0 ? 'self-end hover:-translate-x-4 opacity-60 scale-90' : ''}
                                    ${i === 1 ? 'self-center z-20 hover:scale-105 -mr-16' : ''}
                                    ${i === 2 ? 'self-start hover:translate-x-4 opacity-80 scale-95 -mt-2 ml-4' : ''}
                                `}
                                >
                                    <IOSNotification
                                        title={notif.title}
                                        time={notif.time}
                                        message={notif.message}
                                        className={i === 1 ? "shadow-[0_30px_70px_rgba(255,153,0,0.3)] max-w-[360px]" : "opacity-80"}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
            .fill-mode-forwards {
                animation-fill-mode: forwards;
            }
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(30px) scale(0.95); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            }
            
            @keyframes float-y {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            .animate-float-y {
                animation-name: float-y;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
            }
        `}</style>
        </section>
    );
};

export default Closing;