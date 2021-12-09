import { avaliacao } from "./avaliacao"

export const produto = [

 
  {
    id: 1,
    id_loja: 1,
    categoria: 10,
    foto_produto: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nome: "Relógio digital",
    descricao: "",
    caracteristicas: [
      'Relógio LED digital',
    ],
    preco: 159.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 1),
  },
  {
    id: 2,
    id_loja: 1,
    categoria: 1,
    foto_produto: 'https://images.unsplash.com/photo-1623394088867-503931dff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    nome: "Capa de celular ",
    descricao: "",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 10.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 2),
  },


  {
    id: 3,
    categoria: 1,
    foto_produto: 'https://image.freepik.com/free-photo/powerbank-cellphone-wooden-table_1387-601.jpg',
    id_loja: 1,
    nome: "Carregador portátil",
    descricao: "",
    caracteristicas: [
      'Carregador portátil branco',
    ],
    preco: 159.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 3),
  },

  {
    id: 4,
    id_loja: 2,
    categoria: 1,
    foto_produto: 'https://www.larshopping.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/5/a/5a82e0e3979b3fa0ed54206b631a2fa6.jpg',
    nome: "Mesa de centro",
    descricao: "Boa pra você que é hipster e  quer pagar de rico (porque normamelmente pra você ter uma capinha dessas tem que ser mesmo). Vem nas cores: transparente.",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 203.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 4),
  },
  {
    id: 5,
    id_loja: 2,
    categoria: 4,
    foto_produto: 'https://images.pexels.com/photos/5417622/pexels-photo-5417622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nome: "Kit agendas e caderno",
    descricao: "",
    caracteristicas: [
      'Agenda diária',
      'Agenda permanente',
      'Caderno de anotações folhas lisas',
    ],
    preco: 23.50,
    avaliacoes: avaliacao.filter(a => a.id_produto === 5),
  },
  {
    id: 6,
    id_loja: 8,
    categoria: 4,
    foto_produto: 'https://static.giulianaflores.com.br/images/product/29202gg.jpg?ims=750x750',
    nome: "Barra de chocolate Milka",
    descricao: "",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 9.40,
    avaliacoes: avaliacao.filter(a => a.id_produto === 6),
  },
  {
    id: 7,
    id_loja: 4,
    categoria: 4,
    foto_produto: 'https://www.drogariavenancio.com.br/arquivos/ids/783237-1000-1000/73195_Z.jpg?v=637341590264830000',
    nome: "Kit Nivea verão",
    descricao: "",
    caracteristicas: [
      '“Protetor solar FPS70 200ml',
      'Hidratante de FPS60 50ml',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 35.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 7),
  },
  {
    id: 8,
    categoria: 5,
    foto_produto: 'https://miroa.com.br/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/d/s/dsc00134_1_.jpg',
    id_loja: 5,
    nome: "Calça de linho branco",
    descricao: "Calça de linho com detalhe de amarração na perna Miroa",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 70.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 8),
  },
  {
    id: 9,
    categoria: 3,
    foto_produto: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/395474-320-320/agua-micelar-solucao-de-limpeza-facial-5-em-1-l-oreal-paris-demaquilante--2-.jpg?v=637296600284300000',
    id_loja: 5,
    nome: "Água micelar",
    descricao: "Solução de limpeza facial 5 em 1 L'Oreal Paris",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 18.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 9),
  },
  {
    id: 10,
    id_loja: 6,
    categoria: 9,
    foto_produto: 'https://www.bazardosaara.com.br/image/cache/data/7866889923761a-1150x850h.jpg',
    nome: "Mini seladora de embalagens",
    descricao: "",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 4.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 10),
  },
  {
    id: 11,
    id_loja: 1,
    categoria: 2,
    foto_produto: 'https://img.kalunga.com.br/fotosdeprodutos/443882z_1.jpg',
    nome: "Suporte para smartphone",
    descricao: "",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 25.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 11),
  },
  {
    id: 12,
    id_loja: 7,
    categoria: 8,
    foto_produto: 'https://http2.mlstatic.com/D_NQ_NP_851881-MLB45666491975_042021-W.jpg',
    nome: "Jogo de panelas Antiaderente",
    descricao: "",
    caracteristicas: [
      '“Protege” o celular',
      'Deixa bonito (na teoria)',
      'Ecologicamente correta(deixe longe da sua tartaruga)',
      'Previne riscos ta tela(se você usar do jeito errado)',
      'Não tem furo para o fone de ouvido(ótimo para ouvir áudio em público)',
      'Tem espaço para a câmera(se você usar do jeito certo, obviamente)',
    ],
    preco: 280.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 12),
  },

  {
    id: 13,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://i.pinimg.com/564x/4d/9c/56/4d9c56933103d1850f443860b02f002d.jpg',
    nome: "Sorvete morango e baunilha",
    descricao: "Sorvete com pedaços de morango e baunilha",
    caracteristicas: [
      'Clássico sorvete com pedaços de morango e baunilha, uma explosão de sabores e doçura',
    ],
    preco: 7.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 13),
  },

  {
    id: 14,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://images.pexels.com/photos/5061023/pexels-photo-5061023.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    nome: "Sorvete de chocolate",
    descricao: "Sorvete de chocolate belga",
    caracteristicas: [
      'Clássico sorvete com pedaços de chocolate e com raspas de chocolate meio amargo para um sabor equiilibrado',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 14),
  },

  {
    id: 15,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://image.freepik.com/free-photo/chocolate-vanilla-ice-cream-bowl-dessert-close-up_53876-106080.jpg',
    nome: "Sorvete doce de leite com amendoim",
    descricao: "Doçura intensa do doce de leite junto a crocância do amendoim",
    caracteristicas: [
      'Clássico sorvete de baunilha levemente adoçicado como tradição da casa ',
    ],
    preco: 5.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 15),
  },

  {
    id: 16,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://as2.ftcdn.net/v2/jpg/02/48/00/15/1000_F_248001581_g3FXiAudy3qrl0SDxqRhJQ5oURJoIPbo.jpg',
    nome: "Sorvete napolitano",
    descricao: "Sorvete napolitano",
    caracteristicas: [
      'Clássico trio napolitano sorvete de morango, creme e chocolate',
    ],
    preco: 5.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 16),
  },

  {
    id: 17,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://image.freepik.com/free-photo/homemade-cookies-with-cream-chocolate-recipe_116380-81.jpg',
    nome: "Sanduíche de Flocos",
    descricao: "Sanduíche com cookies e sorvete de flocos",
    caracteristicas: [
    'Inspirado na versão Estadunidense o "chocolate chips", a versão brasileira com raspas de chocolate com dois cookies de baunilha com gotas de chocolate'
    ],
    preco:9.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 17),
  },
  {
    id: 18,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://image.freepik.com/free-photo/belgium-waffles-with-strawberries-ice-cream-white-plate_2829-13952.jpg',
    nome: "Waffles com sorvete de baunilha",
    descricao: "",
    caracteristicas: [
      'Waffles com sorvete de baunilha acompanhado de sorvete de morangos frescos e calda de chocolate',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 18),
  },
  {
    id: 19,
    id_loja: 8,
    categoria: 8,
    foto_produto: 'https://images.pexels.com/photos/5060893/pexels-photo-5060893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    nome: "Sorvete de baunilha",
    descricao: "Sorvete de baunilha clássico",
    caracteristicas: [
      'Clássico sorvete de baunilha levemente adoçicado como tradição da casa ',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 19),
  },

  {
    id: 20,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://img.kalunga.com.br/fotosdeprodutos/031568z_1.jpg',
    nome: "Ring Light",
    descricao: "",
    caracteristicas: [
      'O Ring Light 6 é um modelo de mesa, compacto e com luzes led quentes e frias é ideal para dar um toque especial de iluminação na suas fotos ou vídeos.',
      'Um dos diferenciais deste modelo é que além de ser portátil,é ele possuir Led’s Misto, ou seja ele possui Led na cor branca (frio), e o led amarelo (quente).',
      'Pode ser controlado qual das duas opções você vai utilizar, e possui também controle da intensidade de luz você deseja para iluminar o ambiente,com a opção ainda de poder combinar o led branco e o amarelo ao mesmo tempo.',
      'Suas fotos ou vídeos vão ficar muito mais profissionais sem tomar tanto espaço do seu local de trabalho e ainda podendo ser levado com você para qualquer lugar.',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 20),
  },
  {
    id: 21,
    id_loja: 1,
    categoria:4,
    foto_produto: 'https://a-static.mlcdn.com.br/618x463/mini-caixa-caixinha-som-portatil-bluetooth-mp3-fm-sd-usb-mini-speak/prarevender/6139baa66bab11ebb0704201ac1850d6/371f1b3c02fca30fbe440ef6748ac20b.jpg',
    nome: "Mini caixa de som",
    descricao: "",
    caracteristicas: [
      'Mini Caixa Caixinha Som Portátil Bluetooth Mp3 Fm Sd Usb - Mini Speak',
      'Caixa de Som Portátil Bluetooth Mini Mp3 FM SD USB Mini Speaker Mini Caixa de Som Speaker Ws 887 com Bluetooth, FM', 
      'Entrada Micro Sd e Auxiliar Surpreenda com a Qualidade de Som Itens Inclusos 01- Caixa De Som Ws-887 01- Cabo USB',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 21),
  },

  {
    id: 22,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/600x1000/537/537651/produto/85291545/3da186ac03.jpg',
    nome: "Projetor Galaxy 360°",
    descricao: "",
    caracteristicas: [
      'Quando a luminária for conectada via USB, pode se transformar num abajur normal, removendo a tampa estelar.',
      'Ótima luminação para quartos das crianças no ambiente noturno ou festa. Enfeite em geral',
      'Perfeito para enfeitar um cômodo durante a noite.',
      'Quando a luminária for conectada via USB, pode se transformar num abajur normal, removendo a tampa estelar. Material: ABS',
      'Fonte de energia : 4x AAA- palito- (não incluso) ou cabo USB( acompanha);',
    ],
    preco: 59.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 22),
  },

  {
    id: 23,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/800x800/537/537651/produto/100994239/b0e679f45d.jpg',
    nome: "Fone bluetooth",
    descricao: "",
    caracteristicas: [
      'Principais características:',
      '- Dividir o design do corpo, pegar inicialização automática, armazenamento automaticamente desligado e cobrar',
      '- Caixa de armazenamento para fácil transporte',
      '- Tecnologia Bluetooth 5.0, chamada estéreo, redução de ruído inteligente, conexão automática, consumo de energia ultrabaixo',
      '- Operação de toque inteligente',
      '- Altifalante dinâmico de 7,2 mm, maior alcance, som mais explosivo',
      '- Pesa apenas 4,2g, corpo ultra-mini, confortável de usar',
      '- Com base de carregamento de 300 mAh para 12 horas de duração da bateria',
    ],
    preco: 89.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 23),
  },

  {
    id: 24,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/800x800/537/537651/produto/73888487/5839a75246.jpg',
    nome: "Kit luzes led adesivo",
    descricao: "",
    caracteristicas: [
      'Ideal para uso em armários, ao lado de portas, criado mudo, guarda roupas, sapateiras e onde você imaginar, é só colar onde preferir.',
      'Basta um click para acender o LED, ótimo para ambientes escuros que precisam de uma rápida iluminação.',
      'Obs: Utiliza 3 pilhas AAA (palito) - Não incluso.',
      'Fixação com fita adesiva',
      'Dimensões: 7cm de Diâmetro x 2,5 cm de altura.',
    ],
    preco: 39.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 24),
  },

  {
    id: 25,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/800x800/537/537651/produto/94957779/ad702cccc3.jpg',
    nome: "Suporte para cleular/tablet",
    descricao: "",
    caracteristicas: [
      'Suporte Ergonômico Ajustável para Celular/Tablet/ipad',
      
      'Ideal para Celulares, Tablet e Ipad.',
      'Alivia a fadiga dos ombros e do pescoço, além de deixar as mãos livres.',
      'Ajuste multi-ângulo. Este é um suporte para telefone e tablet que pode ser dobrado sem montagem. Pode ser transportado até no seu bolso.', 'Ajuste livre de vários ângulos.',
      'Por que você precisa ter o seu?',
      '- Tamanho pequeno, fácil de transportar',
      '- Dobrável cabe no bolso',
      '- Material de Alta Qualidade',
      '- Tecnologia Japonesa',
      '- Não precisa montar',
      '- É Antiderrapante',
      '- Perfeito para fazer Lives',
      '- Perfeito para Vídeo Conferências',
      '- Perfeito para Assistir Filmes e Series,',
    ],
    preco: 15.00,
    avaliacoes: avaliacao.filter(a => a.id_produto === 25),
  },

  {
    id: 26,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/800x800/537/537651/produto/91755432/3113ddc6ad.jpg',
    nome: "Cabo HDMI 20 metros",
    descricao: "Sorvete de baunilha clássico",
    caracteristicas: [
      'Cabo Hdmi 20 metros Blindado com Filtro e Malha de Nylon V.1.4 Suporte 3D Full Hd 1080 Exbom Cbx-H200CM',
      'Cabo Hdmi de 20 metros versão 1.4 com condutores banhados a ouro, protegido contra Emi, Rfi e sobrecarga, e que permite conectar aparelhos', 
      'com saída Hdmi a Tv Lcd, Tv de Plasma, Tv Led ou a outros aparelhos com entrada Hdmi.',
      'Máxima qualidade nas experiências em alta definição.',
      'E o melhor, este cabo de alta definição e qualidade possui suporte para 3D e Full Hd 1080i e 1080p.',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 26),
  },

  {
    id: 27,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/600x1000/537/537651/produto/91599285/60942e535e.jpg',
    nome: "Cabo USB V8",
    descricao: "",
    caracteristicas: [
      '-Cabo com fio de alta qualidade com carregamento e dados super rápidos, qualidade Kaidi!',

      '-Design especial, evita enrolamento e extração',
      
      '-Usando conector USB de alta qualidade, modelo interno para reforçar tempo de uso extendido. Desenho escalonado, não necessita preocupações com o envólucro do telefone',
      
      '-Fabricação com material de alta qualidade, proteção ambiental não tóxica.',
      
      '-Sentindo-se muito bem, dobra qualquer ângulo e difícil de dar nó, pucha continuamente.',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 27),
  },

  {
    id: 28,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/1000x1000/537/537651/produto/95561666/55c922b80e.jpg',
    nome: "Mini processador recarregável",
    descricao: "",
    caracteristicas: [
'      Triturador Multifuncional  Recarregável C/ Cabo Usb',

      'Esse Mini Processador Elétrico Portátil é o produto ideal para auxiliar na rapidez e no desempenho dos seus pratos no Seu Dia a Dia Na Cozinha.', 
      'Ele conta comlâminas duplas que são capazes de triturar alho, pimentas, Cebola',
      
      'CONTÉUDO DA EMBALAGEM:',
      '1 Mini Triturador ',
      
      '1 Cabo USB',
      
      'Capacidade: 180ml',
      
     ' Material: Aço Inoxidável e ABS',
    ],
    preco: 8.99,
    avaliacoes: avaliacao.filter(a => a.id_produto === 28),
  },

  {
    id: 29,
    id_loja: 1,
    categoria: 4,
    foto_produto: 'https://cdn.awsli.com.br/800x800/537/537651/produto/91758133/a6293be1c2.jpg',
    nome: "Carregador fonte universal",
    descricao: "",
    caracteristicas: [

  'Fonte de alimentação com regulagem de voltagem universal.',

  'Indicado para: Telefone sem fio, notebook, câmera fotográfica, roteador, Entre outros.',

  'Especificações Técnicas:',

  'Fonte de alimentação regulada',

  'Modelo: FNTU-MT30W6U',

  'Entrada: AC100-240V 0.25A 50/60Hz',

  'Saída: 3V 4.5V 5V 6V 7.5V 9V 12V,5V 2.1A(12W without USB output)',

  'Potência: 26W',

  '6 plugues pinos',
    ],
    preco: 215.90,
    avaliacoes: avaliacao.filter(a => a.id_produto === 29),
  },





]

