import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  ArrowRight,
  ArrowDown,
  ChevronRight,
  ChevronDown,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Bot,
  Eye,
} from 'lucide-react';
import { getServiceBySlug } from '../../../domain/catalogData';
import { COMPANY_INFO } from '../../../domain/companyData';
import { applyPageSeo } from '../../../utils/seo';
import {
  HardwareSystemsCarousel,
  FluidSafetyAnatomy,
  BoxKinematicSimulator,
  BoxTriageBot,
  BoxModelVariant,
} from './BoxVisualizerStudio';

interface PageProps {
  onNavigate: (route: string) => void;
}

interface BoxCatalogModel {
  id: string;
  variant: BoxModelVariant;
  category: ('elegance' | 'compactos' | 'piso-teto')[];
  kicker: string;
  title: string;
  description: string;
  specs: string;
  imageUrl: string;
  imageAlt: string;
}

const BOX_MODELS_DATA: BoxCatalogModel[] = [
  {
    id: 'box-padrao',
    variant: 'padrao',
    category: ['compactos'],
    kicker: 'Clássico · Mais Pedido no Brasil',
    title: 'Box Padrão (De Correr)',
    description:
      'Trilho superior fechado em alumínio anodizado (branco, preto fosco, brilhante ou champagne) com roldanas duplas embutidas e vedação anti-vazamento.',
    specs: 'Temperado 8mm · 1 Fixo + 1 Correr · Trilho Embutido',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7JkBWmkbt_8Hp6zS1i9HVikNExRQMIk8BqkvAqU_wyRhTcCU_yEVkPHUWF78gJt6DB_7RjlgVYL8g4oAulwSBMmOzdnXWqPV-IbC2_ptCSK7K996zo11Z209aitbhbQz6BHeGPzi6kJji8BVTOyAN9rukpG0DL9HG6SSFXRuiNY8lKBwUJPF1zm278ByaPDXKQPO7zWGcuaICvrf_W3sSKmkxIWA0i7aN7y5e-iq-089pVRJFgovM',
    imageAlt:
      'Box Padrão Incolor 8mm com perfis de alumínio e deslizamento suave em banheiro residencial brasileiro.',
  },
  {
    id: 'box-canto',
    variant: 'canto',
    category: ['compactos'],
    kicker: 'Otimização de Espaço · Quina 90°',
    title: 'Box de Canto (Em L)',
    description:
      'Ideal para banheiros quadrados ou chuveiros posicionados no canto. Duas folhas fixas laterais e duas portas de correr que se encontram em ângulo de 90°.',
    specs: 'Temperado 8mm · 2 Fixos + 2 Correr · Abertura Central no Vértice',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAl0wbSAllq-qa7GIcpVbi9J3ZjwesgFNkBl3VHSs1S7JwSqyRN2y8KR1sXW31TMc3CfU5zcRP836-YtyTuhtu_YSFeC0L1reVVj_ObK9uZnKCXwnICFdmPiRsaXBXdq01ojK1sNJS0VyFqPbmQkqNrOBKJ2u54gCwA4wuIQT_KUMEvGKzrLNyTApy0nG5enCej9L8CBf0VLQAjbmLnOPigfOXUv19UbmSKdsenVO9TCuU9CYflN-RR',
    imageAlt:
      'Box de Canto em L 90 graus com duas folhas fixas e duas portas deslizantes.',
  },
  {
    id: 'box-articulado',
    variant: 'articulado',
    category: ['compactos'],
    kicker: 'Vãos Estreitos · Dobra em V',
    title: 'Box Articulado (Camarão)',
    description:
      'Sistema pantográfico com dobradiças em inox ou latão que recolhe as duas folhas dobradas contra a parede, liberando até 90% da passagem.',
    specs: 'Temperado 8mm · 2 Folhas Dobráveis · Ideal para Vãos de 70 a 95cm',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAntQZma9TBNXm-x21ctNp2Alj0PDRe5hgWx5E7oLi3nJlpT_iDDgm-tSMH8T-qDFf3YetyV6ur4xKPqlhszzu_t0BeFtwdykTZlGyeX6DtSPOj8TKhuLYpdtPF-XCivuhSS-fcT_BmcWC0MuOrhQEx9U8eJtmbKiSjDJsve8Kw1oknPaB0NnTmKGzAVS5n_DC8o3LPatWwrR4wuIbHFM7pSHD-9gEoWIl4jz3TPsD32sWLkdnBBrXF',
    imageAlt:
      'Box Articulado sistema camarão recolhido junto à parede para ampliar a entrada em banheiro compacto.',
  },
  {
    id: 'box-elegance',
    variant: 'elegance',
    category: ['elegance'],
    kicker: 'Linha Arquitetura · Suítes',
    title: 'Roldanas Aparentes (Elegance)',
    description:
      'Roldanas maciças aparentes em Aço Inox 304 escovado ou preto fosco deslizando sobre varão estrutural superior. Design leve sem perfil fechado.',
    specs: 'Temperado 8mm · Roldana Inox 304 Maciça · Rolamento Blindado',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaML6pUwaDs-hsxI170oZcSFLjOq0iFWXWhAU7j73ZT-gt_dx4XsjyhtDtTKgXkPfIsFvwYEkjSo7b21Ak2QbEM7PbYNuixCgLvQ0CI4oEg14Q77oPkA7smn75wSPEkj5aR7VfFz7p4wnj4DtNTb35jxLIhEmdk58ndI1_3MHOFbkf2KyT3Yizv4yGxQBbE4C1Wv-od4n3D8N9f7nejbpdHxziMMy792IEpJw0p2uBzehj3eJWYb5Y',
    imageAlt:
      'Box Elegance com roldanas aparentes em aço inox escovado sobre tubo estrutural.',
  },
  {
    id: 'box-piso-teto',
    variant: 'piso-teto',
    category: ['piso-teto', 'elegance'],
    kicker: 'Efeito Sauna · Fechamento Total',
    title: 'Box Piso ao Teto (Thermal)',
    description:
      'Fechamento contínuo do piso até o forro de gesso ou laje. Mantém o calor do banho dentro da área molhada e evita embaçar o espelho do banheiro.',
    specs: 'Temperado 10mm ou Laminado · Vedação Integral até o Teto',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEYofV3Q63QZinhil2QyRDigjjP8IOXlqF3xz42-wOD78bMk_guKh3hAHdGhiC9ef_gnHCFSiu5e68aziWHiSllmQswjkiqZ4rEf_dN11AD_KYtuqzXjQI7q402YWCevB_xgmejizF7vi1Mgk_Om1fLaMQVh9c2w2CdW3-0ft0I3GAt56-Emv28k90zttxBhE3XoyxvvfZ6oJnJQpQfKQhAZlmP9e_eivXjzr1auuLtXx7ZRGhjnp1',
    imageAlt:
      'Box Piso ao Teto em vidro temperado fechando toda a altura do banheiro com acabamento preto fosco.',
  },
  {
    id: 'box-curvo',
    variant: 'curvo',
    category: ['elegance'],
    kicker: 'Exclusividade Orgânica',
    title: 'Box Vidro Curvo',
    description:
      'Vidro temperado termoformado em raio curvo contínuo, acompanhando cantos arredondados com deslize suave e aproveitamento ergonômico.',
    specs: 'Temperado Curvo Sob Medida · Trilho Radial · Projeto Especial',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCs5ajwJuVsIKcC9JJbJsLHRNzvpzDnJJWpgtSTQYDaODKdoW14o-9jKjp8ebI-BExUjEOiPzGWjvXYwXstsByDIyqRTpBOChP1BOgr_Ogi97ORrd7xGilQ2_dKyYGCkWXeCW0PluvrmVA3F7FPWCTk--MymCEgbnM3gF0uiFXeIaP3B9bDQcDiYsM8Ll7S4G3UU2U49NGDH8c7hIg28uo_rkTeViaSg8o29CBHkGA6hjxHNxAmM61X',
    imageAlt: 'Box de vidro curvo termoformado em banheiro contemporâneo.',
  },
  {
    id: 'box-walkin',
    variant: 'walkin',
    category: ['elegance', 'piso-teto'],
    kicker: 'Painel Fixo Único · Sem Portas',
    title: 'Box Walk-in / Painel Fixo',
    description:
      'Apenas um painel fixo estrutural com perfil U discreto no piso e na parede, deixando a passagem livre sem portas ou roldanas móveis. Fácil de limpar.',
    specs: 'Temperado 8mm ou 10mm · Fixação Estrutural · Entrada Livre',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxRJEvvsc3AJ-QDMh-WKMO2Eut1_fOleRT9ybmCa0Gc9RcIIjIjU-4kxYf8ChTHMpMPu08RFXzk3ztFtc6Uof5jjLY3vM3aw18q2ZiI9aJCMy0UvcnbXjau---TIX2-dEIVZpTaV4SjqrXLnaCvwJJKj8Vvs_RPu5e0RzZf5b2e-YaAPZjy_V5AWWptJpUZ2c-lgKGITaNkROWJhSzclV6HaJG5aZEQ5ZoUB3cRFX50wJtTrRpn0Up',
    imageAlt:
      'Box Walk-in com painel único de vidro fixo temperado incolor e passagem livre em banheiro claro.',
  },
];

