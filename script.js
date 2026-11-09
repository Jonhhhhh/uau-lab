// ===== Tema claro / escuro =====
(() => {
  const toggle = document.getElementById("theme-toggle");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let saved;
  try { saved = localStorage.getItem("uaulab-theme"); } catch {}
  let followsSystem = saved !== "dark" && saved !== "light";

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === "dark";
    const label = dark ? "Ativar tema claro" : "Ativar tema escuro";
    toggle.setAttribute("aria-pressed", String(dark));
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    document.querySelector('meta[name="theme-color"]').content = dark ? "#121212" : "#ffffff";
  }

  applyTheme(document.documentElement.dataset.theme || "light");
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    followsSystem = false;
    applyTheme(theme);
    try { localStorage.setItem("uaulab-theme", theme); } catch {}
  });
  systemTheme.addEventListener("change", event => {
    if (followsSystem) applyTheme(event.matches ? "dark" : "light");
  });
})();

// ===== Uau! Lab - Configuração da loja =====
const LOJA = {
  nome: "Uau! Lab",
  shopee: "https://shopee.com.br/uaulab_3d",
  instagram: "https://www.instagram.com/uaulab3d/",
  facebook: "https://www.facebook.com/share/1PauAL9Crs/?mibextid=wwXIfr",
  whatsapp: "" // ex.: "5511999998888". Vazio = compra direcionada para a Shopee
};

