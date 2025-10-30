import { ArrowLeft, Camera } from 'lucide-react';
import { useState } from 'react';

interface ProfileScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact') => void;
  onShowFrustration: (message: string) => void;
}

export function ProfileScreen({ onNavigate, onShowFrustration }: ProfileScreenProps) {
  const [showFacialRecognition, setShowFacialRecognition] = useState(false);

  const handleFacialAuth = () => {
    setShowFacialRecognition(true);
    setTimeout(() => {
      setShowFacialRecognition(false);
      onShowFrustration(
        "😤 Frustração: Fiz reconhecimento facial para acessar meu perfil, mas ainda não encontro onde cancelar!"
      );
    }, 2000);
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
          <h2 className="text-white">Meu Perfil</h2>
        </div>
      </div>

      {/* Reconhecimento Facial Overlay */}
      {showFacialRecognition && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-48 h-48 border-4 border-white rounded-full mx-auto mb-4 relative overflow-hidden">
              <div className="absolute inset-0 border-t-4 border-[#0066CC] animate-spin rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
            </div>
            <p className="text-xl mb-2">Reconhecimento Facial</p>
            <p className="text-sm text-gray-300">Posicione seu rosto na área indicada</p>
          </div>
        </div>
      )}

      <div className="px-4 py-6">
        {/* Avatar e dados básicos */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-[#E4105D] to-[#D4145A] rounded-full flex items-center justify-center text-white text-3xl">
              👤
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0066CC] rounded-full flex items-center justify-center text-white">
              <Camera size={16} />
            </button>
          </div>
          
          <h3 className="text-xl">Marcos Filipe</h3>
          <p className="text-sm text-gray-500">marcos.filipe@email.com</p>
          <p className="text-sm text-gray-500">CPF: 123.456.789-00</p>
          
          {/* Badge Premium */}
          <div className="mt-3 bg-gradient-to-r from-[#E4105D] to-[#D4145A] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <span>💎</span>
            <span>Membro Premium</span>
          </div>
        </div>

        {/* Reconhecimento Facial */}
        <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📸</span>
            <div className="flex-1">
              <p className="text-sm">Reconhecimento Facial</p>
              <p className="text-xs text-gray-600">Segurança adicional para sua conta</p>
            </div>
          </div>
          <button 
            onClick={handleFacialAuth}
            className="w-full bg-[#0066CC] text-white py-2 rounded-lg text-sm hover:bg-[#0052A3] transition-colors"
          >
            Ativar reconhecimento facial
          </button>
        </div>

        {/* Informações da conta */}
        <div className="space-y-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">Nome completo</p>
            <p className="text-sm">Marcos Filipe da Silva</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">E-mail</p>
            <p className="text-sm">marcos.filipe@email.com</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">Telefone</p>
            <p className="text-sm">(11) 98765-4321</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">Data de nascimento</p>
            <p className="text-sm">15/03/1990</p>
          </div>
        </div>

        {/* Assinatura Premium - SEM opção de cancelar */}
        <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] rounded-lg p-4 text-white mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm opacity-90">Plano Premium</p>
              <p className="text-xl">R$ 29,90/mês</p>
            </div>
            <span className="text-3xl">💎</span>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3 mb-3 text-xs">
            <p className="mb-2">✓ Monitoramento 24/7</p>
            <p className="mb-2">✓ Alertas de score</p>
            <p className="mb-2">✓ Relatórios detalhados</p>
            <p>✓ Suporte prioritário</p>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-white/20 rounded-lg py-2 text-sm hover:bg-white/30 transition-colors">
              Ver benefícios
            </button>
            <button className="flex-1 bg-white/20 rounded-lg py-2 text-sm hover:bg-white/30 transition-colors">
              Renovação automática
            </button>
          </div>
          
          {/* Ponto de frustração */}
          <div className="mt-3 bg-white/10 rounded p-2 text-xs border border-white/20">
            ⚠️ Sem opção de "Gerenciar assinatura" ou "Cancelar"
          </div>
        </div>

        {/* Botões de ação */}
        <div className="space-y-2">
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-sm hover:border-gray-300 transition-colors">
            Editar informações
          </button>
          
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-sm hover:border-gray-300 transition-colors">
            Alterar senha
          </button>
          
          <button 
            onClick={() => {
              onShowFrustration(
                "😫 Frustração: Preciso ligar para a central para conseguir cancelar? Achei que seria simples cancelar pelo app!"
              );
              onNavigate('contact');
            }}
            className="w-full bg-blue-50 border-2 border-blue-300 rounded-lg py-3 text-sm text-[#0066CC] hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
          >
            <span>📞</span>
            <span>Falar com central (única opção?)</span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">⚠️</span>
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
        <button 
          onClick={() => onNavigate('menu')}
          className="flex flex-col items-center gap-1 py-2 text-gray-500"
        >
          <div className="w-6 h-6 flex items-center justify-center">📊</div>
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-[#E4105D]">
          <div className="w-6 h-6 flex items-center justify-center">👤</div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}
