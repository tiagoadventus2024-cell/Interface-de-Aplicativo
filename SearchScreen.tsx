import { Search, X, ArrowLeft } from 'lucide-react';

interface SearchScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact') => void;
  onShowFrustration: (message: string) => void;
}

export function SearchScreen({ onNavigate, onShowFrustration }: SearchScreenProps) {
  const handleNoResult = () => {
    onShowFrustration(
      "😤 Frustração: Busquei por 'cancelar', 'cancelamento', 'assinatura' e nada aparece relacionado!"
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header com busca */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-white">Serviços</h2>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar serviços..."
            defaultValue="cancelar premium"
            className="w-full pl-10 pr-10 py-3 rounded-lg"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Resultados "não relacionados" - problema de UX */}
      <div className="px-4 py-6">
        <p className="text-sm text-gray-500 mb-4">Serviços disponíveis</p>
        
        <div className="space-y-3">
          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 text-left hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              📱
            </div>
            <div className="flex-1">
              <p className="text-sm">Negociar dívidas</p>
              <p className="text-xs text-gray-500">Regularize suas pendências</p>
            </div>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 text-left hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              💳
            </div>
            <div className="flex-1">
              <p className="text-sm">Ofertas de cartão</p>
              <p className="text-xs text-gray-500">Confira as melhores ofertas</p>
            </div>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 text-left hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              📊
            </div>
            <div className="flex-1">
              <p className="text-sm">Consultar CPF</p>
              <p className="text-xs text-gray-500">Veja seu score atualizado</p>
            </div>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-3 text-left hover:border-gray-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              ⭐
            </div>
            <div className="flex-1">
              <p className="text-sm">Premium Serasa</p>
              <p className="text-xs text-gray-500">Conheça os benefícios</p>
            </div>
          </button>
        </div>

        {/* Mensagem de frustração */}
        <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-sm mb-2">Ponto de Frustração</p>
              <p className="text-xs text-gray-700 mb-3">
                Nenhum resultado para "cancelar premium" aparece na busca. 
                O usuário não consegue encontrar a opção de cancelamento.
              </p>
              <button 
                onClick={handleNoResult}
                className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors"
              >
                Ver frustração do usuário
              </button>
            </div>
          </div>
        </div>

        {/* Sugestão de tentar pelo site */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm mb-2">💡 Tentando pelo site...</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg text-sm hover:bg-[#0052A3] transition-colors"
          >
            Ir para o site da Serasa
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
        <button className="flex flex-col items-center gap-1 py-2 text-[#E4105D]">
          <div className="w-6 h-6 flex items-center justify-center">🔧</div>
          <span className="text-xs">Serviços</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-white relative -mt-4">
          <div className="w-14 h-14 bg-[#0066CC] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">💎</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Meu CPF</span>
        </button>
        <button 
          onClick={() => onNavigate('menu')}
          className="flex flex-col items-center gap-1 py-2 text-gray-500"
        >
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
