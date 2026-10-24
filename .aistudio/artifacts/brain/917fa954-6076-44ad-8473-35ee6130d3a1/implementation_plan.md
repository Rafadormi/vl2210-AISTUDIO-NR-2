# Plataforma Web & Orçador Técnico ABNT — Vidraçaria Liderança

Refatoração arquitetural e visual do portal da **Vidraçaria Liderança** (Umuarama - PR), unindo catálogo completo de 13 linhas de serviços sob medida com SEO local, um **Orçador Técnico Multi-itens (Carrinho)** validado pelas normas da ABNT e fluxo de pré-vendas integrado ao WhatsApp/n8n com geração de protocolo de atendimento.

### User Review & Critical Decisions

> [!IMPORTANT]
> As decisões abaixo consolidam sua solicitação de protocolo e confirmação pós-envio, além das diretrizes técnicas recomendadas para o orçador e canais de atendimento.

- **Confirmação de Solicitação e Número de Protocolo (Confirmado pelo Usuário)**: Ao finalizar o envio do orçamento técnico, o sistema exibirá imediatamente uma tela/modal de confirmação agradecendo o cliente, informando *"Sua solicitação já foi encaminhada e será analisada"* e gerando um **Número de Protocolo único** (ex.: `VL-2026-8492`), que também acompanha o payload enviado para o WhatsApp/n8n.
- **Estimativa Financeira no Carrinho (Padrão Recomendado)**: Exibição de faixa de investimento pré-estimada aproximada por item e total, acompanhada de aviso explícito de que o valor final depende de aferição técnica presencial em Umuarama e região.
- **Roteamento de Atendimento no WhatsApp (Padrão Recomendado)**: O cliente poderá direcionar o envio para o Atendimento Geral (`(44) 99800-8515`), Diego (`(44) 98415-2049`) ou Jonathan (`(44) 98456-4529`), com o botão flutuante único no canto inferior direito apontando por padrão para a central de atendimento.
- **Integração com Bot de Pré-Vendas n8n**: O envio consolida o texto estruturado codificado para o WhatsApp (`wa.me`) incluindo o número de protocolo recém-gerado e dispara simultaneamente (de forma assíncrona/opcional) o JSON estruturado para um endpoint/webhook compatível com fluxos n8n.

---

### 1. Overview & Core Concept

- **O Que o Sistema Faz**: Apresenta o portfólio completo de soluções em vidros temperados, laminados, especiais e esquadrias de alumínio da Vidraçaria Liderança, guiando arquitetos, engenheiros, empresas e proprietários residenciais de Umuarama até um configurador técnico multi-itens que impede erros normativos antes mesmo da visita técnica.
- **Público-Alvo**: Clientes residenciais em reforma ou construção, condomínios, comércios e escritórios de arquitetura/engenharia em Umuarama - PR e região (atuando desde 2018).
- **Valor Principal**: Elimina orçamentos vagos ou tecnicamente inviáveis ao aplicar travas automáticas das normas ABNT (NBR 14207, NBR 14718, NBR 16259, NBR 6123, NBR 7199 e NBR 15198) e entrega a solicitação já organizada com protocolo único para triagem rápida da equipe técnica.

---

### 2. User Experience & Visual Design

- **Fluxo Principal do Usuário**:
  1. **Descoberta & Navegação**: O visitante acessa a Home ou uma das 13 páginas dedicadas de serviços através do cabeçalho fixo com submenu estruturado ou dos cards de especialidades.
  2. **Exploração Técnica**: Em cada página de serviço, consulta variações do catálogo completo (ex.: Linha Gold, Linha Suprema, Linha 42, Pele de Vidro, Spider Glass, Box Elegance, Vidros Especiais), aplicações, benefícios, galeria arquitetônica ilustrativa e perguntas frequentes (FAQ).
  3. **Configuração Multi-itens com Travas ABNT**: No painel esquerdo do Orçador Técnico, seleciona a categoria, informa largura e altura, escolhe espessura/cor/acabamento e recebe validação normativa em tempo real. Ao clicar em **"+ Adicionar este Item"**, o item vai para o carrinho lateral e o formulário reseta para permitir adicionar novos ambientes (ex.: Box + Fechamento de Sacada + Espelho LED).
  4. **Fechamento com Protocolo**: Ao clicar em **"Enviar Orçamento Completo para o WhatsApp"**, o sistema gera o **Número de Protocolo**, exibe a mensagem de agradecimento (*"Sua solicitação já foi encaminhada e será analisada"*) com resumo copiável do protocolo e abre a conversa estruturada para validação técnica.

