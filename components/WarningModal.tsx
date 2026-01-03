import React from 'react';
import { AlertCircle, ArrowDown, X } from 'lucide-react';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-[#0F1115] border border-[#FF9900]/30 rounded-[20px] w-full max-w-sm p-6 shadow-[0_0_50px_rgba(255,153,0,0.1)] animate-fade-in-up overflow-hidden text-center">
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-[#FF9900]/10 rounded-full flex items-center justify-center text-[#FF9900] animate-pulse">
                <AlertCircle className="w-6 h-6" />
            </div>
        </div>

        <h3 className="text-xl font-black font-heading text-white mb-2">
            ESPERA UN MOMENTO
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Queremos asegurarnos de que esta oportunidad es para ti. <br/>
            <span className="text-white font-bold">Por favor, revisa la información de la web</span> antes de solicitar acceso.
        </p>

        <div className="inline-flex items-center gap-2 text-[#FF9900] text-xs font-black uppercase tracking-widest animate-bounce">
            <ArrowDown className="w-4 h-4" />
            Haz Scroll para desbloquear
            <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default WarningModal;