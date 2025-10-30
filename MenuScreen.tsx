import { ArrowLeft, ChevronRight } from 'lucide-react';

interface MenuScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact') => void;
  onShowFrustration: (message: string) => void;
}

export function MenuScreen({ onNavigate, onShowFrustration }: MenuScreenProps) {
  const handleConfigClick = () => {
    onShowFrustration(
      "😕 Frustração: Entrei nas configurações mas não tem opção de cancelar a assinatura!"
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white">Menu</h2>
        </div>
      </div>

      <div className="px-4 py-6">
        <p className="text-sm text-gray-500 mb-4">Configurações e ajuda</p>
        
        <div className="space-y-2">
          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">👤</span>
              <span className="text-sm">Meus dados</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔔</span>
              <span className="text-sm">Notificações</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔒</span>
              <span className="text-sm">Privacidade e segurança</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button 
            onClick={handleConfigClick}
            className="w-full bg-white border-2 border-red-300 rounded-lg p-4 flex items-center justify-between hover:border-red-400 transition-colors relative"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">⚙️</span>
              <span className="text-sm">Configurações</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">⚠️</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">❓</span>
              <span className="text-sm">Central de ajuda</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="text-sm">Fale conosco</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">ℹ️</span>
              <span className="text-sm">Sobre o app</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Área Premium - sem opção de cancelar */}
        <div className="mt-6 bg-gradient-to-r from-[#E4105D] to-[#D4145A] rounded-lg p-4 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">💎</span>
            <div>
              <p className="text-sm">Serasa Premium</p>
              <p className="text-xs opacity-90">Assinatura ativa</p>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-white/20 rounded-lg py-2 text-sm hover:bg-white/30 transition-colors">
              Ver benefícios
            </button>
            <button className="w-full bg-white/20 rounded-lg py-2 text-sm hover:bg-white/30 transition-colors">
              Indicar amigos
            </button>
          </div>
          
          {/* Nota de problema */}
          <div className="mt-3 bg-white/10 rounded p-2 text-xs">
            ⚠️ Sem opção de "Cancelar assinatura"
          </div>
        </div>

        {/* Call to action para tentar site */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm mb-2">😓 Não encontrou como cancelar no app?</p>
          <p className="text-xs text-gray-600 mb-3">Tente acessar pelo site ou contatar a central</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg text-sm hover:bg-[#0052A3] transition-colors"
          >
            Ir para contato/site
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 grid grid-cols-5 gap-1 max-w-md mx-auto">
        <button 
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 py-2 text-gray-500"
        >
          <div className="w-6 h-6 flex items-center justify-center">🏠</div>
          <span className="text-xs">Início</span>
        </button>
        <button 
          onClick={() => onNavigate('search')}
          className="flex flex-col items-center gap-1 py-2 text-gray-500"
        >
          <div className="w-6 h-6 flex items-center justify-center">🔧</div>
          <span className="text-xs">Serviços</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-white relative -mt-4">
          <div className="w-14 h-14 bg-[#0066CC] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">💎</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Meu CPF</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-[#E4105D]">
          <div className="w-6 h-6 flex items-center justify-center">📊</div>
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-500">
          <div className="w-6 h-6 flex items-center justify-center">👤</div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}
