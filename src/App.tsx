/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuoteCartProvider, useQuoteCart } from './context/QuoteCartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServiceSlug } from './domain/types';

// Importação das 13 páginas individuais em src/pages/services/ (Clean Architecture)
import { BoxParaBanheiroPage } from './pages/services/box-para-banheiro';
import { VidroTemperadoPage } from './pages/services/vidro-temperado';
import { EspelhosSobMedidaPage } from './pages/services/espelhos-sob-medida';
import { FechamentoDeSacadaPage } from './pages/services/fechamento-de-sacada';
import { GuardaCorpoDeVidroPage } from './pages/services/guarda-corpo-de-vidro';
import { PortasDeVidroPage } from './pages/services/portas-de-vidro';
import { JanelasETrocaDeVidroPage } from './pages/services/janelas-e-troca-de-vidro';
import { EsquadriasDeAluminioPage } from './pages/services/esquadrias-de-aluminio';
import { CoberturaDeVidroPage } from './pages/services/cobertura-de-vidro';
import { DivisoriasDeVidroPage } from './pages/services/divisorias-de-vidro';
import { FachadasDeVidroPage } from './pages/services/fachadas-de-vidro';
import { VitrinesComerciaisPage } from './pages/services/vitrines-comerciais';
import { ManutencaoDeVidrosPage } from './pages/services/manutencao-de-vidros';

const AppRouter: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path && path !== '/') {
        return path;
      }
    }
    return '/servicos/box-para-banheiro';
  });

  const { setActiveServiceSlug } = useQuoteCart();

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(window.location.pathname || '/servicos/box-para-banheiro');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = (route: string) => {
    if (route.startsWith('/#') || route.startsWith('/inicio#')) {
      const hashId = route.replace('/inicio#', '').replace('/#', '');
      if (currentRoute !== '/' && currentRoute !== '/inicio') {
        window.history.pushState({}, '', '/inicio');
        setCurrentRoute('/inicio');
        setTimeout(() => {
          const el = document.getElementById(hashId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const normalizedRoute = route === '/' ? '/inicio' : route;
    window.history.pushState({}, '', normalizedRoute);
    setCurrentRoute(normalizedRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteSection = (preselectSlug?: ServiceSlug) => {
    if (preselectSlug) {
      setActiveServiceSlug(preselectSlug);
    }
    const botEl = document.getElementById('bot-triagem-box');
    if (botEl) {
      botEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const targetId = currentRoute.startsWith('/servicos/')
      ? 'orcador-servico'
      : 'orcador-tecnico';
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('/servicos/box-para-banheiro');
    }
  };

  const renderPage = () => {
    switch (currentRoute) {
      case '/servicos/box-para-banheiro':
        return <BoxParaBanheiroPage key="box-para-banheiro" onNavigate={handleNavigate} />;
      case '/servicos/vidro-temperado':
        return <VidroTemperadoPage key="vidro-temperado" onNavigate={handleNavigate} />;
      case '/servicos/espelhos-sob-medida':
        return <EspelhosSobMedidaPage key="espelhos-sob-medida" onNavigate={handleNavigate} />;
      case '/servicos/fechamento-de-sacada':
        return <FechamentoDeSacadaPage key="fechamento-de-sacada" onNavigate={handleNavigate} />;
      case '/servicos/guarda-corpo-de-vidro':
        return <GuardaCorpoDeVidroPage key="guarda-corpo-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/portas-de-vidro':
        return <PortasDeVidroPage key="portas-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/janelas-e-troca-de-vidro':
        return <JanelasETrocaDeVidroPage key="janelas-e-troca-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/esquadrias-de-aluminio':
        return <EsquadriasDeAluminioPage key="esquadrias-de-aluminio" onNavigate={handleNavigate} />;
      case '/servicos/cobertura-de-vidro':
        return <CoberturaDeVidroPage key="cobertura-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/divisorias-de-vidro':
        return <DivisoriasDeVidroPage key="divisorias-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/fachadas-de-vidro':
        return <FachadasDeVidroPage key="fachadas-de-vidro" onNavigate={handleNavigate} />;
      case '/servicos/vitrines-comerciais':
        return <VitrinesComerciaisPage key="vitrines-comerciais" onNavigate={handleNavigate} />;
      case '/servicos/manutencao-de-vidros':
        return <ManutencaoDeVidrosPage key="manutencao-de-vidros" onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            key="home"
            onNavigate={handleNavigate}
            onSelectServiceForQuote={(slug) => setActiveServiceSlug(slug)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#111111]">
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuoteSection={handleOpenQuoteSection}
      />
      <main className="flex-1">
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteSection={handleOpenQuoteSection}
      />
      <FloatingWhatsApp onOpenBot={() => handleOpenQuoteSection()} />
    </div>
  );
};

export default function App() {
  return (
    <QuoteCartProvider>
      <AppRouter />
    </QuoteCartProvider>
  );
}
