import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ClipboardCopy,
  Check,
  Plus,
  Trash2,
  Send,
  Ruler,
  Info,
  Layout,
} from 'lucide-react';
import { SERVICES_CATALOG, getServiceBySlug } from '../domain/catalogData';
import { validateAbntConfiguration, calculateEstimatedRange } from '../domain/abntValidator';
import { QuoteConfiguratorInput, ServiceSlug } from '../domain/types';
import { useQuoteCart } from '../context/QuoteCartContext';

interface TechnicalQuoteCartProps {
  defaultServiceSlug?: ServiceSlug;
  sectionId?: string;
}

export const TechnicalQuoteCart: React.FC<TechnicalQuoteCartProps> = ({
  defaultServiceSlug,
  sectionId = 'orcador-tecnico',
}) => {
  const {
    items,
    activeServiceSlug,
    setActiveServiceSlug,
    addItem,
    removeItem,
    clearCart,
    lastProtocol,
    dismissProtocolConfirmation,
    submitQuoteWithProtocol,
  } = useQuoteCart();

  const effectiveSlug = defaultServiceSlug || activeServiceSlug;
  const currentService = useMemo(
    () => getServiceBySlug(effectiveSlug) || SERVICES_CATALOG[0],
    [effectiveSlug]
  );

  const [formState, setFormState] = useState<QuoteConfiguratorInput>(() => ({
    serviceSlug: currentService.slug,
    model: currentService.models[0] || '',
    widthMeters: '',
    heightMeters: '',
    glassType: currentService.glassTypes[0] || '',
    thickness: currentService.thicknessOptions[0] || '',
    glassColor: currentService.glassColors[0] || '',
    finishLine: currentService.finishLines[0] || '',
    quantity: 1,
    floorNumber: '',
    cep: '',
    slopePercent: '6',
    notes: '',
  }));

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [justAddedToast, setJustAddedToast] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerNeighborhood, setCustomerNeighborhood] = useState('');
  const [copiedProtocol, setCopiedProtocol] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const svc = getServiceBySlug(effectiveSlug) || SERVICES_CATALOG[0];
    setFormState((prev) => ({
      ...prev,
      serviceSlug: svc.slug,
      model: svc.models[0] || '',
      glassType: svc.glassTypes[0] || '',
      thickness: svc.thicknessOptions[0] || '',
      glassColor: svc.glassColors[0] || '',
      finishLine: svc.finishLines[0] || '',
    }));
    setErrorMsg('');
  }, [effectiveSlug]);

  const handleCategoryChange = (newSlug: ServiceSlug) => {
    setActiveServiceSlug(newSlug);
    const svc = getServiceBySlug(newSlug) || SERVICES_CATALOG[0];
    setFormState((prev) => ({
      ...prev,
      serviceSlug: svc.slug,
      model: svc.models[0] || '',
      glassType: svc.glassTypes[0] || '',
      thickness: svc.thicknessOptions[0] || '',
      glassColor: svc.glassColors[0] || '',
      finishLine: svc.finishLines[0] || '',
    }));
    setErrorMsg('');
  };

  const activeCatalogService = useMemo(
    () => getServiceBySlug(formState.serviceSlug) || SERVICES_CATALOG[0],
    [formState.serviceSlug]
  );

  const validation = useMemo(() => validateAbntConfiguration(formState), [formState]);

  const currentEstimate = useMemo(() => {
    const w = parseFloat(formState.widthMeters.replace(',', '.')) || 0;
    const h = parseFloat(formState.heightMeters.replace(',', '.')) || 0;
    if (w <= 0 || h <= 0) return { min: 0, max: 0 };
    return calculateEstimatedRange(
      activeCatalogService.baseRatePerSqm,
      w,
      h,
      formState.quantity,
      formState.glassType,
      formState.finishLine
    );
  }, [activeCatalogService, formState]);

  const handleAddItemToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const widthNum = parseFloat(formState.widthMeters.replace(',', '.'));
    const heightNum = parseFloat(formState.heightMeters.replace(',', '.'));

    if (!formState.widthMeters || !formState.heightMeters || isNaN(widthNum) || isNaN(heightNum)) {
      setErrorMsg('Por favor, informe a largura e a altura aproximadas em metros.');
      return;
    }

    if (widthNum <= 0 || heightNum <= 0 || formState.quantity <= 0) {
      setErrorMsg('As medidas e a quantidade devem ser maiores que zero.');
      return;
    }

    addItem({
      serviceSlug: activeCatalogService.slug,
      serviceName: activeCatalogService.shortName,
      model: formState.model,
      widthMeters: widthNum,
      heightMeters: heightNum,
      adjustedHeightMm: validation.adjustedHeightMm,
      glassType: formState.glassType,
      thickness: formState.thickness,
      glassColor: formState.glassColor,
      finishLine: formState.finishLine,
      quantity: Math.max(1, formState.quantity),
      notes: formState.notes.trim() || undefined,
      abntNorm: 'Padrão VL',
      abntTechnicalNotes: [
        ...validation.technicalAdjustments,
        ...validation.mandatoryWarnings,
      ],
      estimatedMinBrl: currentEstimate.min,
      estimatedMaxBrl: currentEstimate.max,
    });

    setJustAddedToast(`${activeCatalogService.shortName} incluído no seu projeto!`);
    setTimeout(() => setJustAddedToast(null), 3500);

    setFormState((prev) => ({
      ...prev,
      widthMeters: '',
      heightMeters: '',
      quantity: 1,
      notes: '',
    }));

    if (lastProtocol) {
      dismissProtocolConfirmation();
    }
  };

  const handleFinalizeQuote = async () => {
    if (items.length === 0 || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await submitQuoteWithProtocol({
        customerName,
        customerPhone: '',
        customerNeighborhood,
        consultant: 'geral',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyProtocolDetails = () => {
    if (!lastProtocol) return;
    navigator.clipboard?.writeText(lastProtocol.rawPayloadText);
    setCopiedProtocol(true);
    setTimeout(() => setCopiedProtocol(false), 2500);
  };

  return (
    <section
      id={sectionId}
      className="py-20 bg-[#F9F9F9] border-y border-neutral-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título com Efeito Fade-In e Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#D71920] block mb-2">
            Simulador de Projeto Sob Medida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Orçador Inteligente
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Monte seu projeto adicionando as peças abaixo. Nossa equipe em Umuarama trabalha com rigoroso padrão de segurança e qualidade para cuidar de cada detalhe.
          </p>
        </motion.div>

        {/* Layout de 2 Colunas Animadas */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Lado Esquerdo: Adicionar Peça ao Projeto */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 bg-white p-6 sm:p-8 border border-neutral-200 shadow-xs rounded-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#D71920]" />
                <span>Adicionar Peça ao Projeto</span>
              </h3>

              <form onSubmit={handleAddItemToCart} className="space-y-5" noValidate>
                {/* Seleção de Serviço */}
                <div>
                  <label
                    htmlFor="quote-service-slug"
                    className="block text-sm font-semibold text-neutral-800 mb-1.5"
                  >
                    Selecione a Estrutura
                  </label>
                  <select
                    id="quote-service-slug"
                    value={formState.serviceSlug}
                    onChange={(e) => handleCategoryChange(e.target.value as ServiceSlug)}
                    className="w-full border border-neutral-300 rounded-sm p-3 text-sm text-[#111111] font-medium focus:outline-none focus:border-[#D71920] bg-white"
                  >
                    {SERVICES_CATALOG.map((svc) => (
                      <option key={svc.slug} value={svc.slug}>
                        {svc.shortName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Modelo e Acabamento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quote-model"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Modelo / Abertura
                    </label>
                    <select
                      id="quote-model"
                      value={formState.model}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, model: e.target.value }))
                      }
                      className="w-full border border-neutral-300 rounded-sm p-3 text-sm text-[#111111] focus:outline-none focus:border-[#D71920] bg-white"
                    >
                      {activeCatalogService.models.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-color"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Tonalidade / Cor
                    </label>
                    <select
                      id="quote-color"
                      value={formState.glassColor}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, glassColor: e.target.value }))
                      }
                      className="w-full border border-neutral-300 rounded-sm p-3 text-sm text-[#111111] focus:outline-none focus:border-[#D71920] bg-white"
                    >
                      {activeCatalogService.glassColors.map((gc) => (
                        <option key={gc} value={gc}>
                          {gc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Nota Amigável de Rigor e Qualidade VL */}
                {validation.mandatoryWarnings.length > 0 && (
                  <motion.div
                    key={formState.serviceSlug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-amber-50/90 border border-amber-200 p-3.5 rounded-sm flex items-start gap-3"
                  >
                    <Info className="text-amber-700 shrink-0 mt-0.5" size={18} />
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                      {validation.mandatoryWarnings[0]}
                    </p>
                  </motion.div>
                )}

                {/* Medidas: Largura x Altura */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quote-width"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Largura (metros)
                    </label>
                    <div className="relative">
                      <input
                        id="quote-width"
                        type="number"
                        step="0.01"
                        min="0.10"
                        placeholder="Ex: 1.50"
                        value={formState.widthMeters}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, widthMeters: e.target.value }))
                        }
                        className="w-full border border-neutral-300 rounded-sm p-3 pl-10 text-sm font-mono-tech text-[#111111] focus:outline-none focus:border-[#D71920]"
                      />
                      <Ruler className="absolute left-3 top-3.5 text-neutral-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-height"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Altura (metros)
                    </label>
                    <div className="relative">
                      <input
                        id="quote-height"
                        type="number"
                        step="0.01"
                        min="0.10"
                        placeholder="Ex: 2.10"
                        value={formState.heightMeters}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, heightMeters: e.target.value }))
                        }
                        className="w-full border border-neutral-300 rounded-sm p-3 pl-10 text-sm font-mono-tech text-[#111111] focus:outline-none focus:border-[#D71920]"
                      />
                      <Ruler className="absolute left-3 top-3.5 text-neutral-400" size={18} />
                    </div>
                  </div>
                </div>

                {/* Quantidade & Acabamento da Ferragem */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quote-qty"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Quantidade
                    </label>
                    <input
                      id="quote-qty"
                      type="number"
                      min={1}
                      max={50}
                      value={formState.quantity}
                      onChange={(e) =>
                        setFormState((p) => ({
                          ...p,
                          quantity: Math.max(1, parseInt(e.target.value, 10) || 1),
                        }))
                      }
                      className="w-full border border-neutral-300 rounded-sm p-3 text-sm font-mono-tech text-[#111111] focus:outline-none focus:border-[#D71920]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-finish"
                      className="block text-sm font-semibold text-neutral-800 mb-1.5"
                    >
                      Cor do Perfil / Ferragem
                    </label>
                    <select
                      id="quote-finish"
                      value={formState.finishLine}
                      onChange={(e) =>
                        setFormState((p) => ({ ...p, finishLine: e.target.value }))
                      }
                      className="w-full border border-neutral-300 rounded-sm p-3 text-sm text-[#111111] focus:outline-none focus:border-[#D71920] bg-white"
                    >
                      {activeCatalogService.finishLines.map((fl) => (
                        <option key={fl} value={fl}>
                          {fl}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-[#D71920] text-sm font-semibold">{errorMsg}</p>
                )}

                <AnimatePresence>
                  {justAddedToast && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-3 rounded-sm bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold"
                    >
                      {justAddedToast} Você pode adicionar outra peça se desejar.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-[#111111] hover:bg-neutral-800 text-white font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus size={20} />
                  <span>Incluir no Orçamento</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Lado Direito: Resumo do Projeto + Geração de Protocolo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="bg-[#111111] text-white p-6 rounded-t-sm border-b border-neutral-800 flex justify-between items-center">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-[#D71920]" size={22} />
                <span>Resumo do Projeto</span>
              </h3>
              <span className="font-mono-tech text-xs font-bold text-neutral-300">
                {items.length} {items.length === 1 ? 'Item' : 'Itens'}
              </span>
            </div>

            <div className="bg-white border border-t-0 border-neutral-200 shadow-xs rounded-b-sm flex-grow flex flex-col justify-between">
              <div className="p-6 flex-grow overflow-y-auto max-h-[420px]">
                {/* CONFIRMAÇÃO DE SOLICITAÇÃO ENCAMINHADA + AGRADECIMENTO + PROTOCOLO */}
                <AnimatePresence>
                  {lastProtocol && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      role="status"
                      aria-live="polite"
                      className="p-5 rounded-sm bg-emerald-50/80 border border-emerald-300 space-y-4 mb-4"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="text-base font-bold text-[#111111]">
                            Sua solicitação já foi encaminhada e será analisada!
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                            Muito obrigado pelo seu contato e pela confiança na <strong>Vidraçaria Liderança</strong>. Nossa equipe em Umuarama já registrou seu pedido para análise e atendimento.
                          </p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-sm bg-white border border-emerald-200 flex items-center justify-between gap-3">
                        <div>
                          <span className="block text-[11px] text-neutral-500">
                            Número de Protocolo Gerado:
                          </span>
                          <span className="font-mono-tech text-lg font-extrabold text-[#111111]">
                            #{lastProtocol.protocolNumber}
                          </span>
                          <span className="block text-[11px] text-neutral-500 mt-0.5">
                            {lastProtocol.createdAtFormatted} · {lastProtocol.items.length} peça(s)
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={handleCopyProtocolDetails}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#F2F4F5] hover:bg-neutral-200 text-xs font-semibold text-[#111111] transition-colors shrink-0 cursor-pointer"
                        >
                          {copiedProtocol ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                              <span>Copiado</span>
                            </>
                          ) : (
                            <>
                              <ClipboardCopy className="w-3.5 h-3.5" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="space-y-2 pt-1">
                        <a
                          href={lastProtocol.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-sm bg-[#D71920] hover:bg-[#b51319] text-white font-bold text-sm transition-colors text-center shadow-md"
                        >
                          <Send className="w-4 h-4" />
                          <span>Enviar no WhatsApp com Protocolo #{lastProtocol.protocolNumber}</span>
                        </a>
                        <button
                          type="button"
                          onClick={dismissProtocolConfirmation}
                          className="w-full py-1.5 text-xs text-neutral-500 hover:text-[#111111] transition-colors cursor-pointer"
                        >
                          Montar novo orçamento
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {items.length === 0 && !lastProtocol ? (
                  <div className="h-full flex flex-col items-center justify-center text-neutral-400 py-14 text-center">
                    <Layout size={48} className="mb-4 opacity-50" strokeWidth={1.2} />
                    <p className="font-semibold text-neutral-600">
                      Seu projeto ainda está vazio.
                    </p>
                    <p className="text-sm mt-1 max-w-xs">
                      Escolha a estrutura e informe as medidas ao lado para montar seu orçamento.
                    </p>
                  </div>
                ) : null}

                {items.length > 0 && (
                  <ul className="space-y-3">
                    <AnimatePresence initial={false}>
                      {items.map((item, idx) => (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.28 }}
                          className="border border-neutral-200 bg-[#F9F9F9] p-4 rounded-sm flex justify-between items-center hover:border-neutral-300 transition-colors"
                        >
                          <div>
                            <div className="font-bold text-[#111111] text-sm sm:text-base">
                              <span className="text-[#D71920] mr-2 font-mono-tech">
                                #{idx + 1}
                              </span>
                              {item.serviceName}
                            </div>
                            <div className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                              {item.model} · {item.glassColor} · {item.finishLine}
                            </div>
                            <div className="text-xs font-mono-tech text-neutral-500 mt-1">
                              Medidas: {item.widthMeters.toFixed(2)}m (L) x{' '}
                              {item.heightMeters.toFixed(2)}m (A) — {item.quantity} peça(s)
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-neutral-400 hover:text-[#D71920] p-2 transition-colors cursor-pointer"
                            title="Remover Item"
                            aria-label={`Remover ${item.serviceName}`}
                          >
                            <Trash2 size={20} />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {/* Rodapé do Carrinho com Nome Opcional e Botão Único WhatsApp */}
              <div className="p-6 bg-neutral-50 border-t border-neutral-200 rounded-b-sm space-y-4">
                {items.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Seu nome (opcional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full h-10 px-3 rounded-sm bg-white border border-neutral-300 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#D71920]"
                    />
                    <input
                      type="text"
                      placeholder="Bairro / Condomínio em Umuarama"
                      value={customerNeighborhood}
                      onChange={(e) => setCustomerNeighborhood(e.target.value)}
                      className="w-full h-10 px-3 rounded-sm bg-white border border-neutral-300 text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#D71920]"
                    />
                  </div>
                )}

                <motion.button
                  whileHover={items.length > 0 ? { scale: 1.01 } : undefined}
                  whileTap={items.length > 0 ? { scale: 0.99 } : undefined}
                  type="button"
                  onClick={handleFinalizeQuote}
                  disabled={items.length === 0 || isSubmitting}
                  className={`w-full py-4 rounded-sm font-bold text-base sm:text-lg flex items-center justify-center gap-2 transition-all ${
                    items.length > 0
                      ? 'bg-[#D71920] hover:bg-red-700 text-white shadow-md cursor-pointer'
                      : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                  }`}
                >
                  <Send size={20} />
                  <span>Enviar Projeto para Consultor</span>
                </motion.button>

                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>Gera protocolo automático de atendimento</span>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-neutral-500 hover:text-[#D71920] underline cursor-pointer"
                    >
                      Limpar tudo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
