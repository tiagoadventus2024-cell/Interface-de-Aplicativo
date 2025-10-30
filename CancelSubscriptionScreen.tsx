import { ArrowLeft, AlertCircle, ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import serasaLogo from 'figma:asset/1bceedb1db7e6b0d925c7a523d7bcaa48c9d5230.png';

interface CancelSubscriptionScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact' | 'cancel' | 'success') => void;
}

export function CancelSubscriptionScreen({ onNavigate }: CancelSubscriptionScreenProps) {
  const [showReasons, setShowReasons] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleCancel = () => {
    if (selectedReason) {
      onNavigate('success');
    } else {
      setShowReasons(true);
    }
  };

  const reasons = [
    '💰 Preço muito alto',
    '📊 Não uso os recursos',
    '🔄 Encontrei alternativa melhor',
    '😕 Não atendeu expectativas',
    '🎯 Era só para testar',
    '💭 Outro motivo'
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('profile')}
              className="text-white"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-white">Gerenciar Assinatura</h2>
          </div>
          <img src={serasaLogo} alt="Serasa" className="h-6" />
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Badge de melhoria */}
        <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-lg p-3 flex items-start gap-3">
          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
          <div className="text-xs">
            <p className="text-green-800 mb-1">
              <strong>✅ Solução TO-BE implementada:</strong>
            </p>
            <p className="text-green-700">
              Processo simplificado em 3 etapas. Transparente e rápido!
            </p>
          </div>
        </div>

        {/* Resumo da assinatura */}
        <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] rounded-xl p-5 text-white mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💎</span>
            <div>
              <p className="text-sm opacity-90">Seu plano atual</p>
              <p className="text-xl">Premium Serasa</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3 mb-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Valor mensal:</span>
              <span>R$ 29,90</span>
            </div>
            <div className="flex justify-between">
              <span>Próxima cobrança:</span>
              <span>15/11/2025</span>
            </div>
            <div className="flex justify-between">
              <span>Membro desde:</span>
              <span>Março/2025</span>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-3 text-xs">
            <p className="mb-1">✓ Monitoramento 24/7 do seu CPF</p>
            <p className="mb-1">✓ Alertas em tempo real</p>
            <p className="mb-1">✓ Relatórios detalhados mensais</p>
            <p>✓ Suporte prioritário via chat</p>
          </div>
        </div>

        {/* Opções de gerenciamento */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm text-gray-700">O que você gostaria de fazer?</h3>
          
          <button className="w-full bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-center gap-3 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-[#0066CC] rounded-full flex items-center justify-center">
              <ThumbsUp className="text-white" size={20} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1">Manter assinatura</p>
              <p className="text-xs text-gray-600">Continue aproveitando todos os benefícios</p>
            </div>
          </button>

          <button className="w-full bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 flex items-center gap-3 hover:border-yellow-300 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              ⏸️
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1">Pausar por 1 mês</p>
              <p className="text-xs text-gray-600">Volte quando precisar, sem perder benefícios</p>
            </div>
          </button>

          <button 
            onClick={() => setShowReasons(true)}
            className="w-full bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center gap-3 hover:border-red-300 transition-colors"
          >
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <ThumbsDown className="text-white" size={20} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1">Cancelar assinatura</p>
              <p className="text-xs text-gray-600">Você pode voltar quando quiser</p>
            </div>
          </button>
        </div>

        {/* Seleção de motivo - TO-BE: Transparente */}
        {showReasons && (
          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4 mb-6 animate-in fade-in duration-200">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="text-[#0066CC] flex-shrink-0" size={20} />
              <div>
                <p className="text-sm mb-2">
                  Nos ajude a melhorar! Por que você quer cancelar?
                </p>
                <p className="text-xs text-gray-600">
                  Opcional, mas muito importante para nós.
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              {reasons.map((reason) => (
                <button
                  key={reason}
                  onClick={() => setSelectedReason(reason)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                    selectedReason === reason
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-300 space-y-2">
              <button
                onClick={handleCancel}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                Confirmar cancelamento
              </button>
              <button
                onClick={() => setShowReasons(false)}
                className="w-full bg-white border border-gray-300 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm"
              >
                Voltar
              </button>
            </div>
          </div>
        )}

        {/* Informações importantes - TO-BE: Transparência */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm mb-3 flex items-center gap-2">
            <span>ℹ️</span>
            <span>Informações importantes</span>
          </h4>
          <div className="space-y-2 text-xs text-gray-700">
            <p>• Você pode cancelar a qualquer momento, sem multas</p>
            <p>• Seus benefícios continuam até o fim do período pago</p>
            <p>• Seus dados ficam salvos por 90 dias</p>
            <p>• Você pode reativar quando quiser</p>
            <p>• Não pediremos confirmação por telefone</p>
          </div>
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
        <button className="flex flex-col items-center gap-1 py-2 text-gray-500">
          <div className="w-6 h-6 flex items-center justify-center">🔧</div>
          <span className="text-xs">Serviços</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-white relative -mt-4">
          <div className="w-14 h-14 bg-[#0066CC] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">💎</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">Meu CPF</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2 text-gray-500">
          <div className="w-6 h-6 flex items-center justify-center">📊</div>
          <span className="text-xs">Menu</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center gap-1 py-2 text-[#E4105D]"
        >
          <div className="w-6 h-6 flex items-center justify-center">👤</div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}
