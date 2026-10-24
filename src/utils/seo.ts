import { COMPANY_INFO } from '../domain/companyData';
import { FAQItem } from '../domain/types';

interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  serviceName?: string;
  faqs?: FAQItem[];
}

export function applyPageSeo({ title, description, path = '/', serviceName, faqs }: SeoConfig): void {
  document.title = title;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.setAttribute('content', content);
    }
  };

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);

  const schemaEl = document.getElementById('schema-jsonld');
  if (schemaEl) {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${baseUrl}/#organization`,
        name: COMPANY_INFO.name,
        url: baseUrl,
        image: `${baseUrl}${COMPANY_INFO.logoHorizontal}`,
        description:
          'Vidros e esquadrias sob medida em Umuarama - PR. Box, espelhos, fachadas, portas, janelas e guarda-corpos com validação técnica ABNT.',
        foundingDate: '2018',
        telephone: '+55-44-99800-8515',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${COMPANY_INFO.address.street} - ${COMPANY_INFO.address.neighborhood}`,
          addressLocality: COMPANY_INFO.address.city,
          addressRegion: COMPANY_INFO.address.state,
          postalCode: COMPANY_INFO.address.zipCode,
          addressCountry: 'BR',
        },
        areaServed: 'Umuarama e região - PR',
        sameAs: [COMPANY_INFO.social.instagramUrl],
      },
    ];

    if (serviceName) {
      graph.push({
        '@type': 'Service',
        name: `${serviceName} em Umuarama`,
        description,
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: {
          '@type': 'City',
          name: 'Umuarama - PR',
        },
        url: `${baseUrl}${path}`,
      });
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    schemaEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }
}