const MOST_WANTED_UMUARAMA = [
  {
    id: 'mw-padrao',
    variant: 'padrao' as BoxModelVariant,
    tag: 'Instalação Ágil em Umuarama',
    title: 'Box Padrão Incolor 8mm',
    description:
      'Perfis de alumínio em branco, preto fosco, brilhante ou champagne. O clássico resistente com vedação impecável e melhor custo-benefício.',
    footerMeta: 'Melhor custo-benefício',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7JkBWmkbt_8Hp6zS1i9HVikNExRQMIk8BqkvAqU_wyRhTcCU_yEVkPHUWF78gJt6DB_7RjlgVYL8g4oAulwSBMmOzdnXWqPV-IbC2_ptCSK7K996zo11Z209aitbhbQz6BHeGPzi6kJji8BVTOyAN9rukpG0DL9HG6SSFXRuiNY8lKBwUJPF1zm278ByaPDXKQPO7zWGcuaICvrf_W3sSKmkxIWA0i7aN7y5e-iq-089pVRJFgovM',
  },
  {
    id: 'mw-elegance',
    variant: 'elegance' as BoxModelVariant,
    tag: 'Mais vendido em suítes',
    title: 'Box Elegance Roldanas Inox',
    description:
      'Ferragens em aço inox 304 maciço escovado ou preto fosco. Vidro temperado 8mm incolor, fumê ou verde.',
    footerMeta: 'Sob medida rápida',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaML6pUwaDs-hsxI170oZcSFLjOq0iFWXWhAU7j73ZT-gt_dx4XsjyhtDtTKgXkPfIsFvwYEkjSo7b21Ak2QbEM7PbYNuixCgLvQ0CI4oEg14Q77oPkA7smn75wSPEkj5aR7VfFz7p4wnj4DtNTb35jxLIhEmdk58ndI1_3MHOFbkf2KyT3Yizv4yGxQBbE4C1Wv-od4n3D8N9f7nejbpdHxziMMy792IEpJw0p2uBzehj3eJWYb5Y',
  },
  {
    id: 'mw-piso-teto',
    variant: 'piso-teto' as BoxModelVariant,
    tag: 'Projeto de Alto Padrão',
    title: 'Box Piso ao Teto Float',
    description:
      'Fechamento até o forro com opções em vidro Incolor, Fumê, Acidato ou Canelado. Isolamento térmico que retém o vapor do banho.',
    footerMeta: 'Linha Arquitetura',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBEYofV3Q63QZinhil2QyRDigjjP8IOXlqF3xz42-wOD78bMk_guKh3hAHdGhiC9ef_gnHCFSiu5e68aziWHiSllmQswjkiqZ4rEf_dN11AD_KYtuqzXjQI7q402YWCevB_xgmejizF7vi1Mgk_Om1fLaMQVh9c2w2CdW3-0ft0I3GAt56-Emv28k90zttxBhE3XoyxvvfZ6oJnJQpQfKQhAZlmP9e_eivXjzr1auuLtXx7ZRGhjnp1',
  },
];

