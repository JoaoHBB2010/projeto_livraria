 const produtos = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    resenha:
      'Um livro sobre boas práticas de programação, escrita de código limpo e melhoria da qualidade de software.',
    preco: 129.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    categoria: ''
  },
  {
    id: 2,
    titulo: 'The Pragmatic Programmer',
    autor: 'Andrew Hunt e David Thomas',
    resenha:
      'Uma obra clássica sobre postura profissional, organização e boas práticas no desenvolvimento de software.',
    preco: 149.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg',
    categoria: ''
  },
  {
    id: 3,
    titulo: 'Eloquent JavaScript',
    autor: 'Marijn Haverbeke',
    resenha:
      'Uma introdução prática à linguagem JavaScript, com exemplos e conceitos fundamentais para desenvolvimento web.',
    preco: 89.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
    categoria: ''
  },
  {
    id: 4,
    titulo: "You Don't Know JS Yet",
    autor: 'Kyle Simpson',
    resenha: 'Livro voltado ao aprofundamento dos principais conceitos da linguagem JavaScript.',
    preco: 79.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781091210092-L.jpg',
    categoria: ''
  },
  {
    id: 5,
    titulo: 'Design Patterns',
    autor: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides',
    resenha:
      'Livro clássico sobre padrões de projeto e soluções reutilizáveis para problemas comuns de software.',
    preco: 159.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg',
    categoria: ''
  },
  {
    id: 6,
    titulo: 'Introduction to Algorithms',
    autor: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein',
    resenha: 'Referência ampla sobre algoritmos, estruturas de dados e análise de complexidade.',
    preco: 199.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg',
    categoria: ''
  },
  {
    id: 7,
    titulo: 'Refactoring',
    autor: 'Martin Fowler',
    resenha:
      'Apresenta técnicas para melhorar a estrutura interna do código sem alterar seu comportamento externo.',
    preco: 139.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg',
    categoria: ''
  },
  {
    id: 8,
    titulo: 'HTML and CSS',
    autor: 'Jon Duckett',
    resenha: 'Livro introdutório e visual sobre construção de páginas web com HTML e CSS.',
    preco: 99.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781118008188-L.jpg',
    categoria: ''
  },
  {
    id: 9,
    titulo: 'Cibersegurança para Iniciantes',
    autor: 'Igor Doin',
    resenha: 'Este livro é um guia para iniciar e impulsionar sua carreira em cybersegurança',
    preco: 24.9,
    capa: 'https://m.media-amazon.com/images/I/61sdMvXKMFL._SL1000_.jpg',
    categoria: ''
  },
  {
    id: '10',
    titulo: 'Use a Cabeça Java – 3ª Edição: guia do aprendiz para programação no mundo real',
    autor: 'Kathy Slerra e Bert Bates',
    resenha: 'O “Use a Cabeça Java” é uma experiência completa de aprendizado em Java e programação orientada a objetos. Com este livro, você aprenderá a linguagem Java de um jeito único, que ultrapassa os manuais de instruções, ajudando-o a se tornar um programador excelente.',
    preco: 115.9,
    capa: 'https://m.media-amazon.com/images/I/610D1O8WWOL._SL1426_.jpg',
    categoria: ''
  },
  {
    id: '11',
    titulo: 'Economia: modo de usar: Um guia básico dos principais conceitos econômicos',
    autor: 'Ha-Joon Chang',
    resenha: 'De maneira irreverente e sagaz e com um conhecimento histórico profundo, Ha-Joon Chang apresenta um acessível manual que explica como a economia global realmente funciona.',
    preco: 78.6,
    capa: 'https://m.media-amazon.com/images/I/81f+NABZkzL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: '12',
    titulo: 'Por que as nações fracassam: As origens do poder, da prosperidade e da pobreza - Prêmio Nobel de Economia 2024',
    autor: 'Daron Acemoglu & James A. Robinson',
    resenha: 'Nesse clássico moderno da economia e das ciências humanas, Daron Acemoglu e James A. Robinson investigam a história de civilizações separadas tanto pelo tempo quanto pela geografia para responder a uma questão que há séculos intriga os estudiosos: por que algumas nações são ricas e outras são pobres?',
    preco: 139.9,
    capa: 'https://m.media-amazon.com/images/I/71HuxbH0adL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: '13',
    titulo: 'Macroeconomia',
    autor: 'N. Gregory Mankiw',
    resenha: 'Best-seller da área de Economia, Macroeconomia , de Mankiw, chega à 12 a edição como referência consolidada para estudantes que precisam aprender sobre o tema de maneira consistente. O autor – um dos economistas mais respeitados do mundo – diferencia-se principalmente por sua linguagem única, que aproxima teoria e prática com aplicações cotidianas. ',
    preco: 307,
    capa: 'https://m.media-amazon.com/images/I/81sS+Z41DhL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: '14',
    titulo: 'Finanças Públicas - Teoria e Prática no Brasil',
    autor: 'Fabio Fabio Glambiagi',
    resenha: 'O livro parte de uma resenha da teoria das finanças públicas e dos conceitos básicos relevantes para o caso brasileiro, fazendo um apanhado histórico-institucional e analítico dos principais problemas fiscais das últimas décadas no Brasil. Além disso, discute questões relevantes, como o sistema tributário, a situação da Previdência Social, a dinâmica da dívida pública, o federalismo e outros temas.',
    preco: 363,
    capa: 'https://m.media-amazon.com/images/I/81hixAn-oQL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: '15',
    titulo: 'Microeconomia - Uma Abordagem Moderna',
    autor: 'Hal Hal Varian',
    resenha: 'Microeconomia, de Hal Varian, apresenta aos estudantes e pesquisadores o mais atual e abrangente estudo sobre a microeconomia de forma didática, possibilitando um aprendizado analítico e ao mesmo tempo profundo e com ampla variedade de tópicos. Segundo o autor, seu principal objetivo é apresentar um tratamento diferenciado do estudo da Microeconomia de forma a permitir que seu leitor possa aplicar as ferramentas teóricas em suas atividades profissionais.',
    preco: 432,
    capa: 'https://m.media-amazon.com/images/I/81n76TZJv1L._SY342_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: '16',
    titulo: 'O livro da biologia',
    autor: 'Vários',
    resenha: 'Escrito em linguagem simples e acessível, O livro da biologia é ricamente composto por infográficos, ilustrações e textos atraentes. A obra é fundamental e envolvente tanto para curiosos no assunto quanto para os estudantes mais entusiasmados.',
    preco: 94.9,
    capa: 'https://m.media-amazon.com/images/G/32/apparel/rcxgs/tile._CB483369971_.gif',
    categoria: 'Biologia'
  },
  {
    id: '17',
    titulo: 'Fungos: uma Introdução à Biologia, Bioquímica e Biotecnologia',
    autor: 'Elisa Esposito e João Lúcio de Azevedo',
    resenha: 'Esta obra apresenta aspectos referentes à estrutura e à ultraestrutura dos fungos; sua taxonomia, fisiologia, bioquímica, genética, ecologia, seu metabolismo e potencial biotecnológico, caracterizando e exemplificando a grande importância desses seres, especialmente no equilíbrio e na recuperação ambiental. Aos leitores, o incentivo para o aprendizado, e a valorização desse fascinante grupo constitui o Reino dos Fungos.',
    preco: 78,
    capa: 'https://m.media-amazon.com/images/I/71W2HTS6wLL._SL1500_.jpg',
    categoria: 'Biologia'
  },
  {
    id: '18',
    titulo: 'Princípios de Bioquímica de Lehninger',
    autor: 'David L. Nelson & Michael M. Cox',
    resenha: 'Passados mais de 50 anos, Princípios de bioquímica de Lehninger  continua inigualável na proposta de ajudar estudantes a navegarem pela complexa disciplina de bioquímica de maneira clara e coerente. Esta 8ª edição traz uma novidade pedagógica que está presente no próprio título do livro: os princípios mais importantes da bioquímica agora são declarados de forma mais didática e visual na primeira página de cada capítulo. Identificados com um ícone numerado, os princípios aparecem também ao longo do texto e destacam conteúdos relacionados, criando uma estrutura de organização lógica que facilita a compreensão e esclarece as conexões entre os conceitos.  ',
    preco: 624,
    capa: 'https://m.media-amazon.com/images/I/A1Z39J5idiL._SL1500_.jpg',
    categoria: 'Biologia'
  },
  {
    id: '19',
    titulo: 'O livro do direito',
    autor: 'Vários',
    resenha: 'Escrito em linguagem simples e acessível, O livro do direito é ricamente composto por infográficos, ilustrações e textos atraentes. A obra é fundamental e envolvente tanto para curiosos no assunto quanto para os estudantes mais entusiasmados. O título faz parte da coleção best-seller As Grandes Ideias de Todos os Tempos que tem mais de 20 títulos publicados pela Globo Livros e assuntos tão diversos como química, filosofia, mitologia, psicologia, economia, sociologia e história, entre tantos outros. O livro do direito explora diversos jargões jurídicos, além de mostrar os principais marcos da história das leis e como elas estão presentes no nosso dia a dia. Fluxogramas destrincham passo a passo teorias complexas, diagramas desmistificam conceitos espinhosos. Este livro detalha precedentes legais e religiosos, morais e códigos políticos que moldaram o mundo em que vivemos.',
    preco: 94.9,
    capa: 'https://m.media-amazon.com/images/I/A1M92zOBz1L._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: '20',
    titulo: 'Curso de Direito Financeiro Brasileiro - 9ª Edição 2026',
    autor: 'Marcus Abraham',
    resenha: 'O conhecimento dos elementos jurídicos que envolvem o Direito Financeiro – competências financeiras, receitas e despesas públicas, crédito público, técnicas de contabilidade pública, normas orçamentárias e de responsabilidade fiscal – é de suma importância para todo profissional da área ou aluno de graduação ou de pós-graduação, seja de Direito, Administração, Economia, ou de disciplinas conexas. O objetivo deste Curso de Direito Financeiro Brasileiro, portanto, é oferecer uma visão geral do tema, a partir de um conteúdo de fácil consulta. Cumpre esclarecer que o estudo do Direito Financeiro evoluiu e constitucionalizou-se. Hoje, engloba questões relacionadas à efetivação da justiça fiscal. Preocupa-se com a maneira mais equitativa de arrecadação, especialmente na sua fonte tributária. Desenvolve os mecanismos de gestão do Erário, que passam a se pautar em normas de governança pública, direcionando sua atuação por medidas que se parametrizam pela moralidade, ética, transparência, eficiência e responsabilidade. Impõe aos gastos públicos novas formas de controle, a fim de observar o melhor interesse da coletividade, atribuindo ao gestor da coisa pública a responsabilização por seus atos e decisões em sua administração.',
    preco: 234,
    capa: 'https://m.media-amazon.com/images/I/71PzKkNNtcL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: '21',
    titulo: 'Direito Internacional Público e Privado (2026) juspodivm',
    autor: 'Paulo Henrique Gonçalves Portela',
    resenha: ' São muitos os desafios a enfrentar num mundo ainda tão marcado por certa instabilidade, mas também pela interdependência. Com isso entendemos que é premente a necessidade de conhecermos bem os parâmetros jurídicos que visam a regular a complexa teia das relações internacionais e de todos os laços humanos e institucionais que efetivamente perpassem as fronteiras nacionais. É nesse ponto que entram o Direito Internacional Público e o Direito Internacional Privado em todos os seus ramos, inclusive aquele dedicado à proteção dos Direitos Humanos, como referências de como deve funcionar a ordem internacional de modo a permitir a convivência na sociedade internacional dentro do marco de valores aos quais a humanidade, no decorrer de um longo processo histórico, vem decidindo atribuir maior importância.',
    preco: 199.4,
    capa: 'https://m.media-amazon.com/images/I/51vLP4anlcL.jpg',
    categoria: 'Direito'
  },
  {
    id: '22',
    titulo: 'Curso de Direito Constitucional',
    autor: 'Luiz Alberto David Araujo',
    resenha: 'Curso de direito constitucional chega à 24ª edição reafirmando seu compromisso com a clareza, a profundidade e a atualização permanente. Resultado da sólida experiência acadêmica e profissional de seus autores, a obra foi concebida como instrumento seguro de formação, reflexão crítica e consulta qualificada para estudantes, professores e operadores do Direito.',
    preco: 185,
    capa: 'https://m.media-amazon.com/images/I/71n5NOCjk3L._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: '23',
    titulo: 'Curso de direito administrativo',
    autor: 'Celso Antônio Bandeira de Mello',
    resenha: 'Nesta nova edição, prosseguimos indicando aos leitores as passagens da obra que são de autoria exclusiva ou elaboradas em coautoria com Weida Zancaner, Carolina Zancaner Zockun e Maurício Zockun, professores de Direito Administrativo na PUC-SP. Deste modo, as passagens acrescidas estão lançadas na obra em fonte diversa daquela utilizada no texto original, permitindo que o leitor identifique nitidamente os trechos escritos por Celso Antônio Bandeira de Mello, sem confundi-los com aqueles elaborados pelos demais coautores. Empreendemos adaptações, atualizações e aprimoramentos, com especial destaque nos Capítulos IV, V, IX, XII, XIII e XVIII, que versam sobre os temas de figuras da administração indireta, agentes públicos, licitação, concessões e permissões de servidores',
    preco: 285,
    capa: 'https://m.media-amazon.com/images/I/81LRKoUUHAL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: '24',
    titulo: '',
    autor: '',
    resenha: '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '25',
    titulo: '',
    autor: '',
    resenha: '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '26',
    titulo: '',
    autor: '',
    resenha: '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '27',
    titulo: '',
    autor: '',
    resenha: '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '28',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '29',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '30',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '31',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '32',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '33',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '34',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '35',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '36',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '37',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '38',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '39',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '41',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '42',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '43',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '44',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
  {
    id: '45',
    titulo: '',
    autor: '',
    resenha '',
    preco: ,
    capa: '',
    categoria: ''
  },
]
