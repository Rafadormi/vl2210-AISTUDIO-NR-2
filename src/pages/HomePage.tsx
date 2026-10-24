import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Instagram,
  Play,
} from 'lucide-react';
import { COMPANY_INFO } from '../domain/companyData';
import { SERVICES_CATALOG } from '../domain/catalogData';
import { ServiceSlug } from '../domain/types';
import { applyPageSeo } from '../utils/seo';
import { ArchitecturalIllustration } from '../components/ArchitecturalIllustration';
import { OpeningEffectsShowcase } from '../components/OpeningEffectsShowcase';
import { TechnicalQuoteCart } from '../components/TechnicalQuoteCart';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onSelectServiceForQuote: (slug: ServiceSlug) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    'todas' | 'residencial' | 'comercial' | 'estrutural'
  >('todas');
  const [heroDoorsOpened, setHeroDoorsOpened] = useState(false);

  useEffect(() => {
    applyPageSeo({
      title: 'Vidraçaria Liderança | Vidros e Esquadrias Sob Medida em Umuarama - PR',
      description:
        'Box, espelhos, fachadas, portas, janelas e esquadrias de alumínio com acabamento profissional para residências e empresas em Umuarama e região. Atuando desde 2018.',
      path: '/',
    });
    const timer = setTimeout(() => setHeroDoorsOpened(true), 180);
    return () => clearTimeout(timer);
  }, []);

  const replayHeroOpeningEffect = () => {
    setHeroDoorsOpened(false);
    setTimeout(() => setHeroDoorsOpened(true), 650);
  };

  const scrollToServices = () => {
    const el = document.getElementById('catalogo-servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrcador = () => {
    const el = document.getElementById('orcador-tecnico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredServices = SERVICES_CATALOG.filter((service) => {
    if (selectedCategoryFilter === 'todas') return true;
    if (selectedCategoryFilter === 'residencial') {
      return [
        'box-para-banheiro',
        'espelhos-sob-medida',
        'fechamento-de-sacada',
        'janelas-e-troca-de-vidro',
        'esquadrias-de-aluminio',
      ].includes(service.slug);
    }
    if (selectedCategoryFilter === 'comercial') {
      return [
        'fachadas-de-vidro',
        'vitrines-comerciais',
        'divisorias-de-vidro',
        'portas-de-vidro',
        'vidro-temperado',
      ].includes(service.slug);
    }
    return [
      'guarda-corpo-de-vidro',
      'cobertura-de-vidro',
      'fachadas-de-vidro',
      'manutencao-de-vidros',
    ].includes(service.slug);
  });

  const portfolioShowcases = [
    {
      title: 'Fachada Residencial & Esquadrias Linha Gold',
      location: 'Condomínio em Umuarama - PR',
      specs: 'Vidro de Controle Solar · Perfis Pretos · Ampla Luminosidade',
      slug: 'fachadas-de-vidro' as ServiceSlug,
      sceneType: 'fachadas' as const,
    },
    {
      title: 'Envidraçamento de Sacada Panorâmica (Cortina de Vidro)',
      location: 'Edifício na Zona V, Umuarama - PR',
      specs: 'Abertura Total no Canto · Proteção contra Vento e Chuva',
      slug: 'fechamento-de-sacada' as ServiceSlug,
      sceneType: 'sacada' as const,
    },
    {
      title: 'Guarda-Corpo Embutido em Escada e Mezanino',
      location: 'Residência de Alto Padrão — Umuarama',
      specs: 'Vidro Laminado de Segurança · Visual Limpo e Sofisticado',
      slug: 'guarda-corpo-de-vidro' as ServiceSlug,
      sceneType: 'guarda-corpo' as const,
    },
    {
      title: 'Box Elegance com Roldanas Aparentes & Espelho LED',
      location: 'Suíte Master — Umuarama',
      specs: 'Deslizamento Suave · Iluminação LED Quente Sob Medida',
      slug: 'box-para-banheiro' as ServiceSlug,
      sceneType: 'box-banheiro' as const,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-[#FFFFFF]"
    >
      {/* SEÇÃO HERO COM EFEITO DE ABERTURA DE PORTAS DE VIDRO */}
      <section className="relative bg-[#111111] text-[#FFFFFF] overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Portas de Vidro Deslizantes que se Abrem na Entrada do Site */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 z-30 bg-gradient-to-r from-[#111111] via-[#1E293B]/90 to-[#38BDF8]/25 border-r-2 border-white/40 backdrop-blur-md flex items-center justify-end pr-6 transition-transform duration-1000 ease-out ${
            heroDoorsOpened ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className="w-2.5 h-28 rounded-full bg-white/60" />
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 z-30 bg-gradient-to-l from-[#111111] via-[#1E293B]/90 to-[#38BDF8]/25 border-l-2 border-white/40 backdrop-blur-md flex items-center justify-start pl-6 transition-transform duration-1000 ease-out ${
            heroDoorsOpened ? 'translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className="w-2.5 h-28 rounded-full bg-white/60" />
        </div>

        {/* Background Arquitetônico Interativo */}
        <div className="absolute inset-0 z-0">
          <ArchitecturalIllustration
            sceneType="hero-architecture"
            alt="Vidros e esquadrias de alumínio sob medida em Umuarama - Vidraçaria Liderança"
            width={1600}
            height={900}
            eager={true}
            kenBurns={true}
            interactiveOpening={false}
            className="w-full h-full opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-neutral-300">
              <span className="text-[#D71920] uppercase tracking-wider">
                Alto Padrão em Umuarama-PR
              </span>
              <span aria-hidden="true">·</span>
              <span>{COMPANY_INFO.historyMetric}</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={replayHeroOpeningEffect}
                className="inline-flex items-center gap-1 text-neutral-300 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                <Play className="w-3 h-3 text-[#D71920]" />
                <span>Ver Efeito de Abertura</span>
              </button>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#FFFFFF]">
              Vidros e esquadrias{' '}
              <span className="text-[#D71920]">sob medida em Umuarama</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-2xl">
              Box, espelhos, fachadas, portas, janelas e esquadrias com acabamento profissional para residências e empresas.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={scrollToOrcador}
                className="px-7 py-4 bg-[#D71920] hover:bg-[#b51319] text-[#FFFFFF] font-bold text-sm sm:text-base rounded-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-lg"
              >
                <span>Solicitar orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={scrollToServices}
                className="px-7 py-4 border border-white/40 hover:border-white hover:bg-white/10 text-[#FFFFFF] font-semibold text-sm sm:text-base rounded-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                Conhecer serviços
              </motion.button>
            </div>

            <p className="text-xs text-neutral-400 pt-2">
              {COMPANY_INFO.address.full} · WhatsApp {COMPANY_INFO.whatsapp.displayPhone}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAIXA DE DIFERENCIAIS AMIGÁVEL */}
      <section className="bg-[#2B2F33] text-[#FFFFFF] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-700">
            <div className="pt-3 sm:pt-0 sm:px-4 first:pl-0 first:pt-0">
              <p className="text-xs text-neutral-400">Experiência Local</p>
              <p className="text-base font-bold text-white mt-0.5">
                {COMPANY_INFO.historyMetric}
              </p>
              <p className="text-xs text-neutral-300 mt-0.5">
                Sede própria na Zona V em Umuarama - PR
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4">
              <p className="text-xs text-neutral-400">Medição no Local</p>
              <p className="text-base font-bold text-white mt-0.5">
                {COMPANY_INFO.regionServed}
              </p>
              <p className="text-xs text-neutral-300 mt-0.5">
                Projetos residenciais, comerciais e corporativos
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4">
              <p className="text-xs text-neutral-400">Qualidade e Rigor</p>
              <p className="text-base font-bold text-white mt-0.5">
                Padrão VL de Segurança
              </p>
              <p className="text-xs text-neutral-300 mt-0.5">
                Materiais certificados e instalação cuidadosa
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4">
              <p className="text-xs text-neutral-400">Atendimento Direto</p>
              <p className="text-base font-bold text-white mt-0.5">
                WhatsApp {COMPANY_INFO.whatsapp.displayPhone}
              </p>
              <p className="text-xs text-neutral-300 mt-0.5">
                Orçamento rápido com número de protocolo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DAS 13 ESPECIALIDADES COM ANIMAÇÕES FADE-IN & SLIDE-UP */}
      <section
        id="catalogo-servicos"
        className="py-16 sm:py-22 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
              Especialidades Sob Medida
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-1">
              Soluções em Vidros e Esquadrias
            </h2>
            <p className="text-sm sm:text-base text-[#2B2F33] mt-2 leading-relaxed">
              Passe o mouse ou clique em <strong>"Testar Abertura"</strong> em cada ambiente abaixo para ver o efeito de movimento das folhas, ou acesse os detalhes completos.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F2F4F5] rounded-sm border border-neutral-200 shrink-0">
            {[
              { id: 'todas', label: 'Todas (13)' },
              { id: 'residencial', label: 'Para Casa' },
              { id: 'comercial', label: 'Para Empresas' },
              { id: 'estrutural', label: 'Segurança & Manutenção' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setSelectedCategoryFilter(
                    tab.id as 'todas' | 'residencial' | 'comercial' | 'estrutural'
                  )
                }
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategoryFilter === tab.id
                    ? 'bg-[#111111] text-white'
                    : 'text-[#2B2F33] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.48, delay: (idx % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className="group bg-[#FFFFFF] border border-neutral-200 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
            >
              <div>
                <ArchitecturalIllustration
                  sceneType={service.sceneType}
                  alt={service.h1Title}
                  width={600}
                  height={380}
                  variantIndex={idx}
                  interactiveOpening={true}
                  className="aspect-16/10"
                />

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-mono-tech font-bold text-[#D71920]">
                      {service.indexNumber}. Especialidade
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#111111]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D71920]" />
                      Padrão VL
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111]">
                    <button
                      type="button"
                      onClick={() => onNavigate(`/servicos/${service.slug}`)}
                      className="text-left hover:text-[#D71920] transition-colors cursor-pointer"
                    >
                      {service.shortName}
                    </button>
                  </h3>

                  <p className="text-sm text-[#2B2F33] leading-relaxed line-clamp-3">
                    {service.heroSubtitle}
                  </p>

                  <div className="pt-2 text-xs text-neutral-500">
                    <span className="font-semibold text-[#111111]">Modelos: </span>
                    {service.models.slice(0, 3).join(' · ')}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F9F9F9] border-t border-neutral-200 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate(`/servicos/${service.slug}`)}
                  className="text-xs font-bold text-[#111111] hover:text-[#D71920] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Ver Modelos e Detalhes →
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onSelectServiceForQuote(service.slug);
                    scrollToOrcador();
                  }}
                  className="px-3.5 py-1.5 rounded-sm bg-[#D71920] hover:bg-[#b51319] text-white text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  + Simular
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SIMULADOR INTERATIVO DE MODELOS E EFEITOS DE ABERTURA */}
      <div id="efeitos-abertura" className="scroll-mt-16">
        <OpeningEffectsShowcase
          onSelectForQuote={(slug) => onSelectServiceForQuote(slug)}
          onNavigate={onNavigate}
        />
      </div>

      {/* ORÇADOR INTELIGENTE MULTI-ITENS COM GERAÇÃO DE PROTOCOLO */}
      <TechnicalQuoteCart sectionId="orcador-tecnico" />

      {/* PORTFÓLIO DE AMBIENTES */}
      <section
        id="portfolio"
        className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16 space-y-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D71920]">
              Inspirações para Residências e Empresas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-1">
              Ambientes e Projetos em Umuarama
            </h2>
            <p className="text-sm sm:text-base text-[#2B2F33] mt-2">
              Acabamento elegante, materiais de alta durabilidade e instalação cuidadosa.
            </p>
          </div>
          <p className="text-xs text-neutral-500">
            {COMPANY_INFO.illustrativeDisclaimer}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {portfolioShowcases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
              className="border border-neutral-200 rounded-sm overflow-hidden bg-[#FFFFFF] flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <ArchitecturalIllustration
                sceneType={item.sceneType}
                alt={item.title}
                width={800}
                height={500}
                variantIndex={idx}
                interactiveOpening={true}
                showDisclaimer={true}
                className="aspect-16/10"
              />
              <div className="p-6 space-y-3">
                <div className="text-xs text-neutral-500">{item.location}</div>
                <h3 className="text-xl font-bold text-[#111111]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#2B2F33] font-medium">
                  {item.specs}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(`/servicos/${item.slug}`)}
                    className="text-xs font-bold text-[#D71920] hover:underline cursor-pointer"
                  >
                    Ver todos os modelos desta linha →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO CONTATO E LOCALIZAÇÃO EM UMUARAMA (WHATSAPP ÚNICO) */}
      <section className="py-16 bg-[#F2F4F5] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-[#D71920]">
                {COMPANY_INFO.historyMetric} · {COMPANY_INFO.regionServed}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                Conte com a Vidraçaria Liderança em Umuarama
              </h2>
              <p className="text-sm sm:text-base text-[#2B2F33] leading-relaxed">
                Estamos na {COMPANY_INFO.address.full}. Entre em contato pelo nosso WhatsApp para tirar dúvidas, enviar medidas ou agendar uma visita técnica sem compromisso.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 rounded-sm bg-[#D71920] hover:bg-[#b51319] text-white font-bold text-sm transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chamar no WhatsApp {COMPANY_INFO.whatsapp.displayPhone}</span>
                </a>

                <a
                  href={COMPANY_INFO.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-sm bg-white border border-neutral-300 hover:border-[#111111] text-[#111111] font-semibold text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D71920]" />
                  <span>{COMPANY_INFO.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#111111] text-white rounded-sm p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-[#D71920]" />
                <span>Endereço e Horário de Atendimento</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {COMPANY_INFO.address.street} - {COMPANY_INFO.address.neighborhood}
              </h3>
              <p className="text-sm text-neutral-300">
                {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}, CEP {COMPANY_INFO.address.zipCode}
              </p>
              <p className="text-xs text-neutral-400">
                Segunda a Sexta: 08:00 às 18:00 · Sábado: 08:00 às 12:00
              </p>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${COMPANY_INFO.address.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 bg-white hover:bg-[#D71920] text-[#111111] hover:text-white text-xs font-bold rounded-sm transition-colors"
                >
                  Abrir Localização no Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