- **Identidade Visual & Tema**:
  - *Direção Estética*: Arquitetura Técnica Contemporânea — superfícies precisas que remetem à transparência do vidro e ao rigor estrutural dos perfis de alumínio anodizado/pintado.
  - *Paleta de Cores (Regra 60-30-10)*:
    - **60% Base Neutra Dominante**: Branco Vidro (`#FFFFFF`) alternado com Cinza Claro Arquitetônico (`#F2F4F5`) para descanso visual entre seções densas.
    - **30% Superfícies Estruturais**: Preto Técnico (`#111111`) e Cinza Alumínio Escuro (`#2B2F33`) para cabeçalho, rodapé, tipografia principal e painéis de resumo técnico, com divisórias sutis de `1px`.
    - **10% Acento de Alta Intenção**: Vermelho Liderança (`#D71920`) concentrado exclusivamente nos gatilhos primários de conversão, destaques do H1 e alertas críticos de segurança normativa (Hard Stops ABNT).
  - *Tipografia & Hierarquia*:
    - Títulos (`H1`, `H2`, `H3`): **Inter** (pesos 700 e 800), com `text-wrap: balance` e escala fluida (`clamp(2.25rem, 4vw, 3.75rem)` na Hero) para impacto visual sem palavras órfãs.
    - Corpo de Texto e Especificações: **Open Sans** (pesos 400 e 500) com altura de linha confortável (`1.6`) e numerais tabulares (`tabular-nums`) para medidas em milímetros/metros, estimativas e números de protocolo.
  - *Layout & Composição Espacial*:
    - Cabeçalho fixo em linha única seguindo contrato de 3 zonas: Logo horizontal oficial da Vidraçaria Liderança à esquerda, navegação central enxuta (Início, Serviços com dropdown das 13 páginas, Portfólio, Contato) e ação única **"Pedir Orçamento"** à direita.
    - Responsividade calibrada para `360px` (mobile), `768px` (tablet) e `1024px–1440px` (desktop), mantendo o teto de elementos fixos no mobile abaixo de 15% da altura da tela e um único botão flutuante de WhatsApp no canto inferior direito.

---

### 3. Key Product Decisions & Trade-Offs

- **Decisão 1: Validação ABNT Preventiva (Hard Stops vs. Alertas Técnicos)**
  - *Abordagem Escolhida*: Bloqueio ativo (Hard Stop com alerta visual vermelho e explicação normativa) quando o usuário tenta configurar combinações proibidas por norma (ex.: Guarda-Corpo com altura `< 1,10m` ou com Vidro Temperado Simples; Cobertura com Vidro Temperado Simples), combinado com ajustes e notas automáticas obrigatórias (desconto de `10mm` no trilho de Box de correr, cálculo de vento de `45 m/s` com coleta de Andar/CEP para Sacadas em Umuarama, inclinação mínima de `5%` em Coberturas e fixação com silicone neutro em Espelhos).
  - *Por Quê*: Posiciona a Vidraçaria Liderança como autoridade técnica em Umuarama e evita retrabalho comercial com pedidos fora de norma.

- **Decisão 2: Geração de Protocolo e Persistência do Carrinho**
  - *Abordagem Escolhida*: O estado do carrinho multi-itens e o histórico de protocolos gerados são mantidos em contexto global sincronizado com `localStorage`, permitindo que o cliente navegue entre as 13 páginas de serviços adicionando itens ao mesmo orçamento sem perder o progresso.
  - *Por Quê*: Garante fluidez na jornada de compra de múltiplos itens (comum em obras completas) e preserva o número de protocolo na tela mesmo que o cliente feche a aba do WhatsApp e retorne ao site.

- **Decisão 3: SEO On-Page Dinâmico e Dados Estruturados Locais**
  - *Abordagem Escolhida*: Atualização dinâmica de `<title>`, `<meta name="description">`, OpenGraph, canonical URL e JSON-LD (`LocalBusiness` + `Service` + `FAQPage`) para cada uma das 13 rotas de serviços, mantendo exatamente um `<h1>` otimizado para buscas locais em Umuarama por página.
  - *Por Quê*: Maximiza a indexação orgânica local para termos de alta intenção de compra na região de Umuarama - PR.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Diagrama de Arquitetura e Componentes**:

```
┌────────────────────────────────────────────────────────────────────────────┐
│                        Camada de Apresentação & SEO                        │
│  ┌──────────────────────┐  ┌───────────────────────┐  ┌─────────────────┐  │
│  │ Header Fixo (3 Zonas)│  │  Dynamic SEO Manager  │  │ Botão Flutuante │  │
│  │ + Menu 13 Serviços   │  │ (Title/Meta/JSON-LD)  │  │ WhatsApp Único  │  │
│  └──────────┬───────────┘  └───────────┬───────────┘  └────────┬────────┘  │
└─────────────┼──────────────────────────┼───────────────────────┼───────────┘
              │                          │                       │
              ▼                          ▼                       ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                     Roteador de Páginas (Clean Architecture)               │
│  ┌──────────────────────┐  ┌────────────────────────────────────────────┐  │
│  │     Home Page        │  │        13 Páginas de Serviços              │  │
│  │ • Hero c/ Destaque   │  │ • Breadcrumb + Hero Específica (H1 Único)  │  │
│  │ • Catálogo Completo  │  │ • Subprodutos do Catálogo CSV Incorporados │  │
│  │ • Diferenciais Reais │  │ • Aplicações, Benefícios, Galeria & FAQ    │  │
│  │ • Portfólio & Mapa   │  │ • Orçador Técnico Pré-selecionado          │  │
│  └──────────┬───────────┘  └─────────────────────┬──────────────────────┘  │
└─────────────┼────────────────────────────────────┼─────────────────────────┘
              │                                    │
              ▼                                    ▼
┌────────────────────────────────────────────────────────────────────────────┐
│              Motor de Orçamento Técnico & Validação ABNT                   │
│  ┌──────────────────────────────────┐  ┌────────────────────────────────┐  │
│  │   Painel Esquerdo: Configurador  │  │ Painel Direito: Resumo/Carrinho│  │
│  │ • Seleção de Categoria e Modelo  │  │ • Lista de Itens + Especific.  │  │
│  │ • Medidas (Largura x Altura)     │─▶│ • Estimativa & Avisos ABNT     │  │
│  │ • Motor de Regras ABNT (NBRs)    │  │ • Gerador de Protocolo Único   │  │
│  └──────────────────────────────────┘  └───────────────┬────────────────┘  │
└────────────────────────────────────────────────────────┼───────────────────┘
                                                         │
                                                         ▼
┌────────────────────────────────────────────────────────────────────────────┐
│                   Camada de Integração Pré-Vendas (n8n)                    │
│  ┌──────────────────────────────────┐  ┌────────────────────────────────┐  │
│  │ Modal/Card de Confirmação        │  │ Disparo Estruturado WhatsApp   │  │
│  │ "Sua solicitação já foi          │  │ • Payload legível para IA n8n  │  │
│  │  encaminhada e será analisada"   │  │ • Protocolo #VL-2026-XXXX      │  │
│  │ + Agradecimento + Nº Protocolo   │  │ • Seleção: Geral/Diego/Jonathan│  │
│  └──────────────────────────────────┘  └────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────┘
```

- **Modelo de Dados & Regras de Estado ABNT**:
  - **Catálogo Unificado de Serviços**: Estrutura de domínio contendo as 13 páginas principais e todos os subprodutos do catálogo fornecido (Fachadas Glazing/Spider/ACM/Brise, Esquadrias Suprema/Gold/42/Minimalista/Europeu, Coberturas Fixas/Retráteis/Pergolados/Controle Solar, Divisórias Acústicas/Piso-Teto/Singola/Duplicatta/Polarizada, Sacadas Com/Sem Roldanas/Roll Door, Guarda-Corpos Embutido/Torre/Botões/Inox, Box Padrão/Canto/Articulado/Elegance/Piso-Teto/Curvo, Espelhos Prata/Fumê/Bronze/LED/Mosaico, Lousas de Vidro, Vidros Especiais, Portas Automáticas/Grandes Dimensões, Vitrines e Manutenção).
  - **Validador Normativo (`validateAbntRules`)**:
    - *Box para Banheiro (NBR 14207)*: Calcula automaticamente a altura de fabricação descontando `10mm` para trilhos em sistemas de correr e anexa a nota técnica obrigatória de manutenção preventiva a cada 12 meses.
    - *Guarda-Corpo (NBR 14718)*: Trava a adição (Hard Stop) se `altura < 1.10m` ou se o tipo de vidro selecionado for `"Vidro Temperado Simples"`, exigindo `"Vidro Laminado"` ou `"Vidro Laminado Temperado"` com alerta visual em Vermelho Liderança (`#D71920`).
    - *Fechamento de Sacada (NBR 16259 / NBR 6123)*: Torna obrigatório o preenchimento de **Andar** e **CEP**, anexando ao item o alerta normativo de pressão de vento de `45 m/s` para a região de Umuarama-PR.
    - *Cobertura de Vidro (NBR 7199)*: Bloqueia `"Vidro Temperado Simples"` (permitindo apenas Laminado ou Laminado de Controle Solar) e valida/registra a inclinação mínima de `5%` para escoamento.
    - *Espelhos Sob Medida (NBR 15198)*: Registra na especificação técnica a diretriz obrigatória de instalação química com filetes verticais de silicone neutro (isento de ácido acético) para prevenção de oxidação.
  - **Fluxo de Protocolo e Confirmação**:
    - Ao submeter o carrinho, o sistema gera um código único no formato `VL-2026-XXXX`, registra o timestamp, exibe o banner/modal de confirmação com a mensagem *"Sua solicitação já foi encaminhada e será analisada. Agradecemos a preferência!"*, e formata o payload de saída para o WhatsApp e webhook n8n contendo o protocolo no cabeçalho e a lista numerada de itens.
