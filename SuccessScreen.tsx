import { CheckCircle, Download, Mail } from 'lucide-react';
import serasaLogo from 'figma:asset/1bceedb1db7e6b0d925c7a523d7bcaa48c9d5230.png';

interface SuccessScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact' | 'cancel' | 'success') => void;
}

export function SuccessScreen({ onNavigate }: SuccessScreenProps) {
  return (
    <div className="bg-white min-h-screen pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4">
        <div className="flex items-center justify-center">
          <img src={serasaLogo} alt="Serasa" className="h-6" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Ícone de sucesso */}
        <div className="mb-6 relative">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-xl animate-in zoom-in duration-300">
            <CheckCircle className="text-white" size={48} />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Mensagem principal */}
        <h2 className="text-2xl text-center mb-3">
          Cancelamento confirmado!
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6 max-w-xs">
          Sua assinatura Premium foi cancelada com sucesso.
        </p>

        {/* Badge de sucesso TO-BE */}
        <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-xl p-4 max-w-sm">
          <div className="flex items-start gap-3 mb-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
            <div className="text-xs">
              <p className="text-green-800 mb-1">
                <strong>✅ Experiência TO-BE:</strong>
              </p>
              <p className="text-green-700">
                Cancelamento realizado em menos de 2 minutos, direto pelo app, sem necessidade de ligar ou acessar o site!
              </p>
            </div>
          </div>
        </div>

        {/* Informações do cancelamento */}
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-4 mb-6">
          <h3 className="text-sm mb-4">Detalhes do cancelamento</h3>
          
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Plano:</span>
              <span className="text-gray-900">Premium Serasa</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Data do cancelamento:</span>
              <span className="text-gray-900">30/10/2025</span>
            </div>
            
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-600">Válido até:</span>
              <span className="text-green-600">15/11/2025</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Protocolo:</span>
              <span className="text-gray-900">#2025103045821</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 rounded-lg p-3">
            <p className="text-xs text-[#0066CC]">
              ℹ️ Você pode continuar usando todos os benefícios Premium até 15/11/2025
            </p>
          </div>
        </div>

        {/* Ações pós-cancelamento */}
        <div className="w-full max-w-sm space-y-3 mb-6">
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:border-gray-300 transition-colors">
            <Mail size={18} className="text-gray-600" />
            <span className="text-sm">Enviar confirmação por e-mail</span>
          </button>
          
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:border-gray-300 transition-colors">
            <Download size={18} className="text-gray-600" />
            <span className="text-sm">Baixar comprovante (PDF)</span>
          </button>
        </div>

        {/* Mensagem de despedida */}
        <div className="w-full max-w-sm bg-gradient-to-r from-[#E4105D] to-[#D4145A] rounded-xl p-5 text-white text-center">
          <p className="text-sm mb-3">
            Sentiremos sua falta! 💙
          </p>
          <p className="text-xs opacity-90 mb-4">
            Se mudar de ideia, você pode reativar sua assinatura Premium a qualquer momento com um único clique.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-white text-[#E4105D] py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
          >
            Voltar para o início
          </button>
        </div>

        {/* Comparação AS-IS vs TO-BE */}
        <div className="w-full max-w-sm mt-8 bg-gray-50 border border-gray-300 rounded-xl p-4">
          <h4 className="text-sm mb-3 text-center">📊 Comparação da experiência</h4>
          
          <div className="space-y-3 text-xs">
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-800 mb-2">😤 AS-IS (Antes):</p>
              <ul className="space-y-1 text-red-700 pl-4">
                <li>• ~45 minutos de processo</li>
                <li>• Necessário ligar para central</li>
                <li>• Múltiplas confirmações</li>
                <li>• Tentativas de retenção</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-800 mb-2">✅ TO-BE (Agora):</p>
              <ul className="space-y-1 text-green-700 pl-4">
                <li>• Menos de 2 minutos de processo</li>
                <li>• Tudo direto pelo app</li>
                <li>• Transparente e simples</li>
                <li>• Sem pressão ou retenção forçada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 grid grid-cols-5 gap-1 max-w-md mx-auto">
        <button 
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 py-2 text-[#E4105D]"
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
        <button className="flex flex-col items-center gap-1 py-2 text-gray-500">
          <div className="w-6 h-6 flex items-center justify-center">👤</div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}
