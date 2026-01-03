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
    title: "Pago recibido",
    time: "ahora",
    type: 'payment',
    message: <span>Transferencia de <span className="text-white font-black text-xl">2.850,50 €</span> recibida de Amazon.</span>
  },
  {
    title: "Vendido: Enviar ahora",
    time: "hace 2m",
    type: 'sale',
    message: (
        <div className="flex flex-col gap-1">
            <span>Producto: <span className="text-white font-semibold">Monitor Gaming 27"</span></span>
            <div className="flex items-center gap-1.5 text-green-400 font-bold text-[10px] bg-green-400/10 self-start px-2 py-0.5 rounded-full border border-green-400/20">
                BENEFICIO: 112,50 €
            </div>
        </div>
    )
  },
  {
    title: "Pago desembolsado",
    time: "hace 4h",
    type: 'payment',
    message: <span>Se ha enviado un pago de <span className="text-white font-bold">410,20 €</span> a tu cuenta.</span>
  },
  {
    title: "Vendido: Enviar ahora",
    time: "hace 12m",
    type: 'sale',
    message: (
        <div className="flex flex-col gap-1">
            <span>Producto: <span className="text-white font-semibold">Silla Ergonómica Pro</span></span>
            <div className="flex items-center gap-1.5 text-green-400 font-bold text-[10px] bg-green-400/10 self-start px-2 py-0.5 rounded-full border border-green-400/20">
                BENEFICIO: 64,00 €
            </div>
        </div>
    )
  },
  {
    title: "Saldo actualizado",
    time: "hace 8h",
    type: 'payment',
    message: <span>Saldo total disponible: <span className="text-white font-black text-xl">8.450,25 €</span>.</span>
  },
  {
    title: "Vendido: Enviar ahora",
    time: "hace 15m",
    type: 'sale',
    message: (
        <div className="flex flex-col gap-1">
            <span>Producto: <span className="text-white font-semibold">Teclado Mecánico RGB</span></span>
            <div className="flex items-center gap-1.5 text-green-400 font-bold text-[10px] bg-green-400/10 self-start px-2 py-0.5 rounded-full border border-green-400/20">
                BENEFICIO: 45,90 €
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
        className={`relative bg-[#1C1C1E] rounded-[20px] w-full max-w-[340px] p-4 font-sans transition-all duration-500 cursor-default select-none group overflow-hidden ${className}`}
        style={{ 
            animationDelay: delay,
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8)', // Custom smooth shadow
            border: '1px solid rgba(255,255,255,0.08)', // Clean 1px border
            ...style 
        }}
    >
        <div className="animate-float-y" style={{ animationDuration: floatDuration }}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-[22px] h-[22px] rounded-[6px] overflow-hidden bg-black border border-white/10 shadow-sm relative shrink-0">
                        <img 
                            src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/3d/8e/d53d8e64-0731-8e36-da5a-356ba33b2117/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/230x0w.webp" 
                            alt="Amazon Seller" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-[11px] text-white/70 font-bold tracking-wider uppercase truncate">AMAZON SELLER</span>
                </div>
                <span className="text-[10px] text-[#8E8E93] font-medium shrink-0">{time}</span>
            </div>
            
            <div className="pl-0.5">
                <h4 className="text-[15px] font-semibold text-white mb-0.5 leading-tight tracking-tight">{title}</h4>
                <div className="text-[14px] text-white/80 leading-[1.4] tracking-tight">
                    {message}
                </div>
            </div>
        </div>
    </div>
);

const FloatingEmoji = ({ emoji, className, delay }: { emoji: string, className: string, delay: string }) => (
    <div 
        className={`absolute text-6xl md:text-8xl select-none pointer-events-none animate-float-slow opacity-10 filter blur-[2px] ${className}`} 
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
    <section ref={sectionRef} className="relative py-16 lg:py-32 px-6 overflow-hidden min-h-[950px] flex items-center bg-gradient-to-b from-bg-dark via-[#080a0f] to-black">
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
                        TU TIENDA <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">LISTA PARA VENDER</span>
                    </h2>
                    
                    {/* MOBILE ROTATING NOTIFICATIONS AREA */}
                    {/* Fixed Height to 180px and careful overflow/margin handling to avoid border clipping */}
                    <div className="lg:hidden w-full flex flex-col items-center h-[180px] mb-8 mt-4 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120px] bg-[#FF9900]/5 blur-[50px] rounded-full pointer-events-none"></div>
                        
                        <div className="relative w-full flex items-center justify-center h-full">
                            {NOTIFICATIONS.map((notif, idx) => {
                                const diff = (idx - currentIndex + NOTIFICATIONS.length) % NOTIFICATIONS.length;
                                
                                // Clean mobile view: No partial cards. Strict opacity toggle.
                                let statusClasses = "opacity-0 pointer-events-none scale-95 absolute inset-0 m-auto h-fit";
                                let zIndex = 0;
                                
                                if (diff === 0) {
                                    statusClasses = "opacity-100 scale-100 z-30 absolute inset-0 m-auto h-fit";
                                    zIndex = 30;
                                }

                                return (
                                    <div 
                                        key={idx} 
                                        className={`transition-all duration-500 ease-in-out transform ${statusClasses} w-full flex justify-center p-2`} // added padding to wrapper to prevent shadow clipping
                                        style={{ zIndex }}
                                    >
                                        <IOSNotification 
                                            title={notif.title}
                                            time={notif.time}
                                            message={notif.message}
                                            className={diff === 0 ? "" : ""} // Removed bg-change, let component handle it
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 lg:mb-12 font-medium leading-relaxed">
                        <span className="text-white font-bold">La notificación que cambiará tu día.</span> Aprende a recibir estos avisos cada mañana en tu móvil mientras tomas el primer café.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button 
                            onClick={onOpenModal}
                            className="relative group px-10 py-5 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-3 shadow-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer bg-[#05070A] border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-100 group-hover:opacity-90 transition-opacity"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                <PlayCircle className="w-5 h-5 fill-white/20" />
                                ACCESO INMEDIATO
                            </span>
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
                            Resultados Reales
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FF9900]" />
                            Método 2026
                        </div>
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