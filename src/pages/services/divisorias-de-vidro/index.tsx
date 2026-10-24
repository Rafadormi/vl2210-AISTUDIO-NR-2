import React from 'react';
import { motion } from 'framer-motion';
import { getServiceBySlug } from '../../../domain/catalogData';
import { ServicePageTemplate } from '../../../components/ServicePageTemplate';

interface PageProps {
  onNavigate: (route: string) => void;
}

export const DivisoriasDeVidroPage: React.FC<PageProps> = ({ onNavigate }) => {
  const service = getServiceBySlug('divisorias-de-vidro')!;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <ServicePageTemplate service={service} onNavigate={onNavigate} />
    </motion.div>
  );
};

export default DivisoriasDeVidroPage;
