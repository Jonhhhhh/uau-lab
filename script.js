// ===== Uau! Lab - Configuração da loja =====
const LOJA = {
  nome: "Uau! Lab",
  shopee: "https://shopee.com.br/ga2raojrxe",
  instagram: "https://www.instagram.com/uaulab3d/",
  facebook: "https://www.facebook.com/share/1PauAL9Crs/?mibextid=wwXIfr",
  whatsapp: "" // ex.: "5511999998888". Vazio = compra direcionada para a Shopee
};

// Produtos do catálogo Uau! Lab: Capas de Isqueiro 3D, Moldes & Ejetores e Personalizados
const PRODUTOS = [
  // === CAPAS DE ISQUEIRO 3D ===
  {
    slug: "capa-isqueiro-aranha",
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
      "Visual exclusivo e moderno",
      "🚚 Frete Grátis para todo o Brasil"
    ]
  },
  {
    slug: "capa-isqueiro-ceifador",
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
      "Encaixe firme que não solta no bolso",
      "🚚 Frete Grátis para todo o Brasil"
    ]
  },

  // === UTILIDADES & SUPORTES 3D ===
  {
    slug: "organizador-cabos-oreo",
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
      "Estrutura reforçada em impressão 3D de alta densidade",
      "🚚 Frete Grátis para todo o Brasil"
    ]
  },
  {
    slug: "suporte-celular",
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
      "Design minimalista e resistente impresso em 3D",
      "🚚 Frete Grátis para todo o Brasil"
    ]
  },
  {
    slug: "suporte-banco-carro",
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
      "Construção 3D reforçada suporta peso sem deformar",
      "🚚 Frete Grátis para todo o Brasil"
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
      "Material atóxico de confeitaria, lavável à mão"
    ]
  },

  // === KITS PROMOCIONAIS DE MOLDES ===
  {
    slug: "kit-natal",
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
  { slug: "ejetor-numero-1", nome: "Modelador Ejetor Número 1 para Brigadeiro e Doces", curto: "Número 1", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, destaque: false, desc: "O mais pedido para comemorar 1º aninho, mesversários e datas especiais! Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-0", nome: "Modelador Ejetor Número 0 para Brigadeiro e Doces", curto: "Número 0", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário ou idade com o número 0 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-2", nome: "Modelador Ejetor Número 2 para Brigadeiro e Doces", curto: "Número 2", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 2 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-3", nome: "Modelador Ejetor Número 3 para Brigadeiro e Doces", curto: "Número 3", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 3 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-4", nome: "Modelador Ejetor Número 4 para Brigadeiro e Doces", curto: "Número 4", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 4 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-5", nome: "Modelador Ejetor Número 5 para Brigadeiro e Doces", curto: "Número 5", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 5 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-6", nome: "Modelador Ejetor Número 6 para Brigadeiro e Doces", curto: "Número 6", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 6 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-7", nome: "Modelador Ejetor Número 7 para Brigadeiro e Doces", curto: "Número 7", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 7 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-8", nome: "Modelador Ejetor Número 8 para Brigadeiro e Doces", curto: "Número 8", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 8 em relevo nítido. Carimbo + cortador em 3,5 cm." },
  { slug: "ejetor-numero-9", nome: "Modelador Ejetor Número 9 para Brigadeiro e Doces", curto: "Número 9", cat: "numeros", ejetor: true, preco: 18, de: 20, fotos: 2, desc: "Docinho de aniversário com o número 9 em relevo nítido. Carimbo + cortador em 3,5 cm." },

  // === MOLDES AVULSOS (TEMAS & NATAL) ===
  { slug: "coracao", nome: "Modelador Ejetor Coração para Brigadeiro e Doces", curto: "Ejetor Coração", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, destaque: true, desc: "O clássico romântico. Perfeito para Dia dos Namorados, Dia das Mães, casamentos e chás." },
  { slug: "flor", nome: "Modelador Ejetor Flor para Brigadeiro e Doces", curto: "Ejetor Flor", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Pétalas em relevo para docinhos delicados em lembrancinhas e festas de primavera." },
  { slug: "estrela", nome: "Modelador Ejetor Estrela para Brigadeiro e Doces", curto: "Ejetor Estrela", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Estrela de cinco pontas com relevo definido, ótima para aniversários e celebrações." },
  { slug: "coroa", nome: "Modelador Ejetor Coroa para Brigadeiro e Doces", curto: "Ejetor Coroa", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "Para festas de princesas, príncipes, reis e rainhas. Sucesso garantido em festas infantis." },
  { slug: "bola-futebol", nome: "Modelador Ejetor Bola de Futebol para Doces", curto: "Ejetor Futebol", cat: "ejetores", ejetor: true, preco: 18, de: 20, fotos: 1, desc: "O docinho dos campeões. Ideal para aniversários com tema de futebol e dias de jogo." },
  { slug: "arvore-natal", nome: "Modelador Ejetor Árvore de Natal para Doces", curto: "Árvore de Natal", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Docinho natalino com árvore em relevo delicado. Ótimo para caixas de presente e ceia." },
  { slug: "gorro-papai-noel", nome: "Modelador Ejetor Gorro do Papai Noel para Doces", curto: "Gorro Papai Noel", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "O gorro natalino em alto relevo. Fica incrível na mesa de doces de fim de ano." },
  { slug: "sino-natal", nome: "Modelador Ejetor Sino de Natal para Doces", curto: "Sino de Natal", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Sino com laço em relevo no doce para dar o toque tradicional das festas." },
  { slug: "floco-de-neve", nome: "Modelador Ejetor Floco de Neve para Doces", curto: "Floco de Neve", cat: "natal", ejetor: true, preco: 18, de: 20, fotos: 1, natal: true, desc: "Floco detalhado, elegante e geométrico. Serve para Natal e festas de inverno (Frozen)." },
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
    `<span class="flag flag--free">🚚 FRETE GRÁTIS</span>`,
    p.novo ? `<span class="flag flag--new">⚡ NOVO</span>` : "",
    off ? `<span class="flag flag--off">${off}% OFF</span>` : "",
    p.cat === "isqueiros" ? `<span class="flag flag--tag">BIC MAXI</span>` : "",
    p.cat === "utilidades" ? `<span class="flag flag--tag">SETUP 3D</span>` : "",
    p.natal && p.cat !== "kits" ? `<span class="flag flag--natal">NATAL</span>` : ""
  ].filter(Boolean).join("");

  return `
    <article class="card" data-slug="${p.slug}" data-cat="${p.cat}">
      <div class="card__img" data-open="${p.slug}">
        <img src="${foto(p.slug, 1)}" alt="${p.curto}" loading="lazy" />
        ${p.fotos > 1 ? `<img src="${foto(p.slug, 2)}" alt="${p.curto}" loading="lazy" />` : ""}
      </div>
      <div class="card__body">
        ${flags ? `<div class="card__flags">${flags}</div>` : ""}
        <h3 class="card__name" data-open="${p.slug}">${p.nome}</h3>
        <div class="price">${priceHTML(p)}</div>
        <button class="card__buy" data-add="${p.slug}">Comprar</button>
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
$("#destaques").innerHTML = PRODUTOS.filter(p => p.destaque).map(cardHTML).join("");

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

// ===== Carrossel Hero =====
const track = $("#hero-track");
const slides = track ? track.children.length : 0;
let atual = 0, timer;
if (track && slides > 0) {
  $("#hero-dots").innerHTML = Array.from({ length: slides }, (_, i) => `<button aria-label="Banner ${i + 1}"></button>`).join("");
  const dots = [...$("#hero-dots").children];

  function goSlide(i) {
    atual = (i + slides) % slides;
    track.style.transform = `translateX(-${atual * 100}%)`;
    dots.forEach((d, k) => d.classList.toggle("is-on", k === atual));
    clearInterval(timer);
    timer = setInterval(() => goSlide(atual + 1), 6000);
  }

  dots.forEach((d, i) => d.addEventListener("click", () => goSlide(i)));
  $("#hero-prev")?.addEventListener("click", () => goSlide(atual - 1));
  $("#hero-next")?.addEventListener("click", () => goSlide(atual + 1));

  let toqueX = null;
  track.addEventListener("touchstart", e => { toqueX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", e => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 40) goSlide(atual + (dx < 0 ? 1 : -1));
    toqueX = null;
  });
  goSlide(0);
}

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
      <button class="rm" data-rm="${s}">remover</button>
    </div>`;
  }).join("") : `<p class="drawer__empty">Seu carrinho está vazio ✨<br>Escolha suas criações em 3D!</p>`;
  $("#checkout-note").textContent = LOJA.whatsapp
    ? "Você será direcionado(a) ao WhatsApp com seu pedido pronto."
    : "A compra é concluída com total segurança na nossa loja oficial da Shopee.";
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
  toast(`${bySlug(slug).curto} adicionado ao carrinho! 🛒`);
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

$("#checkout").addEventListener("click", () => {
  const itens = Object.entries(carrinho);
  const total = itens.reduce((a, [s, q]) => a + bySlug(s).preco * q, 0);
  const linhas = itens.map(([s, q]) => `• ${q}x ${bySlug(s).curto} (${brl(bySlug(s).preco * q)})`).join("\n");
  const texto = `Olá! Quero fazer este pedido na Uau! Lab:\n${linhas}\nTotal: ${brl(total)}`;

  if (LOJA.whatsapp) {
    window.open(`https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  } else {
    navigator.clipboard?.writeText(texto).catch(() => {});
    window.open(LOJA.shopee, "_blank", "noopener");
    toast("Lista copiada! Abrindo nossa loja na Shopee 📋");
  }
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
      "Padronizado em 3,5 cm (tamanho perfeito para brigadeiro)",
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
  if (go) { e.preventDefault(); $("#menu")?.classList.remove("is-open"); return irPara(go.dataset.go); }
  if (sc) {
    const el = document.getElementById(sc.dataset.scroll);
    if (el) el.scrollBy({ left: el.clientWidth * 0.8 * sc.dataset.dir, behavior: "smooth" });
  }
  if (e.target.closest(".menu a")) $("#menu")?.classList.remove("is-open");
});

$("#menu-btn")?.addEventListener("click", () => $("#menu")?.classList.toggle("is-open"));

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
