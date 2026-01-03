import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black/60 border-t border-white/5 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Rebranded Logo Centered */}
        <div className="flex flex-col items-center gap-4 mb-10 group cursor-default">
             <div className="w-14 h-14 bg-gradient-to-br from-[#FF9900] to-[#E88B00] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,153,0,0.3)] transform group-hover:-translate-y-1 transition-transform duration-300">
                 <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" 
                    alt="Logo Icon" 
                    className="w-8 h-8 object-contain brightness-0 invert"
                 />
            </div>
            <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                    <span className="text-2xl font-black italic tracking-tighter text-white font-heading">FBA</span>
                    <span className="text-2xl font-black italic tracking-tighter text-[#FF9900] font-heading">ACADEMY</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.4em] text-gray-600 uppercase">
                    E-Commerce Education
                </span>
            </div>
        </div>
        
        <div className="flex gap-10 text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-12">
          <a href="#" className="hover:text-[#FF9900] transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors duration-300">Contacto</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors duration-300">Privacidad</a>
        </div>
        
        <p className="text-[10px] text-gray-600 text-center max-w-2xl leading-relaxed uppercase font-bold tracking-widest px-4">
          Amazon FBA Academy es una plataforma independiente. Amazon y el logo de Amazon son marcas comerciales de Amazon.com, Inc. o sus afiliados. 
          <br/>Este sitio no es parte del sitio web de Amazon ni de Amazon Inc.
        </p>
        
        <p className="mt-8 text-[11px] font-black text-gray-700 uppercase tracking-[0.4em]">
          © 2026 FBA ACADEMY
        </p>
      </div>
    </footer>
  );
};

export default Footer;