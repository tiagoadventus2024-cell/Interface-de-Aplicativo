import { X } from 'lucide-react';

interface FrustrationOverlayProps {
  message: string;
  onClose: () => void;
}

export function FrustrationOverlay({ message, onClose }: FrustrationOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in zoom-in duration-200">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg flex items-center gap-2">
            <span className="text-2xl">💭</span>
            <span>Pensamento do Usuário</span>
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-4 mb-4">
          <p className="text-sm leading-relaxed">
            {message}
          </p>
        </div>

        <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E4105D'/%3E%3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='white'%3E👤%3C/text%3E%3C/svg%3E"
              alt="Marcos Filipe"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm">Marcos Filipe</p>
            <p className="text-xs text-gray-500">Usuário Premium</p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-4 bg-gradient-to-r from-[#E4105D] to-[#D4145A] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Continuar navegando
        </button>
      </div>
    </div>
  );
}
