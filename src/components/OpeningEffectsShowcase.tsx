import React, { useState } from 'react';
import { Play, Pause, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceSlug } from '../domain/types';

interface OpeningModel {
  id: string;
  name: string;
  categoryLabel: string;
  serviceSlug: ServiceSlug;
  description: string;
  highlights: string[];
  mechanism: 'correr' | 'articulado' | 'cortina-sacada' | 'pivotante' | 'maxim-ar' | 'retratil';
}

const OPENING_MODELS: OpeningModel[] = [
  {
    id: 'correr',
    name: 'Sistema de Correr & Roldanas Aparentes',
    categoryLabel: 'Boxes, Portas e Esquadrias Linha Gold/Suprema',
    serviceSlug: 'portas-de-vidro',
    description:
      'As folhas móveis deslizam paralelamente sobre trilhos de precisão ou varão com roldanas aparentes, sem ocupar espaço de giro no ambiente.',
    highlights: ['Deslize macio com um toque', 'Não ocupa área interna', 'Opções de 2, 3, 4 ou 6 folhas'],
    mechanism: 'correr',
  },
  {
    id: 'cortina-sacada',
    name: 'Cortina de Vidro (Abertura Panorâmica 90°)',
    categoryLabel: 'Fechamento de Sacada e Varanda Gourmet',
    serviceSlug: 'fechamento-de-sacada',
    description:
      'Painéis independentes sem perfis verticais no meio que correm pelo trilho e giram 90° no canto, liberando quase 100% da vista da varanda.',
    highlights: ['Abertura total da sacada', 'Limpeza segura pelo lado de dentro', 'Proteção contra chuva e vento'],
    mechanism: 'cortina-sacada',
  },
  {
    id: 'articulado',
    name: 'Sistema Articulado (Camarão)',
    categoryLabel: 'Box para Banheiros Compactos e Divisórias',
    serviceSlug: 'box-para-banheiro',
    description:
      'As folhas de vidro dobram suavemente umas sobre as outras através de dobradiças especiais, garantindo ampla passagem mesmo em vãos pequenos.',
    highlights: ['Perfeito para espaços compactos', 'Passagem livre de até 90%', 'Acabamento moderno sem trilho inferior alto'],
    mechanism: 'articulado',
  },
  {
    id: 'pivotante',
    name: 'Sistema Pivotante & Mola Hidráulica',
    categoryLabel: 'Portas Sociais, Comerciais e ACM',
    serviceSlug: 'esquadrias-de-aluminio',
    description:
      'A folha gira sobre pinos pivotantes deslocados da borda ou mola de piso hidráulica, criando um efeito arquitetônico imponente na entrada.',
    highlights: ['Fechamento automático suave', 'Ideal para entradas principais', 'Puxadores alongados em inox ou preto'],
    mechanism: 'pivotante',
  },
  {
    id: 'maxim-ar',
    name: 'Projeção Externa Maxim-Ar',
    categoryLabel: 'Janelas de Banheiro, Cozinha e Fachadas',
    serviceSlug: 'janelas-e-troca-de-vidro',
    description:
      'A folha projeta-se para o lado de fora em ângulo através de braços articulados de alumínio/inox, ventilando o ambiente mesmo com chuva leve.',
    highlights: ['Não interfere em cortinas internas', 'Ventilação segura com chuva', 'Vedação perimetral completa'],
    mechanism: 'maxim-ar',
  },
  {
    id: 'retratil',
    name: 'Cobertura Retrátil Deslizante',
    categoryLabel: 'Pergolados e Espaços Gourmet',
    serviceSlug: 'cobertura-de-vidro',
    description:
      'Módulos superiores em vidro laminado de controle solar que recuam (manualmente ou por controle remoto) para abrir o ambiente ao ar livre.',
    highlights: ['Controle remoto ou manual', 'Vidro com proteção de calor solar', 'Vedação total quando fechada'],
    mechanism: 'retratil',
  },
];

interface OpeningEffectsShowcaseProps {
  onSelectForQuote: (slug: ServiceSlug) => void;
  onNavigate: (route: string) => void;
}

