import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../domain/companyData';
import { SERVICES_CATALOG } from '../domain/catalogData';
import { ServiceSlug } from '../domain/types';

interface FooterProps {
  onNavigate: (route: string) => void;
  onOpenQuoteSection: (preselectSlug?: ServiceSlug) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteSection }) => {
  return (
    <footer id="contato" className="bg-[#111111] text-[#F2F4F5] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Coluna 1: Identidade */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#FFFFFF] inline-block p-2.5 rounded-sm">
              <img
                src={COMPANY_INFO.logoHorizontal}
                alt="Vidraçaria Liderança - Vidros e Esquadrias de Alumínio"
                width={200}
                height={54}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Especialistas em projetos arquitetônicos em vidro e esquadrias de alumínio de alto padrão sob medida em Umuarama-PR.
            </p>

            <div className="text-xs text-neutral-400 space-y-1">
              <p className="font-semibold text-white">
                {COMPANY_INFO.historyMetric} · {COMPANY_INFO.regionServed}
              </p>
              <p>Rigoroso padrão de qualidade, segurança e acabamento (Padrão VL).</p>
            </div>
          </div>

          {/* Coluna 2: As 13 Páginas de Serviços */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-base font-bold text-[#FFFFFF] tracking-tight">
              Especialidades Sob Medida
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {SERVICES_CATALOG.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => onNavigate(`/servicos/${service.slug}`)}
                  className="text-left text-xs sm:text-sm text-neutral-300 hover:text-[#D71920] transition-colors truncate py-0.5 cursor-pointer"
                >
                  <span className="font-mono-tech text-[11px] text-neutral-500 mr-1.5">
                    {service.indexNumber}.
                  </span>
                  {service.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Coluna 3: Endereço, Horário e WhatsApp Único */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-base font-bold text-[#FFFFFF] tracking-tight">
              Atendimento e Localização
            </h2>

            <div className="text-sm text-neutral-300 space-y-1">
              <p className="font-semibold text-white">Endereço em Umuarama - PR:</p>
              <p>{COMPANY_INFO.address.street} - {COMPANY_INFO.address.neighborhood}</p>
              <p>{COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}, CEP {COMPANY_INFO.address.zipCode}</p>
            </div>

            <div className="text-sm text-neutral-300 space-y-1.5 pt-1">
              <p className="font-semibold text-white">Central de Triagem e Orçamentos:</p>
              <button
                type="button"
                onClick={() => onOpenQuoteSection('box-para-banheiro')}
                className="inline-flex items-center gap-2 text-white hover:text-[#D71920] font-bold transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#D71920]" />
                <span>{COMPANY_INFO.whatsapp.displayPhone} (Abrir Bot de Triagem)</span>
              </button>
              <p className="text-xs text-neutral-400 pt-1">
                Segunda a Sexta: 08:00 às 18:00 · Sábado: 08:00 às 12:00
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-neutral-300 hover:text-[#FFFFFF] transition-colors"
              >
                Instagram: <span className="text-white font-semibold">{COMPANY_INFO.social.instagramHandle}</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenQuoteSection()}
                className="mt-1 w-full py-2.5 px-4 bg-[#D71920] hover:bg-[#b51319] text-white text-xs font-semibold rounded-sm transition-colors text-center cursor-pointer"
              >
                Simular Meu Projeto
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <p>Umuarama - PR</p>
        </div>
      </div>
    </footer>
  );
};
