import type { Language } from '../i18n/translations'

export type ServiceIcon = 'automation' | 'dashboard' | 'integration' | 'security'

export interface ServicePageContent {
  path: string
  slug: string
  image: string
  projectName: string
  projectUrl: string
  eyebrow: string
  title: string
  highlight: string
  intro: string
  primaryCta: string
  secondaryCta: string
  proof: string[]
  problem: {
    eyebrow: string
    title: string
    intro: string
    cards: Array<{ icon: ServiceIcon; title: string; text: string }>
  }
  deliverables: {
    eyebrow: string
    title: string
    intro: string
    items: Array<{ title: string; text: string }>
  }
  process: {
    eyebrow: string
    title: string
    steps: Array<{ title: string; text: string }>
  }
  fit: {
    eyebrow: string
    title: string
    text: string
    bullets: string[]
  }
  faq: {
    eyebrow: string
    title: string
    items: Array<{ question: string; answer: string }>
  }
  finalCta: {
    eyebrow: string
    title: string
    text: string
    button: string
  }
  meta: { title: string; description: string }
  whatsappMessage: string
}

type LocalizedServicePage = {
  path: string
  slug: string
  image: string
  projectName: string
  projectUrl: string
  content: Record<Language, Omit<ServicePageContent, 'path' | 'slug' | 'image' | 'projectName' | 'projectUrl'>>
}