export const OpeningEffectsShowcase: React.FC<OpeningEffectsShowcaseProps> = ({
  onSelectForQuote,
  onNavigate,
}) => {
  const [selectedModel, setSelectedModel] = useState<OpeningModel>(OPENING_MODELS[0]);
  const [openPercent, setOpenPercent] = useState<number>(75);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  React.useEffect(() => {
    if (!isAutoPlaying) return;
    let direction = 1;
    const interval = setInterval(() => {
      setOpenPercent((prev) => {
        if (prev >= 95) direction = -1;
        if (prev <= 5) direction = 1;
        return Math.max(0, Math.min(100, prev + direction * 3));
      });
    }, 60);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const ratio = openPercent / 100;

  return (
    <section className="py-16 sm:py-22 bg-[#111111] text-[#FFFFFF] border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#D71920] tracking-wider uppercase">
              Experiência Interativa · Modelos e Movimentos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Explore os Modelos e Efeitos de Abertura
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-2 leading-relaxed">
              Veja na prática como cada sistema de vidro e esquadria se movimenta no seu ambiente. Escolha um modelo abaixo e controle a abertura.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#2B2F33] hover:bg-[#D71920] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isAutoPlaying ? 'Pausar Movimento' : 'Animar Abertura'}</span>
            </button>
          </div>
        </div>

        {/* Seletor de Modelos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {OPENING_MODELS.map((m) => {
            const active = m.id === selectedModel.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedModel(m)}
                className={`p-3.5 rounded-sm text-left border transition-all cursor-pointer ${
                  active
                    ? 'bg-[#D71920] border-[#D71920] text-white shadow-lg'
                    : 'bg-[#1C1F23] border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
                }`}
              >
                <p className="text-xs font-bold leading-snug">{m.name}</p>
              </button>
            );
          })}
        </div>

        {/* Palco Interativo de Abertura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#181B1F] border border-neutral-800 rounded-md p-6 sm:p-8">
          {/* Visualizador Animado em Tempo Real */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-sm overflow-hidden bg-[#0F1318] border border-neutral-700 aspect-16/10">
              <svg viewBox="0 0 800 500" className="w-full h-full block">
                <defs>
                  <linearGradient id="stageGlass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.58" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#0284C7" stopOpacity="0.48" />
                  </linearGradient>
                </defs>

                {/* Fundo Arquitetônico Iluminado */}
                <rect width="800" height="500" fill="#14181F" />
                <rect x="80" y="60" width="640" height="360" fill="#1F242D" stroke="#2B2F33" strokeWidth="8" />
                <polygon points="0,420 800,420 800,500 0,500" fill="#27272A" />

                {/* 1. Mecanismo de Correr */}
                {selectedModel.mechanism === 'correr' && (
                  <g>
                    <rect x="85" y="65" width="630" height="10" fill="#111111" />
                    {/* Folha Fixa Esquerda */}
                    <rect
                      x="90"
                      y="75"
                      width="315"
                      height="340"
                      fill="url(#stageGlass)"
                      stroke="#E4E4E7"
                      strokeWidth="4"
                    />
                    {/* Folha Móvel Direita Deslizando */}
                    <g transform={`translate(${-ratio * 265}, 0)`}>
                      <circle cx="445" cy="70" r="12" fill="#D71920" />
                      <circle cx="665" cy="70" r="12" fill="#D71920" />
                      <rect
                        x="400"
                        y="75"
                        width="310"
                        height="340"
                        fill="url(#stageGlass)"
                        stroke="#FFFFFF"
                        strokeWidth="5"
                      />
                      <rect x="680" y="215" width="8" height="65" rx="4" fill="#D71920" />
                    </g>
                  </g>
                )}

                {/* 2. Cortina de Vidro (Sacada) */}
                {selectedModel.mechanism === 'cortina-sacada' && (
                  <g>
                    <rect x="85" y="65" width="630" height="12" fill="#E4E4E7" />
                    <rect x="85" y="408" width="630" height="12" fill="#E4E4E7" />
                    {[0, 1, 2, 3].map((idx) => {
                      const baseX = 95 + idx * 155;
                      const targetX = 95 + idx * 18;
                      const curX = baseX - (baseX - targetX) * ratio;
                      const curW = 152 - ratio * 124;
                      return (
                        <rect
                          key={idx}
                          x={curX}
                          y="77"
                          width={curW}
                          height="331"
                          fill="url(#stageGlass)"
                          stroke="#FFFFFF"
                          strokeWidth="3"
                        />
                      );
                    })}
                  </g>
                )}

                {/* 3. Articulado (Camarão) */}
                {selectedModel.mechanism === 'articulado' && (
                  <g>
                    <rect
                      x="95"
                      y="70"
                      width={300 - ratio * 220}
                      height="345"
                      fill="url(#stageGlass)"
                      stroke="#FFFFFF"
                      strokeWidth="5"
                    />
                    <rect
                      x={95 + (300 - ratio * 220)}
                      y="70"
                      width={300 - ratio * 220}
                      height="345"
                      fill="url(#stageGlass)"
                      stroke="#E4E4E7"
                      strokeWidth="5"
                    />
                  </g>
                )}

                {/* 4. Pivotante */}
                {selectedModel.mechanism === 'pivotante' && (
                  <g>
                    <rect x="90" y="70" width="180" height="345" fill="url(#stageGlass)" stroke="#2B2F33" strokeWidth="6" />
                    <rect x="530" y="70" width="180" height="345" fill="url(#stageGlass)" stroke="#2B2F33" strokeWidth="6" />
                    {/* Folha Pivotante Central simulando perspectiva de giro */}
                    <polygon
                      points={`
                        ${290 + ratio * 35},70
                        ${510 - ratio * 95},${70 + ratio * 28}
                        ${510 - ratio * 95},${415 - ratio * 28}
                        ${290 + ratio * 35},415
                      `}
                      fill="url(#stageGlass)"
                      stroke="#FFFFFF"
                      strokeWidth="6"
                    />
                    {/* Eixo Pivotante */}
                    <line x1="315" y1="60" x2="315" y2="425" stroke="#D71920" strokeWidth="3" strokeDasharray="6,4" />
                  </g>
                )}

                {/* 5. Maxim-Ar */}
                {selectedModel.mechanism === 'maxim-ar' && (
                  <g>
                    <polygon
                      points={`
                        160,90
                        640,90
                        ${640 + ratio * 45},${380 - ratio * 85}
                        ${160 - ratio * 45},${380 - ratio * 85}
                      `}
                      fill="url(#stageGlass)"
                      stroke="#FFFFFF"
                      strokeWidth="6"
                    />
                    <line x1="160" y1="200" x2={160 - ratio * 35} y2={280 - ratio * 45} stroke="#D71920" strokeWidth="4" />
                    <line x1="640" y1="200" x2={640 + ratio * 35} y2={280 - ratio * 45} stroke="#D71920" strokeWidth="4" />
                  </g>
                )}

                {/* 6. Cobertura Retrátil */}
                {selectedModel.mechanism === 'retratil' && (
                  <g>
                    <polygon points="90,140 410,165 410,190 90,165" fill="url(#stageGlass)" stroke="#FFFFFF" strokeWidth="4" />
                    <g transform={`translate(${-ratio * 280}, ${-ratio * 22})`}>
                      <polygon
                        points="390,163 710,188 710,213 390,188"
                        fill="url(#stageGlass)"
                        stroke="#38BDF8"
                        strokeWidth="5"
                      />
                    </g>
                    <rect x="100" y="165" width="16" height="255" fill="#111111" />
                    <rect x="684" y="210" width="16" height="210" fill="#111111" />
                  </g>
                )}
              </svg>

              <div className="absolute top-3 left-3 bg-[#111111]/85 px-3 py-1 rounded-xs text-xs font-mono-tech text-white border border-white/10">
                Abertura Atual: <span className="text-[#D71920] font-bold">{openPercent}%</span>
              </div>
            </div>

            {/* Controle Deslizante Manual */}
            <div className="flex items-center gap-4 bg-[#111111] p-3.5 rounded-sm border border-neutral-800">
              <span className="text-xs font-semibold text-neutral-400 whitespace-nowrap">
                Fechado (0%)
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={openPercent}
                onChange={(e) => {
                  setIsAutoPlaying(false);
                  setOpenPercent(parseInt(e.target.value, 10));
                }}
                aria-label="Controlar porcentagem de abertura do vidro"
                className="w-full accent-[#D71920] cursor-pointer"
              />
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                Aberto (100%)
              </span>
            </div>
          </div>

          {/* Detalhes do Modelo Selecionado */}
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-bold text-[#D71920] uppercase tracking-wider">
              {selectedModel.categoryLabel}
            </span>
            <h3 className="text-2xl font-bold text-white leading-snug">
              {selectedModel.name}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {selectedModel.description}
            </p>

            <ul className="space-y-2.5 pt-1">
              {selectedModel.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-200">
                  <Sparkles className="w-4 h-4 text-[#D71920] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  onSelectForQuote(selectedModel.serviceSlug);
                  const el = document.getElementById('orcador-tecnico');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 bg-[#D71920] hover:bg-[#b51319] text-white text-xs sm:text-sm font-bold rounded-sm transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Simular este Modelo no Orçador</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate(`/servicos/${selectedModel.serviceSlug}`)}
                className="px-4 py-3 border border-neutral-600 hover:border-white text-white text-xs sm:text-sm font-semibold rounded-sm transition-colors cursor-pointer"
              >
                Ver Página Completa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
