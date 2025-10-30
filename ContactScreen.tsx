import { ArrowLeft, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ContactScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact') => void;
  onShowFrustration: (message: string) => void;
}

export function ContactScreen({ onNavigate, onShowFrustration }: ContactScreenProps) {
  const [showWebsiteAttempt, setShowWebsiteAttempt] = useState(false);
  const [showCallCenter, setShowCallCenter] = useState(false);

  const handleWebsiteClick = () => {
    setShowWebsiteAttempt(true);
    setTimeout(() => {
      setShowWebsiteAttempt(false);
      onShowFrustration(
        "😫 Frustração: Tentei pelo site também, mas sem sucesso. A navegação é confusa e não encontro a opção de cancelamento!"
      );
    }, 3000);
  };

  const handleCallClick = () => {
    setShowCallCenter(true);
    setTimeout(() => {
      setShowCallCenter(false);
      onShowFrustration(
        "😤 Frustração MÁXIMA: Liguei para a central, me pediram vários dados, tentaram me convencer a manter a assinatura. Achei que seria simples cancelar, mas foi uma maratona!"
      );
    }, 4000);
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
          <h2 className="text-white">Fale Conosco</h2>
        </div>
      </div>

      {/* Website Attempt Overlay */}
      {showWebsiteAttempt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="animate-spin">🔄</div>
              </div>
              <p className="mb-2">Acessando site da Serasa...</p>
              <p className="text-sm text-gray-500 mb-3">Procurando opção de cancelamento</p>
              <div className="bg-red-50 border border-red-200 rounded p-3 text-xs text-left">
                <p className="mb-1">❌ Não encontrado em "Minha Conta"</p>
                <p className="mb-1">❌ Não encontrado em "Serviços"</p>
                <p className="mb-1">❌ Não encontrado em "Ajuda"</p>
                <p>⏳ Navegando há 15 minutos...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call Center Overlay */}
      {showCallCenter && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-green-600 animate-pulse" size={32} />
              </div>
              <p className="mb-2">Em ligação com a central...</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-left space-y-2 mb-3">
                <p>📞 Aguardando na fila... 5 min</p>
                <p>🗣️ Informando dados pessoais...</p>
                <p>🗣️ Informando CPF...</p>
                <p>🗣️ Respondendo perguntas de segurança...</p>
                <p>😤 Ouvindo tentativas de retenção...</p>
                <p>⏰ Tempo total: 23 minutos</p>
              </div>
              <p className="text-sm text-red-600">Finalmente conseguindo cancelar...</p>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 py-6">
        {/* Resumo da jornada */}
        <div className="mb-6 bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-lg p-4">
          <h3 className="text-sm mb-3 flex items-center gap-2">
            <span>😓</span>
            <span>Resumo da jornada até aqui:</span>
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Não encontrou no app</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Busca não trouxe resultados relevantes</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Menu e configurações não têm a opção</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span>Perfil não permite gerenciar assinatura</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-500">→</span>
              <span className="font-medium">Única alternativa: Contato direto</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Como você prefere entrar em contato?
        </p>

        {/* Opções de contato */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={handleWebsiteClick}
            className="w-full bg-white border-2 border-blue-200 rounded-lg p-4 flex items-center gap-4 hover:border-blue-300 transition-colors relative"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <ExternalLink className="text-[#0066CC]" size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1">Acessar site</p>
              <p className="text-xs text-gray-500">www.serasa.com.br</p>
            </div>
            <span className="absolute top-2 right-2 text-xs bg-yellow-500 text-white px-2 py-1 rounded">
              ⚠️ Confuso
            </span>
          </button>

          <button 
            onClick={handleCallClick}
            className="w-full bg-white border-2 border-green-200 rounded-lg p-4 flex items-center gap-4 hover:border-green-300 transition-colors relative"
          >
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
              <Phone className="text-green-600" size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1">Ligar para central</p>
              <p className="text-xs text-gray-500">0800 123 4567</p>
            </div>
            <span className="absolute top-2 right-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
              ⚠️ Longo
            </span>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-gray-300 transition-colors opacity-50 cursor-not-allowed">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <MessageCircle className="text-gray-400" size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1 text-gray-400">Chat online</p>
              <p className="text-xs text-gray-400">Indisponível no momento</p>
            </div>
          </button>

          <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-gray-300 transition-colors opacity-50 cursor-not-allowed">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <Mail className="text-gray-400" size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm mb-1 text-gray-400">E-mail</p>
              <p className="text-xs text-gray-400">Resposta em até 5 dias úteis</p>
            </div>
          </button>
        </div>

        {/* Análise da experiência */}
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
          <h3 className="text-sm mb-3 flex items-center gap-2">
            <span>📊</span>
            <span>Análise da Experiência AS-IS</span>
          </h3>
          
          <div className="space-y-3 text-xs">
            <div>
              <p className="mb-1 flex items-center gap-2">
                <span className="text-red-600">😤</span>
                <span className="font-medium">Sentimento: Frustração e Irritação</span>
              </p>
              <p className="text-gray-700 pl-6">
                O usuário se sente enganado. Assinar foi fácil pelo app, mas cancelar tornou-se uma "maratona".
              </p>
            </div>

            <div className="border-t border-red-200 pt-3">
              <p className="mb-2 font-medium">Principais problemas:</p>
              <ul className="space-y-1 pl-4">
                <li>• Não há opção de cancelamento no app</li>
                <li>• Busca não funciona para termos relacionados</li>
                <li>• Site tem navegação confusa</li>
                <li>• Central telefônica demora e tenta reter</li>
                <li>• Múltiplas solicitações de dados pessoais</li>
                <li>• Tempo total gasto: ~45 minutos</li>
              </ul>
            </div>

            <div className="border-t border-red-200 pt-3">
              <p className="mb-2 font-medium text-[#0066CC]">Oportunidades TO-BE:</p>
              <ul className="space-y-1 pl-4 text-gray-700">
                <li>✓ Adicionar "Gerenciar assinatura" no app</li>
                <li>✓ Botão direto de cancelamento no perfil</li>
                <li>✓ Melhorar resultados de busca</li>
                <li>✓ Cancelamento em 1-2 cliques</li>
                <li>✓ Transparência no processo</li>
              </ul>
            </div>
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
          <div className="w-6 h-6 flex items-center justify-center">📞</div>
          <span className="text-xs">Contato</span>
        </button>
      </div>
    </div>
  );
}