// Produtos do catálogo Uau! Lab: Capas de Isqueiro 3D, Moldes & Ejetores e Personalizados
const PRODUTOS = [
  // === CAPAS DE ISQUEIRO 3D ===
  {
    slug: "capa-isqueiro-panico",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Panico-Preto-ou-Branco-i.841257716.58271467517",
    nome: "Capa Case Compatível com Isqueiro BIC Grande Pânico Preto ou Branco",
    curto: "Capa Isqueiro Pânico",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 4,
    destaque: true,
    novo: true,
    desc: "Capa colecionável inspirada na icônica máscara do Pânico (Ghostface) com acabamento marcante e textura tátil diferenciada. Disponível nas cores Preto ou Branco. Encaixe justo, firme e anatômico para isqueiro tradicional BIC Maxi.",
    specs: [
      "Compatível com isqueiro tradicional BIC Grande (Maxi)",
      "Design icônico da máscara do Pânico / Ghostface",
      "Disponível em Preto ou Branco",
      "Impresso em PLA Premium de alta resistência",
      "Encaixe firme que não solta no bolso"
    ]
  },
  {
    slug: "capa-isqueiro-chamas",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Chamas-Preto-ou-Branco-i.841257716.58221450045",
    nome: "Capa Case Compatível com Isqueiro BIC Grande Chamas Preto ou Branco",
    curto: "Capa Isqueiro Chamas",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 5,
    destaque: true,
    novo: true,
    desc: "Capa estilosa com chamas vazadas em relevo e design fluido. Mostra a cor do seu isqueiro ou contrasta perfeitamente com o corpo da peça. Encaixe firme e anatômico para isqueiro tradicional BIC Maxi.",
    specs: [
      "Compatível com isqueiro tradicional BIC Grande (Maxi)",
      "Design vazado escultural de chamas em alto relevo",
      "Disponível nas opções Preto ou Branco",
      "Material resistente com pegada ergonômica",
      "Protege contra riscos e impactos leves"
    ]
  },
  {
    slug: "capa-isqueiro-aranha",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Aranha-G%C3%B3tica-Preto-ou-Branco-i.841257716.58221105438",
    nome: "Capa de Isqueiro 3D Aranha em Alto Relevo (Compatível com BIC Maxi)",
    curto: "Capa Isqueiro Aranha",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 2,
    destaque: true,
    novo: true,
    desc: "Capa texturizada com aranha e teia em altíssimo relevo escultural. Encaixe firme e anatômico para isqueiro tradicional (BIC Maxi). Uma peça única para dar personalidade e proteção ao seu isqueiro!",
    specs: [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Alto relevo 3D rico em texturas e detalhes",
      "Impresso em PLA Premium de alta resistência",
      "Encaixe firme que não solta no bolso"
    ]
  },
  {
    slug: "capa-isqueiro-dragao",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Drag%C3%A3o-Preto-ou-Branco-i.841257716.22999875556",
    nome: "Capa de Isqueiro 3D Dragão Oriental em Alto Relevo (Compatível com BIC Maxi)",
    curto: "Capa Isqueiro Dragão",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 2,
    destaque: true,
    novo: true,
    desc: "Incrível escultura 3D com um dragão oriental serpenteando todo o corpo do isqueiro. Escamas nítidas, pegada ergonômica e acabamento de alta definição.",
    specs: [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Design escultural imponente de dragão envolvente",
      "Camadas precisas com textura tátil diferenciada",
      "Proteção estilosa contra impactos leves"
    ]
  },
  {
    slug: "capa-isqueiro-caveira-rachada",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Caveira-Rachada-Preto-ou-Branco-i.841257716.58221106468",
    nome: "Capa de Isqueiro 3D Caveira Rachada com Serpente (Compatível com BIC Maxi)",
    curto: "Capa Caveira & Serpente",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 2,
    destaque: true,
    novo: true,
    desc: "Design gótico e streetwear colecionável: crânio detalhado com efeito de rachaduras e uma serpente rastejante saindo da cavidade ocular. Perfeito para quem curte peças com muita atitude.",
    specs: [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Detalhes realistas de crânio rachado e serpente",
      "Acabamento fosco de alta qualidade",
      "Encaixe justo e pegada anatômica firme"
    ]
  },
  {
    slug: "capa-isqueiro-caveira-tentaculos",
    nome: "Capa de Isqueiro 3D Caveira com Tentáculos Dark Fantasy (Compatível com BIC Maxi)",
    curto: "Capa Caveira Tentáculos",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 2,
    destaque: true,
    novo: true,
    desc: "Inspirada em Dark Fantasy e estética Cthulhu, traz uma caveira entrelaçada por tentáculos profundos com acabamento escultural de alta precisão.",
    specs: [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Modelagem 3D artística com relevos profundos",
      "Produzido em PLA rígido e durável",
      "Protege seu isqueiro com visual impactante"
    ]
  },
  {
    slug: "capa-isqueiro-magazine",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Estilo-Magazine-PETG-Preto-ou-Branco-i.841257716.23699870641",
    nome: "Capa de Isqueiro 3D Magazine Carregador Tático (Compatível com BIC Maxi)",
    curto: "Capa Isqueiro Magazine",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 2,
    destaque: false,
    novo: true,
    desc: "Estilo tático industrial inspirado em carregadores de munição com nervuras antiderrapantes. Encaixe sob medida e pegada firme.",
    specs: [
      "Compatível com isqueiro tradicional BIC Maxi",
      "Design tático industrial com ranhuras antiderrapantes",
      "Material reforçado e de longa durabilidade",
      "Visual exclusivo e moderno"
    ]
  },
  {
    slug: "capa-isqueiro-ceifador",
    link: "https://shopee.com.br/Capa-Case-Compat%C3%ADvel-com-Isqueiro-BIC-Grande-Ceifador-Halloween-Preto-ou-Branco-i.841257716.23099885575",
    nome: "Capa de Isqueiro 3D Ceifador Grim Reaper (Compatível com BIC Maxi)",
    curto: "Capa Isqueiro Ceifador",
    cat: "isqueiros",
    ejetor: false,
    preco: 14.90,
    de: 19.90,
    fotos: 4,
    destaque: true,
    novo: true,
    desc: "Capa colecionável em alto relevo escultural do Ceifador (Grim Reaper) com manto sombrio e crânio detalhado. Encaixe firme e anatômico sob medida para isqueiro tradicional BIC Maxi.",
    specs: [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Modelagem 3D escultural do Ceifador em alto relevo",
      "Impresso em PLA Premium de alta resistência",
      "Encaixe firme que não solta no bolso"
    ]
  },

  // === UTILIDADES & SUPORTES 3D ===
  {
    slug: "suporte-papel-higienico-celular",
    link: "https://shopee.com.br/Porta-Papel-Higi%C3%AAnico-Divertido-Boneco-Segurando-Celular-Suporte-de-Rolo-Banheiro-Decora%C3%A7%C3%A3o-Criativa-3D-i.841257716.58271408355",
    nome: "Suporte de Papel Higiênico e Celular Criativo Boneco Articulado para Bancada Preto ou Branco",
    curto: "Suporte Papel Higiênico & Celular",
    cat: "utilidades",
    ejetor: false,
    preco: 19.99,
    de: 29.90,
    fotos: 2,
    destaque: true,
    novo: true,
    desc: "O suporte mais divertido e criativo para o seu banheiro ou lavabo! Boneco articulado que senta na quina da bancada ou prateleira abraçando o rolo de papel higiênico, com as costas no formato estilizado de smartphone. Suas perninhas com elos articulados balançam livremente na borda.",
    specs: [
      "Compatível com rolo padrão de papel higiênico",
      "Pernas articuladas que penduram na borda da bancada",
      "Design exclusivo de personagem segurando rolo com traseira de smartphone",
      "Disponível nas cores Branco ou Preto",
      "Peça decorativa divertida e resistente em impressão 3D"
    ]
  },
  {
    slug: "porta-frascos-monjaro-flor",
    link: "https://shopee.com.br/Porta-Frascos-Redondo-5-Lugares-Estampa-de-Flor-Pote-com-Tampa-Rosca-Organizador-Ampolas-Preto-ou-Branco-i.841257716.58271462699",
    nome: "Porta Frascos Monjaro Redondo 5 Lugares Estampa de Flor Pote com Tampa Rosca Organizador de Ampolas",
    curto: "Porta Frascos Monjaro Flor (5 Lugares)",
    cat: "utilidades",
    ejetor: false,
    preco: 21.99,
    de: 29.90,
    fotos: 5,
    destaque: true,
    novo: true,
    desc: "Pote organizador redondo com tampa de rosca decorado com delicada estampa floral 3D em alto relevo. Possui divisórias internas para acomodar com segurança até 5 frascos ou ampolas (compatível com frascos padrão Mounjaro / peptídeos). Protege seus medicamentos contra quedas, atritos e luminosidade com total discrição e elegância.",
    specs: [
      "Acomoda com segurança até 5 frascos ou ampolas",
      "Tampa com fechamento firme em rosca suave",
      "Textura escultural delicada com flores em alto relevo",
      "Disponível nas variações Preto ou Branco",
      "Ideal para levar em viagens, necessaires ou organizar em casa"
    ]
  },
  {
    slug: "porta-frascos-monjaro-estojo",
    link: "https://shopee.com.br/Porta-Frascos-6-Lugares-Caixa-Organizadora-com-Tampa-Estojo-Ampolas-Canetas-Preto-ou-Branco-i.841257716.58221441637",
    nome: "Porta Frascos Monjaro Estojo 6 Lugares com Trava e Dobradiça Organizador de Ampolas",
    curto: "Porta Frascos Monjaro Estojo (6 Lugares)",
    cat: "utilidades",
    ejetor: false,
    preco: 21.99,
    de: 29.90,
    fotos: 4,
    destaque: true,
    novo: true,
    desc: "Estojo organizador compacto estilo maletinha com capacidade para 6 frascos ou ampolas (compatível com frascos padrão Mounjaro). Conta com fecho de trava por encaixe firme e dobradiça resistente, além de detalhe decorativo floral na base. Praticidade e proteção para seus frascos onde você for.",
    specs: [
      "Capacidade para até 6 frascos ou ampolas com berço individual",
      "Fechamento seguro com trava frontal e dobradiça articulada",
      "Design compacto e discreto para guardar na geladeira ou transportar na bolsa",
      "Disponível nas variações Preto ou Branco",
      "Construção sólida em impressão 3D de alta durabilidade"
    ]
  },
  {
    slug: "porta-pincel-corsair",
    nome: "Porta Pincel de Maquiagem Espartilho Corset Gótico Organizador de Pincéis e Canetas Decoração Preto",
    curto: "Porta Pincel Espartilho Corset",
    cat: "utilidades",
    ejetor: false,
    preco: 29.99,
    de: 39.99,
    fotos: 6,
    destaque: true,
    novo: true,
    desc: "Organizador de bancada exclusivo no formato de espartilho corset gótico em impressão 3D. Compartimentos sob medida para organizar seus pincéis de maquiagem, canetas ou ferramentas com estilo marcante, elegância e firmeza na sua penteadeira ou mesa.",
    specs: [
      "Design exclusivo de Espartilho / Corset gótico em 3D",
      "Compartimentos espaçosos para múltiplos pincéis, canetas e cosméticos",
      "Base sólida e estável que decora sua bancada ou mesa",
      "Acabamento fosco texturizado de alta qualidade"
    ]
  },
  {
    slug: "kit-3-ganchos",
    link: "https://shopee.com.br/Kit-3-Ganchos-de-Parede-Canelado-Minimalista-para-Toalha-Bolsa-Chave-e-Roupa-Preto-ou-Branco-i.841257716.58221217356",
    nome: "Kit 3 Ganchos de Parede Canelado Minimalista para Toalha Bolsa Chave e Roupa Preto ou Branco",
    curto: "Kit 3 Ganchos Canelados",
    cat: "utilidades",
    ejetor: false,
    preco: 16.99,
    de: 24.90,
    fotos: 5,
    destaque: true,
    novo: true,
    desc: "Kit com 3 ganchos de parede canelados com design minimalista contemporâneo. Ideal para pendurar toalhas, chaves, bolsas, fones de ouvido e roupas, mantendo sua casa prática, elegante e organizada.",
    specs: [
      "Kit contém 3 ganchos resistentes canelados em 3D",
      "Fixação prática para paredes, portas, móveis e azulejos",
      "Disponível nas variações Preto ou Branco",
      "Ideal para chaves, toalhas, bolsas, cabos e casacos",
      "Material PLA reforçado de alta sustentação"
    ]
  },
  {
    slug: "limpador-pincel",
    link: "https://shopee.com.br/Limpador-de-Pincel-de-Maquiagem-Cora%C3%A7%C3%A3o-Tapete-de-Limpeza-para-Pinc%C3%A9is-e-Esponjas-Preto-ou-Branco-i.841257716.58271237557",
    nome: "Limpador e Higienizador de Pincéis de Maquiagem em 3D",
    curto: "Limpador de Pincel",
    cat: "utilidades",
    ejetor: false,
    preco: 9.99,
    de: 14.90,
    fotos: 3,
    destaque: true,
    novo: true,
    desc: "Acessório prático e higiênico para lavar e retirar resíduos de maquiagem de pincéis com facilidade. Superfície com relevos e ranhuras inteligentes que limpam as cerdas profundamente sem danificá-las.",
    specs: [
      "Superfície com texturas variadas para cerdas finas e grossas",
      "Limpa profundamente sem estragar as cerdas do pincel",
      "Tamanho compacto, leve e fácil de manusear na pia",
      "Material lavável, resistente e durável"
    ]
  },
  {
    slug: "organizador-cabos-oreo",
    link: "https://shopee.com.br/Organizador-de-Cabos-Biscoito-Recheado-Kit-4-com-Base-ou-Avulso-Enrolador-de-Fio-Carregador-USB-i.841257716.58221120366",
    nome: "Organizador e Enrolador de Cabos 3D Biscoito Oreo Retrátil",
    curto: "Organizador de Cabos Oreo",
    cat: "utilidades",
    ejetor: false,
    preco: 39.90,
    de: 49.90,
    fotos: 5,
    destaque: true,
    novo: true,
    desc: "O enrolador de cabos mais criativo e desejado! Réplica tridimensional perfeita do biscoito Oreo. Basta girar para enrolar e proteger cabos USB, Type-C, Lightning e fones, mantendo sua mesa e mochila 100% organizadas.",
    specs: [
      "Design hiper-realista idêntico ao biscoito Oreo",
      "Mecanismo rotativo prático para enrolar e desenrolar cabos",
      "Compatível com cabos USB, Type-C, Lightning e fones de ouvido",
      "Estrutura reforçada em impressão 3D de alta densidade"
    ]
  },
  {
    slug: "suporte-celular",
    link: "https://shopee.com.br/Suporte-de-Celular-de-Mesa-Minimalista-Apoio-para-Smartphone-Preto-ou-Branco-i.841257716.58221112290",
    nome: "Suporte Ergonômico de Mesa para Celular e Smartphone em 3D",
    curto: "Suporte Celular de Mesa",
    cat: "utilidades",
    ejetor: false,
    preco: 19.90,
    de: 29.90,
    fotos: 3,
    destaque: true,
    novo: true,
    desc: "Suporte de mesa moderno e estável para celulares. Ângulo de inclinação ergonômico ideal para chamadas de vídeo, lives, assistir séries e trabalhar. Possui abertura inferior para passagem do cabo de carregamento.",
    specs: [
      "Compatível com todos os modelos de celular e smartphones",
      "Abertura inferior estratégica para carregar o aparelho durante o uso",
      "Base sólida com excelente estabilidade e inclinação perfeita",
      "Design minimalista e resistente impresso em 3D"
    ]
  },
  {
    slug: "suporte-banco-carro",
    link: "https://shopee.com.br/Suporte-de-Celular-Banco-de-Carro-Esportivo-Mesa-Decora%C3%A7%C3%A3o-Gamer-Preto-ou-Branco-i.841257716.58271140644",
    nome: "Suporte Gancho Veicular 2 em 1 de Encosto de Banco para Celular e Bolsas em 3D",
    curto: "Suporte Banco de Carro",
    cat: "utilidades",
    ejetor: false,
    preco: 29.90,
    de: 39.90,
    fotos: 3,
    destaque: true,
    novo: true,
    desc: "Acessório veicular indispensável! Instalação rápida no encosto de cabeça do banco do carro. Funciona como suporte de celular para passageiros do banco traseiro assistirem vídeos e também como gancho resistente para pendurar bolsas, sacolas e mochilas.",
    specs: [
      "Encaixe universal compatível com as hastes do encosto de banco",
      "Função 2 em 1: suporte para celular + gancho resistente para bolsas e sacolas",
      "Mantém o interior do veículo organizado e os passageiros entretidos",
      "Construção 3D reforçada suporta peso sem deformar"
    ]
  },

  // === PROJETOS PERSONALIZADOS & SOB ENCOMENDA ===
  {
    slug: "projeto-3d-personalizado",
    nome: "Projeto 3D Sob Encomenda / Peça Personalizada Uau! Lab",
    curto: "Projeto 3D Personalizado",
    cat: "personalizado",
    ejetor: false,
    preco: 29.90,
    de: 39.90,
    fotos: 1,
    destaque: true,
    novo: true,
    desc: "Quer uma capa com sua logomarca, suporte especial, chaveiro, miniatura ou qualquer peça em impressão 3D exclusiva? Na Uau! Lab nós transformamos sua ideia em realidade! Fale conosco no chat para orçamento.",
    specs: [
      "Projetos exclusivos sob medida em impressão 3D",
      "Fabricação em filamento PLA de alta precisão",
      "Atendimento direto para definir cores e detalhes",
      "Envio seguro para todo o Brasil"
    ]
  },
  {
    slug: "inicial-personalizada",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Personalizado-Letra-Inicial-Idade-Nome-3-5cm-Carimbo-Cortador-Doces-Festa-i.841257716.58270679945",
    nome: "Modelador Ejetor Inicial Personalizada para Brigadeiro e Doces",
    curto: "Ejetor Inicial Personalizada",
    cat: "personalizado",
    ejetor: true,
    preco: 18.00,
    de: 20.00,
    fotos: 1,
    destaque: true,
    desc: "A letra do aniversariante, do casal ou da sua marca em relevo nítido no docinho. Após a compra, basta informar no chat a letra ou inicial desejada.",
    specs: [
      "2 peças: carimbo com relevo + cortador deslizante",
      "Docinho padrão de 3,5 cm (15 a 20g)",
      "Feito sob encomenda com a sua inicial",
      "Material PLA; siga as instruções de uso e limpeza do anúncio"
    ]
  },

  // === KITS PROMOCIONAIS DE MOLDES ===
  {
    slug: "kit-natal",
    link: "https://shopee.com.br/Kit-5-Ejetores-Molde-de-Brigadeiro-Natal-%C3%81rvore-Gorro-Sino-Floco-Boneco-de-Neve-3-5cm-Carimbo-i.841257716.58270690001",
    nome: "Kit Natal 5 Modeladores Ejetores para Brigadeiro e Doces",
    curto: "Kit Natal (5 Modeladores)",
    cat: "kits",
    ejetor: true,
    preco: 39.90,
    de: 79.90,
    fotos: 1,
    destaque: true,
    natal: true,
    desc: "Os 5 modelos de Natal juntos: árvore de natal, gorro do Papai Noel, sino, floco de neve e boneco de neve. A maior economia para sua produção de doces natalinos!",
    specs: [
      "Contém 5 ejetores completos de Natal",
      "Padronizados em 3,5 cm para doces de festa",
      "Carimbos com relevos profundos e nítidos",
      "Economia de R$ 40,00 comprando o kit completo"
    ]
  },
  {
    slug: "kit-festa",
    link: "https://shopee.com.br/Kit-3-Ejetores-Molde-de-Brigadeiro-Cora%C3%A7%C3%A3o-Estrela-Coroa-3-5cm-Carimbo-Cortador-Doces-Festa-i.841257716.58270690060",
    nome: "Kit Festa 3 Modeladores Ejetores: Coração, Estrela e Coroa",
    curto: "Kit Festa (3 Modeladores)",
    cat: "kits",
    ejetor: true,
    preco: 32.90,
    de: 49.90,
    fotos: 1,
    destaque: true,
    desc: "Coração, estrela e coroa: o trio que combina com aniversários, chás de bebê, casamentos e festas infantis.",
    specs: [
      "Contém 3 ejetores completos: Coração, Estrela e Coroa",
      "Padronizados em 3,5 cm",
      "Ideal para brigadeiro, beijinho, doces e massas",
      "Excelente custo-benefício"
    ]
  },

  // === COLEÇÃO NÚMEROS 0 A 9 ===
  {
    slug: "ejetor-numeros",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216",
    nome: "Modelador Ejetor Números 0 a 9 para Brigadeiro e Doces (Escolha o Número)",
    curto: "Ejetor Números 0 a 9",
    cat: "numeros",
    ejetor: true,
    preco: 18.00,
    de: 20.00,
    fotos: 11,
    destaque: true,
    desc: "Perfeito para comemorar aniversários, mesversários e datas comemorativas! Escolha o número de 0 a 9 para marcar seus docinhos com precisão.",
    specs: [
      "2 peças: carimbo numérico + cortador circular de 3,5 cm",
      "Disponível do número 0 ao 9",
      "Relevo nítido e fácil de desmoldar",
      "Lavável à mão com água morna"
    ]
  },
  { slug: "ejetor-numero-1",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 1 para Brigadeiro e Doces", curto: "Número 1", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, destaque: false, desc: "O mais pedido para comemorar 1º aninho, mesversários e datas especiais! Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-0",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 0 para Brigadeiro e Doces", curto: "Número 0", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário ou idade com o número 0 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-2",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 2 para Brigadeiro e Doces", curto: "Número 2", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 2 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-3",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 3 para Brigadeiro e Doces", curto: "Número 3", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 3 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-4",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 4 para Brigadeiro e Doces", curto: "Número 4", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 4 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-5",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 5 para Brigadeiro e Doces", curto: "Número 5", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 5 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-6",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 6 para Brigadeiro e Doces", curto: "Número 6", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 6 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-7",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 7 para Brigadeiro e Doces", curto: "Número 7", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 7 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-8",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 8 para Brigadeiro e Doces", curto: "Número 8", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 8 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-9",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-N%C3%BAmero-0-a-9-3-5cm-Carimbo-Cortador-Doces-Festa-Anivers%C3%A1rio-Idade-Confeitaria-i.841257716.58270976216", nome: "Modelador Ejetor Número 9 para Brigadeiro e Doces", curto: "Número 9", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 9 em relevo nítido. Carimbo + cortador em 3,5 cm." },

  // === MOLDES AVULSOS (TEMAS & NATAL) ===
  { slug: "coracao",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Cora%C3%A7%C3%A3o-3-5cm-Carimbo-Cortador-Doces-Festa-Dia-dos-Namorados-Confeitaria-i.841257716.58270668172", nome: "Modelador Ejetor Coração para Brigadeiro e Doces", curto: "Ejetor Coração", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, destaque: true, desc: "O clássico romântico. Perfeito para Dia dos Namorados, Dia das Mães, casamentos e chás." },
  { slug: "flor",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Flor-3-5cm-Carimbo-Cortador-Doces-Festa-Dia-das-M%C3%A3es-Confeitaria-i.841257716.58270668475", nome: "Modelador Ejetor Flor para Brigadeiro e Doces", curto: "Ejetor Flor", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Pétalas em relevo para docinhos delicados em lembrancinhas e festas de primavera." },
  { slug: "estrela",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Estrela-3-5cm-Carimbo-Cortador-Doces-Festa-Natal-Confeitaria-i.841257716.58220656763", nome: "Modelador Ejetor Estrela para Brigadeiro e Doces", curto: "Ejetor Estrela", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Estrela de cinco pontas com relevo definido, ótima para aniversários e celebrações." },
  { slug: "coroa",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Coroa-3-5cm-Carimbo-Cortador-Doces-Festa-Princesa-Rei-Confeitaria-i.841257716.58270675332", nome: "Modelador Ejetor Coroa para Brigadeiro e Doces", curto: "Ejetor Coroa", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Para festas de princesas, príncipes, reis e rainhas. Sucesso garantido em festas infantis." },
  { slug: "bola-futebol",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Bola-de-Futebol-3-5cm-Carimbo-Cortador-Doces-Festa-Copa-Confeitaria-i.841257716.58270668661", nome: "Modelador Ejetor Bola de Futebol para Doces", curto: "Ejetor Futebol", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "O docinho dos campeões. Ideal para aniversários com tema de futebol e dias de jogo." },
  { slug: "arvore-natal",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-%C3%81rvore-de-Natal-3-5cm-Carimbo-Cortador-Doces-Natalinos-Confeitaria-i.841257716.58270679569", nome: "Modelador Ejetor Árvore de Natal para Doces", curto: "Árvore de Natal", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Docinho natalino com árvore em relevo delicado. Ótimo para caixas de presente e ceia." },
  { slug: "gorro-papai-noel",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Gorro-de-Papai-Noel-3-5cm-Carimbo-Cortador-Doces-Natal-Confeitaria-i.841257716.58270679654", nome: "Modelador Ejetor Gorro do Papai Noel para Doces", curto: "Gorro Papai Noel", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "O gorro natalino em alto relevo. Fica incrível na mesa de doces de fim de ano." },
  { slug: "sino-natal",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Sino-de-Natal-3-5cm-Carimbo-Cortador-Doces-Natalinos-Confeitaria-i.841257716.58220663435", nome: "Modelador Ejetor Sino de Natal para Doces", curto: "Sino de Natal", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Sino com laço em relevo no doce para dar o toque tradicional das festas." },
  { slug: "floco-de-neve",
    link: "https://shopee.com.br/Ejetor-Molde-de-Brigadeiro-Floco-de-Neve-3-5cm-Carimbo-Cortador-Doces-Natal-Frozen-Confeitaria-i.841257716.58220667012", nome: "Modelador Ejetor Floco de Neve para Doces", curto: "Floco de Neve", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Floco detalhado, elegante e geométrico. Serve para Natal e festas de inverno (Frozen)." },
  { slug: "boneco-de-neve", nome: "Modelador Ejetor Boneco de Neve para Doces", curto: "Boneco de Neve", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Simpático e divertido. Combina muito com beijinho e brigadeiro branco." }
];

const CATS = {
  todos:         { nome: "Todos",               img: "assets/categorias/cat-isqueiros.jpg" },
  isqueiros:     { nome: "Capas de Isqueiro",   img: "assets/categorias/cat-isqueiros.jpg" },
  utilidades:    { nome: "Utilidades & Setup",  img: "assets/categorias/cat-utilidades.jpg" },
  ejetores:      { nome: "Moldes & Ejetores",   img: "assets/categorias/cat-moldes.jpg" },
  numeros:       { nome: "Números 0 a 9",       img: "assets/categorias/cat-numeros.jpg" },
  kits:          { nome: "Kits Promocionais",   img: "assets/categorias/cat-kits.jpg" },
  natal:         { nome: "Especial Natal",      img: "assets/categorias/cat-natal.jpg" },
  personalizado: { nome: "Personalizados",      img: "assets/categorias/cat-personalizado.jpg" }
};

const $ = s => document.querySelector(s);
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const foto = (slug, n = 1) => `assets/produtos/${slug}-${n}.jpg`;
const bySlug = slug => PRODUTOS.find(p => p.slug === slug);

function priceHTML(p) {
  return `${p.de ? `<s>${brl(p.de)}</s>` : ""}<b>${brl(p.preco)}</b>`;
}

function cardHTML(p) {
  const off = p.de ? Math.round((1 - p.preco / p.de) * 100) : 0;
  const flags = [

    off ? `<span class="flag flag--off">${off}% OFF</span>` : "",


    p.natal && p.cat !== "kits" ? `<span class="flag flag--natal">NATAL</span>` : ""
  ].filter(Boolean).join("");

  return `
    <article class="card" data-slug="${p.slug}" data-cat="${p.cat}">
      <button type="button" class="card__img" data-open="${p.slug}" aria-label="Ver detalhes: ${p.curto}">
        <img src="${foto(p.slug, 1)}" alt="${p.curto}" loading="lazy" />
        ${p.fotos > 1 ? `<img src="${foto(p.slug, 2)}" alt="${p.curto}" loading="lazy" />` : ""}
      </button>
      <div class="card__body">
        ${flags ? `<div class="card__flags">${flags}</div>` : ""}
        <h3 class="card__name"><button type="button" data-open="${p.slug}">${p.curto}</button></h3>
        <p class="card__meta">${p.cat === "isqueiros" ? "Para BIC Maxi · peça em PLA" : CATS[p.cat].nome}</p>
        <div class="price">${priceHTML(p)}</div>
        ${p.link ? `<a class="card__buy" href="${p.link}" target="_blank" rel="noopener" aria-label="Comprar ${p.curto} na Shopee">Comprar na Shopee ↗</a>` : `<button class="card__buy" data-open="${p.slug}" aria-label="Ver detalhes: ${p.curto}">Ver detalhes</button>`}
      </div>
    </article>`;
}

// ===== Renderização de Categorias & Vitrines =====
$("#cats").innerHTML = Object.entries(CATS).filter(([k]) => k !== "todos").map(([k, c]) => `
  <a class="cat" href="#produtos" data-go="${k}">
    <span class="cat__img"><img src="${c.img}" alt="${c.nome}" loading="lazy" /></span>
    <span>${c.nome}</span>
  </a>`).join("");

// Vitrine Destaques
$("#destaques").innerHTML = PRODUTOS.filter(p => p.destaque).slice(0, 10).map(cardHTML).join("");

// Vitrine Capas de Isqueiro
const elIsqueiros = $("#grid-isqueiros");
if (elIsqueiros) {
  elIsqueiros.innerHTML = PRODUTOS.filter(p => p.cat === "isqueiros").map(cardHTML).join("");
}

// Vitrine Utilidades & Setup 3D
const elUtilidades = $("#grid-utilidades");
if (elUtilidades) {
  elUtilidades.innerHTML = PRODUTOS.filter(p => p.cat === "utilidades").map(cardHTML).join("");
}

// Vitrine Moldes & Ejetores de Destaque
const elEjetores = $("#grid-ejetores");
if (elEjetores) {
  elEjetores.innerHTML = PRODUTOS.filter(p => p.ejetor && (p.destaque || p.cat === "kits")).slice(0, 4).map(cardHTML).join("");
}

// Vitrine Especial Natal
const elNatal = $("#grid-natal");
if (elNatal) {
  elNatal.innerHTML = PRODUTOS.filter(p => p.natal && p.cat !== "kits").map(cardHTML).join("");
}

// Todos os produtos
$("#grid-all").innerHTML = PRODUTOS.map(cardHTML).join("");

// Chips de filtro
$("#chips").innerHTML = Object.entries(CATS).map(([k, c]) =>
  `<button class="chip ${k === "todos" ? "is-on" : ""}" data-filter="${k}">${c.nome}</button>`).join("");

$("#ano").textContent = new Date().getFullYear();

// ===== Filtro + Busca Inteligente =====
let filtro = "todos";
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function produtoCorrespondeFiltro(p, f) {
  if (f === "todos") return true;
  if (f === "isqueiros") return p.cat === "isqueiros";
  if (f === "utilidades") return p.cat === "utilidades";
  if (f === "ejetores") return p.ejetor === true;
  if (f === "numeros") return p.cat === "numeros";
  if (f === "kits") return p.cat === "kits";
  if (f === "natal") return p.natal === true;
  if (f === "personalizado") return p.cat === "personalizado";
  return p.cat === f;
}

function aplicarFiltro() {
  const q = norm($("#q").value.trim());
  let n = 0;
  document.querySelectorAll("#grid-all .card").forEach(card => {
    const p = bySlug(card.dataset.slug);
    const catOk = produtoCorrespondeFiltro(p, filtro);
    const textOk = !q || norm(p.nome + " " + p.desc + " " + p.curto + " " + p.cat).includes(q);
    const ok = catOk && textOk;
    card.hidden = !ok;
    if (ok) n++;
  });
  $("#count").textContent = `${n} ${n === 1 ? "produto" : "produtos"}`;
  $("#empty").hidden = n > 0;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-on", c.dataset.filter === filtro));
}

function irPara(cat) {
  filtro = cat;
  $("#q").value = "";
  aplicarFiltro();
  $("#produtos").scrollIntoView({ behavior: "smooth" });
}

$("#chips").addEventListener("click", e => {
  const c = e.target.closest(".chip");
  if (c) { filtro = c.dataset.filter; aplicarFiltro(); }
});
$("#search").addEventListener("submit", e => { e.preventDefault(); filtro = "todos"; irPara("todos"); });
$("#q").addEventListener("input", () => { filtro = "todos"; aplicarFiltro(); });
aplicarFiltro();

// ===== Carrinho =====
let carrinho = {};
try {
  carrinho = JSON.parse(localStorage.getItem("uaulab-carrinho")) || JSON.parse(localStorage.getItem("docemolde-carrinho")) || {};
} catch {
  carrinho = {};
}

function salvar() {
  try { localStorage.setItem("uaulab-carrinho", JSON.stringify(carrinho)); } catch {}
}

function renderCarrinho() {
  const itens = Object.entries(carrinho).filter(([s]) => bySlug(s));
  const qtd = itens.reduce((a, [, q]) => a + q, 0);
  const total = itens.reduce((a, [s, q]) => a + bySlug(s).preco * q, 0);
  $("#cart-count").textContent = qtd;
  $("#cart-total-top").textContent = brl(total);
  $("#cart-total").textContent = brl(total);
  $("#checkout").disabled = !qtd;
  $("#cart-items").innerHTML = itens.length ? itens.map(([s, q]) => {
    const p = bySlug(s);
    return `<div class="line">
      <img src="${foto(s)}" alt="" />
      <div>
        <b>${p.curto}</b>
        <small>${brl(p.preco)}</small><br>
        <div class="qty"><button data-dec="${s}" aria-label="Menos">−</button><span>${q}</span><button data-inc="${s}" aria-label="Mais">+</button></div>
      </div>
      <button class="rm" data-rm="${s}" aria-label="Remover ${p.curto} da lista">remover</button>
      ${p.link
        ? `<a class="line__shop" href="${p.link}" target="_blank" rel="noopener" aria-label="Comprar ${p.curto} na Shopee">Comprar na Shopee ↗</a>${p.cat === "numeros" ? '<small class="line__hint">Escolha o número no anúncio da Shopee.</small>' : ''}`
        : `<a class="line__shop line__shop--store" href="${LOJA.shopee}" target="_blank" rel="noopener">Consultar na loja ↗</a><small class="line__hint">Anúncio individual ainda não vinculado.</small>`}

    </div>`;
  }).join("") : `<p class="drawer__empty">Sua lista está vazia ✨<br>Escolha suas criações em 3D!</p>`;
  $("#checkout-note").textContent = itens.length
    ? "Use o botão de cada peça para abrir o anúncio. Escolha as variações e quantidades na Shopee; a lista não é transferida automaticamente."
    : "Salve os produtos que gostar para consultar depois.";
  $("#checkout").disabled = !itens.length;
}

function adicionar(slug, q = 1) {
  carrinho[slug] = (carrinho[slug] || 0) + q;
  salvar(); renderCarrinho();
  const b = $("#cart-count");
  if (b) {
    b.classList.remove("bump");
    void b.offsetWidth;
    b.classList.add("bump");
  }
  toast(`${bySlug(slug).curto} salvo na sua lista! ✨`);
}

$("#cart-items").addEventListener("click", e => {
  const t = e.target.closest("button"); if (!t) return;
  const { inc, dec, rm } = t.dataset;
  if (inc) carrinho[inc]++;
  if (dec) carrinho[dec]--;
  if (rm) delete carrinho[rm];
  for (const k in carrinho) if (carrinho[k] <= 0) delete carrinho[k];
  salvar(); renderCarrinho();
});

async function copiarTexto(texto) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return true;
    }
  } catch {}
  const area = document.createElement("textarea");
  area.value = texto;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const copiou = document.execCommand("copy");
  area.remove();
  return copiou;
}

$("#checkout").addEventListener("click", async () => {
  const itens = Object.entries(carrinho).filter(([slug]) => bySlug(slug));
  if (!itens.length) return;
  const total = itens.reduce((a, [s, q]) => a + bySlug(s).preco * q, 0);
  const linhas = itens.map(([s, q]) => `• ${q}x ${bySlug(s).curto} (${brl(bySlug(s).preco * q)})${bySlug(s).link ? "\n" + bySlug(s).link : ""}`).join("\n");
  const texto = `Olá! Tenho interesse nestas peças da Uau! Lab:\n${linhas}\nSubtotal estimado: ${brl(total)}\nGostaria de confirmar as opções e os valores na Shopee.`;
  const copiou = await copiarTexto(texto);
  toast(copiou
    ? "Lista copiada! Você pode colar no chat da loja na Shopee 📋"
    : "Não foi possível copiar. Anote os itens e fale com a loja na Shopee.");
});

renderCarrinho();

// ===== Modal Produto =====
let modalSlug = null, modalQtd = 1, ultimoFoco = null;

function abrirProduto(slug) {
  const p = bySlug(slug); if (!p) return;
  modalSlug = slug; modalQtd = 1; ultimoFoco = document.activeElement;
  $("#m-tag").textContent = CATS[p.cat] ? CATS[p.cat].nome : (p.ejetor ? "Moldes & Ejetores" : "Impressão 3D");
  $("#m-title").textContent = p.nome;
  $("#m-price").innerHTML = priceHTML(p);
  $("#m-desc").textContent = p.desc;
  $("#m-qty").textContent = 1;
  $("#m-shopee").href = p.link || LOJA.shopee;
  $("#m-shopee").textContent = p.link ? "Comprar este produto na Shopee ↗" : "Abrir nossa loja na Shopee ↗";
  $("#m-purchase-note").textContent = p.link
    ? (p.cat === "numeros" ? "Escolha o número no anúncio da Shopee. Confira preço final, quantidade e frete por lá." : "Confira cores, disponibilidade, preço final e frete no anúncio da Shopee.")
    : "Na Shopee, procure por: " + p.nome + ". Confira cores, preço final e frete por lá.";

  // Renderizar especificações dinâmicas
  const specsEl = $("#m-specs");
  if (specsEl) {
    const specsList = p.specs || (p.cat === "isqueiros" ? [
      "Compatível com isqueiro BIC Maxi tradicional",
      "Impressão 3D em alta resolução com textura tátil",
      "Material rígido e durável (PLA Premium)",
      "Encaixe firme, não solta no bolso"
    ] : [
      "2 peças: carimbo com relevo + cortador deslizante",
      "Confira as medidas e os cuidados de uso no anúncio",
      "Serve para doces, massas, pasta americana e biscoitos"
    ]);
    specsEl.innerHTML = specsList.map(s => `<li>${s}</li>`).join("");
  }

  // Seletor de variação para os números (0 a 9)
  const varBox = $("#m-variations");
  const varBtns = $("#m-var-btns");
  if (varBox && varBtns) {
    const isNumero = slug.startsWith("ejetor-numero");
    if (isNumero) {
      varBox.hidden = false;
      const currentNum = slug === "ejetor-numeros" ? null : slug.replace("ejetor-numero-", "");
      varBtns.innerHTML = Array.from({ length: 10 }, (_, i) => {
        const active = currentNum === String(i) ? "is-on" : "";
        return `<button type="button" class="var-btn ${active}" data-setnum="${i}">${i}</button>`;
      }).join("");
      varBtns.querySelectorAll(".var-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          abrirProduto(`ejetor-numero-${btn.dataset.setnum}`);
        });
      });
    } else {
      varBox.hidden = true;
    }
  }

  // Galeria de miniaturas
  const setImg = n => {
    $("#m-img").src = foto(slug, n);
    $("#m-img").alt = `${p.curto}, foto ${n}`;
    [...$("#m-thumbs").children].forEach((b, i) => b.classList.toggle("is-on", i + 1 === n));
  };
  $("#m-thumbs").innerHTML = Array.from({ length: p.fotos }, (_, i) =>
    `<button aria-label="Foto ${i + 1}"><img src="${foto(slug, i + 1)}" alt="" /></button>`).join("");
  [...$("#m-thumbs").children].forEach((b, i) => b.addEventListener("click", () => setImg(i + 1)));
  $("#m-thumbs").hidden = p.fotos < 2;
  setImg(1);
  abrir("#modal");
}

