import { ArrowLeft, Search, ChevronRight, Menu } from 'lucide-react';
import serasaLogo from 'figma:asset/1bceedb1db7e6b0d925c7a523d7bcaa48c9d5230.png';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Switch } from './ui/switch';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
  mode?: 'as-is' | 'to-be';
}

export function SettingsScreen({ onNavigate, mode = 'as-is' }: SettingsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState({
    scoreUpdates: true,
    debtAlerts: true,
    personalizedOffers: false,
    emailOffers: false,
    securityAlerts: true,
    financialTips: true,
    marketing: false
  });

  const [privacy, setPrivacy] = useState({
    biometricLock: true,
    autoScoreUpdate: true,
    locationPermission: false,
    notificationPermission: true
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    textSize: 'medium'
  });

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E4105D] to-[#D4145A] px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-white">Configurações</h2>
          </div>
          <img src={serasaLogo} alt="Serasa" className="h-6" />
        </div>

        {/* Barra de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar configurações..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg text-sm"
          />
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Badge de problema AS-IS */}
        {mode === 'as-is' && (
          <div className="mb-4 bg-red-50 border-2 border-red-300 rounded-lg p-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div className="text-xs">
                <p className="text-red-800 mb-1">
                  <strong>Problema AS-IS:</strong>
                </p>
                <p className="text-red-700">
                  Ainda não há opção de "Gerenciar Assinatura" ou "Cancelar Premium" nas configurações!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Accordion de Configurações */}
        <Accordion type="single" collapsible className="space-y-2">
          {/* Conta e Perfil */}
          <AccordionItem value="account" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Conta e Perfil</p>
                  <p className="text-xs text-gray-500">Informações pessoais e segurança</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-2 mt-2">
                <button 
                  onClick={() => onNavigate('profile')}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm">Informações pessoais</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Alterar senha</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Autenticação em dois fatores (2FA)</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <p className="text-xs text-gray-500 px-4 mb-2">Contas conectadas</p>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                    <span className="text-lg">🔵</span>
                    <span className="text-sm">Google</span>
                    <span className="ml-auto text-xs text-green-600">Conectado</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                    <span className="text-lg">⚫</span>
                    <span className="text-sm">Apple</span>
                    <span className="ml-auto text-xs text-gray-400">Não conectado</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                    <span className="text-lg">🔵</span>
                    <span className="text-sm">Facebook</span>
                    <span className="ml-auto text-xs text-gray-400">Não conectado</span>
                  </button>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between text-orange-600">
                    <span className="text-sm">Encerrar sessão</span>
                    <ChevronRight size={18} />
                  </button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-between text-red-600">
                        <span className="text-sm">Excluir conta</span>
                        <ChevronRight size={18} />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta ação não pode ser desfeita. Ao excluir sua conta:
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Todos os seus dados serão permanentemente removidos</li>
                            <li>Você perderá acesso ao histórico do seu score</li>
                            <li>Sua assinatura Premium será cancelada</li>
                            <li>Não será possível recuperar estas informações</li>
                          </ul>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                          Sim, excluir minha conta
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Notificações e Comunicação */}
          <AccordionItem value="notifications" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔔</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Notificações e Comunicação</p>
                  <p className="text-xs text-gray-500">Gerencie alertas e mensagens</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3 mt-2">
                <p className="text-xs text-gray-500 px-4">Notificações do app</p>
                
                <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Atualizações de score</p>
                    <p className="text-xs text-gray-500">Receba quando seu score mudar</p>
                  </div>
                  <Switch 
                    checked={notifications.scoreUpdates}
                    onCheckedChange={(checked) => setNotifications({...notifications, scoreUpdates: checked})}
                  />
                </div>

                <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Alertas de dívidas e negativação</p>
                    <p className="text-xs text-gray-500">Avisos importantes sobre seu CPF</p>
                  </div>
                  <Switch 
                    checked={notifications.debtAlerts}
                    onCheckedChange={(checked) => setNotifications({...notifications, debtAlerts: checked})}
                  />
                </div>

                <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Ofertas personalizadas</p>
                    <p className="text-xs text-gray-500">Produtos e serviços para você</p>
                  </div>
                  <Switch 
                    checked={notifications.personalizedOffers}
                    onCheckedChange={(checked) => setNotifications({...notifications, personalizedOffers: checked})}
                  />
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <p className="text-xs text-gray-500 px-4 mb-3">Comunicações por e-mail/SMS</p>
                  
                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">Ofertas de parceiros</span>
                    <Switch 
                      checked={notifications.emailOffers}
                      onCheckedChange={(checked) => setNotifications({...notifications, emailOffers: checked})}
                    />
                  </div>

                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">Alertas de segurança</span>
                    <Switch 
                      checked={notifications.securityAlerts}
                      onCheckedChange={(checked) => setNotifications({...notifications, securityAlerts: checked})}
                    />
                  </div>

                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">Dicas financeiras</span>
                    <Switch 
                      checked={notifications.financialTips}
                      onCheckedChange={(checked) => setNotifications({...notifications, financialTips: checked})}
                    />
                  </div>

                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-sm">Preferências de marketing</p>
                      <p className="text-xs text-gray-500">Promoções e novidades Serasa</p>
                    </div>
                    <Switch 
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Privacidade e Segurança */}
          <AccordionItem value="privacy" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Privacidade e Segurança</p>
                  <p className="text-xs text-gray-500">Proteja seus dados pessoais</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3 mt-2">
                <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Bloqueio por biometria ou PIN</p>
                    <p className="text-xs text-gray-500">Proteja o acesso ao app</p>
                  </div>
                  <Switch 
                    checked={privacy.biometricLock}
                    onCheckedChange={(checked) => setPrivacy({...privacy, biometricLock: checked})}
                  />
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3">
                  <p className="text-xs text-gray-500 px-4 mb-3">Permissões do dispositivo</p>
                  
                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">Localização</span>
                    <Switch 
                      checked={privacy.locationPermission}
                      onCheckedChange={(checked) => setPrivacy({...privacy, locationPermission: checked})}
                    />
                  </div>

                  <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                    <span className="text-sm">Notificações</span>
                    <Switch 
                      checked={privacy.notificationPermission}
                      onCheckedChange={(checked) => setPrivacy({...privacy, notificationPermission: checked})}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span className="text-sm">Gerenciar consentimentos de dados</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <div>
                      <p className="text-sm">Visualizar e baixar meus dados</p>
                      <p className="text-xs text-gray-500">Conforme LGPD</p>
                    </div>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span className="text-sm">Política de Privacidade</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>

                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <span className="text-sm">Termos de Uso</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Finanças e Score */}
          <AccordionItem value="finance" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Finanças e Score</p>
                  <p className="text-xs text-gray-500">Controle seu Serasa Score</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3 mt-2">
                <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-between">
                  <div>
                    <p className="text-sm">Atualizações automáticas de score</p>
                    <p className="text-xs text-gray-500">Atualizar diariamente</p>
                  </div>
                  <Switch 
                    checked={privacy.autoScoreUpdate}
                    onCheckedChange={(checked) => setPrivacy({...privacy, autoScoreUpdate: checked})}
                  />
                </div>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div>
                    <p className="text-sm">Fontes de dados do score</p>
                    <p className="text-xs text-gray-500">Como calculamos seu score</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Alertas de variação de score</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div>
                    <p className="text-sm">Preferências de ofertas de crédito</p>
                    <p className="text-xs text-gray-500">Exibir ou ocultar ofertas</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Aparência e Experiência */}
          <AccordionItem value="appearance" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎨</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Aparência e Experiência</p>
                  <p className="text-xs text-gray-500">Personalize o visual do app</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3 mt-2">
                <div className="px-4">
                  <p className="text-sm mb-3">Tema</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setAppearance({...appearance, theme: 'light'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.theme === 'light' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm">☀️ Claro</span>
                    </button>
                    <button 
                      onClick={() => setAppearance({...appearance, theme: 'dark'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.theme === 'dark' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm">🌙 Escuro</span>
                    </button>
                    <button 
                      onClick={() => setAppearance({...appearance, theme: 'auto'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.theme === 'auto' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm">⚙️ Auto</span>
                    </button>
                  </div>
                </div>

                <div className="px-4 border-t border-gray-200 pt-3">
                  <p className="text-sm mb-3">Tamanho do texto</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setAppearance({...appearance, textSize: 'small'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.textSize === 'small' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-xs">Pequeno</span>
                    </button>
                    <button 
                      onClick={() => setAppearance({...appearance, textSize: 'medium'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.textSize === 'medium' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-sm">Médio</span>
                    </button>
                    <button 
                      onClick={() => setAppearance({...appearance, textSize: 'large'})}
                      className={`flex-1 py-2 rounded-lg border-2 transition-colors ${
                        appearance.textSize === 'large' 
                          ? 'border-[#0066CC] bg-blue-50' 
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="text-base">Grande</span>
                    </button>
                  </div>
                </div>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Idioma</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Português (BR)</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Armazenamento e Dados */}
          <AccordionItem value="storage" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">🧹</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Armazenamento e Dados</p>
                  <p className="text-xs text-gray-500">Gerencie espaço e cache</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-2 mt-2">
                <div className="px-4 py-2 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Espaço usado</span>
                    <span className="text-sm">42 MB</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0066CC] rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div>
                    <p className="text-sm">Limpar cache do aplicativo</p>
                    <p className="text-xs text-gray-500">Libera 15 MB</p>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Sincronizar dados manualmente</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Ajuda e Suporte */}
          <AccordionItem value="help" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Ajuda e Suporte</p>
                  <p className="text-xs text-gray-500">Tire suas dúvidas</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-2 mt-2">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Central de ajuda / FAQ</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm">Falar com o suporte</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Enviar feedback ou sugestão</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Avaliar o aplicativo</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Sobre */}
          <AccordionItem value="about" className="bg-white border border-gray-200 rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <span className="text-xl">ℹ️</span>
                </div>
                <div className="text-left">
                  <p className="text-sm">Sobre</p>
                  <p className="text-xs text-gray-500">Informações do aplicativo</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-2 mt-2">
                <div className="px-4 py-3 rounded-lg bg-gray-50 flex items-center justify-between">
                  <span className="text-sm">Versão do aplicativo</span>
                  <span className="text-sm text-gray-600">5.42.1</span>
                </div>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Informações legais</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Transparência de dados e parceiros</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <span className="text-sm">Licenças de código aberto</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Nota sobre falta de gerenciar assinatura - AS-IS */}
        {mode === 'as-is' && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm mb-2">😓 Não encontrou como gerenciar sua assinatura?</p>
            <p className="text-xs text-gray-600 mb-3">
              No cenário AS-IS, não há opção clara de "Gerenciar Assinatura Premium" ou "Cancelar" nas configurações.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full bg-[#0066CC] text-white py-2 rounded-lg text-sm hover:bg-[#0052A3] transition-colors"
            >
              Ir para contato (única opção)
            </button>
          </div>
        )}
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
        <button className="flex flex-col items-center gap-1 py-2 text-[#E4105D]">
          <div className="w-6 h-6 flex items-center justify-center">📊</div>
          <span className="text-xs">Menu</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center gap-1 py-2 text-gray-500"
        >
          <div className="w-6 h-6 flex items-center justify-center">👤</div>
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}
