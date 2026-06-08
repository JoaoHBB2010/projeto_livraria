const produtos = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    resenha: 'Um livro sobre boas práticas de programação, escrita de código limpo e melhoria da qualidade de software.',
    preco: 129.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 2,
    titulo: 'The Pragmatic Programmer',
    autor: 'Andrew Hunt e David Thomas',
    resenha: 'Uma obra clássica sobre postura profissional, organization e boas práticas no desenvolvimento de software.',
    preco: 149.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201616224-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 3,
    titulo: 'Eloquent JavaScript',
    autor: 'Marijn Haverbeke',
    resenha: 'Uma introdução prática à linguagem JavaScript, com exemplos e conceitos fundamentais para desenvolvimento web.',
    preco: 89.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 4,
    titulo: "You Don't Know JS Yet",
    autor: 'Kyle Simpson',
    resenha: 'Livro voltado ao aprofundamento dos principais conceitos da linguagem JavaScript.',
    preco: 79.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781091210092-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 5,
    titulo: 'Design Patterns',
    autor: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides',
    resenha: 'Livro clássico sobre padrões de projeto e soluções reutilizáveis para problemas comuns de software.',
    preco: 159.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 6,
    titulo: 'Introduction to Algorithms',
    autor: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein',
    resenha: 'Referência ampla sobre algoritmos, estruturas de dados e análise de complexidade.',
    preco: 199.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 7,
    titulo: 'Refactoring',
    autor: 'Martin Fowler',
    resenha: 'Apresenta técnicas para melhorar a estrutura interna do código sem alterar seu comportamento externo.',
    preco: 139.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 8,
    titulo: 'HTML and CSS',
    autor: 'Jon Duckett',
    resenha: 'Livro introdutório e visual sobre construção de páginas web com HTML e CSS.',
    preco: 99.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781118008188-L.jpg',
    categoria: 'Programação'
  },
  {
    id: 9,
    titulo: 'Cibersegurança para Iniciantes',
    autor: 'Igor Doin',
    resenha: 'Este livro é um guia para iniciar e impulsionar sua carreira em cybersegurança.',
    preco: 24.9,
    capa: 'https://m.media-amazon.com/images/I/61sdMvXKMFL._SL1000_.jpg',
    categoria: 'Programação'
  },
  {
    id: 10,
    titulo: 'Use a Cabeça Java – 3ª Edição: guia do aprendiz para programação no mundo real',
    autor: 'Kathy Sierra e Bert Bates',
    resenha: 'O “Use a Cabeça Java” é uma experiência completa de aprendizado em Java e programação orientada a objetos. Com este livro, você aprenderá a linguagem Java de um jeito único, que ultrapassa os manuais de instruções, ajudando-o a se tornar um programador excelente.',
    preco: 115.9,
    capa: 'https://m.media-amazon.com/images/I/610D1O8WWOL._SL1426_.jpg',
    categoria: 'Programação'
  },
  {
    id: 11,
    titulo: 'Economia: modo de usar: Um guia básico dos principais conceitos econômicos',
    autor: 'Ha-Joon Chang',
    resenha: 'De maneira irreverente e sagaz e com um conhecimento histórico profundo, Ha-Joon Chang apresenta um acessível manual que explica como a economia global realmente funciona.',
    preco: 78.6,
    capa: 'https://m.media-amazon.com/images/I/81f+NABZkzL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: 12,
    titulo: 'Por que as nações fracassam: As origens do poder, da prosperidade e da pobreza - Prêmio Nobel de Economia 2024',
    autor: 'Daron Acemoglu & James A. Robinson',
    resenha: 'Nesse clássico moderno da economia e das ciências humanas, Daron Acemoglu e James A. Robinson investigam a história de civilizações separadas tanto pelo tempo quanto pela geografia para responder a uma questão que há séculos intriga os estudiosos: por que algumas nações são ricas e outras são pobres?',
    preco: 139.9,
    capa: 'https://m.media-amazon.com/images/I/71HuxbH0adL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: 13,
    titulo: 'Macroeconomia',
    autor: 'N. Gregory Mankiw',
    resenha: 'Best-seller da área de Economia, Macroeconomia , de Mankiw, chega à 12 a edição como referência consolidada para estudantes que precisam aprender sobre o tema de maneira consistente. O autor – um dos economistas mais respeitados do mundo – diferencia-se principalmente por sua linguagem única, que aproxima teoria e prática com aplicações cotidianas. ',
    preco: 307,
    capa: 'https://m.media-amazon.com/images/I/81sS+Z41DhL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: 14,
    titulo: 'Finanças Públicas - Teoria e Prática no Brasil',
    autor: 'Fabio Fabio Giambiagi',
    resenha: 'O livro parte de uma resenha da teoria das finanças públicas e dos conceitos básicos relevantes para o caso brasileiro, fazendo um apanhado histórico-institucional e analítico dos principais problemas fiscais das últimas décadas no Brasil. Além disso, discute questões relevantes, como o sistema tributário, a situação da Previdência Social, a dinâmica da dívida pública, o federalismo e outros temas.',
    preco: 363,
    capa: 'https://m.media-amazon.com/images/I/81hixAn-oQL._SL1500_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: 15,
    titulo: 'Microeconomia - Uma Abordagem Moderna',
    autor: 'Hal Varian',
    resenha: 'Microeconomia, de Hal Varian, apresenta aos estudantes e pesquisadores o mais atual e abrangente estudo sobre a microeconomia de forma didática, possibilitando um aprendizado analítico e ao mesmo tempo profundo e com ampla variedade de tópicos. Segundo o autor, seu principal objetivo é apresentar um tratamento diferenciado do estudo da Microeconomia de forma a permitir que seu leitor possa aplicar as ferramentas teóricas em suas atividades profissionais.',
    preco: 432,
    capa: 'https://m.media-amazon.com/images/I/81n76TZJv1L._SY342_.jpg',
    categoria: 'Economia & Finanças'
  },
  {
    id: 16,
    titulo: 'O livro da biologia',
    autor: 'Vários',
    resenha: 'Escrito em linguagem simples e acessível, O livro da biologia é ricamente composto por infográficos, ilustrações e textos atraentes. A obra é fundamental e envolvendo tanto para curiosos no assunto quanto para os estudantes mais entusiasmados.',
    preco: 94.9,
    capa: 'https://m.media-amazon.com/images/I/81CpGcAXKbL._SL1500_.jpg',
    categoria: 'Biologia'
  },
  {
    id: 17,
    titulo: 'Fungos: uma Introdução à Biologia, Bioquímica e Biotecnologia',
    autor: 'Elisa Esposito e João Lúcio de Azevedo',
    resenha: 'Esta obra apresenta aspectos referentes à estrutura e à ultraestrutura dos fungos; sua taxonomia, fisiologia, bioquímica, genética, ecologia, seu metabolismo e potencial biotecnológico, caracterizando e exemplificando a grande importância desses seres, especialmente no equilíbrio e na recuperação ambiental. Aos leitores, o incentivo para o aprendizado, e a valorização desse fascinante grupo constitui o Reino dos Fungos.',
    preco: 78,
    capa: 'https://m.media-amazon.com/images/I/71W2HTS6wLL._SL1500_.jpg',
    categoria: 'Biologia'
  },
  {
    id: 18,
    titulo: 'Princípios de Bioquímica de Lehninger',
    autor: 'David L. Nelson & Michael M. Cox',
    resenha: 'Passados mais de 50 anos, Princípios de bioquímica de Lehninger continua inigualável na proposta de ajudar estudantes a navegarem pela complexa disciplina de bioquímica de maneira clara e coerente. Esta 8ª edição traz uma novidade pedagógica que está presente no próprio título do livro: os princípios mais importantes da bioquímica agora são declarados de forma mais didática e visual na primeira página de cada capítulo.',
    preco: 624,
    capa: 'https://m.media-amazon.com/images/I/A1Z39J5idiL._SL1500_.jpg',
    categoria: 'Biologia'
  },
  {
    id: 19,
    titulo: 'O livro do direito',
    autor: 'Vários',
    resenha: 'Escrito em linguagem simples e acessível, O livro do direito é ricamente composto por infográficos, ilustrações e textos atraentes. A obra é fundamental e envolvente tanto para curiosos no assunto quanto para os estudantes mais entusiasmados.',
    preco: 94.9,
    capa: 'https://m.media-amazon.com/images/I/A1M92zOBz1L._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 20,
    titulo: 'Curso de Direito Financeiro Brasileiro - 9ª Edição 2026',
    autor: 'Marcus Abraham',
    resenha: 'O conhecimento dos elementos jurídicos que envolvem o Direito Financeiro – competências financeiras, receitas e despesas públicas, crédito público, técnicas de contabilidade pública, normas orçamentárias e de responsabilidade fiscal – é de suma importância para todo profissional da área ou aluno de graduação ou de pós-graduação.',
    preco: 234,
    capa: 'https://m.media-amazon.com/images/I/71PzKkNNtcL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 21,
    titulo: 'Direito Internacional Público e Privado (2026) juspodivm',
    autor: 'Paulo Henrique Gonçalves Portela',
    resenha: 'São muitos os desafios a enfrentar num mundo ainda tão marcado por certa instabilidade, mas também pela interdependência. Com isso entendemos que é premente a necessidade de conhecermos bem os parâmetros jurídicos que visam a regular a complexa teia das relações internacionais.',
    preco: 199.4,
    capa: 'https://m.media-amazon.com/images/I/51vLP4anlcL.jpg',
    categoria: 'Direito'
  },
  {
    id: 22,
    titulo: 'Curso de Direito Constitucional',
    autor: 'Luiz Alberto David Araujo',
    resenha: 'Curso de direito constitucional chega à 24ª edição reafirmando seu compromisso com a clareza, a profundidade e a atualização permanente. Resultado da sólida experiência acadêmica e profissional de seus autores.',
    preco: 185,
    capa: 'https://m.media-amazon.com/images/I/71n5NOCjk3L._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 23,
    titulo: 'Curso de direito administrativo',
    autor: 'Celso Antônio Bandeira de Mello',
    resenha: 'Nesta nova edição, prosseguimos indicando aos leitores as passagens da obra que são de autoria exclusiva ou elaboradas em coautoria com Weida Zancaner, Carolina Zancaner Zockun e Maurício Zockun, professores de Direito Administrativo na PUC-SP.',
    preco: 285,
    capa: 'https://m.media-amazon.com/images/I/81LRKoUUHAL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 24,
    titulo: 'Manual de Defesa Criminal para Defensores Públicos e Advogados - Volume 1 - Parte Geral - 3ª edição',
    autor: 'Jaime Leônidas Miranda Alves',
    resenha: 'O livro “Fábrica de Criminalistas” surgiu muito dos debates do dia a dia com colegas defensores. Surgiu também nas salas de audiências, de situações práticas que, no momento, não sabia exatamente como agir.',
    preco: 167,
    capa: 'https://m.media-amazon.com/images/I/71lBzedCtXL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 25,
    titulo: 'Direito Digital - 8ª Edição 2026',
    autor: 'Patricia Peck Pinheiro',
    resenha: 'Para além de uma disciplina autônoma, o Direito Digital tornou-se um tema transversal a qualquer iniciativa contemporânea do Direito, incontornável para qualquer advogado ou profissional de tecnologia que queira se manter atualizado.',
    preco: 399,
    capa: 'https://m.media-amazon.com/images/I/7113H4Qd9kL._SL1500_.jpg',
    categoria: 'Direito'
  },
  {
    id: 26,
    titulo: 'Física Quântica - Átomos, Moléculas, Sólidos, Núcleos e Partículas',
    autor: 'Robert Elsberg',
    resenha: 'Uma apresentação clara das propriedades de quase todos os sistemas quânticos importantes, do ponto de vista da Mecânica Quântica Elementar. O livro foi concebido para ser utilizado em cursos de um ano por estudantes.',
    preco: 719,
    capa: 'https://m.media-amazon.com/images/I/81KaMt+ivAL._SL1500_.jpg',
    categoria: 'Física'
  },
  {
    id: 27,
    titulo: 'Introdução à Física Nuclear e de Hádrons',
    autor: 'Débora Peres Menezes',
    resenha: 'A obra se destina a alunos de graduação e de pós-graduação em física. O material básico necessário para um curso introdutório de física nuclear e de partículas elementares, em nível fenomenológico, é praticamente coberto pelos seis primeiros capítulos.',
    preco: 110,
    capa: 'https://m.media-amazon.com/images/I/71g-DU1bxTL._SL1500_.jpg',
    categoria: 'Física'
  },
  {
    id: 28,
    titulo: 'Análise estrutural para engenharia civil e arquitetura: estruturas isostáticas',
    autor: 'Moacir Kripka',
    resenha: 'Estruturas isostáticas são o sustento da engenharia como o solo é o sustento da vida ou a linguagem está para a comunicação. Leia com atenção Análise estrutural para Engenharia Civil e Arquitetura para entender o comportamento das estruturas isostáticas e seu dimensionamento.',
    preco: 90,
    capa: 'https://m.media-amazon.com/images/I/71nn20QriLL._SL1500_.jpg',
    categoria: 'Engenharia'
  },
  {
    id: 29,
    titulo: 'Fundamental Principles of Nuclear Engineering',
    autor: 'Jiyang Tu',
    resenha: 'A book teaching about the principles and foundation of nuclear engineering, the most effective energy source according to its author: Jiyang Tu',
    preco: 473.28,
    capa: 'https://m.media-amazon.com/images/I/51s4JuTI9GL._SL1254_.jpg',
    categoria: 'Engenharia'
  },
  {
    id: 30,
    titulo: 'Engenharia Clínica: Teorias, técnicas e práticas em direção às qualificações e acreditação',
    autor: 'Gilson Barbosa Machado',
    resenha: 'Esta obra apresenta os fundamentos, práticas e desafios da Engenharia Clínica, revelando sua origem singular e seu papel essencial na gestão tecnológica da saúde.',
    preco: 101.9,
    capa: 'https://m.media-amazon.com/images/I/51LRLRDShbL.jpg',
    categoria: 'Engenharia'
  },
  {
    id: 31,
    titulo: 'Comandos Elétricos: Fundamentos Para o Ensino Técnico',
    autor: 'André Barros de Mello Oliveira',
    resenha: 'O livro Comandos Elétricos: Fundamentos para o Ensino Técnico apresenta inicialmente os aspectos básicos de motores elétricos, com ênfase nos motores de indução trifásicos, hoje extremamente aplicados nos processos industriais.',
    preco: 107,
    capa: 'https://m.media-amazon.com/images/I/711wssjTYjL._SL1500_.jpg',
    categoria: 'Engenharia'
  },
  {
    id: 32,
    titulo: 'Cálculo I - 12.ed.',
    autor: 'Howard Anton & Irl Bivens',
    resenha: 'Nesta 12ª edição, Cálculo reafirma seu compromisso com o equilíbrio entre compreensão acessível e precisão matemática – mantendo as qualidades que o tornaram referência nos cursos de exatas.',
    preco: 244,
    capa: 'https://m.media-amazon.com/images/I/71l8-MbCf1L._SL1500_.jpg',
    categoria: 'Matemática'
  },
  {
    id: 33,
    titulo: 'Business Statistics Essentials You Always Wanted to Know: Master Data Analysis',
    autor: 'Bianca Szasz',
    resenha: 'Bridge the gap between core statistical theory and everyday business applications with this practical, reader-friendly guide to business statistics.',
    preco: 208.84,
    capa: 'https://m.media-amazon.com/images/I/71qfhrMx8+L._SL1500_.jpg',
    categoria: 'Matemática'
  },
  {
    id: 34,
    titulo: 'Matemática discreta: Uma introdução',
    autor: 'Edward Scheinerman',
    resenha: 'Dirigida a interessados em matemática discreta de maneira geral, esta obra apresenta uma visão geral de toda a matemática a partir da perspectiva da matemática discreta.',
    preco: 318,
    capa: 'https://m.media-amazon.com/images/I/618IZyAukgL._SL1046_.jpg',
    categoria: 'Matemática'
  },
  {
    id: 35,
    titulo: 'Física Matemática - Métodos Matemáticos para Engenharia e Física',
    autor: 'George Arfken',
    resenha: 'Agora, em sua 7ª edição, Física Matemática continua a fornecer todos os métodos matemáticos que estudantes de Física e Engenharia precisam em suas futuras carreiras como cientistas e pesquisadores.',
    preco: 501,
    capa: 'https://m.media-amazon.com/images/I/81OEctfdQ1L._SL1500_.jpg',
    categoria: 'Matemática'
  },
  {
    id: 36,
    titulo: 'História Geral do Brasil',
    autor: 'Francisco Adolfo de Varnhagen (Viscode de Porto Seguro)',
    resenha: 'História Geral do Brasil de Francisco Adolfo de Varnhagen. Considerado o pai da historiografia brasileira, Francisco Adolfo de Varnhagen, Visconde de Porto Seguro, deixou nesta obra monumental o primeiro grande esforço de sistematizar a trajetória do Brasil.',
    preco: 678,
    capa: 'https://m.media-amazon.com/images/I/61WRRwFUBYL._SL1080_.jpg',
    categoria: 'História'
  },
  {
    id: 37,
    titulo: 'História da China: O retrato de uma civilização e de seu povo',
    autor: 'Michael Wood',
    resenha: 'A China é a civilização mais antiga da Terra, mas sua história é pouco conhecida pelo resto do mundo. A narrativa brilhante de Michael Wood – que oferece um vasto panorama, combinando histórias locais e de suas próprias viagens.',
    preco: 89.9,
    capa: 'https://m.media-amazon.com/images/I/91kL5-xXcoL._SL1500_.jpg',
    categoria: 'História'
  },
  {
    id: 38,
    titulo: 'Prisioneiros da geografia: 10 mapas que explicam tudo o que você precisa saber',
    autor: 'Tim Marshall',
    resenha: 'Edição revista e atualizada pelo autor para a edição brasileira. A geografia está muito mais presente em nossa vida do que percebemos. Ela delimita poder, guerras, política e o desenvolvimento social e humano.',
    preco: 82.9,
    capa: 'https://m.media-amazon.com/images/I/81hgN8dtZDL._SL1500_.jpg',
    categoria: 'Geografia'
  },
  {
    id: 39,
    titulo: 'Geopolítica: do pensamento clássico aos conflitos contemporâneos',
    autor: 'Augusto W. M. Teixeira Júnior',
    resenha: 'Ainda que a conjuntura contemporânea se caracterize pelas intensas mudanças da realidade humana, o meio e as manifestações da natureza continuam perenes.',
    preco: 96,
    capa: 'https://m.media-amazon.com/images/I/81vWGnHnPwL._SL1465_.jpg',
    categoria: 'Geografia'
  },
  {
    id: 40,
    titulo: 'Geografia Histórica do Brasil. Capitalismo, Território e Periferia',
    autor: 'Antonio Carlos Robert Moraes',
    resenha: 'Esta obra procura mostrar a especificidade da geografia histórica do Brasil, indicando os fundamentos teórico-metodológicos que a sustentam, visando a constituir um exercício e uma tentativa de tratar tal matéria.',
    preco: 58.8,
    capa: 'https://m.media-amazon.com/images/I/61MfkI3o-nL._SL1016_.jpg',
    categoria: 'Geografia'
  },
  {
    id: 41,
    titulo: 'Arquitetura: Forma, Espaço e Ordem',
    autor: 'Fracis D. K. Ching',
    resenha: 'Formato clássico, texto claro e ilustrações detalhadas fazem de Arquitetura: Forma, Espaço e Ordem um dos livros mais populares sobre os fundamentos da arquitetura. Esta nova edição apresenta uma revisão completa do texto.',
    preco: 231,
    capa: 'https://m.media-amazon.com/images/I/71tpCK80FpL._SL1500_.jpg',
    categoria: 'Arquitetura'
  },
  {
    id: 42,
    titulo: 'Patrimônio colonial latino-americano: Urbanismo, arquitetura, arte sacra',
    autor: 'Percival Tirapeli',
    resenha: 'Fruto de extensão pesquisa de Percival Tirapeli, professor da Unesp, esta obra ricamente ilustrada abrange três séculos de arte colonial e é dividida em três partes.',
    preco: 115,
    capa: 'https://m.media-amazon.com/images/I/A1GNQXKkhYL._SL1500_.jpg',
    categoria: 'Arquitetura'
  },
  {
    id: 43,
    titulo: 'Trilhos Anatômicos: Meridianos Miofasciais para terapeutas manuais',
    autor: 'Thomas W. Myers & Fernando Gomes do Nascimento',
    resenha: 'Disponível em 15 idiomas, a nova edição deste best-seller mundial constitui uma referência imprescindível a todos os profissionais e estudantes que lidam com a estrutura e o movimento do corpo humano.',
    preco: 369,
    capa: 'https://m.media-amazon.com/images/I/81ewSApcRJL._SL1500_.jpg',
    categoria: 'Medicina'
  },
  {
    id: 44,
    titulo: 'Medicina de emergência: Abordagem Prática',
    autor: 'Ludhmila Abrahão Hajjar',
    resenha: 'Obra editada por professores do pronto-socorro do Hospital das Clínicas da Faculdade de Medicina da USP; referência para médicos, residentes e estudantes de medicina que atuam ou desejam atuar na área de emergências.',
    preco: 498,
    capa: 'https://m.media-amazon.com/images/I/81i9bV+dcvL._SL1500_.jpg',
    categoria: 'Medicina'
  }
];

export { produtos };