$("#m-minus").addEventListener("click", () => { modalQtd = Math.max(1, modalQtd - 1); $("#m-qty").textContent = modalQtd; });
$("#m-plus").addEventListener("click", () => { modalQtd++; $("#m-qty").textContent = modalQtd; });
$("#m-add").addEventListener("click", () => { adicionar(modalSlug, modalQtd); fechar("#modal"); abrir("#cart"); });

// ===== Overlays (Modal & Drawer) =====
function abrir(sel) {
  const el = $(sel);
  el.hidden = false;
  document.body.style.overflow = "hidden";
  const m = el.querySelector(".modal");
  if (m) { m.scrollLeft = 0; m.scrollTop = 0; }
  el.querySelector(".close")?.focus?.();
}
function fechar(sel) {
  $(sel).hidden = true;
  if (document.querySelectorAll(".overlay:not([hidden])").length === 0) document.body.style.overflow = "";
  ultimoFoco?.focus?.();
}
document.querySelectorAll(".overlay").forEach(o => o.addEventListener("click", e => {
  if (e.target === o || e.target.closest("[data-close]")) fechar("#" + o.id);
}));
document.addEventListener("keydown", e => {
  if (e.key === "Tab") {
    const overlay = document.querySelector(".overlay:not([hidden])");
    if (overlay) {
      const controls = [...overlay.querySelectorAll('button:not([disabled]), a[href], input:not([disabled])')].filter(el => el.getClientRects().length);
      const first = controls[0], last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
    }
  }
  if (e.key === "Escape") document.querySelectorAll(".overlay:not([hidden])").forEach(o => fechar("#" + o.id));
});
$("#cart-btn").addEventListener("click", () => { ultimoFoco = $("#cart-btn"); abrir("#cart"); });

