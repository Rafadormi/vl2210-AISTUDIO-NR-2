import { ServiceDefinition, ServiceSlug } from './types';

export const SERVICES_CATALOG: ServiceDefinition[] = [
  {
    slug: 'box-para-banheiro',
    indexNumber: '01',
    shortName: 'Box para Banheiro',
    h1Title: 'Box para Banheiro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Box para Banheiro em Umuarama | Vidraçaria Liderança',
    seoDescription:
      'Box para banheiro sob medida em Umuarama - PR: Padrão, Canto, Articulado, Roldanas Aparentes, Elegance e Piso ao Teto com acabamento de alto padrão.',
    heroSubtitle:
      'Transforme seu banheiro com sistemas de abertura leve: roldanas aparentes, articulado, de canto ou piso ao teto, feitos sob medida em Umuarama.',
    fullDescription: [
      'A Vidraçaria Liderança projeta e instala Box para Banheiro sob medida em Umuarama e região com rigoroso padrão de segurança e acabamento impecável. Nossos sistemas combinam vedação eficiente, deslizamento macio e ferragens em alumínio ou aço inox nas cores preto fosco, dourado, branco ou cromado.',
      'Cada peça é medida e ajustada com precisão milimétrica para que as portas corram com suavidade e valorizem a estética da sua suíte ou banheiro social.',
    ],
    abntNormCode: 'Padrão VL · Banheiros',
    abntNormSummary:
      'Folhas de correr calibradas com ajuste milimétrico nos trilhos, travas de segurança e roldanas blindadas de alta durabilidade.',
    models: [
      'Box com Roldanas Aparentes (Linha Elegance)',
      'Box Padrão de Correr',
      'Box de Canto (Em L)',
      'Box Articulado (Sistema Camarão)',
      'Box Piso ao Teto',
      'Box de Vidro Curvo',
    ],
    glassTypes: [
      'Vidro Temperado 8mm de Segurança',
      'Vidro Laminado de Alta Segurança',
      'Vidro Extra Clear (Super Transparente)',
      'Vidro Jateado / Acidato (Privacidade)',
      'Vidro Texturizado / Impresso',
    ],
    thicknessOptions: ['8mm (Tradicional)', '10mm (Piso ao Teto / Grandes Vãos)'],
    glassColors: ['Incolor', 'Extra Clear', 'Verde', 'Fumê', 'Bronze', 'Fosco / Acidato'],
    finishLines: [
      'Preto Fosco',
      'Inox Polido (Linha Elegance)',
      'Inox Escovado',
      'Dourado / Champagne',
      'Branco',
    ],
    applications: [
      'Suítes residenciais e banheiros sociais modernos',
      'Banheiros compactos que pedem abertura articulada (camarão) ou de canto',
      'Suítes master com fechamento piso ao teto para reter o vapor do banho',
      'Projetos de hotelaria, clínicas e espaços de bem-estar em Umuarama',
    ],
    benefits: [
      {
        title: 'Deslizamento Suave e Silencioso',
        description: 'Roldanas com rolamento blindado e ajuste perfeito no trilho para abrir e fechar com um simples toque.',
      },
      {
        title: 'Acabamentos que Valorizam o Ambiente',
        description: 'Ferragens em preto fosco, inox, dourado ou branco que harmonizam com os metais do seu banheiro.',
      },
      {
        title: 'Rigoroso Padrão de Segurança',
        description: 'Vidros certificados, batedores amortecidos e instalação limpa realizada por equipe própria.',
      },
    ],
    catalogItems: [
      {
        name: 'Box Elegance com Roldanas Aparentes',
        description: 'Modelo contemporâneo com tubo superior e roldanas aparentes em destaque, trazendo leveza e sofisticação ao banho.',
        applications: 'Suítes e banheiros de alto padrão',
        tag: 'Destaque em Design',
      },
      {
        name: 'Box Padrão de Correr',
        description: 'Solução prática, resistente e versátil, com excelente vedação e fácil limpeza no dia a dia.',
        applications: 'Banheiros residenciais e sociais',
        tag: 'Mais Pedido',
      },
      {
        name: 'Box de Canto (Configuração em L)',
        description: 'Ideal para banheiros onde o chuveiro fica posicionado no canto, aproveitando ao máximo o espaço útil.',
        applications: 'Banheiros pequenos ou médios',
      },
      {
        name: 'Box Articulado (Sistema Camarão)',
        description: 'Folhas que dobram suavemente umas sobre as outras, garantindo ampla passagem mesmo em vãos estreitos.',
        applications: 'Banheiros compactos e acessibilidade',
      },
      {
        name: 'Box Piso ao Teto',
        description: 'Fechamento contínuo até o forro ou laje, retendo o vapor quente e criando um visual de spa em casa.',
        applications: 'Suítes master e projetos contemporâneos',
      },
      {
        name: 'Box de Vidro Curvo',
        description: 'Solução exclusiva com vidro moldado sob medida para projetos diferenciados.',
        applications: 'Banheiros personalizados',
      },
    ],
    gallery: [
      {
        id: 'box-1',
        title: 'Box Elegance com Roldanas Aparentes',
        subtitle: 'Suíte Residencial — Umuarama',
        specs: 'Vidro Incolor 8mm · Roldanas Aparentes · Deslize Suave',
        sceneType: 'box-banheiro',
      },
      {
        id: 'box-2',
        title: 'Box Piso ao Teto em Acabamento Preto Fosco',
        subtitle: 'Design Contemporâneo',
        specs: 'Vidro Fumê · Vedação Completa até o Teto',
        sceneType: 'box-banheiro',
      },
      {
        id: 'box-3',
        title: 'Box de Canto em L e Box Articulado',
        subtitle: 'Aproveitamento Inteligente de Espaço',
        specs: 'Abertura Ampla · Acabamento Sob Medida',
        sceneType: 'box-banheiro',
      },
    ],
    faqs: [
      {
        question: 'Qual a diferença entre o Box Padrão e o Box com Roldanas Aparentes (Elegance)?',
        answer:
          'O Box Padrão possui um perfil superior fechado por onde as roldanas correm embutidas. Já o Box Elegance traz um varão estrutural com roldanas grandes aparentes em inox ou preto fosco, oferecendo um visual moderno e deslize super leve.',
      },
      {
        question: 'Tenho um banheiro pequeno. Qual o melhor modelo de abertura?',
        answer:
          'Para banheiros compactos, o Box Articulado (sistema camarão) ou o Box de Canto são excelentes escolhas, pois liberam quase todo o vão de passagem sem ocupar espaço da pia ou do vaso sanitário.',
      },
      {
        question: 'Como manter o box sempre macio e seguro por muitos anos?',
        answer:
          'Nosso padrão de instalação já deixa o conjunto perfeitamente alinhado. Recomendamos apenas limpeza com sabão neutro e uma revisão simples anual das roldanas e batedores.',
      },
    ],
    baseRatePerSqm: 440,
    sceneType: 'box-banheiro',
  },
  {
    slug: 'vidro-temperado',
    indexNumber: '02',
    shortName: 'Vidro Temperado',
    h1Title: 'Vidro Temperado e Especiais em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Vidro Temperado Sob Medida em Umuarama | Vidraçaria Liderança',
    seoDescription:
      'Vidro temperado, laminado, extra clear, controle solar, acústico e lousas de vidro sob medida em Umuarama - PR.',
    heroSubtitle:
      'Painéis de vidro sob medida, fechamentos de área gourmet, lousas de vidro corporativas e vidros especiais de controle solar e acústico.',
    fullDescription: [
      'O Vidro Temperado une transparência, modernidade e resistência até cinco vezes superior ao vidro comum. É a escolha ideal para integrar ambientes, fechar áreas gourmet, lavanderias, corredores e criar painéis iluminados.',
      'A Vidraçaria Liderança também oferece em Umuarama toda a linha de Vidros Especiais e Lousas de Vidro: Extra Clear, Controle Solar, Acústico, Serigrafado, Jateado, Polarizado Inteligente e Pisos/Visores de Piscina.',
    ],
    abntNormCode: 'Padrão VL · Vidros Sob Medida',
    abntNormSummary:
      'Vidros temperados e especiais com lapidação diamantada, recortes precisos e rigoroso controle de qualidade.',
    models: [
      'Fechamento de Área Gourmet em Vidro Temperado',
      'Painel Fixo / Divisão de Lavanderia',
      'Lousa de Vidro (Branca / Preta / Magnética / Com Logotipo)',
      'Painel em Vidro Extra Clear / Controle Solar / Acústico',
      'Piso de Vidro ou Visor de Piscina',
      'Tampo de Mesa e Prateleiras Sob Medida',
    ],
    glassTypes: [
      'Vidro Temperado de Segurança',
      'Vidro Laminado Temperado',
      'Vidro Extra Clear (Cristalino)',
      'Vidro de Controle Solar (Reduz Calor)',
      'Vidro Acústico / Duplo',
      'Vidro Jateado / Acidato / Serigrafado',
      'Vidro Polarizado Inteligente',
    ],
    thicknessOptions: ['6mm', '8mm', '10mm', '12mm', 'Multilaminado Estrutural'],
    glassColors: ['Incolor', 'Extra Clear', 'Verde', 'Fumê', 'Bronze', 'Branco / Preto (Lousas)', 'Fosco'],
    finishLines: [
      'Perfil de Alumínio Preto Fosco',
      'Perfil de Alumínio Branco',
      'Botões e Prolongadores em Inox',
      'Fixação Invisível Colada (Lousas)',
    ],
    applications: [
      'Fechamentos de áreas gourmet, churrasqueiras e lavanderias',
      'Painéis arquitetônicos residenciais e comerciais',
      'Escritórios, clínicas e escolas com Lousas de Vidro personalizadas',
      'Pisos translúcidos, visores de piscina e tampos de mesa',
    ],
    benefits: [
      {
        title: 'Alta Resistência e Durabilidade',
        description: 'Suporta variações de temperatura e o uso diário intenso com total segurança.',
      },
      {
        title: 'Opções Térmicas e Acústicas',
        description: 'Vidros especiais que bloqueiam o calor do sol e reduzem o barulho externo.',
      },
      {
        title: 'Lousas de Vidro que Não Mancham',
        description: 'Ideais para empresas e salas de estudo, com opção magnética e aplicação do logotipo da sua marca.',
      },
    ],
    catalogItems: [
      {
        name: 'Fechamentos e Painéis em Vidro Temperado',
        description: 'Painéis sob medida nas cores incolor, fumê, verde ou bronze para integrar e proteger ambientes.',
        applications: 'Áreas gourmet, lavanderias e varandas',
        tag: 'Versátil',
      },
      {
        name: 'Vidro Extra Clear',
        description: 'Transparência cristalina sem o tom esverdeado nas bordas, destacando a decoração com fidelidade.',
        applications: 'Projetos premium, vitrines e tampos',
      },
      {
        name: 'Lousas de Vidro (Branca, Preta, Magnética e com Logotipo)',
        description: 'Fáceis de apagar, nunca mancham e podem ser personalizadas com a marca da sua empresa ou agendas.',
        applications: 'Escritórios, clínicas, escolas e home office',
        tag: 'Corporativo',
      },
      {
        name: 'Vidros de Controle Solar, Low-E e Acústicos',
        description: 'Tecnologia que barra o calor e atenua ruídos da rua mantendo a entrada de luz natural.',
        applications: 'Salas, quartos e fachadas ensolaradas',
      },
      {
        name: 'Vidro Jateado, Acidato e Serigrafado',
        description: 'Acabamentos translúcidos e acetinados para garantir privacidade entre cozinha e área de serviço.',
        applications: 'Divisórias de lavanderia, portas e banheiros',
      },
      {
        name: 'Piso de Vidro e Visor de Piscina',
        description: 'Composições estruturais multilaminadas de alta resistência para projetos arquitetônicos surpreendentes.',
        applications: 'Residências de alto padrão e áreas de lazer',
      },
    ],
    gallery: [
      {
        id: 'vt-1',
        title: 'Fechamento de Área Gourmet em Vidro Temperado',
        subtitle: 'Residência em Umuarama',
        specs: 'Vidro Temperado 10mm · Perfis Pretos · Ampla Abertura',
        sceneType: 'vidro-temperado',
      },
      {
        id: 'vt-2',
        title: 'Lousa de Vidro Magnética com Logotipo',
        subtitle: 'Ambiente Corporativo',
        specs: 'Acabamento Colado Limpo · Escrita sem Manchas',
        sceneType: 'vidro-temperado',
      },
      {
        id: 'vt-3',
        title: 'Painel com Vidro de Controle Solar e Acústico',
        subtitle: 'Conforto Térmico e Silêncio',
        specs: 'Proteção contra Calor Solar · Mais Luminosidade',
        sceneType: 'vidro-temperado',
      },
    ],
    faqs: [
      {
        question: 'Posso usar o vidro temperado para fechar minha área gourmet com churrasqueira?',
        answer:
          'Sim! É uma das aplicações mais procuradas em Umuarama. O vidro temperado suporta muito bem o calor próximo e permite abrir todo o espaço quando você recebe convidados.',
      },
      {
        question: 'As lousas de vidro realmente não deixam manchas de caneta?',
        answer:
          'Exato. Diferente do quadro branco comum que fica acinzentado com o tempo, o vidro não absorve tinta e limpa facilmente em segundos.',
      },
      {
        question: 'Qual vidro escolher quando bate muito sol à tarde?',
        answer:
          'Indicamos o Vidro de Controle Solar (neutro ou refletivo), que filtra grande parte do calor e dos raios UV mantendo o ambiente claro e agradável.',
      },
    ],
    baseRatePerSqm: 390,
    sceneType: 'vidro-temperado',
  },
  {
    slug: 'espelhos-sob-medida',
    indexNumber: '03',
    shortName: 'Espelhos Sob Medida',
    h1Title: 'Espelhos Sob Medida em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Espelhos Sob Medida em Umuarama | LED, Bisotê, Bronze e Fumê',
    seoDescription:
      'Espelhos sob medida em Umuarama - PR: Prata, Fumê, Bronze, com iluminação LED, Bisotê e painéis decorativos de parede.',
    heroSubtitle:
      'Espelhos Prata, Fumê e Bronze com iluminação LED embutida, acabamento bisotê ou lapidado e instalação limpa de alta durabilidade.',
    fullDescription: [
      'Os Espelhos Sob Medida da Vidraçaria Liderança ampliam e iluminam salas de jantar, halls de entrada, lavabos, suítes, closets, academias e lojas em Umuarama. Utilizamos espelhos de primeira linha com reflexo nítido e sem distorções.',
      'Nosso rigoroso processo de instalação utiliza exclusivamente fixadores neutros especiais que protegem a camada refletiva do espelho, garantindo brilho impecável e livre de manchas por muitos anos.',
    ],
    abntNormCode: 'Padrão VL · Espelhos & LED',
    abntNormSummary:
      'Lapidação diamantada, bisotê de precisão, iluminação LED aconchegante e fixação especial anti-manchas.',
    models: [
      'Espelho com Iluminação LED (Quente / Neutro / Frio)',
      'Espelho Lapidado Sob Medida',
      'Espelho com Bisotê (Borda Chanfrada Elegante)',
      'Painel de Parede Inteira (Sala de Jantar / Hall)',
      'Espelho Orgânico / Redondo / Arco',
      'Revestimento de Portas de Closet e Móveis',
    ],
    glassTypes: [
      'Espelho Prata Cristal (Reflexo Clássico)',
      'Espelho Bronze (Tom Quente e Sofisticado)',
      'Espelho Fumê (Tom Acinzentado Moderno)',
      'Espelho Extra Clear',
    ],
    thicknessOptions: ['4mm (Decorativo e Banheiros)', '5mm (Painéis Médios e Salas)', '6mm (Grandes Paredes e Academias)'],
    glassColors: ['Prata Tradicional', 'Bronze', 'Fumê'],
    finishLines: [
      'Retroiluminação LED Flutuante com Touch',
      'Lapidação Reta Polida',
      'Bisotê de 10mm a 25mm',
      'Moldura Slim em Alumínio Preto / Dourado / Bronze',
    ],
    applications: [
      'Banheiros, lavabos, penteadeiras e camarins com iluminação LED',
      'Paredes de salas de jantar, estar e corredores para ampliar o ambiente',
      'Portas de guarda-roupas, closets planejados e aparadores',
      'Academias, estúdios, salões de beleza, clínicas e lojas em Umuarama',
    ],
    benefits: [
      {
        title: 'Iluminação LED Pronta para Uso',
        description: 'Espelhos com luz indireta ou frontal jateada que transformam o visual do banheiro ou lavabo.',
      },
      {
        title: 'Acabamento Bisotê e Cortes Especiais',
        description: 'Bordas chanfradas em bisotê ou formatos redondos, arcos e orgânicos sob medida.',
      },
      {
        title: 'Instalação Protegida contra Manchas',
        description: 'Utilizamos adesivos neutros específicos para espelhos, preservando as bordas sempre perfeitas.',
      },
    ],
    catalogItems: [
      {
        name: 'Espelho com LED (LED Mirror)',
        description: 'Iluminação LED embutida (quente, neutra ou fria) ideal para maquiagem, barba e decoração sofisticada.',
        applications: 'Banheiros, lavabos, camarins e suítes',
        tag: 'Mais Desejado',
      },
      {
        name: 'Espelho Prata Sob Medida',
        description: 'Reflexo fiel e cristalino que duplica a iluminação e a sensação de amplitude de qualquer cômodo.',
        applications: 'Salas, quartos, banheiros e academias',
      },
      {
        name: 'Espelhos Bronze e Fumê',
        description: 'Tonalidades acobreadas ou acinzentadas que combinam perfeitamente com marcenaria e iluminação quente.',
        applications: 'Salas de jantar, halls, painéis de TV e lavabos',
        tag: 'Alta Decoração',
      },
      {
        name: 'Painéis de Parede e Mosaicos com Bisotê',
        description: 'Composição de grandes espelhos ou peças bisotadas para valorizar paredes inteiras com requinte.',
        applications: 'Salas de jantar, recepções e halls de entrada',
      },
      {
        name: 'Espelhos para Móveis e Portas de Closet',
        description: 'Peças lapidadas sob medida para aplicação em portas de correr de armários e mobiliário planejado.',
        applications: 'Closets, dormitórios e marcenaria',
      },
    ],
    gallery: [
      {
        id: 'esp-1',
        title: 'Espelho Flutuante com Iluminação LED Quente',
        subtitle: 'Lavabo e Suíte — Umuarama',
        specs: 'Luz LED Aconchegante · Acionamento Suave · Sob Medida',
        sceneType: 'espelhos',
      },
      {
        id: 'esp-2',
        title: 'Painel de Parede em Espelho Bronze com Bisotê',
        subtitle: 'Sala de Jantar Integrada',
        specs: 'Espelho Bronze 5mm · Bisotê 20mm · Amplitude Visual',
        sceneType: 'espelhos',
      },
      {
        id: 'esp-3',
        title: 'Portas de Closet Revestidas em Espelho Fumê',
        subtitle: 'Suíte Master',
        specs: 'Perfil Slim em Alumínio · Reflexo Sem Distorção',
        sceneType: 'espelhos',
      },
    ],
    faqs: [
      {
        question: 'Vocês fazem espelhos com LED na medida exata da minha bancada?',
        answer:
          'Sim! Fabricamos o espelho com LED exatamente na largura e altura do seu projeto, podendo ser retangular, redondo, em arco ou orgânico, com luz quente (amarelada), neutra ou fria (branca).',
      },
      {
        question: 'Como vocês evitam aquelas manchas escuras que aparecem atrás de espelhos antigos?',
        answer:
          'Trabalhamos com rigor técnico utilizando apenas cola e silicone neutros próprios para espelhos e respeitando o espaçamento de ventilação traseira, evitando qualquer oxidação.',
      },
      {
        question: 'Qual a diferença entre o espelho Prata, Bronze e Fumê?',
        answer:
          'O Prata é o espelho tradicional de reflexo fiel; o Bronze tem um tom quente dourado/acobreado ótimo para combinar com madeira; e o Fumê possui um tom cinza moderno e elegante.',
      },
    ],
    baseRatePerSqm: 380,
    sceneType: 'espelhos',
  },
  {
    slug: 'fechamento-de-sacada',
    indexNumber: '04',
    shortName: 'Fechamento de Sacada',
    h1Title: 'Fechamento de Sacada em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Envidraçamento e Fechamento de Sacada em Umuarama | Cortina de Vidro',
    seoDescription:
      'Fechamento de sacada e cortina de vidro em Umuarama - PR: sistemas retráteis com ou sem roldanas e Roll Door para varandas gourmet.',
    heroSubtitle:
      'Aproveite sua varanda o ano inteiro com sistemas de Cortina de Vidro que abrem totalmente, protegem da chuva e do vento e valorizam seu imóvel.',
    fullDescription: [
      'O Fechamento de Sacada (Cortina de Vidro) integra sua varanda gourmet à sala de estar, protegendo contra vento forte, chuva, poeira e barulho da rua sem perder a vista panorâmica.',
      'Na Vidraçaria Liderança, cada sacada em Umuarama é projetada com perfis reforçados, roldanas em aço inox de deslize leve e vedação eficiente, permitindo recolher todas as folhas no canto quando você quiser a varanda 100% aberta.',
    ],
    abntNormCode: 'Padrão VL · Sacadas Panorâmicas',
    abntNormSummary:
      'Sistemas retráteis com abertura total de canto, alta resistência ao vento e compatibilidade com o padrão do seu condomínio.',
    models: [
      'Cortina de Vidro com Roldanas (Abertura Total no Canto)',
      'Sacada Panorâmica sem Roldanas',
      'Sistema Roll Door (Painéis Deslizantes Paralelos)',
      'Sacada Especial (Pé-Direito Duplo / Vidro Refletivo)',
    ],
    glassTypes: [
      'Vidro Laminado de Segurança (8mm / 10mm)',
      'Vidro Temperado com Película de Segurança',
      'Vidro de Controle Solar / Refletivo (Padrão Condomínio)',
    ],
    thicknessOptions: ['8mm', '10mm (Mais Indicado para Apartamentos)', '12mm (Grandes Alturas)'],
    glassColors: ['Incolor', 'Verde', 'Fumê', 'Bronze', 'Refletivo Prata / Champanhe'],
    finishLines: [
      'Alumínio Branco',
      'Alumínio Preto Fosco',
      'Alumínio Bronze / Corten',
      'Anodizado Natural',
    ],
    applications: [
      'Sacadas e varandas gourmet de apartamentos em Umuarama',
      'Varandas térreas integradas à piscina ou jardim (Sistema Roll Door)',
      'Coberturas e sacadas com pé-direito duplo',
      'Terraços de restaurantes e espaços comerciais',
    ],
    benefits: [
      {
        title: 'Abertura Panorâmica Total',
        description: 'As folhas deslizam pelo trilho e giram 90° no canto, deixando o vão livre e facilitando a limpeza pelos dois lados.',
      },
      {
        title: 'Proteção contra Vento, Chuva e Poeira',
        description: 'Mantenha seus móveis e área de churrasqueira sempre limpos e protegidos em qualquer estação do ano.',
      },
      {
        title: 'Padrão Condominial Garantido',
        description: 'Seguimos rigorosamente a cor de alumínio e tonalidade de vidro definidas pelo seu edifício em Umuarama.',
      },
    ],
    catalogItems: [
      {
        name: 'Cortina de Vidro com Roldanas (Envidraçamento Europeu)',
        description: 'Folhas individuais que deslizam suavemente e recolhem na lateral, mantendo a vista totalmente livre sem montantes verticais.',
        applications: 'Varandas de apartamentos e espaços gourmet',
        tag: 'Abertura Total',
      },
      {
        name: 'Sacada Padrão sem Roldanas',
        description: 'Sistema de deslize direto com visual minimalista e baixíssima necessidade de manutenção.',
        applications: 'Sacadas residenciais',
      },
      {
        name: 'Sistema Roll Door',
        description: 'Painéis de vidro que correm paralelamente em trilhos múltiplos, ótimo para integrar sala, varanda e jardim.',
        applications: 'Áreas gourmet térreas e grandes vãos',
        tag: 'Integração',
      },
      {
        name: 'Sacadas Especiais e Vidros Refletivos',
        description: 'Soluções sob medida para formatos curvos, angulados, pé-direito duplo e fachadas espelhadas.',
        applications: 'Edifícios de alto padrão',
      },
    ],
    gallery: [
      {
        id: 'sac-1',
        title: 'Cortina de Vidro Panorâmica em Varanda Gourmet',
        subtitle: 'Apartamento em Umuarama',
        specs: 'Recolhimento Total no Canto · Vista Livre · Vedação contra Chuva',
        sceneType: 'sacada',
      },
      {
        id: 'sac-2',
        title: 'Integração de Espaço Gourmet com Sistema Roll Door',
        subtitle: 'Abertura Prática em Trilhos',
        specs: 'Deslizamento Leve · Trilho Embutido',
        sceneType: 'sacada',
      },
      {
        id: 'sac-3',
        title: 'Sacada com Vidro de Controle Solar',
        subtitle: 'Conforto Térmico no Sol da Tarde',
        specs: 'Redução de Calor e Ruído Urbano',
        sceneType: 'sacada',
      },
    ],
    faqs: [
      {
        question: 'Como funciona a abertura e a limpeza da Cortina de Vidro na sacada?',
        answer:
          'Cada painel de vidro desliza até o canto da sacada e gira para dentro. Assim, você consegue abrir 100% da varanda e limpar a parte de fora dos vidros de dentro da sua sacada com total segurança.',
      },
      {
        question: 'Vocês seguem o modelo já aprovado pelo meu condomínio?',
        answer:
          'Sim! Conferimos todos os detalhes do padrão do seu prédio em Umuarama (cor dos perfis, tom do vidro e altura das folhas) para que sua instalação seja aprovada sem preocupações.',
      },
      {
        question: 'O fechamento de sacada ajuda a diminuir o barulho da rua?',
        answer:
          'Ajuda muito! Quando fechado, o conjunto de vidros e vedações reduz significativamente o ruído do trânsito e o vento, deixando o apartamento muito mais silencioso.',
      },
    ],
    baseRatePerSqm: 690,
    sceneType: 'sacada',
  },
  {
    slug: 'guarda-corpo-de-vidro',
    indexNumber: '05',
    shortName: 'Guarda-Corpo de Vidro',
    h1Title: 'Guarda-Corpo de Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Guarda-Corpo de Vidro e Inox em Umuarama | Escadas e Sacadas',
    seoDescription:
      'Guarda-corpo de vidro embutido, torre, botões e inox em Umuarama - PR. Elegância minimalista e segurança rigorosa para escadas, mezaninos e sacadas.',
    heroSubtitle:
      'Proteção elegante com máxima transparência para escadas, mezaninos, varandas e piscinas: modelos embutidos, em torres de inox ou botões.',
    fullDescription: [
      'O Guarda-Corpo de Vidro valoriza a arquitetura da sua escada, mezanino, varanda ou área de piscina sem bloquear a visão e a luminosidade. Na Vidraçaria Liderança, unimos design minimalista a um rigoroso padrão de fixação e segurança.',
      'Trabalhamos com vidros laminados de alta resistência, altura segura a partir de 1,10m e ferragens maciças em aço inox 304 ou perfis estruturais embutidos no piso.',
    ],
    abntNormCode: 'Padrão VL · Alta Segurança',
    abntNormSummary:
      'Fixação estrutural reforçada, vidros laminados de segurança e acabamento impecável em inox ou alumínio.',
    models: [
      'Guarda-Corpo Autoportante Embutido (Só o Vidro Aparente)',
      'Guarda-Corpo em Botões de Aço Inox (Escadas)',
      'Guarda-Corpo em Torres / Pinças de Inox',
      'Guarda-Corpo Autoportante com Perfil na Base',
      'Guarda-Corpo com Montantes em Aço Inox ou Alumínio',
    ],
    glassTypes: [
      'Vidro Laminado de Segurança (8mm / 10mm / 12mm)',
      'Vidro Laminado Temperado (Dupla Resistência)',
      'Vidro Laminado Extra Clear (Cristalino)',
      'Vidro Estrutural SentryGlas (Autoportante)',
    ],
    thicknessOptions: ['8mm Laminado', '10mm Laminado', '12mm Laminado (Autoportante)', '16mm (Grandes Vãos)'],
    glassColors: ['Incolor', 'Extra Clear', 'Verde', 'Fumê', 'Bronze'],
    finishLines: [
      'Aço Inox Polido ou Escovado',
      'Perfil Embutido Invisível',
      'Preto Fosco',
      'Branco / Bronze / Champanhe',
    ],
    applications: [
      'Escadas internas e externas de residências e empresas',
      'Mezaninos e corredores de segundo pavimento',
      'Sacadas, varandas e terraços',
      'Fechamento de segurança ao redor de piscinas e decks',
    ],
    benefits: [
      {
        title: 'Visual Limpo e Sofisticado',
        description: 'Destaca o desenho dos degraus da escada e amplia a sala sem barreiras visuais pesadas.',
      },
      {
        title: 'Segurança Reforçada para a Família',
        description: 'Uso de vidros laminados que permanecem firmes no lugar e altura planejada com rigor técnico.',
      },
      {
        title: 'Ferragens em Aço Inox 304 que Não Enferrujam',
        description: 'Botões, torres e corrimãos resistentes ao sol, chuva e cloro de piscina.',
      },
    ],
    catalogItems: [
      {
        name: 'Guarda-Corpo Autoportante Embutido',
        description: 'Fixado dentro do piso para que apenas o painel de vidro fique visível, criando o famoso efeito de vidro infinito.',
        applications: 'Mezaninos, varandas, escadas e piscinas',
        tag: 'Minimalista',
      },
      {
        name: 'Guarda-Corpo em Botões de Inox',
        description: 'Fixação lateral na viga da escada através de prolongadores maciços em aço inox, muito leve e elegante.',
        applications: 'Escadas internas e desníveis',
        tag: 'Favorito p/ Escadas',
      },
      {
        name: 'Guarda-Corpo em Torres (Pinças de Inox)',
        description: 'Torres verticais de inox ou alumínio que seguram o vidro pela base, facilitando o escoamento de água em áreas externas.',
        applications: 'Bordas de piscina, decks e sacadas',
      },
      {
        name: 'Guarda-Corpo Encaixilhado e Aço Inox',
        description: 'Estrutura completa com colunas e corrimão superior em inox ou alumínio colorido.',
        applications: 'Varandas residenciais, prédios e acessos comerciais',
      },
    ],
    gallery: [
      {
        id: 'gc-1',
        title: 'Guarda-Corpo Embutido em Mezanino e Escada',
        subtitle: 'Residência de Alto Padrão — Umuarama',
        specs: 'Vidro Laminado 12mm · Efeito Infinito · Máxima Segurança',
        sceneType: 'guarda-corpo',
      },
      {
        id: 'gc-2',
        title: 'Escada com Fixação por Botões de Aço Inox',
        subtitle: 'Leveza e Transparência',
        specs: 'Botões Maciços Inox 304 · Corrimão Sob Medida',
        sceneType: 'guarda-corpo',
      },
      {
        id: 'gc-3',
        title: 'Guarda-Corpo em Torres para Área de Piscina',
        subtitle: 'Lazer Seguro para Crianças e Pets',
        specs: 'Resistente ao Cloro e Sol · Visual Livre',
        sceneType: 'guarda-corpo',
      },
    ],
    faqs: [
      {
        question: 'Qual o melhor modelo de guarda-corpo para escada interna?',
        answer:
          'Os modelos mais escolhidos são o Guarda-Corpo em Botões de Inox (fixado na lateral dos degraus/viga, que não rouba espaço da largura da escada) e o Autoportante Embutido.',
      },
      {
        question: 'Por que vocês utilizam vidro laminado no guarda-corpo?',
        answer:
          'Porque seguimos um rigoroso padrão de segurança: o vidro laminado é formado por duas chapas unidas por uma película ultra resistente. Mesmo se sofrer um impacto forte, ele não abre buraco e continua protegendo quem está no ambiente.',
      },
      {
        question: 'Posso instalar guarda-corpo de vidro ao redor da piscina?',
        answer:
          'Sim! Utilizamos torres em aço inox 304 ou perfis de alumínio que não oxidam com a água e o cloro, protegendo crianças e mantendo a vista livre para a área de lazer.',
      },
    ],
    baseRatePerSqm: 780,
    sceneType: 'guarda-corpo',
  },
  {
    slug: 'portas-de-vidro',
    indexNumber: '06',
    shortName: 'Portas de Vidro',
    h1Title: 'Portas de Vidro Sob Medida em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Portas de Vidro em Umuarama | Correr, Pivotante e Automáticas',
    seoDescription:
      'Portas de vidro sob medida em Umuarama - PR: correr, abrir, pivotante, grandes dimensões, Roll Door e portas automáticas com sensor.',
    heroSubtitle:
      'Integre ambientes com portas deslizantes de correr, pivotantes, grandes dimensões ou automáticas com sensor de presença.',
    fullDescription: [
      'As Portas de Vidro da Vidraçaria Liderança trazem luminosidade, amplitude e praticidade para salas, cozinhas gourmet, entradas sociais e estabelecimentos comerciais em Umuarama.',
      'Fabricamos desde portas de correr de 2 a 6 folhas com trilhos suaves e portas pivotantes com mola de piso até portas de grandes dimensões e portas automáticas com sensores e controle de acesso.',
    ],
    abntNormCode: 'Padrão VL · Aberturas e Acessos',
    abntNormSummary:
      'Deslizamento leve em múltiplos trilhos, molas hidráulicas calibradas e opções com sensor automático.',
    models: [
      'Porta de Correr (2, 3, 4 ou 6 Folhas)',
      'Porta Pivotante com Mola de Piso',
      'Porta de Grande Dimensão (Integração Sala / Gourmet)',
      'Porta Deslizante Automática com Sensor',
      'Porta com Controle de Acesso (Senha / Biometria)',
      'Porta Sistema Roll Door',
    ],
    glassTypes: [
      'Vidro Temperado 10mm',
      'Vidro Temperado 8mm Encaixilhado',
      'Vidro Laminado de Segurança',
      'Vidro Refletivo / Controle Solar',
      'Vidro Jateado / Acidato (Privacidade)',
    ],
    thicknessOptions: ['8mm (Com Perfil de Alumínio)', '10mm (Padrão Estrutural)', '12mm (Grandes Alturas)'],
    glassColors: ['Incolor', 'Extra Clear', 'Verde', 'Fumê', 'Bronze', 'Refletivo', 'Jateado'],
    finishLines: [
      'Preto Fosco com Puxador Inox/Preto',
      'Esquadria Linha Gold / Suprema',
      'Perfil Minimalista Slim',
      'Sistema Automático com Sensor de Presença',
    ],
    applications: [
      'Integração entre sala de estar, cozinha e varanda gourmet',
      'Entradas de lojas, clínicas, consultórios e escritórios em Umuarama',
      'Portarias de condomínios com fechadura inteligente ou biometria',
      'Grandes vãos residenciais de frente para a piscina',
    ],
    benefits: [
      {
        title: 'Efeito de Abertura Leve e Silencioso',
        description: 'Trilhos e roldanas de alta capacidade que permitem abrir grandes folhas de vidro sem esforço.',
      },
      {
        title: 'Automação Comercial e Residencial',
        description: 'Portas com sensor de aproximação e controle de acesso por senha, cartão ou digital.',
      },
      {
        title: 'Acabamento Personalizado',
        description: 'Puxadores tubulares em inox ou preto fosco, perfis embutidos e vedação com escovas especiais.',
      },
    ],
    catalogItems: [
      {
        name: 'Portas de Correr e Sistema Roll Door',
        description: 'Ideais para integrar sala e área gourmet, com folhas que correm suavemente e aproveitam todo o espaço.',
        applications: 'Salas, varandas gourmet e divisões internas',
        tag: 'Mais Procurada',
      },
      {
        name: 'Portas de Grande Dimensão',
        description: 'Estruturas reforçadas para vãos largos e pé-direito alto, valorizando a arquitetura do imóvel.',
        applications: 'Residências de alto padrão e entradas amplas',
      },
      {
        name: 'Portas Deslizantes Automáticas com Sensor',
        description: 'Abertura automática ao detectar a aproximação de clientes, mantendo o ar-condicionado eficiente.',
        applications: 'Clínicas, lojas, farmácias e empresas',
        tag: 'Automática',
      },
      {
        name: 'Portas Pivotantes e Controle de Acesso',
        description: 'Giro suave com mola de piso hidráulica e opção de fechadura eletroímã, biometria ou interfone.',
        applications: 'Entradas comerciais, consultórios e condomínios',
      },
    ],
    gallery: [
      {
        id: 'por-1',
        title: 'Porta de Correr em 4 Folhas para Área Gourmet',
        subtitle: 'Integração Residencial — Umuarama',
        specs: 'Vidro 10mm · Abertura Ampla Central · Perfil Preto',
        sceneType: 'portas',
      },
      {
        id: 'por-2',
        title: 'Porta Automática com Sensor de Presença',
        subtitle: 'Clínica e Comércio — Umuarama',
        specs: 'Abertura Deslizante · Conforto e Acessibilidade',
        sceneType: 'portas',
      },
      {
        id: 'por-3',
        title: 'Porta Pivotante com Puxador Alongado',
        subtitle: 'Entrada Social e Corporativa',
        specs: 'Mola de Piso Suave · Acabamento Sofisticado',
        sceneType: 'portas',
      },
    ],
    faqs: [
      {
        question: 'Qual o melhor tipo de porta para integrar a sala com a área gourmet?',
        answer:
          'As portas de correr de 3, 4 ou 6 folhas (ou com sistema Roll Door/trilho múltiplo) são perfeitas porque permitem recolher grande parte das folhas para um único lado, unindo os dois ambientes.',
      },
      {
        question: 'Vocês instalam portas automáticas com sensor para lojas e clínicas?',
        answer:
          'Sim! Fornecemos a porta completa já com o automatizador, sensores de presença e, se desejar, controle de acesso por senha ou biometria.',
      },
      {
        question: 'A porta de vidro veda bem contra vento e poeira?',
        answer:
          'Sim. Aplicamos perfis de vedação com escovas de alta densidade e, para locais onde bate chuva direta, temos a opção de portas estruturadas em esquadria de alumínio (Linha Suprema ou Gold).',
      },
    ],
    baseRatePerSqm: 520,
    sceneType: 'portas',
  },
  {
    slug: 'janelas-e-troca-de-vidro',
    indexNumber: '07',
    shortName: 'Janelas e Troca de Vidro',
    h1Title: 'Janelas de Vidro e Troca de Vidros em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Janelas de Vidro e Troca de Vidro em Umuarama | Sob Medida',
    seoDescription:
      'Janelas de vidro sob medida (correr, abrir, maxim-ar, basculante, pivotante), janelas acústicas e troca rápida de vidros em Umuarama - PR.',
    heroSubtitle:
      'Janelas de correr, maxim-ar, basculante e panorâmicas com vedação perfeita, além de troca rápida de vidros quebrados em Umuarama.',
    fullDescription: [
      'Projetamos e instalamos Janelas de Vidro e Alumínio sob medida para construções e reformas em Umuarama, trabalhando com todos os efeitos de abertura: correr, maxim-ar, basculante, abrir (giro), pivotante e janelas panorâmicas piso-teto.',
      'Também contamos com atendimento ágil para Troca de Vidros trincados ou quebrados em janelas, portas e estruturas existentes, além de atualização para vidros acústicos e de controle solar.',
    ],
    abntNormCode: 'Padrão VL · Ventilação e Conforto',
    abntNormSummary:
      'Excelente vedação contra chuva e vento, deslize silencioso e reposição rápida de vidros sob medida.',
    models: [
      'Janela de Correr (2 ou 4 Folhas)',
      'Janela Maxim-Ar (Projeção Externa)',
      'Janela Basculante',
      'Janela Panorâmica / Piso-Teto',
      'Janela Acústica / Controle Solar',
      'Janela de Abrir ou Pivotante',
      'Troca / Reposição de Vidro Quebrado',
    ],
    glassTypes: [
      'Vidro Temperado 8mm / 10mm',
      'Vidro Acústico / Duplo (Mais Silêncio)',
      'Vidro de Controle Solar (Menos Calor)',
      'Vidro Laminado de Segurança',
      'Vidro Comum / Boreal (Para Reposição Simples)',
    ],
    thicknessOptions: ['6mm', '8mm (Padrão)', '10mm (Grandes Janelas)', 'Duplo Acústico'],
    glassColors: ['Incolor', 'Verde', 'Fumê', 'Bronze', 'Refletivo', 'Mini Boreal / Jateado'],
    finishLines: [
      'Ferragem Preta / Branca / Cromada',
      'Esquadria de Alumínio Linha Suprema / Gold',
      'Janela com Persiana Integrada',
      'Reposição na Estrutura Atual',
    ],
    applications: [
      'Quartos, salas, cozinhas, banheiros e lavanderias',
      'Janelas antirruído para imóveis em ruas movimentadas de Umuarama',
      'Janelas com controle solar para quartos que recebem sol forte',
      'Substituição rápida de vidros quebrados em residências e comércios',
    ],
    benefits: [
      {
        title: 'Todos os Modelos e Efeitos de Abertura',
        description: 'De correr tradicional ao charme moderno das janelas maxim-ar, pivotantes e panorâmicas.',
      },
      {
        title: 'Conforto Térmico e Acústico',
        description: 'Opções de vidros que diminuem o barulho externo e mantêm o quarto mais fresco.',
      },
      {
        title: 'Troca de Vidros Sem Complicação',
        description: 'Vamos até o local medir e substituir folhas danificadas com rapidez e limpeza.',
      },
    ],
    catalogItems: [
      {
        name: 'Janelas de Correr (2 e 4 Folhas)',
        description: 'Práticas e funcionais, com ótimo aproveitamento de luz e ventilação para salas, quartos e cozinhas.',
        applications: 'Residências, apartamentos e escritórios',
        tag: 'Tradicional',
      },
      {
        name: 'Janelas Maxim-Ar e Basculantes',
        description: 'Abrem projetando a folha para fora, permitindo ventilar o ambiente mesmo em dias de chuva.',
        applications: 'Banheiros, cozinhas, lavanderias e fachadas modernas',
      },
      {
        name: 'Janelas Acústicas e de Controle Solar',
        description: 'Ideais para melhorar a qualidade do sono bloqueando ruídos da rua e o excesso de calor.',
        applications: 'Quartos, consultórios e home office',
        tag: 'Mais Conforto',
      },
      {
        name: 'Janelas Panorâmicas e Piso-Teto',
        description: 'Grandes vãos envidraçados que valorizam a vista do jardim ou da cidade com muita luz natural.',
        applications: 'Salas de estar e projetos contemporâneos',
      },
      {
        name: 'Troca e Reposição de Vidros',
        description: 'Substituição segura de vidros quebrados ou trincados em qualquer modelo de janela ou porta.',
        applications: 'Atendimento rápido em Umuarama',
      },
    ],
    gallery: [
      {
        id: 'jan-1',
        title: 'Janela Panorâmica com Vidro de Controle Solar',
        subtitle: 'Residência em Umuarama',
        specs: 'Ampla Luminosidade · Redução de Calor · Perfil Preto',
        sceneType: 'janelas',
      },
      {
        id: 'jan-2',
        title: 'Conjunto de Janelas Maxim-Ar e Correr',
        subtitle: 'Ventilação Inteligente',
        specs: 'Braços Articulados Macios · Vedação Eficiente',
        sceneType: 'janelas',
      },
      {
        id: 'jan-3',
        title: 'Janela Acústica para Dormitório',
        subtitle: 'Silêncio e Bem-Estar',
        specs: 'Atenuação de Ruídos · Acabamento Sob Medida',
        sceneType: 'janelas',
      },
    ],
    faqs: [
      {
        question: 'Qual a vantagem da janela Maxim-Ar sobre a basculante comum?',
        answer:
          'A janela Maxim-Ar abre toda a folha para fora em até 90°, não ocupando espaço interno (ótimo para quem usa cortina ou persiana) e permitindo excelente circulação de ar.',
      },
      {
        question: 'Quebrou apenas um vidro da minha janela. Vocês fazem esse reparo?',
        answer:
          'Sim! Fazemos a medição e a troca apenas da folha quebrada, mantendo o mesmo tom e espessura do restante da sua janela.',
      },
      {
        question: 'Vocês também fazem janela com persiana blackout embutida?',
        answer:
          'Fazemos sim! Nossas janelas com persiana integrada permitem escurecer 100% o quarto na hora de dormir, com opção manual ou por controle remoto.',
      },
    ],
    baseRatePerSqm: 460,
    sceneType: 'janelas',
  },
  {
    slug: 'esquadrias-de-aluminio',
    indexNumber: '08',
    shortName: 'Esquadrias de Alumínio',
    h1Title: 'Esquadrias de Alumínio e Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Esquadrias de Alumínio em Umuarama | Linha Gold, Suprema e Minimalista',
    seoDescription:
      'Esquadrias de alumínio sob medida em Umuarama - PR: Linha Suprema, Linha Gold, Linha 42, Minimalista, Persianas Integradas, Portas em ACM e Ripados.',
    heroSubtitle:
      'Esquadrias de alto padrão nas linhas Suprema, Gold, Linha 42 e Minimalista, além de Persianas Integradas, Portas em ACM e Ripados de Alumínio.',
    fullDescription: [
      'As Esquadrias de Alumínio da Vidraçaria Liderança são fabricadas sob medida para obras residenciais e comerciais em Umuarama que buscam vedação perfeita, durabilidade e acabamento sofisticado.',
      'Trabalhamos com a versatilidade da Linha Suprema, a robustez da Linha Gold e Linha 42 para grandes vãos, o design limpo das Esquadrias Minimalistas e Padrão Europeu, além de Persianas Integradas motorizadas, Portas em ACM e Ripados.',
    ],
    abntNormCode: 'Padrão VL · Esquadrias Premium',
    abntNormSummary:
      'Perfis estruturais com pintura eletrostática, cortes de precisão em 45° e vedação superior contra chuva e vento.',
    models: [
      'Esquadria Linha Suprema (Ótimo Custo-Benefício)',
      'Esquadria Linha Gold (Alto Padrão / Grandes Vãos)',
      'Esquadria Minimalista (Perfis Ultra Finos)',
      'Esquadria com Persiana Integrada (Manual ou Controle Remoto)',
      'Esquadria Linha 42 / Padrão Europeu',
      'Porta Pivotante em ACM',
      'Ripado de Alumínio Decorativo',
    ],
    glassTypes: [
      'Vidro Temperado 6mm / 8mm / 10mm',
      'Vidro Laminado de Segurança',
      'Vidro Duplo / Acústico',
      'Vidro de Controle Solar',
      'Painel em ACM / Veneziana de Alumínio',
    ],
    thicknessOptions: ['Linha Suprema (25mm)', 'Linha Gold (32mm)', 'Linha 42 (42mm)', 'Minimalista Slim / ACM'],
    glassColors: ['Incolor', 'Verde', 'Fumê', 'Bronze', 'Refletivo', 'ACM Preto / Amadeirado / Corten'],
    finishLines: [
      'Preto Fosco Eletrostático',
      'Branco',
      'Efeito Amadeirado',
      'Bronze / Corten',
      'Anodizado Inox',
    ],
    applications: [
      'Obras residenciais completas (portas da sala, suítes e janelas)',
      'Portas de entrada imponentes em ACM ou vidro minimalista',
      'Grandes vãos integrados entre sala, gourmet e piscina',
      'Fachadas e painéis decorativos em Ripado de Alumínio',
    ],
    benefits: [
      {
        title: 'Consultoria para Escolher a Linha Certa',
        description: 'Ajudamos você a combinar Linha Gold nos grandes vãos e Linha Suprema nos ambientes internos para otimizar seu investimento.',
      },
      {
        title: 'Persianas Blackout com Controle Remoto',
        description: 'Conforto total nas suítes para abrir e fechar a persiana sem sair da cama.',
      },
      {
        title: 'Acabamento Preto ou Amadeirado que Não Desbota',
        description: 'Pintura eletrostática resistente ao sol forte e à chuva, sem precisar envernizar.',
      },
    ],
    catalogItems: [
      {
        name: 'Esquadrias Linha Suprema',
        description: 'Equilíbrio ideal entre beleza, vedação e investimento para portas e janelas residenciais e comerciais.',
        applications: 'Casas, apartamentos e escritórios',
        tag: 'Versátil',
      },
      {
        name: 'Esquadrias Linha Gold & Linha 42',
        description: 'Perfis mais encorpados e roldanas de alta capacidade, desenvolvidos para portas amplas e projetos de alto padrão.',
        applications: 'Grandes vãos, salas e áreas gourmet',
        tag: 'Alto Padrão',
      },
      {
        name: 'Esquadrias Minimalistas & Padrão Europeu',
        description: 'Perfis super finos que deixam quase só o vidro aparente, ou sistemas europeus de máximo isolamento acústico.',
        applications: 'Arquitetura contemporânea de luxo',
      },
      {
        name: 'Janelas e Portas com Persiana Integrada',
        description: 'Bloqueio de 100% da luz externa com acionamento manual ou motorizado por controle remoto.',
        applications: 'Suítes e quartos',
      },
      {
        name: 'Portas em ACM & Ripado de Alumínio',
        description: 'Portas pivotantes modernas e painéis ripados em alumínio preto ou amadeirado de altíssima durabilidade.',
        applications: 'Fachadas e entradas principais',
      },
    ],
    gallery: [
      {
        id: 'esq-1',
        title: 'Esquadrias Linha Gold em Preto Fosco',
        subtitle: 'Residência Completa — Umuarama',
        specs: 'Grandes Vãos Deslizantes · Vedação Superior',
        sceneType: 'esquadrias',
      },
      {
        id: 'esq-2',
        title: 'Suíte com Janela de Persiana Integrada Motorizada',
        subtitle: 'Conforto Blackout',
        specs: 'Acionamento por Controle Remoto · Isolamento Térmico',
        sceneType: 'esquadrias',
      },
      {
        id: 'esq-3',
        title: 'Porta Pivotante em ACM com Ripado de Alumínio',
        subtitle: 'Entrada Imponente',
        specs: 'Resistente ao Sol e Chuva · Puxador em Inox',
        sceneType: 'esquadrias',
      },
    ],
    faqs: [
      {
        question: 'Qual a diferença entre a Linha Suprema e a Linha Gold?',
        answer:
          'A Linha Suprema é excelente para janelas e portas de medidas tradicionais. Já a Linha Gold possui perfis mais robustos (32mm), sendo indicada para portas grandes de sala e área gourmet que exigem maior estrutura.',
      },
      {
        question: 'Posso usar Linha Gold na sala e Linha Suprema nos quartos?',
        answer:
          'Com certeza! Essa combinação mantém o mesmo visual e cor de pintura em toda a casa, garantindo firmeza nos grandes vãos e economia inteligente nos vãos menores.',
      },
      {
        question: 'O alumínio com efeito amadeirado precisa de manutenção como a madeira?',
        answer:
          'Não! Ele tem a beleza da madeira natural, mas não empena, não descasca no sol e precisa apenas de limpeza simples com pano úmido.',
      },
    ],
    baseRatePerSqm: 890,
    sceneType: 'esquadrias',
  },
  {
    slug: 'cobertura-de-vidro',
    indexNumber: '09',
    shortName: 'Cobertura de Vidro',
    h1Title: 'Cobertura de Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Cobertura de Vidro e Pergolados em Umuarama | Fixa e Retrátil',
    seoDescription:
      'Cobertura de vidro fixa, retrátil manual ou automática e pergolados em Umuarama - PR com vidro laminado de controle solar.',
    heroSubtitle:
      'Proteja seu pergolado, área gourmet ou jardim da chuva sem perder a luz natural, com opções fixas ou retráteis e controle de calor solar.',
    fullDescription: [
      'As Coberturas de Vidro e Pergolados da Vidraçaria Liderança transformam áreas externas, corredores, jardins de inverno e espaços gourmet em ambientes iluminados e protegidos contra a chuva.',
      'Trabalhamos com vidros laminados de segurança com tecnologia de Controle Solar (que reduzem o calor do sol) e opções de cobertura fixa ou retrátil (manual ou motorizada por controle remoto).',
    ],
    abntNormCode: 'Padrão VL · Coberturas & Pergolados',
    abntNormSummary:
      'Vidros laminados de proteção solar, vedação completa contra infiltrações e opção de abertura retrátil.',
    models: [
      'Pergolado de Vidro (Sobre Madeira / Alumínio / Ferro)',
      'Cobertura de Vidro Fixa',
      'Cobertura Retrátil Manual',
      'Cobertura Retrátil Automática (Motorizada)',
      'Cobertura Autolimpante / Acústica',
    ],
    glassTypes: [
      'Vidro Laminado de Controle Solar / Refletivo (Reduz Calor)',
      'Vidro Laminado de Segurança (8mm / 10mm)',
      'Vidro Laminado Autolimpante',
      'Vidro Laminado Temperado',
    ],
    thicknessOptions: ['8mm Laminado', '10mm Laminado', '12mm Laminado (Grandes Vãos)'],
    glassColors: ['Refletivo Champanhe / Prata (Controle Solar)', 'Fumê Laminado', 'Verde Laminado', 'Bronze Laminado', 'Incolor c/ Proteção UV'],
    finishLines: [
      'Estrutura em Alumínio Preto com Calha',
      'Estrutura em Alumínio Branco',
      'Acabamento Amadeirado / Corten',
      'Instalação sobre Pergolado já Existente',
    ],
    applications: [
      'Pergolados de madeira, ferro ou alumínio em jardins e piscinas',
      'Coberturas retráteis para áreas gourmet e churrasqueiras',
      'Corredores laterais, entradas sociais e garagens',
      'Jardins de inverno e áreas comerciais em Umuarama',
    ],
    benefits: [
      {
        title: 'Proteção Solar para o Clima de Umuarama',
        description: 'Vidros laminados seletivos que bloqueiam até 99% dos raios UV e diminuem muito o calor sob o pergolado.',
      },
      {
        title: 'Opção de Abertura Retrátil',
        description: 'Abra o teto de vidro nos dias frescos para ventilar e feche rapidamente quando começar a chover.',
      },
      {
        title: 'Vedação Profissional sem Goteiras',
        description: 'Aplicação com borrachas especiais, silicone estrutural neutro, rufos e calhas sob medida.',
      },
    ],
    catalogItems: [
      {
        name: 'Pergolado de Vidro & Cobertura Fixa',
        description: 'Instalado sobre estruturas de madeira, ferro ou alumínio, mantendo o charme do pergolado livre da chuva.',
        applications: 'Decks, jardins, varandas e corredores',
        tag: 'Mais Pedido',
      },
      {
        name: 'Cobertura Retrátil Manual ou Automática',
        description: 'Painéis deslizantes que permitem abrir o teto manualmente ou por controle remoto para circulação de ar.',
        applications: 'Espaços gourmet, jardins de inverno e terraços',
        tag: 'Efeito Retrátil',
      },
      {
        name: 'Cobertura com Vidro de Controle Solar',
        description: 'Filtra o calor excessivo do sol sem escurecer o ambiente, garantindo conforto térmico o dia todo.',
        applications: 'Áreas externas ensolaradas',
      },
      {
        name: 'Cobertura Autolimpante e Acústica',
        description: 'Vidro com camada especial que usa a própria água da chuva para facilitar a limpeza e reduzir ruídos.',
        applications: 'Coberturas altas ou de difícil acesso',
      },
    ],
    gallery: [
      {
        id: 'cob-1',
        title: 'Pergolado com Vidro Laminado de Controle Solar',
        subtitle: 'Área de Lazer — Umuarama',
        specs: 'Proteção contra Calor e Chuva · Visual Iluminado',
        sceneType: 'cobertura',
      },
      {
        id: 'cob-2',
        title: 'Cobertura de Vidro Retrátil Motorizada',
        subtitle: 'Espaço Gourmet',
        specs: 'Abertura por Controle Remoto · Ventilação Sob Medida',
        sceneType: 'cobertura',
      },
      {
        id: 'cob-3',
        title: 'Cobertura de Vidro para Corredor e Entrada',
        subtitle: 'Proteção e Claridade',
        specs: 'Estrutura em Alumínio · Calha Integrada',
        sceneType: 'cobertura',
      },
    ],
    faqs: [
      {
        question: 'A cobertura de vidro deixa o ambiente muito quente em Umuarama?',
        answer:
          'Quando usamos o Vidro Laminado de Controle Solar (refletivo ou neutro), ele barra grande parte do calor solar e 99% dos raios UV, deixando o espaço embaixo agradável e protegido.',
      },
      {
        question: 'Já tenho o pergolado de madeira ou ferro pronto. Vocês instalam só o vidro?',
        answer:
          'Sim! Fazemos a medição sobre o seu pergolado existente e instalamos os vidros laminados com todos os perfis de fixação, vedação e rufos.',
      },
      {
        question: 'Qual vidro é usado para garantir segurança na cobertura?',
        answer:
          'Utilizamos sempre Vidro Laminado (duas chapas unidas por película de alta resistência), que garante total proteção mesmo em caso de chuvas de granizo.',
      },
    ],
    baseRatePerSqm: 760,
    sceneType: 'cobertura',
  },
  {
    slug: 'divisorias-de-vidro',
    indexNumber: '10',
    shortName: 'Divisórias de Vidro',
    h1Title: 'Divisórias de Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Divisórias de Vidro em Umuarama | Piso-Teto, Acústica e Industrial',
    seoDescription:
      'Divisórias de vidro em Umuarama - PR: piso-teto, acústica, estilo industrial, minimalista, persiana interna e vidro polarizado.',
    heroSubtitle:
      'Organize escritórios, clínicas e ambientes residenciais com divisórias piso-teto, estilo industrial, acústicas ou com privacidade inteligente.',
    fullDescription: [
      'As Divisórias de Vidro dividem espaços com elegância mantendo a iluminação e a sensação de amplitude. Atendemos desde residências que desejam separar a cozinha da lavanderia até escritórios e clínicas em Umuarama.',
      'Oferecemos divisórias Piso-Teto minimalistas (Singola e Duplicatta Sottile), Divisórias Estilo Industrial com perfis pretos, Divisórias Acústicas para salas de reunião, persianas embutidas entre vidros e Vidro Polarizado Inteligente.',
    ],
    abntNormCode: 'Padrão VL · Divisórias & Design',
    abntNormSummary:
      'Perfis slim de alta precisão, isolamento acústico para salas de reunião e design industrial contemporâneo.',
    models: [
      'Divisória Estilo Industrial (Perfis Pretos)',
      'Divisória de Vidro Piso-Teto Corporativa',
      'Divisória Acústica para Sala de Reunião',
      'Divisória Minimalista (Singola / Duplicatta Sottile)',
      'Divisória com Persiana Interna Entre Vidros',
      'Divisória Móvel / Recolhível',
      'Divisória Polarizada Inteligente (Fica Fosca no Botão)',
    ],
    glassTypes: [
      'Vidro Temperado 8mm / 10mm',
      'Vidro Laminado Acústico (Mais Silêncio)',
      'Vidro Duplo com Persiana Embutida',
      'Vidro Polarizado Inteligente',
      'Vidro Jateado / Acidato / Canelado',
    ],
    thicknessOptions: ['8mm', '10mm (Piso-Teto)', '12mm', 'Vidro Duplo Acústico'],
    glassColors: ['Incolor', 'Extra Clear', 'Fumê', 'Bronze', 'Jateado / Fosco', 'Polarizado Inteligente'],
    finishLines: [
      'Preto Fosco Industrial / Slim',
      'Alumínio Anodizado',
      'Branco',
      'Amadeirado / Champanhe',
    ],
    applications: [
      'Separação elegante entre cozinha, sala de jantar e lavanderia',
      'Escritórios, consultórios médicos, clínicas e salas de reunião em Umuarama',
      'Ambientes integrados de home office',
      'Salas que exigem isolamento de som e privacidade',
    ],
    benefits: [
      {
        title: 'Design Industrial e Minimalista',
        description: 'Perfis finos em preto fosco que viraram tendência na arquitetura residencial e comercial.',
      },
      {
        title: 'Privacidade Sonora e Visual',
        description: 'Opções acústicas, com película jateada, persiana interna ou vidro que fica opaco no interruptor.',
      },
      {
        title: 'Instalação Rápida e Limpa',
        description: 'Montagem sobre o piso pronto sem sujeira de obra ou quebra-quebra.',
      },
    ],
    catalogItems: [
      {
        name: 'Divisória Estilo Industrial',
        description: 'Composição moderna com perfis pretos em quadros geométricos, perfeita para separar cozinha, lavanderia e sala.',
        applications: 'Casas, apartamentos, lofts e estúdios',
        tag: 'Tendência',
      },
      {
        name: 'Divisória Piso-Teto & Minimalista (Singola Sottile)',
        description: 'Painéis contínuos do piso ao forro com perfis super discretos para escritórios modernos e iluminados.',
        applications: 'Escritórios, clínicas e recepções',
      },
      {
        name: 'Divisória Acústica & Duplicatta Sottile (Com Persiana)',
        description: 'Excelente bloqueio de som para reuniões confidenciais, com opção de persiana embutida entre dois vidros.',
        applications: 'Salas de diretoria, consultórios e advocacia',
        tag: 'Acústica',
      },
      {
        name: 'Divisória Polarizada Inteligente (Vitreo Lateo)',
        description: 'Alterna de transparente para fosco instantaneamente ao apertar um botão ou controle remoto.',
        applications: 'Salas de reunião e clínicas de alto padrão',
      },
    ],
    gallery: [
      {
        id: 'div-1',
        title: 'Divisória Estilo Industrial entre Cozinha e Lavanderia',
        subtitle: 'Residência — Umuarama',
        specs: 'Perfis Pretos Slim · Porta de Correr Integrada',
        sceneType: 'divisorias',
      },
      {
        id: 'div-2',
        title: 'Divisória Acústica Piso-Teto para Escritório',
        subtitle: 'Ambiente Corporativo — Umuarama',
        specs: 'Isolamento de Ruído · Visual Contemporâneo',
        sceneType: 'divisorias',
      },
      {
        id: 'div-3',
        title: 'Sala de Reunião com Vidro Inteligente Polarizado',
        subtitle: 'Privacidade Sob Comando',
        specs: 'Transparente ou Fosco ao Toque de um Botão',
        sceneType: 'divisorias',
      },
    ],
    faqs: [
      {
        question: 'Posso instalar a divisória entre a cozinha e a lavanderia com porta de correr?',
        answer:
          'Sim! Fazemos a divisória com uma parte fixa e uma porta de correr (tanto no modelo liso/jateado quanto no Estilo Industrial preto), aproveitando muito bem o espaço.',
      },
      {
        question: 'A divisória de vidro segura o barulho em salas de reunião?',
        answer:
          'Sim. Para escritórios e consultórios, utilizamos o sistema com vidro acústico e vedação completa nos perfis, garantindo privacidade nas conversas.',
      },
      {
        question: 'Precisa quebrar o porcelanato para instalar a divisória?',
        answer:
          'Não! Nossos perfis são fixados de forma limpa sobre o piso acabado.',
      },
    ],
    baseRatePerSqm: 580,
    sceneType: 'divisorias',
  },
  {
    slug: 'fachadas-de-vidro',
    indexNumber: '11',
    shortName: 'Fachadas de Vidro',
    h1Title: 'Fachadas de Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Fachadas de Vidro em Umuarama | Pele de Vidro Glazing, Spider e ACM',
    seoDescription:
      'Fachadas de vidro comerciais e residenciais em Umuarama - PR: Pele de Vidro (Glazing), Spider Glass, Estrutural, ACM e Brise de Alumínio.',
    heroSubtitle:
      'Valorize seu imóvel ou empresa com fachadas modernas em Pele de Vidro (Glazing), Spider Glass, revestimento em ACM e Brises de Alumínio.',
    fullDescription: [
      'Uma fachada imponente destaca sua empresa e valoriza residências de alto padrão. A Vidraçaria Liderança executa projetos completos de Fachadas de Vidro e Alumínio em Umuarama com acabamento arquitetônico de excelência.',
      'Trabalhamos com Pele de Vidro (Glazing) onde o alumínio fica oculto por trás do vidro, Fachada Spider Glass com suportes em inox, painéis residenciais de pé-direito duplo, revestimento em ACM e Brises de controle solar.',
    ],
    abntNormCode: 'Padrão VL · Fachadas Arquitetônicas',
    abntNormSummary:
      'Sistemas Pele de Vidro, Spider Glass e ACM com vidros laminados de proteção solar e alta resistência.',
    models: [
      'Pele de Vidro (Glazing — Sem Alumínio Aparente)',
      'Fachada Residencial de Pé-Direito Duplo',
      'Fachada Comercial com ACM e Vidro',
      'Fachada Spider Glass (Fixação em Inox)',
      'Fachada Grid / Cortina de Vidro',
      'Brise de Alumínio para Controle Solar',
    ],
    glassTypes: [
      'Vidro Laminado de Controle Solar (Refletivo / Espelhado / Neutro)',
      'Vidro Laminado Low-E (Conforto Térmico)',
      'Vidro Laminado Temperado (Spider Glass)',
      'Vidro Duplo Insulado',
    ],
    thicknessOptions: ['8mm Laminado', '10mm Laminado', '12mm Laminado', 'Duplo Insulado'],
    glassColors: [
      'Refletivo Prata / Champanhe / Esmeralda',
      'Neutro Azulado / Cinza Controle Solar',
      'Fumê / Bronze / Verde',
      'Incolor / Extra Clear',
    ],
    finishLines: [
      'Pele de Vidro Colagem Estrutural',
      'Perfis Pretos / Bronze / Anodizados',
      'Ferragens Spider em Aço Inox',
      'Integração com ACM e Brises Amadeirados',
    ],
    applications: [
      'Prédios comerciais, clínicas, lojas e escritórios em Umuarama',
      'Fachadas residenciais de pé-direito duplo em condomínios',
      'Modernização (retrofit) de fachadas comerciais com Pele de Vidro e ACM',
      'Entradas monumentais com iluminação natural',
    ],
    benefits: [
      {
        title: 'Impacto Visual e Valorização do Imóvel',
        description: 'Acabamento contínuo e moderno que destaca sua marca ou residência na paisagem urbana.',
      },
      {
        title: 'Bloqueio de Calor e Economia de Energia',
        description: 'Vidros de controle solar que mantêm o interior iluminado e reduzem o gasto com ar-condicionado.',
      },
      {
        title: 'Solução Completa: Vidro + ACM + Brise',
        description: 'Executamos toda a composição da fachada em um só lugar, garantindo alinhamento perfeito.',
      },
    ],
    catalogItems: [
      {
        name: 'Pele de Vidro (Glazing / Stick)',
        description: 'Sistema em que os perfis de alumínio ficam ocultos pelo lado de fora, criando um painel de vidro contínuo e elegante.',
        applications: 'Edifícios comerciais, clínicas e sedes corporativas',
        tag: 'Pele de Vidro',
      },
      {
        name: 'Fachada Residencial de Alto Padrão',
        description: 'Grandes painéis fixos e basculantes para salas de pé-direito duplo, valorizando a entrada de luz natural.',
        applications: 'Casas em condomínio e sobrados modernos',
        tag: 'Residencial',
      },
      {
        name: 'Fachada Spider Glass',
        description: 'Fixação pontual por conectores de aço inox, ideal para acessos de máxima transparência.',
        applications: 'Lojas conceito, concessionárias e recepções',
      },
      {
        name: 'Fachadas em ACM & Brises de Alumínio',
        description: 'Painéis de alumínio composto e lâminas de brise (preto, corten ou amadeirado) para compor com o vidro.',
        applications: 'Comércios, clínicas e residências em Umuarama',
      },
    ],
    gallery: [
      {
        id: 'fac-1',
        title: 'Fachada Comercial em Pele de Vidro e ACM',
        subtitle: 'Empreendimento em Umuarama',
        specs: 'Vidro Laminado de Controle Solar · Visual Contínuo',
        sceneType: 'fachadas',
      },
      {
        id: 'fac-2',
        title: 'Fachada Residencial de Pé-Direito Duplo com Brise',
        subtitle: 'Condomínio Fechado — Umuarama',
        specs: 'Perfis Pretos · Brise Amadeirado · Iluminação Natural',
        sceneType: 'fachadas',
      },
      {
        id: 'fac-3',
        title: 'Acesso Principal em Sistema Spider Glass',
        subtitle: 'Arquitetura Contemporânea',
        specs: 'Conectores em Aço Inox · Alta Transparência',
        sceneType: 'fachadas',
      },
    ],
    faqs: [
      {
        question: 'Como funciona a fachada Pele de Vidro para dar privacidade durante o dia?',
        answer:
          'Utilizamos vidros laminados refletivos ou neutros de controle solar: durante o dia, quem está fora vê um efeito espelhado elegante, enquanto quem está dentro enxerga a rua normalmente com conforto térmico.',
      },
      {
        question: 'Vocês fazem a reforma de fachadas comerciais antigas em Umuarama?',
        answer:
          'Sim! Fazemos a modernização completa combinando Pele de Vidro, esquadrias novas, revestimento em ACM e brises de alumínio.',
      },
      {
        question: 'A fachada de vidro residencial deixa a sala muito quente?',
        answer:
          'Não quando especificamos o vidro laminado com proteção solar ou Low-E, que bloqueia o calor do sol e protege sofás, cortinas e pisos contra o desbotamento.',
      },
    ],
    baseRatePerSqm: 960,
    sceneType: 'fachadas',
  },
  {
    slug: 'vitrines-comerciais',
    indexNumber: '12',
    shortName: 'Vitrines Comerciais',
    h1Title: 'Vitrines Comerciais de Vidro em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Vitrines de Vidro para Lojas em Umuarama | Extra Clear e Segurança',
    seoDescription:
      'Vitrines comerciais de vidro em Umuarama - PR para lojas, galerias e shoppings: vidro temperado, extra clear e laminado de segurança.',
    heroSubtitle:
      'Destaque os produtos da sua loja em Umuarama com vitrines de alta transparência Extra Clear, portas integradas e vidros laminados de segurança.',
    fullDescription: [
      'A vitrine é o principal convite para o cliente entrar na sua loja. A Vidraçaria Liderança projeta e instala Vitrines Comerciais sob medida para lojas de rua, galerias, concessionárias e shoppings em Umuarama.',
      'Trabalhamos com painéis amplos sem montantes verticais (junta seca), Vidro Extra Clear que preserva a cor real dos seus produtos e Vidro Laminado de Segurança para proteção patrimonial da loja.',
    ],
    abntNormCode: 'Padrão VL · Comércio & Showrooms',
    abntNormSummary:
      'Máxima visibilidade para exposição de produtos com vidros de segurança e acabamento comercial impecável.',
    models: [
      'Vitrine para Loja de Rua',
      'Vitrine Padrão Shopping / Galeria',
      'Vitrine de Segurança em Vidro Laminado',
      'Vitrine Cristalina em Vidro Extra Clear',
      'Vitrine de Canto com Junta Seca (Sem Coluna)',
    ],
    glassTypes: [
      'Vidro Laminado de Segurança (Anti-Vandalismo)',
      'Vidro Extra Clear (Fidelidade Total às Cores)',
      'Vidro Temperado 10mm / 12mm',
      'Vidro Multilaminado de Alta Proteção',
    ],
    thicknessOptions: ['8mm', '10mm (Padrão Comercial)', '12mm (Grandes Alturas)', 'Multilaminado'],
    glassColors: ['Extra Clear (Super Transparente)', 'Incolor Tradicional', 'Fumê / Bronze (Detalhes)'],
    finishLines: [
      'Perfil Discreto Piso-Teto com Junta Seca',
      'Preto Fosco Comercial',
      'Aço Inox Polido / Escovado',
      'Com Porta Pivotante ou Automática Integrada',
    ],
    applications: [
      'Lojas de roupas, calçados, óticas e joalherias em Umuarama',
      'Salas comerciais em galerias e shopping centers',
      'Concessionárias de veículos e showrooms de móveis',
      'Cafeterias, docerias, farmácias e clínicas estéticas',
    ],
    benefits: [
      {
        title: 'Visão Limpa Sem Perfis no Meio (Junta Seca)',
        description: 'União discreta entre os vidros para que nada atrapalhe a visualização dos manequins e produtos.',
      },
      {
        title: 'Opção Extra Clear para Cores Reais',
        description: 'Sem o reflexo esverdeado comum, valorizando roupas brancas, joias e decoração.',
      },
      {
        title: 'Mais Segurança para Lojas de Rua',
        description: 'Opções em vidro laminado resistente a impactos para proteger seu estoque.',
      },
    ],
    catalogItems: [
      {
        name: 'Vitrine Comercial com Junta Seca',
        description: 'Grandes painéis de vidro unidos com acabamento limpo e portas integradas para destacar o interior da loja.',
        applications: 'Lojas de rua, galerias e showrooms',
        tag: 'Comercial',
      },
      {
        name: 'Vitrine em Vidro Laminado de Segurança',
        description: 'Maior resistência contra impactos externos, ideal para estabelecimentos voltados diretamente para a calçada.',
        applications: 'Óticas, lojas de eletrônicos, moda e calçados',
        tag: 'Mais Proteção',
      },
      {
        name: 'Vitrine em Vidro Extra Clear',
        description: 'Transparência superior para lojas exigentes que buscam destaque na iluminação e nas cores.',
        applications: 'Boutiques, joalherias e lojas de móveis',
      },
    ],
    gallery: [
      {
        id: 'vit-1',
        title: 'Vitrine Comercial com Vidro Extra Clear',
        subtitle: 'Comércio em Umuarama',
        specs: 'Visibilidade Cristalina · Junta Seca Sem Colunas',
        sceneType: 'vitrines',
      },
      {
        id: 'vit-2',
        title: 'Vitrine de Segurança para Showroom e Loja de Rua',
        subtitle: 'Proteção e Elegância',
        specs: 'Vidro Laminado 10mm/12mm · Porta Integrada',
        sceneType: 'vitrines',
      },
      {
        id: 'vit-3',
        title: 'Fachada e Vitrine para Galeria e Shopping',
        subtitle: 'Acabamento Preto Slim',
        specs: 'Projeto Sob Medida · Instalação Ágil',
        sceneType: 'vitrines',
      },
    ],
    faqs: [
      {
        question: 'Qual vidro vocês recomendam para vitrine de loja de rua em Umuarama?',
        answer:
          'Recomendamos o Vidro Laminado de Segurança (10mm ou 12mm), pois em caso de impacto ele mantém o painel firme no lugar, oferecendo muito mais proteção para a loja.',
      },
      {
        question: 'É possível fazer uma vitrine grande sem perfis de alumínio dividindo os vidros?',
        answer:
          'Sim! Utilizamos a técnica de junta seca com silicone especial transparente, mantendo os perfis apenas no piso e no teto para uma visão contínua.',
      },
      {
        question: 'Vocês combinam o horário de instalação para não atrapalhar o atendimento da loja?',
        answer:
          'Com certeza. Agendamos a montagem nos horários mais convenientes para que sua loja funcione com tranquilidade.',
      },
    ],
    baseRatePerSqm: 620,
    sceneType: 'vitrines',
  },
  {
    slug: 'manutencao-de-vidros',
    indexNumber: '13',
    shortName: 'Manutenção de Vidros e Ferragens',
    h1Title: 'Manutenção de Vidros e Ferragens em Umuarama | Vidraçaria Liderança',
    seoTitle: 'Manutenção de Vidros, Box, Sacadas e Portas em Umuarama - PR',
    seoDescription:
      'Manutenção de vidros, box de banheiro, portas de vidro, molas de piso, troca de roldanas, fechaduras e vedação de sacadas em Umuarama - PR.',
    heroSubtitle:
      'Sua porta, janela, sacada ou box está pesado ou enroscando? Fazemos troca de roldanas, molas de piso, fechaduras e vedação em Umuarama.',
    fullDescription: [
      'Com o uso diário, é natural que roldanas, molas de piso, fechaduras e escovas de vedação precisem de regulagem ou substituição. A Vidraçaria Liderança conta com equipe própria em Umuarama para deixar seus vidros e esquadrias funcionando como novos.',
      'Atendemos manutenção de Box de Banheiro, portas comerciais e residenciais, fechamentos de sacada, janelas e renovação de vedação em coberturas de vidro.',
    ],
    abntNormCode: 'Padrão VL · Assistência Rápida',
    abntNormSummary:
      'Troca de roldanas, regulagem de molas de piso, alinhamento de folhas e vedação contra infiltração.',
    models: [
      'Troca de Roldanas e Regulagem de Box de Banheiro',
      'Regulagem e Troca de Roldanas de Porta / Janela de Correr',
      'Substituição / Ajuste de Mola de Piso Hidráulica',
      'Revisão Completa de Fechamento de Sacada',
      'Renovação de Vedação de Cobertura de Vidro',
      'Troca de Fechaduras, Puxadores e Escovas de Vedação',
    ],
    glassTypes: [
      'Manutenção nas Ferragens / Vedação (Sem Troca de Vidro)',
      'Manutenção + Substituição de Folha de Vidro',
    ],
    thicknessOptions: ['Vidro 8mm', 'Vidro 10mm', 'Vidro 12mm / Esquadria de Alumínio'],
    glassColors: ['Manter Vidro Atual', 'Incolor (Se houver reposição)', 'Fumê / Verde / Bronze'],
    finishLines: [
      'Kit Roldanas Blindadas de Alta Durabilidade',
      'Mola Hidráulica de Piso Nova',
      'Kit Vedação (Escovas + Silicone Neutro)',
      'Ferragens Pretas / Cromadas / Brancas',
    ],
    applications: [
      'Boxes de banheiro enroscando no trilho ou difíceis de correr',
      'Portas de vidro comerciais batendo forte ou raspando no chão',
      'Sacadas envidraçadas precisando de revisão de roldanas e escovas',
      'Coberturas de vidro e janelas com infiltração de água da chuva',
    ],
    benefits: [
      {
        title: 'Mais Segurança no Dia a Dia',
        description: 'Trocar roldanas gastas e alinhar portas evita que o vidro raspe no chão e previne acidentes.',
      },
      {
        title: 'Peças de Primeira Linha',
        description: 'Utilizamos roldanas com rolamento blindado, molas hidráulicas reforçadas e vedantes neutros.',
      },
      {
        title: 'Atendimento Mesmo em Obras de Outras Empresas',
        description: 'Consertamos e revisamos boxes, portas e sacadas em Umuarama mesmo que não tenham sido instalados por nós.',
      },
    ],
    catalogItems: [
      {
        name: 'Revisão de Box e Troca de Roldanas',
        description: 'Substituição de roldanas gastas, batedores e guias inferiores para que o box volte a correr macio e seguro.',
        applications: 'Boxes de banheiro e portas de correr',
        tag: 'Mais Solicitado',
      },
      {
        name: 'Troca e Regulagem de Mola de Piso',
        description: 'Solução para portas pivotantes que estão fechando rápido demais, vazando óleo ou desalinhadas.',
        applications: 'Lojas, clínicas, condomínios e residências',
      },
      {
        name: 'Revisão de Envidraçamento de Sacadas',
        description: 'Alinhamento das folhas de vidro, substituição de roldanas e troca das vedações contra vento e chuva.',
        applications: 'Sacadas de apartamentos em Umuarama',
      },
      {
        name: 'Vedação de Coberturas e Janelas',
        description: 'Remoção de silicone antigo ressecado e aplicação de nova vedação profissional contra goteiras.',
        applications: 'Pergolados, coberturas de vidro e esquadrias',
      },
    ],
    gallery: [
      {
        id: 'man-1',
        title: 'Troca de Roldanas e Alinhamento de Box e Portas',
        subtitle: 'Manutenção em Umuarama',
        specs: 'Deslize Leve Renovado · Peças Blindadas',
        sceneType: 'manutencao',
      },
      {
        id: 'man-2',
        title: 'Substituição de Mola Hidráulica de Piso',
        subtitle: 'Portas Comerciais e Condomínios',
        specs: 'Fechamento Suave e Silencioso',
        sceneType: 'manutencao',
      },
      {
        id: 'man-3',
        title: 'Revisão Completa de Cortina de Vidro em Sacada',
        subtitle: 'Conforto e Segurança',
        specs: 'Regulagem de Folhas e Nova Vedação',
        sceneType: 'manutencao',
      },
    ],
    faqs: [
      {
        question: 'Meu box ou porta de vidro está pesado para abrir. Vale a pena fazer manutenção?',
        answer:
          'Com certeza! Na maioria das vezes a estrutura e o vidro estão ótimos, sendo necessário apenas trocar as roldanas e fazer o alinhamento técnico para voltar a correr leve como novo.',
      },
      {
        question: 'Vocês atendem manutenção de serviços feitos por outra vidraçaria?',
        answer:
          'Sim! Nossa equipe atende toda Umuarama para manutenção de boxes, portas, janelas e sacadas independentemente de quem fez a instalação original.',
      },
      {
        question: 'A porta da minha loja está batendo forte ao fechar. O que pode ser?',
        answer:
          'Isso indica que a mola hidráulica de piso perdeu pressão ou regulagem. Fazemos a avaliação no local para regular ou substituir a mola.',
      },
    ],
    baseRatePerSqm: 240,
    sceneType: 'manutencao',
  },
];

export function getServiceBySlug(slug: ServiceSlug | string): ServiceDefinition | undefined {
  return SERVICES_CATALOG.find((s) => s.slug === slug);
}
