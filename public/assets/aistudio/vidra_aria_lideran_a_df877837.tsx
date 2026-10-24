import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, CheckCircle2, ChevronRight, 
  Ruler, Plus, Trash2, Send, Info, Hexagon, 
  Layout, ShieldCheck, Box, Maximize, Settings
} from 'lucide-react';

// === DADOS DE SERVIÇOS ===
const SERVICES = [
  { id: 'box', label: 'Box para Banheiro', icon: Box },
  { id: 'esquadria', label: 'Esquadrias de Alumínio', icon: Layout },
  { id: 'guarda_corpo', label: 'Guarda-corpo de Vidro', icon: ShieldCheck, warning: 'Altura mínima exigida pela ABNT: 1.10m.' },
  { id: 'sacada', label: 'Envidraçamento de Sacada', icon: Maximize },
  { id: 'espelho', label: 'Espelhos Decorativos', icon: Hexagon },
  { id: 'cobertura', label: 'Cobertura de Vidro', icon: Settings },
];

export default function App() {
  // === ESTADOS DO CARRINHO DE ORÇAMENTOS ===
  const [cart, setCart] = useState([]);
  const [activeService, setActiveService] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // === FUNÇÕES DO CARRINHO ===
  const handleAddToCart = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!activeService || !width || !height) {
      setErrorMsg('Preencha o tipo de serviço, largura e altura.');
      return;
    }

    if (parseFloat(width) <= 0 || parseFloat(height) <= 0 || quantity <= 0) {
      setErrorMsg('As medidas e a quantidade devem ser maiores que zero.');
      return;
    }

    const serviceObj = SERVICES.find(s => s.id === activeService);

    const newItem = {
      id: Date.now().toString(),
      serviceId: activeService,
      serviceLabel: serviceObj.label,
      width: parseFloat(width).toFixed(2),
      height: parseFloat(height).toFixed(2),
      quantity: parseInt(quantity)
    };

    setCart([...cart, newItem]);
    
    // Reset fields
    setActiveService('');
    setWidth('');
    setHeight('');
    setQuantity(1);
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Olá equipe VL, sou de Umuarama/Região e gostaria de validar o orçamento para o seguinte projeto estrutural:\n\n`;
    
    cart.forEach((item, index) => {
      message += `📌 *ITEM ${index + 1}: ${item.serviceLabel}*\n`;
      message += `📐 Medidas: ${item.width}m (L) x ${item.height}m (A)\n`;
      message += `📦 Quantidade: ${item.quantity} peça(s)\n\n`;
    });

    message += `Aguardo o retorno de um consultor para validação técnica e agendamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '5544984152049';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // Verifica se o serviço selecionado tem aviso (ex: ABNT para guarda-corpo)
  const selectedServiceObj = SERVICES.find(s => s.id === activeService);

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans selection:bg-[#D71920] selection:text-white">
      
      {/* === HEADER === */}
      <header className="fixed top-0 w-full bg-[#111111] text-white z-50 shadow-2xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Estilizada */}
            <div className="w-10 h-10 bg-[#D71920] flex items-center justify-center font-bold text-xl tracking-tighter">
              VL
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-wide">VIDRAÇARIA</span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em]">LIDERANÇA</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#projetos" className="hover:text-[#D71920] transition-colors">Portfólio e Serviços</a>
            <a href="#orcador" className="hover:text-[#D71920] transition-colors">Simulador de Projeto</a>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} className="text-[#D71920]" />
              <span>(44) 98415-2049</span>
            </div>
            <a href="#orcador" className="bg-[#D71920] hover:bg-red-700 text-white px-6 py-2.5 rounded-sm transition-all shadow-[0_0_15px_rgba(215,25,32,0.3)]">
              Orçamento Rápido
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#111111] border-t border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
            <a href="#projetos" onClick={() => setIsMenuOpen(false)} className="text-white">Portfólio e Serviços</a>
            <a href="#orcador" onClick={() => setIsMenuOpen(false)} className="text-white">Simulador de Projeto</a>
            <div className="w-full h-[1px] bg-gray-800 my-2"></div>
            <a href="#orcador" onClick={() => setIsMenuOpen(false)} className="bg-[#D71920] text-center text-white px-6 py-3 rounded-sm font-medium">
              Iniciar Meu Projeto
            </a>
          </div>
        )}
      </header>

      {/* === HERO SECTION === */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#111111] overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[linear-gradient(45deg,transparent_45%,#D71920_50%,transparent_55%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <span className="text-[#D71920] font-semibold tracking-widest text-sm uppercase mb-4 block">
            Alto Padrão em Umuarama-PR
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            Vidros e Esquadrias <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Sob Medida</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 font-light">
            Arquitetura contemporânea em vidro. Soluções elegantes e seguras para residências e empresas exigentes.
          </p>
          <a href="#orcador" className="group flex items-center gap-3 bg-white text-[#111111] hover:bg-[#D71920] hover:text-white px-8 py-4 rounded-sm font-bold text-lg transition-all duration-300">
            Iniciar meu Projeto
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* === VITRINE DE SERVIÇOS === */}
      <section id="projetos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Especialidades</h2>
            <div className="w-16 h-1 bg-[#D71920]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group border border-gray-100 bg-[#F9F9F9] p-8 rounded-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D71920]/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                <service.icon size={40} strokeWidth={1} className="text-[#D71920] mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 text-[#111111] relative z-10">{service.label}</h3>
                <p className="text-gray-500 text-sm mb-6 relative z-10">
                  Soluções personalizadas seguindo rigorosas normas técnicas e design contemporâneo.
                </p>
                <div className="flex items-center text-sm font-semibold text-[#111111] group-hover:text-[#D71920] transition-colors relative z-10">
                  <CheckCircle2 size={16} className="mr-2" /> Padrão VL
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === O GERADOR DE ORÇAMENTOS (CARRINHO MULTI-ITENS) === */}
      <section id="orcador" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Orçador Inteligente</h2>
            <p className="text-gray-600">
              Monte seu projeto estrutural adicionando as peças abaixo. Nossa equipe técnica em Umuarama analisará as normas e viabilidade.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            
            {/* Lado Esquerdo: Área de Adição (Formulário) */}
            <div className="w-full lg:w-1/2 bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
              <h3 className="text-xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                <Plus className="text-[#D71920]" />
                Adicionar Peça ao Projeto
              </h3>

              <form onSubmit={handleAddToCart} className="space-y-6">
                {/* Seleção de Serviço */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Selecione a Estrutura</label>
                  <select 
                    value={activeService}
                    onChange={(e) => setActiveService(e.target.value)}
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#D71920]/50 focus:border-[#D71920] transition-all bg-white"
                  >
                    <option value="">Selecione...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.label}</option>
                    ))}
                  </select>
                </div>

                {/* Aviso ABNT Condicional */}
                {selectedServiceObj && selectedServiceObj.warning && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start gap-3">
                    <Info className="text-yellow-600 shrink-0" size={20} />
                    <p className="text-sm text-yellow-800 font-medium">{selectedServiceObj.warning}</p>
                  </div>
                )}

                {/* Medidas */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Largura (metros)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        placeholder="Ex: 1.50"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full border border-gray-300 rounded-sm p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#D71920]/50 focus:border-[#D71920] transition-all"
                      />
                      <Ruler className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Altura (metros)</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        placeholder="Ex: 2.10"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full border border-gray-300 rounded-sm p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#D71920]/50 focus:border-[#D71920] transition-all"
                      />
                      <Ruler className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    </div>
                  </div>
                </div>

                {/* Quantidade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade</label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#D71920]/50 focus:border-[#D71920] transition-all"
                  />
                </div>

                {errorMsg && (
                  <p className="text-[#D71920] text-sm font-medium">{errorMsg}</p>
                )}

                <button 
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-gray-800 text-white font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Incluir no Orçamento
                </button>
              </form>
            </div>

            {/* Lado Direito: Carrinho / Resumo */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="bg-[#111111] text-white p-6 rounded-t-sm border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="text-[#D71920]" />
                  Resumo do Projeto
                </h3>
                <span className="bg-[#D71920] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {cart.length} {cart.length === 1 ? 'Item' : 'Itens'}
                </span>
              </div>
              
              <div className="bg-white border border-t-0 border-gray-200 shadow-sm rounded-b-sm flex-grow flex flex-col">
                <div className="p-6 flex-grow overflow-y-auto max-h-[400px]">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 py-12">
                      <Layout size={48} className="mb-4 opacity-50" strokeWidth={1} />
                      <p>Seu projeto estrutural está vazio.</p>
                      <p className="text-sm">Adicione peças utilizando o painel ao lado.</p>
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {cart.map((item, idx) => (
                        <li key={item.id} className="border border-gray-100 bg-[#F9F9F9] p-4 rounded-sm flex justify-between items-center hover:border-gray-300 transition-colors">
                          <div>
                            <div className="font-bold text-[#111111] text-sm md:text-base">
                              <span className="text-[#D71920] mr-2">#{idx + 1}</span>
                              {item.serviceLabel}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">
                              {item.width}m x {item.height}m — {item.quantity} peça(s)
                            </div>
                          </div>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-gray-400 hover:text-[#D71920] p-2 transition-colors"
                            title="Remover Item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-b-sm">
                  <button 
                    onClick={handleSendToWhatsApp}
                    disabled={cart.length === 0}
                    className={`w-full py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                      cart.length > 0 
                        ? 'bg-[#D71920] hover:bg-red-700 text-white shadow-lg' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Send size={20} />
                    Enviar Projeto para Consultor
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Ao enviar, você será redirecionado para o WhatsApp da Vidraçaria Liderança.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-[#111111] text-gray-400 py-12 border-t border-gray-900">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-bold text-xl mb-4 tracking-tight flex items-center gap-2">
               <div className="w-8 h-8 bg-[#D71920] flex items-center justify-center text-sm">VL</div>
               VIDRAÇARIA LIDERANÇA
            </div>
            <p className="text-sm mb-4 max-w-xs">
              Especialistas em projetos arquitetônicos em vidro e esquadrias de alumínio de alto padrão em Umuarama-PR.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato Direto</h4>
            <ul className="space-y-2 text-sm">
              <li>Diego: (44) 99800-8515</li>
              <li>Jonathan: (44) 98415-2049</li>
              <li>Av. Rio Grande do Norte, 5543 - Zona V</li>
              <li>Umuarama - PR, 87504-060</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Horário Comercial</h4>
            <ul className="space-y-2 text-sm">
              <li>Segunda a Sexta: 08:00 - 18:00</li>
              <li>Sábado: 08:00 - 12:00</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-xs flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Vidraçaria Liderança. Todos os direitos reservados.</p>
          <p>Umuarama - PR</p>
        </div>
      </footer>

    </div>
  );
}