// Cliques delegados
document.addEventListener("click", e => {
  const open = e.target.closest("[data-open]");
  const add = e.target.closest("[data-add]");
  const go = e.target.closest("[data-go]");
  const sc = e.target.closest("[data-scroll]");
  if (add) return adicionar(add.dataset.add);
  if (open) return abrirProduto(open.dataset.open);
  if (go) { e.preventDefault(); fecharMenu(); return irPara(go.dataset.go); }
  if (sc) {
    const el = document.getElementById(sc.dataset.scroll);
    if (el) el.scrollBy({ left: el.clientWidth * 0.8 * sc.dataset.dir, behavior: "smooth" });
  }
  if (e.target.closest(".menu a")) fecharMenu();
});

function fecharMenu() {
  $("#menu").classList.remove("is-open");
  $("#menu-btn").setAttribute("aria-expanded", "false");
}
$("#menu-btn")?.addEventListener("click", () => {
  const aberto = $("#menu").classList.toggle("is-open");
  $("#menu-btn").setAttribute("aria-expanded", String(aberto));
});

// WhatsApp configurado
if (LOJA.whatsapp) {
  const wa = `https://wa.me/${LOJA.whatsapp}`;
  const floatChat = $("#float-chat");
  if (floatChat) { floatChat.href = wa; floatChat.classList.add("is-wa"); }
  const waFooter = $("#wa-footer");
  if (waFooter) { waFooter.href = wa; waFooter.hidden = false; }
}

// ===== Toast =====
let toastT;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("is-on"), 2600);
}
