import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5 relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amazon/20 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 items-start">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 bg-amazon rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,153,0,0.2)]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="A" className="w-6 h-6 object-contain brightness-0" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none font-heading tracking-tight italic">FBA ACADEMY</span>
                <span className="text-[10px] text-amazon font-black tracking-[0.3em] uppercase mt-1">Mastery Program</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm">
              La metodología definitiva para construir un negocio sólido en Amazon FBA, escalable y con rentabilidad real.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'Resultados', 'Metodología', 'Mentor'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-amazon text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Soporte</h4>
            <p className="text-gray-500 text-xs font-medium leading-relaxed">
              ¿Tienes preguntas? Escríbenos y te ayudaremos a dar el siguiente paso en tu carrera digital.
            </p>
            <div className="pt-2">
              <span className="text-white font-black text-xs border-b border-amazon/50 pb-1 cursor-pointer hover:text-amazon transition-colors uppercase tracking-widest">
                Contáctanos
              </span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 space-y-8">
          <p className="text-[9px] text-gray-600 text-center max-w-4xl mx-auto leading-relaxed uppercase font-bold tracking-[0.1em] opacity-60">
            Amazon FBA Academy es una plataforma de educación independiente. Amazon, Amazon FBA y sus logotipos son marcas comerciales de Amazon.com, Inc. Este sitio web no está afiliado, respaldado ni patrocinado por Amazon Inc. Resultados personales pueden variar según el compromiso.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">
              © 2026 FBA ACADEMY • BY EMI DE LA SIERRA
            </p>
            <div className="flex gap-6 text-[10px] font-black text-gray-700 uppercase tracking-widest">
              <span className="hover:text-gray-400 cursor-pointer">Privacidad</span>
              <span className="hover:text-gray-400 cursor-pointer">Términos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;