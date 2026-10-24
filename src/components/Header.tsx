import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../domain/companyData';
import { SERVICES_CATALOG } from '../domain/catalogData';
import { ServiceSlug } from '../domain/types';
import { useQuoteCart } from '../context/QuoteCartContext';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenQuoteSection: (preselectSlug?: ServiceSlug) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenQuoteSection,
}) => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items } = useQuoteCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (route: string) => {
    setServicesMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Zone 1: Brand Logo Horizontal */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="flex items-center text-left whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D71920] rounded-sm cursor-pointer"
          aria-label="Vidraçaria Liderança - Ir para o Início"
        >
          <img
            src={COMPANY_INFO.logoHorizontal}
            alt="Vidraçaria Liderança - Vidros e Esquadrias de Alumínio"
            width={210}
            height={56}
            referrerPolicy="no-referrer"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2B2F33]"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('/inicio')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#D71920] cursor-pointer ${
              currentRoute === '/' || currentRoute === '/inicio'
                ? 'text-[#D71920] font-semibold underline underline-offset-8 decoration-2'
                : ''
            }`}
          >
            Início
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/servicos/box-para-banheiro')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#00677D] cursor-pointer ${
              currentRoute === '/servicos/box-para-banheiro'
                ? 'text-[#00677D] font-bold underline underline-offset-8 decoration-2'
                : ''
            }`}
          >
            Box para Banheiro
          </button>

          {/* Submenu Desktop: 13 Serviços */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesMenuOpen((prev) => !prev)}
              onMouseEnter={() => setServicesMenuOpen(true)}
              aria-expanded={servicesMenuOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#D71920] cursor-pointer ${
                currentRoute.startsWith('/servicos/') &&
                currentRoute !== '/servicos/box-para-banheiro'
                  ? 'text-[#D71920] font-semibold underline underline-offset-8 decoration-2'
                  : ''
              }`}
            >
              <span>13 Especialidades</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesMenuOpen ? 'rotate-180 text-[#D71920]' : ''
                }`}
              />
            </button>

            {servicesMenuOpen && (
              <div
                onMouseLeave={() => setServicesMenuOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[660px] bg-[#FFFFFF] border border-neutral-200 rounded-lg shadow-xl p-5 grid grid-cols-2 gap-x-6 gap-y-1.5 z-50"
              >
                <div className="col-span-2 pb-2.5 mb-2 border-b border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2B2F33] tracking-wide">
                    13 Especialidades Sob Medida em Umuarama · Padrão VL
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesMenuOpen(false);
                      onOpenQuoteSection();
                    }}
                    className="text-xs font-semibold text-[#D71920] hover:underline whitespace-nowrap cursor-pointer"
                  >
                    Simulador de Projeto →
                  </button>
                </div>

                {SERVICES_CATALOG.map((service) => {
                  const isActive = currentRoute === `/servicos/${service.slug}`;
                  return (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => handleLinkClick(`/servicos/${service.slug}`)}
                      className={`group flex items-baseline justify-between text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-neutral-100 text-[#D71920]'
                          : 'hover:bg-[#F2F4F5] text-[#111111]'
                      }`}
                    >
                      <span className="text-sm font-medium group-hover:text-[#D71920] transition-colors truncate">
                        <span className="font-mono-tech text-xs text-neutral-400 mr-2">
                          {service.indexNumber}.
                        </span>
                        {service.shortName}
                      </span>
                      <span className="text-[11px] text-neutral-400 ml-2 whitespace-nowrap shrink-0">
                        Ver modelos
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('/#portfolio')}
            className="py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#D71920] cursor-pointer"
          >
            Portfólio
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/#contato')}
            className="py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#D71920] cursor-pointer"
          >
            Contato
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteSection();
            }}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#D71920] rounded-sm hover:bg-[#b51319] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_15px_rgba(215,25,32,0.2)]"
          >
            Orçamento Rápido{items.length > 0 ? ` (${items.length})` : ''}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#111111] hover:bg-[#F2F4F5] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Menu Mobile"
          className="lg:hidden bg-[#FFFFFF] border-t border-neutral-200 max-h-[80vh] overflow-y-auto px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('/inicio')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-[#111111] hover:bg-[#F2F4F5]"
          >
            Início
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/servicos/box-para-banheiro')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-bold text-[#00677D] bg-[#F1F4FB] hover:bg-[#E5E8EF]"
          >
            Box para Banheiro
          </button>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesExpanded((prev) => !prev)}
              aria-expanded={mobileServicesExpanded}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-semibold text-[#111111] hover:bg-[#F2F4F5]"
            >
              <span>Serviços e Modelos (13)</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${mobileServicesExpanded ? 'rotate-180 text-[#D71920]' : ''}`}
              />
            </button>

            {mobileServicesExpanded && (
              <div className="mt-1 pl-3 border-l border-neutral-200 space-y-1">
                {SERVICES_CATALOG.map((service) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => handleLinkClick(`/servicos/${service.slug}`)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      currentRoute === `/servicos/${service.slug}`
                        ? 'text-[#D71920] bg-neutral-100 font-semibold'
                        : 'text-[#2B2F33] hover:bg-[#F2F4F5]'
                    }`}
                  >
                    <span className="font-mono-tech text-xs text-neutral-400 mr-2">
                      {service.indexNumber}.
                    </span>
                    {service.shortName}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('/#efeitos-abertura')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-[#111111] hover:bg-[#F2F4F5]"
          >
            Efeitos de Abertura
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/#portfolio')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-[#111111] hover:bg-[#F2F4F5]"
          >
            Portfólio
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/#contato')}
            className="w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-[#111111] hover:bg-[#F2F4F5]"
          >
            Contato
          </button>
        </nav>
      )}
    </header>
  );
};