export const BoxParaBanheiroPage: React.FC<PageProps> = ({ onNavigate }) => {
  const service = getServiceBySlug('box-para-banheiro')!;
  const [activeFilter, setActiveFilter] = useState<
    'todos' | 'elegance' | 'compactos' | 'piso-teto'
  >('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Estado que controla qual modelo está aberto em "Vista 3D / Planta" dentro do próprio card
  const [cardSimulatingId, setCardSimulatingId] = useState<string | null>(null);

  // Estado que controla o modelo ativo no Bot de Triagem Interno (sem ir para o WhatsApp)
  const [botModelVariant, setBotModelVariant] = useState<BoxModelVariant>('padrao');

  useEffect(() => {
    applyPageSeo({
      title: 'Box de Vidro sob Medida em Umuarama | Vidraçaria Liderança',
      description:
        'Box para banheiro sob medida em Umuarama e 41 cidades: Padrão, Canto em L 90°, Articulado Camarão, Elegance Roldanas Inox, Piso ao Teto e Walk-in. Norma ABNT NBR 14207.',
      path: '/servicos/box-para-banheiro',
      serviceName: service.shortName,
      faqs: service.faqs,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service]);

  const filteredModels = BOX_MODELS_DATA.filter((item) => {
    if (activeFilter === 'todos') return true;
    return item.category.includes(activeFilter);
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Aciona o Bot de Triagem na própria página (NUNCA redireciona para o WhatsApp externo)
   * e já carrega a simulação específica do modelo clicado (ex: Canto em L 90°, Camarão, etc.)
   */
  const handleOpenBotWithModel = (variant: BoxModelVariant) => {
    setBotModelVariant(variant);
    scrollToSection('bot-triagem-box');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="font-lumina bg-[#F8F9FF] text-[#181C21] antialiased selection:bg-[#00B4D8] selection:text-[#00414F]"
    >
      {/* Barra Sub-Navegação Contextual da Página de Box */}
      <div className="bg-[#F1F4FB] border-b border-[#BCC9CE]/60 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#3D494D]">
            <button
              type="button"
              onClick={() => onNavigate('/inicio')}
              className="hover:text-[#00677D] font-medium transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#6D797E]" />
            <span className="text-[#6D797E]">Especialidades</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#6D797E]" />
            <span className="font-bold text-[#181C21]" aria-current="page">
              Box para Banheiro
            </span>
          </nav>

          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#3D494D]">
            <button
              type="button"
              onClick={() => scrollToSection('seguranca-abnt')}
              className="hover:text-[#00677D] transition-colors cursor-pointer whitespace-nowrap"
            >
              Sistemas de Roldanas &amp; Segurança
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('modelos')}
              className="hover:text-[#00677D] transition-colors cursor-pointer whitespace-nowrap"
            >
              7 Tipos de Box
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('mais-procurados')}
              className="hover:text-[#00677D] transition-colors cursor-pointer whitespace-nowrap"
            >
              Mais Procurados em Umuarama
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('bot-triagem-box')}
              className="text-[#00677D] font-bold hover:underline transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Simulador &amp; Bot de Orçamento</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION (Dual-Column Editorial + Faixa Única de Indicadores) */}
      <section className="w-full bg-[#F8F9FF] py-10 lg:py-16 overflow-hidden relative">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00B4D8]/10 blur-3xl pointer-events-none"
        />
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start gap-5 z-10">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.06em] text-[#00677D]">
                <span>Vidraçaria Liderança</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#3D494D]">Umuarama e 41 Cidades</span>
              </div>

              <h1 className="text-[36px] sm:text-[44px] lg:text-[54px] font-bold text-[#181C21] tracking-[-0.03em] leading-[1.1] text-balance">
                Box de Vidro sob Medida para o seu Banheiro
              </h1>

              <p className="text-base sm:text-[18px] sm:leading-[28px] text-[#3D494D] max-w-xl">
                Vidro temperado certificado de{' '}
                <strong className="text-[#181C21] font-semibold">8mm e 10mm</strong>,
                perfis em alumínio anodizado ou roldanas em Aço Inox 304, e medida conferida
                no local por Diego e Jonathan.
              </p>

              {/* CTAs (100% internos na página — abrem o Bot de Triagem ou exploram modelos) */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleOpenBotWithModel('padrao')}
                  className="inline-flex items-center justify-center gap-2 bg-[#00B4D8] hover:bg-[#00677D] text-[#FFFFFF] font-semibold text-[15px] px-7 py-3.5 rounded-lg transition-all shadow-[0_4px_20px_rgba(0,180,216,0.32)] hover:shadow-[0_6px_24px_rgba(0,180,216,0.45)] w-full sm:w-auto text-center cursor-pointer whitespace-nowrap"
                >
                  <Bot className="w-5 h-5" />
                  <span>Simular Meu Box Agora</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('modelos')}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#EBEFF5] text-[#181C21] border border-[#181C21]/15 font-semibold text-[15px] px-6 py-3.5 rounded-lg shadow-xs transition-all w-full sm:w-auto text-center cursor-pointer whitespace-nowrap"
                >
                  <span>Explorar os 7 Modelos</span>
                  <ArrowDown className="w-4 h-4 text-[#00677D]" />
                </button>
              </div>
            </div>

            {/* Right Architectural Visual Column */}
            <div className="lg:col-span-6 relative flex flex-col">
              <div className="relative w-full h-full min-h-[320px] sm:min-h-[390px] aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden shadow-[0_16px_40px_-6px_rgba(23,27,32,0.12)] bg-[#EBEFF5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhViTuDG7z691LQnguXavL7psKTeytFnp-lHfrsfbNi1uIOnbOLjrPt4-2itSZGuggQbo1Jky0kuqZYDCC9FolDTaqX4tTtwlnQPi4piGTyHEiFkQ2211wRFH5Cu9yWscSmzoi15cu4hEjFPm56Pj11w5wUCxusBilF-pJBCCcpEvkIRy6YMBHvEyzmyhAM92FBnti9REl5VPDQpT7NRnMlGwRppXp6D6QdQ4nW8pczI5QFZYui5dt"
                  alt="Banheiro contemporâneo com Box de vidro temperado sob medida, nicho iluminado e ferragens pretas."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#F8F9FF]/92 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/75 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#00B4D8]/15 flex items-center justify-center text-[#00677D] shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] font-bold text-[#181C21] truncate">
                      Medição Técnica Gratuita no Local
                    </span>
                    <span className="text-xs text-[#3D494D]">
                      Vedação anti-vazamento · Instalação própria em Umuarama
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Única de Indicadores (Substitui a antiga seção redundante de 4 cards) */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#F1F4FB] p-5 sm:p-6 rounded-2xl border border-[#BCC9CE]/50">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#00677D] tabular-nums">
                +3.500
              </span>
              <span className="text-xs font-semibold text-[#3D494D] mt-0.5">
                Boxes Instalados na Região
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#181C21] tabular-nums">
                ABNT NBR 14207
              </span>
              <span className="text-xs font-semibold text-[#3D494D] mt-0.5">
                Norma Técnica de Segurança em Box
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#00677D] tabular-nums">
                2 Anos
              </span>
              <span className="text-xs font-semibold text-[#3D494D] mt-0.5">
                Garantia Real de Ferragens e Vedação
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#181C21] tabular-nums">
                7–12 Dias Úteis
              </span>
              <span className="text-xs font-semibold text-[#3D494D] mt-0.5">
                Prazo Médio com Medida no Local
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOCO DE CONFIANÇA & SEGURANÇA (Carrossel de Roldanas + Raio-X Fluido sem ícones clichês) */}
      <section
        id="seguranca-abnt"
        className="w-full bg-[#F1F4FB] py-16 lg:py-20 border-y border-[#BCC9CE]/40"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Coluna Esquerda: Carrossel Comparativo de Roldanas (Inox Aparente, Embutido, Celeiro) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <HardwareSystemsCarousel />
            </div>

            {/* Coluna Direita: Segurança NBR 14207 + Raio-X Técnico Fluido */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-[#FFFFFF] p-7 sm:p-10 rounded-2xl shadow-[0_4px_20px_-2px_rgba(23,27,32,0.05)] border border-[#181C21]/5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#C00014] text-[#FFFFFF] text-[11px] uppercase tracking-[0.08em] font-bold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Vidro Temperado Certificado NBR 14207</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#00677D]">
                    Padrão Industrial de Segurança
                  </span>
                </div>

                <h2 className="text-2xl sm:text-[28px] font-semibold text-[#181C21] tracking-[-0.02em] leading-snug">
                  Segurança Absoluta para sua Casa &amp; Família
                </h2>

                <p className="text-[15px] leading-relaxed text-[#3D494D]">
                  Nosso vidro temperado passa por choque térmico controlado a{' '}
                  <strong className="text-[#181C21] font-semibold tabular-nums">
                    650°C
                  </strong>{' '}
                  que o torna{' '}
                  <strong className="text-[#181C21] font-semibold">
                    até 5x mais resistente que o vidro comum
                  </strong>
                  . Ao lado você pode comparar os{' '}
                  <strong className="text-[#181C21] font-semibold">
                    3 sistemas de roldanas
                  </strong>{' '}
                  (Inox aparente, Trilho embutido tradicional e Estilo Celeiro) e abaixo
                  inspecionar cada camada de proteção:
                </p>

                {/* Componente Fluido com Diagramas Técnicos em vez de ícones genéricos */}
                <FluidSafetyAnatomy />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATÁLOGO DOS 7 MODELOS DE BOX (Cards Uniformes + Simulação Individual por Modelo) */}
      <section id="modelos" className="w-full bg-[#F8F9FF] py-16 lg:py-24">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#00677D]">
                Catálogo Completo de Tipologias
              </span>
              <h2 className="text-3xl sm:text-[40px] font-bold text-[#181C21] tracking-[-0.025em] leading-tight mt-1">
                Encontre o Box Ideal para o seu Espaço
              </h2>
              <p className="text-[15px] text-[#3D494D] mt-2">
                Clique em <strong className="text-[#181C21]">Ver Movimento 3D</strong> em
                qualquer card para ver a planta baixa e a abertura exata daquele modelo, ou
                clique em <strong className="text-[#181C21]">Orçar este modelo</strong> para
                abrir o filtro abaixo.
              </p>
            </div>

            {/* Filtros Funcionais */}
            <div
              role="tablist"
              aria-label="Filtrar modelos de box por categoria"
              className="flex flex-wrap gap-2 bg-[#E5E8EF] p-1.5 rounded-xl self-start lg:self-auto"
            >
              {[
                { id: 'todos', label: 'Todos os Modelos (7)' },
                { id: 'elegance', label: 'Linha Elegance' },
                { id: 'compactos', label: 'Compactos' },
                { id: 'piso-teto', label: 'Piso ao Teto' },
              ].map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveFilter(
                        tab.id as 'todos' | 'elegance' | 'compactos' | 'piso-teto'
                      )
                    }
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#00B4D8] text-[#FFFFFF] shadow-xs'
                        : 'text-[#181C21] hover:bg-[#FFFFFF]/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Uniforme dos 7 Modelos (Walk-in agora também é card padrão de 1 coluna com 1 imagem limpa) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredModels.map((model) => {
              const isSimulatingThisCard = cardSimulatingId === model.id;

              return (
                <div
                  key={model.id}
                  className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(23,27,32,0.04)] hover:shadow-[0_16px_40px_-6px_rgba(23,27,32,0.09)] border border-[#181C21]/5 transition-all flex flex-col group"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBEFF5]">
                    {!isSimulatingThisCard ? (
                      <img
                        src={model.imageUrl}
                        alt={model.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <BoxKinematicSimulator
                        variant={model.variant}
                        glassColor="incolor"
                        hardwareColor={model.variant === 'elegance' ? 'inox' : 'preto'}
                        openPercent={60}
                      />
                    )}

                    {/* Botão para alternar entre a Foto e a Geometria 3D + Planta Baixa específica do modelo */}
                    <button
                      type="button"
                      onClick={() =>
                        setCardSimulatingId(isSimulatingThisCard ? null : model.id)
                      }
                      className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#091D2E]/85 hover:bg-[#00B4D8] text-white text-[11px] font-bold backdrop-blur-md border border-white/20 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#4CD6FB]" />
                      <span>
                        {isSimulatingThisCard ? 'Ver Foto' : 'Ver Planta & 3D'}
                      </span>
                    </button>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#00677D]">
                        {model.kicker}
                      </span>
                      <h3 className="text-[18px] font-bold text-[#181C21] mt-1">
                        {model.title}
                      </h3>
                      <p className="text-[13px] text-[#3D494D] mt-2 leading-relaxed">
                        {model.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EBEFF5] space-y-3">
                      <div className="text-[11px] text-[#6D797E] font-medium">
                        {model.specs}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenBotWithModel(model.variant)}
                        className="w-full inline-flex items-center justify-between text-[#00677D] hover:text-[#00B4D8] font-bold text-[13px] pt-1 transition-colors cursor-pointer"
                      >
                        <span>Orçar este modelo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OS MAIS PROCURADOS EM UMUARAMA (Deep Petrol Navy Palette #091D2E) */}
      <section
        id="mais-procurados"
        className="w-full bg-gradient-to-b from-[#091D2E] via-[#0C2438] to-[#091D2E] text-[#FFFFFF] py-16 lg:py-24 relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#00B4D8]/10 blur-[100px] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-[#00677D]/15 blur-[80px] pointer-events-none"
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#4CD6FB] mb-2">
              Pronta-Entrega &amp; Alta Demanda
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold text-[#FFFFFF] tracking-[-0.025em]">
              Os Mais Procurados em Umuarama
            </h2>
            <p className="text-[15px] text-[#E0E2E9] mt-2 leading-relaxed">
              Configurações testadas e aprovadas em residências e obras de Umuarama com
              instalação rápida e garantia de fábrica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {MOST_WANTED_UMUARAMA.map((card) => (
              <div
                key={card.id}
                className="bg-[#E0E2E9]/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:bg-[#E0E2E9]/15 transition-all"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#36485B]">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4CD6FB] mb-1.5">
                    {card.tag}
                  </div>
                  <h3 className="text-[18px] font-bold text-[#FFFFFF]">{card.title}</h3>
                  <p className="text-[13px] text-[#E0E2E9] mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D7DAE1]">
                    {card.footerMeta}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleOpenBotWithModel(card.variant)}
                    className="text-xs font-bold text-[#4CD6FB] hover:text-[#FFFFFF] inline-flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Simular este modelo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Box Banner (Sem ir para o WhatsApp — aciona o Bot de Triagem abaixo) */}
          <div className="w-full bg-gradient-to-r from-[#E0E2E9]/12 via-[#E0E2E9]/18 to-[#E0E2E9]/12 backdrop-blur-xl p-8 lg:p-12 rounded-2xl border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex flex-col gap-2 text-center lg:text-left max-w-xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#4CD6FB]">
                Triagem Rápida Online · Vidraçaria Liderança
              </div>
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#FFFFFF] tracking-tight">
                Quer saber a especificação ideal para o seu banheiro?
              </h3>
              <p className="text-[15px] text-[#E0E2E9] leading-relaxed">
                Use nosso simulador interativo logo abaixo para testar a abertura do seu
                modelo (Canto em L, Camarão, Padrão ou Elegance) e responder às perguntas
                rápidas do nosso filtro.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('bot-triagem-box')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00B4D8] hover:bg-[#00677D] text-[#FFFFFF] font-semibold text-base px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(0,180,216,0.35)] transition-all text-center cursor-pointer whitespace-nowrap"
              >
                <Bot className="w-5 h-5" />
                <span>Iniciar Filtro de Orçamento</span>
              </button>
            </div>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center pt-10 text-xs font-semibold text-[#D7DAE1]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00B4D8]" />
              {COMPANY_INFO.address.street} · Umuarama - PR (41 Cidades)
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#00B4D8]" />
              Atendimento Direto: Diego e Jonathan
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00B4D8]" />
              Seg a Sex 08h às 18h · Sáb 08h às 12h
            </span>
          </div>
        </div>
      </section>

      {/* 5. BOT DE TRIAGEM E SIMULAÇÃO TÉCNICA (100% Interno na Página - Sem Redirecionar ao WhatsApp) */}
      <BoxTriageBot
        selectedModelVariant={botModelVariant}
        onChangeModelVariant={setBotModelVariant}
      />

      {/* 6. PERGUNTAS FREQUENTES (FAQ) SOBRE BOX PARA BANHEIRO */}
      <section
        id="duvidas-frequentes"
        className="py-16 lg:py-20 max-w-5xl mx-auto px-6 lg:px-8 space-y-8"
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#00677D]">
            Tire suas Dúvidas Técnicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181C21] mt-1">
            Perguntas Frequentes sobre Box para Banheiro
          </h2>
          <p className="text-sm text-[#3D494D] mt-1.5">
            Especificações de segurança, prazos de têmpera e manutenção preventiva.
          </p>
        </div>

        <div className="divide-y divide-[#BCC9CE]/50 border border-[#BCC9CE]/60 rounded-2xl bg-[#FFFFFF] overflow-hidden shadow-xs">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="p-5 sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <h3 className="text-base font-bold text-[#181C21]">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3D494D] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#00677D]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm text-[#3D494D] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default BoxParaBanheiroPage;