const pages: LocalizedServicePage[] = [
  {
    path: '/sistemas',
    slug: 'sistemas',
    image: '/assets/projects/grimo-featured.png',
    projectName: 'Grimo',
    projectUrl: 'https://grimoapp.vercel.app/',
    content: {
      pt: {
        eyebrow: 'Sistemas web e desktop',
        title: 'Software sob medida para sua operação',
        highlight: 'trabalhar melhor.',
        intro: 'Transformo processos manuais, planilhas dispersas e rotinas repetitivas em sistemas claros, seguros e preparados para crescer com o negócio.',
        primaryCta: 'Quero avaliar meu projeto',
        secondaryCta: 'Ver como funciona',
        proof: ['+4 anos em produtos reais', 'Desenvolvimento ponta a ponta', 'Web, desktop e integrações'],
        problem: {
          eyebrow: 'Quando faz sentido',
          title: 'Menos improviso. Mais controle da operação.',
          intro: 'Um sistema sob medida entra quando ferramentas genéricas já não acompanham o processo, a equipe ou a informação que sua empresa precisa.',
          cards: [
            { icon: 'automation', title: 'Rotinas repetitivas', text: 'Automação de tarefas, cálculos e fluxos que hoje consomem tempo da equipe.' },
            { icon: 'dashboard', title: 'Dados espalhados', text: 'Painéis e relatórios para reunir informações e apoiar decisões com clareza.' },
            { icon: 'integration', title: 'Ferramentas desconectadas', text: 'APIs e integrações para fazer sistemas, serviços e bancos de dados conversarem.' },
            { icon: 'security', title: 'Operação sem segurança', text: 'Autenticação, permissões, validações e histórico das ações importantes.' },
          ],
        },
        deliverables: {
          eyebrow: 'O que posso construir',
          title: 'Do painel interno ao produto digital completo.',
          intro: 'Escopo definido conforme problema, usuários, integrações e estágio do negócio.',
          items: [
            { title: 'Sistemas administrativos', text: 'Cadastros, permissões, relatórios, dashboards e gestão de processos.' },
            { title: 'Aplicações web', text: 'Produtos acessíveis pelo navegador, responsivos e preparados para uso em equipe.' },
            { title: 'Sistemas desktop', text: 'Soluções instaláveis para operações que exigem integração local ou uso dedicado.' },
            { title: 'APIs e integrações', text: 'Conexão com pagamentos, ERPs, CRMs, serviços externos e sistemas existentes.' },
            { title: 'MVPs e SaaS', text: 'Primeira versão funcional para validar uma ideia com base técnica evolutiva.' },
            { title: 'Evolução de sistemas', text: 'Novos módulos, correções, performance e modernização de aplicações existentes.' },
          ],
        },
        process: {
          eyebrow: 'Processo',
          title: 'Decisões claras antes de grandes linhas de código.',
          steps: [
            { title: 'Diagnóstico', text: 'Entendo processo, usuários, riscos e resultado esperado.' },
            { title: 'Escopo', text: 'Organizo funcionalidades, prioridades, prazo e marcos de entrega.' },
            { title: 'Construção', text: 'Desenvolvimento em ciclos com demonstrações e validações.' },
            { title: 'Implantação', text: 'Testes, publicação, orientação de uso e acompanhamento inicial.' },
          ],
        },
        fit: {
          eyebrow: 'Projeto certo',
          title: 'Ideal para empresas com um problema operacional real.',
          text: 'Antes de indicar tecnologia, avalio se um sistema próprio é mesmo o melhor investimento. Às vezes uma integração ou solução menor resolve melhor.',
          bullets: ['Processo definido ou passível de mapeamento', 'Responsável disponível para validar decisões', 'Orçamento compatível com desenvolvimento personalizado', 'Visão de uso contínuo e evolução'],
        },
        faq: {
          eyebrow: 'Perguntas frequentes',
          title: 'O que normalmente querem saber antes de começar.',
          items: [
            { question: 'Quanto custa desenvolver um sistema?', answer: 'Depende de usuários, regras, integrações e risco técnico. Depois do diagnóstico, você recebe escopo, etapas e investimento estimado. MVPs costumam começar em uma faixa menor e evoluir por módulos.' },
            { question: 'O sistema fica sendo meu?', answer: 'As regras de propriedade, acesso ao código e licenças ficam descritas em contrato antes do início.' },
            { question: 'Você também cuida da manutenção?', answer: 'Sim. Após a garantia inicial, manutenção e evolução podem seguir por plano mensal ou banco de horas.' },
            { question: 'Posso começar com uma versão menor?', answer: 'Sim. Priorizar um MVP reduz risco e permite validar o fluxo principal antes de ampliar o investimento.' },
          ],
        },
        finalCta: {
          eyebrow: 'Próximo passo',
          title: 'Seu processo pode virar uma ferramenta melhor.',
          text: 'Conte como sua operação funciona hoje. Eu avalio o cenário e respondo com os próximos passos mais adequados.',
          button: 'Conversar sobre o sistema',
        },
        meta: {
          title: 'Sistemas Web e Desktop sob Medida | Clei Vilela',
          description: 'Desenvolvimento de sistemas web, desktop, painéis administrativos, APIs e integrações sob medida para empresas.',
        },
        whatsappMessage: 'Olá, Clei! Vi sua página de sistemas e gostaria de avaliar um projeto sob medida para minha empresa.',
      },
      en: {
        eyebrow: 'Web and desktop software',
        title: 'Custom software built for your operation',
        highlight: 'work better.',
        intro: 'I turn manual processes, scattered spreadsheets and repetitive routines into clear, secure systems ready to grow with the business.',
        primaryCta: 'Evaluate my project',
        secondaryCta: 'See how it works',
        proof: ['4+ years in real products', 'End-to-end development', 'Web, desktop and integrations'],
        problem: {
          eyebrow: 'When it makes sense',
          title: 'Less improvisation. More operational control.',
          intro: 'Custom software becomes valuable when generic tools can no longer support your process, team or information needs.',
          cards: [
            { icon: 'automation', title: 'Repetitive routines', text: 'Automate tasks, calculations and workflows that currently consume team time.' },
            { icon: 'dashboard', title: 'Scattered data', text: 'Dashboards and reports that bring information together for better decisions.' },
            { icon: 'integration', title: 'Disconnected tools', text: 'APIs and integrations that connect services, systems and databases.' },
            { icon: 'security', title: 'Unsafe operations', text: 'Authentication, permissions, validation and history for important actions.' },
          ],
        },
        deliverables: {
          eyebrow: 'What I can build',
          title: 'From internal dashboards to complete digital products.',
          intro: 'Scope is shaped around the problem, users, integrations and business stage.',
          items: [
            { title: 'Admin systems', text: 'Records, permissions, reports, dashboards and process management.' },
            { title: 'Web applications', text: 'Responsive browser-based products ready for collaborative use.' },
            { title: 'Desktop systems', text: 'Installable solutions for dedicated or locally integrated operations.' },
            { title: 'APIs and integrations', text: 'Connections with payments, ERPs, CRMs, external services and existing software.' },
            { title: 'MVPs and SaaS', text: 'A functional first version built to validate an idea on a scalable foundation.' },
            { title: 'System evolution', text: 'New modules, fixes, performance work and modernization of existing applications.' },
          ],
        },
        process: {
          eyebrow: 'Process',
          title: 'Clear decisions before large amounts of code.',
          steps: [
            { title: 'Discovery', text: 'I understand the process, users, risks and desired outcome.' },
            { title: 'Scope', text: 'Features, priorities, schedule and delivery milestones are organized.' },
            { title: 'Build', text: 'Development happens in cycles with demos and validation.' },
            { title: 'Launch', text: 'Testing, deployment, onboarding and initial support.' },
          ],
        },
        fit: {
          eyebrow: 'The right project',
          title: 'Best for companies with a real operational problem.',
          text: 'Before recommending technology, I assess whether custom software is the right investment. Sometimes an integration or smaller solution works better.',
          bullets: ['A process that can be mapped', 'An owner available to validate decisions', 'Budget for custom development', 'A long-term vision for use and evolution'],
        },
        faq: {
          eyebrow: 'Frequently asked questions',
          title: 'What clients usually want to know before starting.',
          items: [
            { question: 'How much does custom software cost?', answer: 'It depends on users, business rules, integrations and technical risk. After discovery, you receive a scoped estimate with milestones and investment.' },
            { question: 'Will I own the system?', answer: 'Ownership, source access and licensing terms are documented in the contract before work begins.' },
            { question: 'Do you provide maintenance?', answer: 'Yes. After the initial warranty, maintenance and evolution can continue through a monthly plan or a block of hours.' },
            { question: 'Can we start with a smaller version?', answer: 'Yes. An MVP reduces risk and validates the core workflow before expanding the investment.' },
          ],
        },
        finalCta: {
          eyebrow: 'Next step',
          title: 'Your process can become a better tool.',
          text: 'Tell me how your operation works today. I will assess the scenario and reply with the best next steps.',
          button: 'Discuss the system',
        },
        meta: {
          title: 'Custom Web and Desktop Software | Clei Vilela',
          description: 'Custom web systems, desktop software, admin dashboards, APIs and integrations for businesses.',
        },
        whatsappMessage: 'Hi, Clei! I saw your software page and would like to discuss a custom system for my business.',
      },
    },
  },
  {
    path: '/sites-institucionais',
    slug: 'sites-institucionais',
    image: '/assets/projects/roma-massas.png',
    projectName: 'Roma Massas',
    projectUrl: 'https://romamassas.com.br/',
    content: {
      pt: {
        eyebrow: 'Sites institucionais',
        title: 'Sua empresa merece uma presença digital que',
        highlight: 'transmita confiança.',
        intro: 'Crio sites rápidos, responsivos e alinhados à identidade do negócio para apresentar sua empresa com clareza e transformar interesse em contato.',
        primaryCta: 'Quero um site profissional',
        secondaryCta: 'Conhecer a entrega',
        proof: ['Design exclusivo', 'SEO técnico essencial', 'WhatsApp e mensuração'],
        problem: {
          eyebrow: 'Primeira impressão',
          title: 'Credibilidade antes mesmo da primeira conversa.',
          intro: 'Quando alguém pesquisa sua empresa, o site precisa responder rápido: quem você é, o que oferece e por que vale entrar em contato.',
          cards: [
            { icon: 'dashboard', title: 'Mensagem confusa', text: 'Conteúdo e hierarquia organizados para o visitante entender a empresa em poucos segundos.' },
            { icon: 'security', title: 'Imagem pouco profissional', text: 'Direção visual consistente para reforçar confiança e percepção de valor.' },
            { icon: 'automation', title: 'Site que não gera contato', text: 'Chamadas claras, WhatsApp, formulários e jornada planejada para ação.' },
            { icon: 'integration', title: 'Presença difícil de medir', text: 'Estrutura pronta para Analytics, Pixel e acompanhamento de conversões.' },
          ],
        },
        deliverables: {
          eyebrow: 'Entrega completa',
          title: 'Um site pensado para representar e apoiar o negócio.',
          intro: 'Projeto estruturado do conteúdo à publicação, com escopo adequado ao tamanho da empresa.',
          items: [
            { title: 'Estratégia de conteúdo', text: 'Organização das páginas, mensagens e chamadas conforme objetivo comercial.' },
            { title: 'Design responsivo', text: 'Experiência consistente em celular, tablet e computador.' },
            { title: 'Páginas institucionais', text: 'Início, empresa, serviços, diferenciais, contato e páginas específicas necessárias.' },
            { title: 'SEO técnico básico', text: 'Metadados, títulos, estrutura semântica, indexação e compartilhamento social.' },
            { title: 'Canais de contato', text: 'WhatsApp, formulários, mapas, redes sociais e integrações essenciais.' },
            { title: 'Publicação e orientação', text: 'Configuração de domínio, hospedagem, testes e entrega organizada.' },
          ],
        },
        process: {
          eyebrow: 'Processo',
          title: 'Da essência da empresa ao site publicado.',
          steps: [
            { title: 'Imersão', text: 'Entendo negócio, público, diferenciais e objetivo do site.' },
            { title: 'Direção', text: 'Defino conteúdo, estrutura e caminho visual antes do desenvolvimento.' },
            { title: 'Construção', text: 'Desenvolvo, adapto para dispositivos e apresento para validação.' },
            { title: 'Publicação', text: 'Reviso detalhes, conecto domínio e acompanho a entrada no ar.' },
          ],
        },
        fit: {
          eyebrow: 'Para quem é',
          title: 'Empresas que precisam ser encontradas e levadas a sério.',
          text: 'Funciona para negócios locais, prestadores de serviço e empresas que desejam substituir presença improvisada por uma base digital própria.',
          bullets: ['Empresa em fase de posicionamento ou expansão', 'Serviços que exigem confiança antes do contato', 'Marca dependente apenas de redes sociais', 'Site antigo, lento ou desalinhado ao negócio atual'],
        },
        faq: {
          eyebrow: 'Perguntas frequentes',
          title: 'Decisões importantes antes de tirar o projeto do papel.',
          items: [
            { question: 'Quantas páginas o site terá?', answer: 'A quantidade depende do conteúdo e dos serviços. O escopo define páginas e seções antes do início para evitar surpresas.' },
            { question: 'Você cria os textos e imagens?', answer: 'Posso orientar e estruturar a mensagem. Produção completa de copy, fotos ou identidade visual pode entrar como adicional ou ser fornecida pelo cliente.' },
            { question: 'Domínio e hospedagem estão inclusos?', answer: 'Configuro tudo para você, mas domínio, hospedagem e licenças são custos externos e ficam em nome do cliente.' },
            { question: 'Posso atualizar o conteúdo depois?', answer: 'Sim. Dependendo do projeto, entrego uma área de edição ou realizo atualizações por plano de manutenção.' },
          ],
        },
        finalCta: {
          eyebrow: 'Presença própria',
          title: 'Seu próximo cliente pode estar pesquisando agora.',
          text: 'Vamos construir um site que apresente sua empresa com clareza, confiança e um próximo passo fácil.',
          button: 'Planejar meu site',
        },
        meta: {
          title: 'Criação de Sites Institucionais | Clei Vilela',
          description: 'Sites institucionais rápidos, responsivos e profissionais para empresas, serviços e negócios que querem gerar confiança e contatos.',
        },
        whatsappMessage: 'Olá, Clei! Vi sua página de sites institucionais e gostaria de conversar sobre o site da minha empresa.',
      },
      en: {
        eyebrow: 'Corporate websites',
        title: 'Your business deserves a digital presence that',
        highlight: 'builds trust.',
        intro: 'I create fast, responsive websites aligned with your brand to present the business clearly and turn interest into conversations.',
        primaryCta: 'I need a professional website',
        secondaryCta: 'Explore the delivery',
        proof: ['Custom design', 'Essential technical SEO', 'WhatsApp and measurement'],
        problem: {
          eyebrow: 'First impression',
          title: 'Credibility before the first conversation.',
          intro: 'When someone looks up your company, the website should quickly explain who you are, what you offer and why they should contact you.',
          cards: [
            { icon: 'dashboard', title: 'Unclear message', text: 'Content and hierarchy organized so visitors understand the business quickly.' },
            { icon: 'security', title: 'Weak professional image', text: 'Consistent art direction that strengthens trust and perceived value.' },
            { icon: 'automation', title: 'No path to contact', text: 'Clear calls to action, WhatsApp, forms and a journey designed for action.' },
            { icon: 'integration', title: 'Hard to measure', text: 'A structure ready for Analytics, Pixel and conversion tracking.' },
          ],
        },
        deliverables: {
          eyebrow: 'Complete delivery',
          title: 'A website built to represent and support the business.',
          intro: 'A project structured from content to launch, with scope matched to your company.',
          items: [
            { title: 'Content strategy', text: 'Pages, messages and calls to action organized around the commercial goal.' },
            { title: 'Responsive design', text: 'A consistent experience across phones, tablets and computers.' },
            { title: 'Corporate pages', text: 'Home, company, services, differentiators, contact and any required detail pages.' },
            { title: 'Basic technical SEO', text: 'Metadata, headings, semantic structure, indexing and social sharing.' },
            { title: 'Contact channels', text: 'WhatsApp, forms, maps, social media and essential integrations.' },
            { title: 'Launch and guidance', text: 'Domain, hosting, testing and an organized handoff.' },
          ],
        },
        process: {
          eyebrow: 'Process',
          title: 'From the essence of the company to a live website.',
          steps: [
            { title: 'Discovery', text: 'I understand the business, audience, differentiators and website goal.' },
            { title: 'Direction', text: 'Content, structure and visual direction are defined before development.' },
            { title: 'Build', text: 'I develop, adapt for devices and present the experience for validation.' },
            { title: 'Launch', text: 'Final review, domain connection and launch support.' },
          ],
        },
        fit: {
          eyebrow: 'Who it is for',
          title: 'Companies that need to be found and taken seriously.',
          text: 'A strong fit for local businesses, service providers and companies replacing an improvised presence with their own digital foundation.',
          bullets: ['A business positioning or expanding', 'Services that require trust before contact', 'A brand relying only on social media', 'An old or slow website that no longer fits'],
        },
        faq: {
          eyebrow: 'Frequently asked questions',
          title: 'Important decisions before the project starts.',
          items: [
            { question: 'How many pages will the website have?', answer: 'It depends on the content and services. Pages and sections are agreed in the scope before work begins.' },
            { question: 'Do you create the copy and images?', answer: 'I can guide and structure the message. Full copywriting, photography or branding can be added or supplied by the client.' },
            { question: 'Are domain and hosting included?', answer: 'I configure them, but external costs stay in the client’s name.' },
            { question: 'Can I update content later?', answer: 'Yes. Depending on the project, I provide editing tools or ongoing maintenance.' },
          ],
        },
        finalCta: {
          eyebrow: 'Your own presence',
          title: 'Your next client may be searching right now.',
          text: 'Let’s build a website that presents your company with clarity, trust and an easy next step.',
          button: 'Plan my website',
        },
        meta: {
          title: 'Corporate Website Development | Clei Vilela',
          description: 'Fast, responsive corporate websites for businesses and service providers that want trust and new contacts.',
        },
        whatsappMessage: 'Hi, Clei! I saw your corporate website page and would like to discuss a website for my company.',
      },
    },
  },
  {
    path: '/landing-pages',
    slug: 'landing-pages',
    image: '/assets/projects/lp-dentista.png',
    projectName: 'Sorriso Perfeito',
    projectUrl: 'https://clinica-sorriso-br.vercel.app/',
    content: {
      pt: {
        eyebrow: 'Landing pages',
        title: 'Uma página, uma oferta e um caminho claro para',
        highlight: 'gerar contatos.',
        intro: 'Landing pages rápidas e persuasivas para campanhas, lançamentos e serviços que precisam transformar atenção em WhatsApp, formulário ou venda.',
        primaryCta: 'Quero uma landing page',
        secondaryCta: 'Ver estrutura',
        proof: ['Foco em conversão', 'Carregamento rápido', 'Pronta para anúncios'],
        problem: {
          eyebrow: 'Conversão',
          title: 'Clique sem direção custa dinheiro.',
          intro: 'Uma campanha eficiente precisa de uma página que continue a promessa do anúncio e conduza o visitante sem distrações.',
          cards: [
            { icon: 'dashboard', title: 'Oferta difícil de entender', text: 'Headline, benefícios e prova organizados para explicar valor rapidamente.' },
            { icon: 'automation', title: 'Muitos caminhos', text: 'Uma ação principal reduz distrações e conduz para o objetivo da campanha.' },
            { icon: 'security', title: 'Pouca confiança', text: 'Design, prova e respostas às objeções antes do pedido de contato.' },
            { icon: 'integration', title: 'Sem mensuração', text: 'Eventos e integrações preparados para acompanhar leads e otimizar mídia.' },
          ],
        },
        deliverables: {
          eyebrow: 'O que entra',
          title: 'Estrutura completa para apresentar e converter.',
          intro: 'Cada bloco existe para responder uma dúvida e aproximar o visitante da ação principal.',
          items: [
            { title: 'Oferta e narrativa', text: 'Organização da promessa, benefícios, diferenciais e objeções.' },
            { title: 'Design sob medida', text: 'Visual alinhado à marca e adaptado para conversão em dispositivos móveis.' },
            { title: 'CTA estratégico', text: 'WhatsApp, formulário, checkout ou agendamento com caminho claro.' },
            { title: 'Provas e confiança', text: 'Espaços para depoimentos, resultados, garantias e credenciais.' },
            { title: 'Rastreamento', text: 'Estrutura para Meta Pixel, GA4, Tag Manager e eventos relevantes.' },
            { title: 'Publicação', text: 'Performance, responsividade, domínio e testes antes de liberar campanha.' },
          ],
        },
        process: {
          eyebrow: 'Processo',
          title: 'Página construída ao redor de uma oferta real.',
          steps: [
            { title: 'Oferta', text: 'Definimos público, promessa, ação e origem do tráfego.' },
            { title: 'Estrutura', text: 'Organizo seções e mensagens para responder objeções.' },
            { title: 'Design e código', text: 'Crio a experiência responsiva com velocidade e clareza.' },
            { title: 'Medição', text: 'Publico, testo eventos e deixo a página pronta para campanha.' },
          ],
        },
        fit: {
          eyebrow: 'Melhor uso',
          title: 'Ideal quando existe uma oferta específica para divulgar.',
          text: 'Landing page não substitui todo site institucional. Ela funciona melhor em campanhas com produto, serviço, evento ou ação bem definidos.',
          bullets: ['Campanhas de Meta ou Google Ads', 'Lançamento de serviço ou produto', 'Captação de contatos pelo WhatsApp', 'Validação rápida de uma oferta'],
        },
        faq: {
          eyebrow: 'Perguntas frequentes',
          title: 'O essencial para colocar sua campanha no ar.',
          items: [
            { question: 'Qual o prazo de uma landing page?', answer: 'Projetos com conteúdo disponível costumam avançar em poucas semanas. Prazo final depende de copy, imagens, integrações e velocidade das aprovações.' },
            { question: 'A página já vem com tráfego pago?', answer: 'A criação da página e a gestão de mídia são serviços separados. Posso entregar ambos de forma integrada.' },
            { question: 'Você configura Pixel e Analytics?', answer: 'Sim, quando os acessos e IDs são fornecidos. Também defino os eventos importantes para a campanha.' },
            { question: 'Posso usar meu domínio?', answer: 'Sim. A página pode ficar no domínio atual, em subdomínio ou em um novo endereço.' },
          ],
        },
        finalCta: {
          eyebrow: 'Campanha com destino',
          title: 'Sua oferta precisa de uma página que trabalhe por ela.',
          text: 'Conte o que você quer divulgar e qual ação espera do visitante. Eu desenho o caminho até a conversão.',
          button: 'Planejar minha landing page',
        },
        meta: {
          title: 'Criação de Landing Pages para Conversão | Clei Vilela',
          description: 'Landing pages rápidas, responsivas e preparadas para Meta Ads, Google Ads, WhatsApp, formulários e vendas.',
        },
        whatsappMessage: 'Olá, Clei! Vi sua página de landing pages e quero conversar sobre uma página para minha oferta.',
      },
      en: {
        eyebrow: 'Landing pages',
        title: 'One page, one offer and a clear path to',
        highlight: 'generate leads.',
        intro: 'Fast, persuasive landing pages for campaigns, launches and services that need to turn attention into messages, forms or sales.',
        primaryCta: 'I need a landing page',
        secondaryCta: 'See the structure',
        proof: ['Conversion focused', 'Fast loading', 'Ready for ads'],
        problem: {
          eyebrow: 'Conversion',
          title: 'Clicks without direction waste money.',
          intro: 'An efficient campaign needs a page that continues the ad promise and guides visitors without distractions.',
          cards: [
            { icon: 'dashboard', title: 'Hard-to-understand offer', text: 'Headline, benefits and proof organized to explain value quickly.' },
            { icon: 'automation', title: 'Too many paths', text: 'One primary action reduces distraction and guides visitors to the goal.' },
            { icon: 'security', title: 'Not enough trust', text: 'Design, proof and objection handling before the contact request.' },
            { icon: 'integration', title: 'No measurement', text: 'Events and integrations prepared to track leads and optimize media.' },
          ],
        },
        deliverables: {
          eyebrow: 'What is included',
          title: 'A complete structure to present and convert.',
          intro: 'Every section answers a question and moves the visitor closer to the main action.',
          items: [
            { title: 'Offer and narrative', text: 'Promise, benefits, differentiators and objections organized clearly.' },
            { title: 'Custom design', text: 'On-brand visuals adapted for mobile conversion.' },
            { title: 'Strategic CTA', text: 'WhatsApp, form, checkout or booking with a clear path.' },
            { title: 'Proof and trust', text: 'Space for testimonials, results, guarantees and credentials.' },
            { title: 'Tracking', text: 'Ready for Meta Pixel, GA4, Tag Manager and relevant events.' },
            { title: 'Launch', text: 'Performance, responsive QA, domain and testing before media starts.' },
          ],
        },
        process: {
          eyebrow: 'Process',
          title: 'A page built around a real offer.',
          steps: [
            { title: 'Offer', text: 'We define the audience, promise, action and traffic source.' },
            { title: 'Structure', text: 'Sections and messages are organized around objections.' },
            { title: 'Design and code', text: 'I build a fast, clear and responsive experience.' },
            { title: 'Measurement', text: 'The page is launched and events are tested before the campaign.' },
          ],
        },
        fit: {
          eyebrow: 'Best use',
          title: 'Ideal when there is one specific offer to promote.',
          text: 'A landing page does not replace an entire corporate site. It works best for a defined product, service, event or campaign.',
          bullets: ['Meta or Google Ads campaigns', 'A product or service launch', 'WhatsApp lead generation', 'Fast offer validation'],
        },
        faq: {
          eyebrow: 'Frequently asked questions',
          title: 'What you need to put the campaign live.',
          items: [
            { question: 'How long does a landing page take?', answer: 'Projects with content ready usually move within a few weeks. Timing depends on copy, images, integrations and approvals.' },
            { question: 'Does it include paid traffic?', answer: 'Page development and media management are separate services, but I can deliver both as an integrated project.' },
            { question: 'Do you configure Pixel and Analytics?', answer: 'Yes, when access and IDs are provided. I also define the most important campaign events.' },
            { question: 'Can I use my domain?', answer: 'Yes. The page can live on your current domain, a subdomain or a new address.' },
          ],
        },
        finalCta: {
          eyebrow: 'A destination for your campaign',
          title: 'Your offer needs a page that works for it.',
          text: 'Tell me what you want to promote and what action visitors should take. I will design the conversion path.',
          button: 'Plan my landing page',
        },
        meta: {
          title: 'Conversion Landing Page Development | Clei Vilela',
          description: 'Fast, responsive landing pages prepared for Meta Ads, Google Ads, WhatsApp, forms and sales.',
        },
        whatsappMessage: 'Hi, Clei! I saw your landing page service and would like to discuss a page for my offer.',
      },
    },
  },
  {
    path: '/ecommerce',
    slug: 'ecommerce',
    image: '/assets/projects/lp-ecommerce-moda-service.png',
    projectName: 'LUMIÈRE',
    projectUrl: 'https://moda-vitrine-br.vercel.app/',
    content: {
      pt: {
        eyebrow: 'E-commerce',
        title: 'Uma loja online feita para facilitar a compra e',
        highlight: 'sustentar o crescimento.',
        intro: 'Desenvolvo experiências de compra rápidas, organizadas e confiáveis — do catálogo ao pagamento — com estrutura preparada para operação e divulgação.',
        primaryCta: 'Quero vender online',
        secondaryCta: 'Conhecer a estrutura',
        proof: ['Catálogo responsivo', 'Pagamento e logística', 'Métricas e campanhas'],
        problem: {
          eyebrow: 'Experiência de compra',
          title: 'Bonita para a marca. Simples para quem compra.',
          intro: 'Uma loja precisa equilibrar apresentação, confiança, velocidade e operação. Cada atrito no caminho pode virar uma venda perdida.',
          cards: [
            { icon: 'dashboard', title: 'Catálogo confuso', text: 'Categorias, filtros e páginas de produto organizados para facilitar descoberta.' },
            { icon: 'security', title: 'Falta de confiança', text: 'Informações, políticas e checkout apresentados com clareza e segurança.' },
            { icon: 'integration', title: 'Operação desconectada', text: 'Integrações com pagamento, frete, estoque e ferramentas do negócio.' },
            { icon: 'automation', title: 'Venda sem acompanhamento', text: 'Eventos de e-commerce e métricas para entender o caminho até a compra.' },
          ],
        },
        deliverables: {
          eyebrow: 'Estrutura da loja',
          title: 'Tudo que o cliente precisa para escolher e comprar.',
          intro: 'A solução pode usar uma plataforma consolidada ou desenvolvimento específico, conforme catálogo, operação e orçamento.',
          items: [
            { title: 'Vitrine e categorias', text: 'Home comercial, coleções, busca e organização inteligente do catálogo.' },
            { title: 'Páginas de produto', text: 'Fotos, variações, benefícios, informações e chamadas de compra.' },
            { title: 'Carrinho e checkout', text: 'Fluxo simples com pagamento, cupons e informações importantes.' },
            { title: 'Frete e operação', text: 'Regras de entrega, cálculo, retirada e integrações compatíveis.' },
            { title: 'Gestão do catálogo', text: 'Área para produtos, pedidos, clientes, estoque e promoções.' },
            { title: 'Analytics e pixels', text: 'Visualização de produto, carrinho, início de checkout e compra mensurados.' },
          ],
        },
        process: {
          eyebrow: 'Processo',
          title: 'Tecnologia alinhada ao catálogo e à operação.',
          steps: [
            { title: 'Diagnóstico', text: 'Mapeio produtos, pagamentos, frete, estoque e rotina da equipe.' },
            { title: 'Arquitetura', text: 'Defino plataforma, navegação, integrações e direção visual.' },
            { title: 'Configuração', text: 'Construo loja, cadastro estrutura inicial e testo fluxos de compra.' },
            { title: 'Lançamento', text: 'Publico, valido métricas e acompanho a primeira fase da operação.' },
          ],
        },
        fit: {
          eyebrow: 'Antes de começar',
          title: 'Loja boa depende de uma operação minimamente preparada.',
          text: 'Produto, preço, estoque, entrega, atendimento e política comercial precisam estar claros. Ajudo a transformar essas decisões em experiência digital.',
          bullets: ['Catálogo e margem de produtos definidos', 'Processo de pagamento e entrega viável', 'Responsável por pedidos e atendimento', 'Verba separada para plataforma, mídia e operação'],
        },
        faq: {
          eyebrow: 'Perguntas frequentes',
          title: 'O que muda o escopo de uma loja virtual.',
          items: [
            { question: 'Qual plataforma você utiliza?', answer: 'A escolha depende de catálogo, integrações, orçamento e autonomia desejada. Posso trabalhar com plataforma pronta ou solução personalizada.' },
            { question: 'O cadastro de produtos está incluso?', answer: 'Incluo uma quantidade inicial definida em proposta. Catálogos grandes podem ser importados ou cadastrados como serviço adicional.' },
            { question: 'A loja já inclui meios de pagamento e frete?', answer: 'Configuro integrações compatíveis com a plataforma. Taxas, contratos e mensalidades dos fornecedores são pagos pelo cliente.' },
            { question: 'Você também faz campanhas para a loja?', answer: 'Sim. Depois da loja e dos eventos estarem validados, a gestão de tráfego pode entrar como produto complementar.' },
          ],
        },
        finalCta: {
          eyebrow: 'Venda online',
          title: 'Transforme catálogo em uma experiência pronta para comprar.',
          text: 'Conte sobre seus produtos, operação e objetivo. Eu indico a estrutura mais adequada para começar ou evoluir.',
          button: 'Planejar meu e-commerce',
        },
        meta: {
          title: 'Criação de E-commerce e Lojas Virtuais | Clei Vilela',
          description: 'Lojas virtuais responsivas com catálogo, pagamentos, frete, gestão de pedidos, métricas e estrutura para campanhas.',
        },
        whatsappMessage: 'Olá, Clei! Vi sua página de e-commerce e gostaria de conversar sobre uma loja virtual.',
      },
      en: {
        eyebrow: 'E-commerce',
        title: 'An online store designed to simplify buying and',
        highlight: 'support growth.',
        intro: 'I build fast, organized and trustworthy shopping experiences — from catalog to payment — ready for operations and promotion.',
        primaryCta: 'I want to sell online',
        secondaryCta: 'Explore the structure',
        proof: ['Responsive catalog', 'Payments and logistics', 'Metrics and campaigns'],
        problem: {
          eyebrow: 'Shopping experience',
          title: 'Beautiful for the brand. Easy for the customer.',
          intro: 'A store must balance presentation, trust, speed and operations. Every friction point can become a lost sale.',
          cards: [
            { icon: 'dashboard', title: 'Confusing catalog', text: 'Categories, filters and product pages organized for easy discovery.' },
            { icon: 'security', title: 'Lack of trust', text: 'Information, policies and checkout presented clearly and securely.' },
            { icon: 'integration', title: 'Disconnected operations', text: 'Integrations with payments, shipping, inventory and business tools.' },
            { icon: 'automation', title: 'No purchase insight', text: 'E-commerce events and metrics that reveal the path to purchase.' },
          ],
        },
        deliverables: {
          eyebrow: 'Store structure',
          title: 'Everything customers need to choose and buy.',
          intro: 'The solution can use an established platform or custom development based on catalog, operations and budget.',
          items: [
            { title: 'Storefront and categories', text: 'Commercial home, collections, search and smart catalog organization.' },
            { title: 'Product pages', text: 'Images, variants, benefits, information and purchase actions.' },
            { title: 'Cart and checkout', text: 'A simple flow with payments, coupons and important information.' },
            { title: 'Shipping and operations', text: 'Delivery rules, calculation, pickup and compatible integrations.' },
            { title: 'Catalog management', text: 'Tools for products, orders, customers, inventory and promotions.' },
            { title: 'Analytics and pixels', text: 'Product views, carts, checkout starts and purchases measured.' },
          ],
        },
        process: {
          eyebrow: 'Process',
          title: 'Technology aligned with catalog and operations.',
          steps: [
            { title: 'Discovery', text: 'I map products, payments, shipping, inventory and team routine.' },
            { title: 'Architecture', text: 'Platform, navigation, integrations and visual direction are defined.' },
            { title: 'Setup', text: 'I build the store, add the initial structure and test purchase flows.' },
            { title: 'Launch', text: 'The store goes live, metrics are validated and the first phase is supported.' },
          ],
        },
        fit: {
          eyebrow: 'Before starting',
          title: 'A good store needs a prepared operation.',
          text: 'Product, pricing, inventory, delivery, support and commercial policies should be clear. I turn those decisions into a digital experience.',
          bullets: ['Catalog and margins defined', 'A viable payment and delivery process', 'Someone responsible for orders and support', 'Separate budget for platform, media and operations'],
        },
        faq: {
          eyebrow: 'Frequently asked questions',
          title: 'What changes the scope of an online store.',
          items: [
            { question: 'Which platform do you use?', answer: 'The choice depends on catalog, integrations, budget and desired autonomy. I can use an established platform or a custom solution.' },
            { question: 'Is product entry included?', answer: 'An initial quantity is included in the proposal. Large catalogs can be imported or added as an extra service.' },
            { question: 'Does it include payment and shipping?', answer: 'I configure compatible integrations. Provider fees and contracts are paid by the client.' },
            { question: 'Do you also manage store campaigns?', answer: 'Yes. Once the store and events are validated, paid traffic can be added as a complementary service.' },
          ],
        },
        finalCta: {
          eyebrow: 'Sell online',
          title: 'Turn your catalog into a buying experience.',
          text: 'Tell me about your products, operations and goals. I will recommend the best structure to start or evolve.',
          button: 'Plan my e-commerce',
        },
        meta: {
          title: 'E-commerce and Online Store Development | Clei Vilela',
          description: 'Responsive online stores with catalog, payments, shipping, order management, metrics and campaign-ready structure.',
        },
        whatsappMessage: 'Hi, Clei! I saw your e-commerce page and would like to discuss an online store.',
      },
    },
  },
  {
    path: '/trafego-pago',
    slug: 'trafego-pago',
    image: '/assets/projects/site-agencia-marketing.png',
    projectName: 'ORBIT Agency',
    projectUrl: 'https://agencia-mkt-br.vercel.app/',
    content: {
      pt: {
        eyebrow: 'Tráfego pago e mensuração',
        title: 'Campanhas conectadas a uma oferta que',
        highlight: 'faz sentido medir.',
        intro: 'Planejamento, configuração e otimização de Meta Ads e Google Ads com páginas, eventos e atendimento alinhados ao objetivo do negócio.',
        primaryCta: 'Quero avaliar minhas campanhas',
        secondaryCta: 'Ver abordagem',
        proof: ['Meta e Google Ads', 'Pixel, GA4 e eventos', 'Leitura de leads e vendas'],
        problem: {
          eyebrow: 'Além do botão impulsionar',
          title: 'Tráfego não corrige uma oferta sem direção.',
          intro: 'Antes de aumentar alcance, conecto anúncio, página, rastreamento e atendimento para que investimento gere informação útil e oportunidades reais.',
          cards: [
            { icon: 'dashboard', title: 'Objetivo errado', text: 'Campanha alinhada a contato, venda ou ação de negócio — não apenas cliques.' },
            { icon: 'integration', title: 'Dados incompletos', text: 'Pixel, GA4 e eventos configurados para enxergar o caminho do usuário.' },
            { icon: 'automation', title: 'Anúncios sem evolução', text: 'Testes de criativo, público e oferta com ajustes baseados em sinais reais.' },
            { icon: 'security', title: 'Lead sem qualificação', text: 'Página e formulário preparados para filtrar melhor antes do atendimento.' },
          ],
        },
        deliverables: {
          eyebrow: 'Gestão conectada',
          title: 'Mídia, página e dados trabalhando na mesma direção.',
          intro: 'O escopo varia por canal, verba, região, ciclo de venda e maturidade da estrutura atual.',
          items: [
            { title: 'Diagnóstico', text: 'Oferta, público, concorrência, página, atendimento e histórico de campanhas.' },
            { title: 'Planejamento de mídia', text: 'Objetivos, canais, orçamento, segmentação e hipóteses de teste.' },
            { title: 'Configuração técnica', text: 'Conta de anúncios, Pixel, GA4, eventos e integrações necessárias.' },
            { title: 'Campanhas e públicos', text: 'Estrutura consolidada conforme verba e etapa do funil.' },
            { title: 'Otimização contínua', text: 'Leitura de resultados, testes e distribuição de orçamento.' },
            { title: 'Relatório útil', text: 'Leads, custo, qualidade, vendas e próximos passos — não vaidade.' },
          ],
        },
        process: {
          eyebrow: 'Processo',
          title: 'Primeiro entender. Depois investir e escalar.',
          steps: [
            { title: 'Base', text: 'Valido oferta, destino, métricas e capacidade de atendimento.' },
            { title: 'Lançamento', text: 'Configuro campanha enxuta com hipóteses e criativos definidos.' },
            { title: 'Aprendizado', text: 'Observo qualidade dos contatos e elimino desperdícios.' },
            { title: 'Evolução', text: 'Aumento investimento somente quando sinais justificam.' },
          ],
        },
        fit: {
          eyebrow: 'Expectativa correta',
          title: 'Anúncio acelera estrutura boa; não cria resultado sozinho.',
          text: 'Resultado depende de oferta, margem, página, criativo, atendimento e tempo de aprendizado. Gestão cuida da mídia e ajuda a conectar essas partes.',
          bullets: ['Oferta clara e capacidade de atender contatos', 'Verba de mídia separada da gestão', 'Acesso às contas e aos dados do negócio', 'Compromisso com testes e melhoria contínua'],
        },
        faq: {
          eyebrow: 'Perguntas frequentes',
          title: 'Transparência antes de investir.',
          items: [
            { question: 'Quanto preciso investir em mídia?', answer: 'Depende de ticket, região, concorrência e objetivo. Começamos com verba concentrada em uma oferta e aumentamos apenas quando os dados sustentam a decisão.' },
            { question: 'A verba está inclusa na gestão?', answer: 'Não. Gestão é meu serviço; mídia é paga diretamente pelo cliente para Meta ou Google.' },
            { question: 'Você garante vendas?', answer: 'Não existe garantia responsável de vendas. A gestão reduz desperdício, mede sinais e melhora campanhas, mas fechamento também depende de oferta e processo comercial.' },
            { question: 'Preciso ter uma landing page?', answer: 'Nem sempre, mas campanhas de maior intenção costumam se beneficiar de uma página específica. Posso criar e integrar essa estrutura.' },
          ],
        },
        finalCta: {
          eyebrow: 'Investimento com direção',
          title: 'Antes de colocar mais verba, vamos olhar a estrutura inteira.',
          text: 'Conte qual serviço deseja vender, onde atende e quanto pretende investir. Eu avalio o ponto de partida.',
          button: 'Solicitar diagnóstico',
        },
        meta: {
          title: 'Gestão de Tráfego Pago e Mensuração | Clei Vilela',
          description: 'Gestão de Meta Ads e Google Ads com planejamento, Pixel, GA4, eventos, landing pages e otimização baseada em leads e vendas.',
        },
        whatsappMessage: 'Olá, Clei! Vi sua página de tráfego pago e gostaria de avaliar minha estrutura de anúncios.',
      },
      en: {
        eyebrow: 'Paid traffic and measurement',
        title: 'Campaigns connected to an offer that is',
        highlight: 'worth measuring.',
        intro: 'Planning, setup and optimization for Meta Ads and Google Ads with pages, events and sales follow-up aligned to the business goal.',
        primaryCta: 'Evaluate my campaigns',
        secondaryCta: 'See the approach',
        proof: ['Meta and Google Ads', 'Pixel, GA4 and events', 'Lead and sales analysis'],
        problem: {
          eyebrow: 'Beyond boosting posts',
          title: 'Traffic cannot fix an offer with no direction.',
          intro: 'Before increasing reach, I connect the ad, page, tracking and sales response so investment creates useful information and real opportunities.',
          cards: [
            { icon: 'dashboard', title: 'Wrong objective', text: 'Campaigns aligned with contacts, sales or business actions — not clicks alone.' },
            { icon: 'integration', title: 'Incomplete data', text: 'Pixel, GA4 and events configured to understand the user journey.' },
            { icon: 'automation', title: 'Campaigns that never evolve', text: 'Creative, audience and offer tests driven by real signals.' },
            { icon: 'security', title: 'Unqualified leads', text: 'Pages and forms designed to improve qualification before sales contact.' },
          ],
        },
        deliverables: {
          eyebrow: 'Connected management',
          title: 'Media, pages and data moving in one direction.',
          intro: 'Scope varies by channel, budget, region, sales cycle and current maturity.',
          items: [
            { title: 'Diagnosis', text: 'Offer, audience, competition, page, response process and campaign history.' },
            { title: 'Media planning', text: 'Objectives, channels, budget, targeting and test hypotheses.' },
            { title: 'Technical setup', text: 'Ad account, Pixel, GA4, events and required integrations.' },
            { title: 'Campaigns and audiences', text: 'A consolidated structure matched to budget and funnel stage.' },
            { title: 'Continuous optimization', text: 'Result analysis, tests and budget distribution.' },
            { title: 'Useful reporting', text: 'Leads, cost, quality, sales and next steps — not vanity.' },
          ],
        },
        process: {
          eyebrow: 'Process',
          title: 'Understand first. Then invest and scale.',
          steps: [
            { title: 'Foundation', text: 'I validate the offer, destination, metrics and response capacity.' },
            { title: 'Launch', text: 'A focused campaign starts with defined hypotheses and creative.' },
            { title: 'Learning', text: 'Lead quality is observed and waste is reduced.' },
            { title: 'Evolution', text: 'Investment grows only when the signals justify it.' },
          ],
        },
        fit: {
          eyebrow: 'The right expectation',
          title: 'Ads accelerate a good structure; they do not create results alone.',
          text: 'Results depend on the offer, margin, page, creative, response process and learning time. Management connects and improves these parts.',
          bullets: ['A clear offer and capacity to respond', 'Media budget separate from management', 'Access to accounts and business data', 'Commitment to testing and continuous improvement'],
        },
        faq: {
          eyebrow: 'Frequently asked questions',
          title: 'Transparency before investing.',
          items: [
            { question: 'How much media budget do I need?', answer: 'It depends on ticket, region, competition and goal. We start focused on one offer and increase spend only when data supports it.' },
            { question: 'Is media spend included in management?', answer: 'No. Management is my service; media is paid directly by the client to Meta or Google.' },
            { question: 'Do you guarantee sales?', answer: 'No responsible provider can guarantee sales. Management reduces waste and improves campaigns, but closing also depends on the offer and sales process.' },
            { question: 'Do I need a landing page?', answer: 'Not always, but high-intent campaigns often benefit from a focused page. I can build and integrate it.' },
          ],
        },
        finalCta: {
          eyebrow: 'Investment with direction',
          title: 'Before adding budget, let’s examine the whole structure.',
          text: 'Tell me what you sell, where you serve and what you plan to invest. I will assess the starting point.',
          button: 'Request a diagnosis',
        },
        meta: {
          title: 'Paid Traffic Management and Measurement | Clei Vilela',
          description: 'Meta Ads and Google Ads management with planning, Pixel, GA4, events, landing pages and lead-focused optimization.',
        },
        whatsappMessage: 'Hi, Clei! I saw your paid traffic page and would like to evaluate my advertising setup.',
      },
    },
  },
]

export function getServicePage(pathname: string, language: Language): ServicePageContent | null {
  const rawPath = pathname.replace(/\/$/, '') || '/'
  const normalizedPath = rawPath === '/sites-intitucionais' ? '/sites-institucionais' : rawPath
  const page = pages.find(item => item.path === normalizedPath)
  if (!page) return null

  return {
    path: page.path,
    slug: page.slug,
    image: page.image,
    projectName: page.projectName,
    projectUrl: page.projectUrl,
    ...page.content[language],
  }
}

export function isServicePath(pathname: string) {
  return getServicePage(pathname, 'pt') !== null
}

export function listServicePages(language: Language) {
  return pages.map(page => ({
    path: page.path,
    slug: page.slug,
    label: page.content[language].eyebrow,
  }))
}
