import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { ServiceDefinition, ServiceSlug } from '../domain/types';
import { SERVICES_CATALOG } from '../domain/catalogData';
import { COMPANY_INFO } from '../domain/companyData';
import { applyPageSeo } from '../utils/seo';
import { ArchitecturalIllustration } from './ArchitecturalIllustration';
import { TechnicalQuoteCart } from './TechnicalQuoteCart';

interface ServicePageTemplateProps {
  service: ServiceDefinition;
  onNavigate: (route: string) => void;
}

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  service,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [doorsOpened, setDoorsOpened] = useState(false);

  useEffect(() => {
    applyPageSeo({
      title: service.seoTitle,
      description: service.seoDescription,
      path: `/servicos/${service.slug}`,
      serviceName: service.shortName,
      faqs: service.faqs,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDoorsOpened(false);
    const timer = setTimeout(() => setDoorsOpened(true), 120);
    return () => clearTimeout(timer);
  }, [service]);

  const scrollToOrcador = () => {
    const el = document.getElementById('orcador-servico');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappDirectUrl = `https://wa.me/${
    COMPANY_INFO.whatsapp.number
  }?text=${encodeURIComponent(
    `Olá equipe da Vidraçaria Liderança! Estou vendo os modelos de ${service.shortName} em Umuarama e gostaria de um orçamento.`
  )}`;

  const relatedServices = SERVICES_CATALOG.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-[#FFFFFF]"
    >
      {/* Breadcrumb com Fade-In e Slide-Up */}
      <motion.nav
        aria-label="Breadcrumb"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#F2F4F5] border-b border-neutral-200 py-3 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-[#2B2F33]">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="hover:text-[#D71920] transition-colors font-medium cursor-pointer"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-500">Especialidades</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="font-semibold text-[#111111]" aria-current="page">
            {service.shortName}
          </span>
        </div>
      </motion.nav>

      {/* Hero Específica com Efeito de Abertura de Folhas de Vidro + Entrada Animada */}
      <section className="relative bg-[#111111] text-[#FFFFFF] overflow-hidden">
        {/* Efeito de Abertura de Portas de Vidro ao Entrar na Página */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/2 z-30 bg-gradient-to-r from-[#111111]/95 via-[#1E293B]/80 to-[#38BDF8]/20 border-r-2 border-white/30 backdrop-blur-sm transition-transform duration-1000 ease-out ${
            doorsOpened ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 w-1/2 z-30 bg-gradient-to-l from-[#111111]/95 via-[#1E293B]/80 to-[#38BDF8]/20 border-l-2 border-white/30 backdrop-blur-sm transition-transform duration-1000 ease-out ${
            doorsOpened ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <div className="text-xs text-neutral-300 font-medium">
                <span className="text-[#D71920] font-bold">Padrão VL</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{COMPANY_INFO.regionServed}</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Sob Medida</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {service.h1Title}
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                {service.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={scrollToOrcador}
                  className="px-6 py-3.5 bg-[#D71920] hover:bg-[#b51319] text-white font-bold text-sm rounded-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Simular Meu Projeto</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-white/30 hover:border-white text-white font-semibold text-sm rounded-sm transition-colors whitespace-nowrap"
                >
                  Chamar no WhatsApp
                </motion.a>
              </div>

              <div className="pt-2 text-xs text-neutral-400">
                {COMPANY_INFO.historyMetric} · {COMPANY_INFO.address.full}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <ArchitecturalIllustration
                sceneType={service.sceneType}
                alt={service.h1Title}
                width={900}
                height={640}
                eager={true}
                kenBurns={true}
                interactiveOpening={true}
                showDisclaimer={true}
                className="rounded-sm border border-white/15 h-full min-h-[290px] sm:min-h-[350px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre o Serviço & Aplicações (Fade-In + Slide-Up on Scroll) */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Qualidade e Acabamento em {service.shortName}
            </h2>
            {service.fullDescription.map((paragraph, idx) => (
              <p key={idx} className="text-base text-[#2B2F33] leading-relaxed">
                {paragraph}
              </p>
            ))}

            <motion.div
              variants={cardItemVariant}
              className="p-5 rounded-sm bg-[#F9F9F9] border border-neutral-200 space-y-2 mt-4"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#111111]">
                <CheckCircle2 className="w-5 h-5 text-[#D71920] shrink-0" />
                <span>Compromisso de Rigor e Qualidade VL</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2B2F33] leading-relaxed">
                {service.abntNormSummary}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 bg-[#F9F9F9] border border-neutral-200 rounded-sm p-6 sm:p-7 space-y-5"
          >
            <h2 className="text-xl font-bold text-[#111111]">
              Onde Aplicar no Seu Projeto
            </h2>
            <motion.ul
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-3 text-sm text-[#2B2F33]"
            >
              {service.applications.map((app, i) => (
                <motion.li
                  key={i}
                  variants={cardItemVariant}
                  className="pb-3 border-b border-neutral-200 last:border-none last:pb-0 flex items-start gap-2.5"
                >
                  <span className="font-mono-tech text-xs font-bold text-[#D71920] mt-0.5">
                    0{i + 1}.
                  </span>
                  <span>{app}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Catálogo Completo de Modelos Disponíveis (Staggered Slide-Up Cards) */}
      <section className="py-14 sm:py-16 bg-[#F2F4F5] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div>
              <span className="text-xs font-semibold text-[#D71920]">
                Opções Sob Medida para Sua Obra
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-1">
                Modelos Disponíveis — {service.shortName}
              </h2>
            </div>
            <button
              type="button"
              onClick={scrollToOrcador}
              className="text-xs sm:text-sm font-bold text-[#D71920] hover:underline whitespace-nowrap cursor-pointer"
            >
              Simular medidas no orçador →
            </button>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.catalogItems.map((item, idx) => (
              <motion.article
                key={idx}
                variants={cardItemVariant}
                whileHover={{ y: -4 }}
                className="bg-[#FFFFFF] border border-neutral-200 rounded-sm p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-mono-tech text-xs font-bold text-neutral-400">
                      0{idx + 1}. Modelo
                    </span>
                    {item.tag && (
                      <span className="text-xs font-semibold text-[#D71920]">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">{item.name}</h3>
                  <p className="text-sm text-[#2B2F33] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-500">
                  <span className="font-semibold text-[#111111]">Ideal para: </span>
                  {item.applications}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefícios com Animação de Entrada */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            Por que escolher a Vidraçaria Liderança?
          </h2>
          <p className="text-sm text-[#2B2F33] mt-1">
            Cuidado em cada detalhe desde a medição até a instalação em Umuarama.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {service.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={cardItemVariant}
              whileHover={{ y: -4 }}
              className="p-6 rounded-sm border border-neutral-200 bg-[#F9F9F9] space-y-2.5"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#D71920]">
                <Sparkles className="w-4 h-4" />
                <span>Diferencial VL 0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#111111]">{benefit.title}</h3>
              <p className="text-sm text-[#2B2F33] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Galeria Interativa com Efeito Slide-Up */}
      <section className="py-14 sm:py-16 bg-[#111111] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
          >
            <div>
              <span className="text-xs text-[#D71920] font-semibold uppercase tracking-wider">
                Interativo · Clique ou passe o mouse para testar a abertura
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Inspirações e Efeitos — {service.shortName}
              </h2>
            </div>
            <p className="text-xs text-neutral-400">
              {COMPANY_INFO.illustrativeDisclaimer}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {service.gallery.map((gItem, idx) => (
              <motion.div
                key={gItem.id}
                variants={cardItemVariant}
                whileHover={{ y: -5 }}
                className="bg-[#1C1F23] border border-neutral-800 rounded-sm overflow-hidden flex flex-col"
              >
                <ArchitecturalIllustration
                  sceneType={gItem.sceneType}
                  alt={gItem.title}
                  width={600}
                  height={420}
                  variantIndex={idx}
                  interactiveOpening={true}
                  className="aspect-4/3"
                />
                <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-400">{gItem.subtitle}</p>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {gItem.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-300 pt-2 border-t border-neutral-800">
                    {gItem.specs}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Orçador Inteligente Pré-Selecionado */}
      <TechnicalQuoteCart
        defaultServiceSlug={service.slug}
        sectionId="orcador-servico"
      />

      {/* Perguntas Frequentes (FAQ) com AnimatePresence */}
      <section className="py-14 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            Dúvidas Comuns sobre {service.shortName}
          </h2>
          <p className="text-sm text-[#2B2F33] mt-1">
            Respostas claras para ajudar você a escolher o modelo ideal.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="divide-y divide-neutral-200 border border-neutral-200 rounded-sm bg-[#FFFFFF]"
        >
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div key={idx} variants={cardItemVariant} className="p-5 sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <h3 className="text-base font-bold text-[#111111]">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2B2F33] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm text-[#2B2F33] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Direto para o WhatsApp Único + Outros Serviços Animados */}
      <section className="py-14 bg-[#F9F9F9] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] text-white rounded-sm p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl font-bold text-white">
                Quer agendar uma medição de {service.shortName} em Umuarama?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Fale diretamente pelo nosso WhatsApp {COMPANY_INFO.whatsapp.displayPhone} e receba orientação personalizada para o seu projeto.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#D71920] hover:bg-[#b51319] text-white font-bold text-sm rounded-sm transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp {COMPANY_INFO.whatsapp.displayPhone}</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-base font-bold text-[#111111]">
              Veja também outras especialidades da Vidraçaria Liderança:
            </h3>
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {relatedServices.map((rel: { slug: ServiceSlug; indexNumber: string; shortName: string }) => (
                <motion.button
                  key={rel.slug}
                  variants={cardItemVariant}
                  whileHover={{ y: -3 }}
                  type="button"
                  onClick={() => onNavigate(`/servicos/${rel.slug}`)}
                  className="text-left p-4 rounded-sm bg-[#FFFFFF] border border-neutral-200 hover:border-[#D71920] transition-colors group cursor-pointer"
                >
                  <span className="font-mono-tech text-xs text-neutral-400">
                    {rel.indexNumber} · Padrão VL
                  </span>
                  <p className="text-sm font-bold text-[#111111] group-hover:text-[#D71920] mt-1">
                    {rel.shortName} →
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};
