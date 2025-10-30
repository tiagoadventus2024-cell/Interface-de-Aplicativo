import { ArrowLeft, Camera, Settings, CheckCircle, Menu } from 'lucide-react';
import serasaLogo from 'figma:asset/1bceedb1db7e6b0d925c7a523d7bcaa48c9d5230.png';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface ProfileScreenToBeProps {
  onNavigate: (screen: 'home' | 'search' | 'menu' | 'profile' | 'contact' | 'cancel' | 'success') => void;
}

export function ProfileScreenToBe({ onNavigate }: ProfileScreenToBeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors text-white">
                  <Menu size={20} />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 bg-white">
                <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-6 text-white">
                  <img src={serasaLogo} alt="Serasa" className="h-6 mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <p className="text-sm">Marcos Filipe</p>
                      <p className="text-xs opacity-90">Premium</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-6">
                  <p className="text-xs text-gray-500 mb-3">MENU</p>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        setMenuOpen(false);
                        onNavigate('home');
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">🏠</span>
                      <span className="text-sm">Início</span>
                    </button>

                    <button 
                      onClick={() => setMenuOpen(false)}
                      className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 border-2 border-blue-300 transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">👤</span>
                      <span className="text-sm">Meu perfil</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">🔔</span>
                      <span className="text-sm">Notificações</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">🔒</span>
                      <span className="text-sm">Privacidade</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">⚙️</span>
                      <span className="text-sm">Configurações</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">❓</span>
                      <span className="text-sm">Central de ajuda</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">📞</span>
                      <span className="text-sm">Fale conosco</span>
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                      <span className="text-lg">ℹ️</span>
                      <span className="text-sm">Sobre o app</span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <h2 className="text-white">Meu Perfil</h2>
          </div>
          <img src={serasaLogo} alt="Serasa" className="h-6" />
        </div>
      </div>

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

        {/* Melhoria TO-BE: Card de Assinatura com opções claras */}
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-green-300 rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">✅ Solução TO-BE</span>
          </div>
          
          <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] rounded-lg p-4 text-white mb-3">
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
              <button 
                onClick={() => onNavigate('cancel')}
                className="flex-1 bg-white text-[#E4105D] rounded-lg py-2 text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-1"
              >
                <Settings size={14} />
                <span>Gerenciar</span>
              </button>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-xs">
            <p className="text-green-800 mb-1">💡 <strong>Melhoria implementada:</strong></p>
            <p className="text-green-700">
              Agora você pode gerenciar sua assinatura diretamente pelo app com apenas 2 cliques!
            </p>
          </div>
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

        {/* Botões de ação */}
        <div className="space-y-2">
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-sm hover:border-gray-300 transition-colors">
            Editar informações
          </button>
          
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-sm hover:border-gray-300 transition-colors">
            Alterar senha
          </button>
          
          <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-sm hover:border-gray-300 transition-colors">
            Configurações de privacidade
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
        <button 
          onClick={() => setMenuOpen(true)}
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
