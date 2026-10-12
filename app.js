const questions = [
  {
    expression: '12x⁴ + 18x³ + 3x⁵',
    answer: '3x³(4x + 6 + x²)',
    factors: ['3x³'],
    steps: [
      'O maior número que divide 12, 18 e 3 é 3.',
      'A menor potência de x presente é x³.',
      'Coloque 3x³ em evidência: 12x⁴ ÷ 3x³ = 4x; 18x³ ÷ 3x³ = 6; 3x⁵ ÷ 3x³ = x².',
    ],
    hint: 'Observe o MDC dos números e a menor potência de x.',
  },
  {
    expression: '14x − 21y + 35z',
    answer: '7(2x − 3y + 5z)',
    factors: ['7'],
    steps: [
      'O MDC de 14, 21 e 35 é 7.',
      'Divida cada termo por 7: 2x, −3y e 5z.',
      'Escreva 7 multiplicando o polinômio que sobrou.',
    ],
    hint: 'Qual número divide 14, 21 e 35 ao mesmo tempo?',
  },
  {
    expression: '25 − 4a²',
    answer: '(5 − 2a)(5 + 2a)',
    factors: ['5 − 2a', '5 + 2a'],
    steps: [
      'É uma diferença de quadrados: 25 = 5² e 4a² = (2a)².',
      'Use a identidade u² − v² = (u − v)(u + v).',
      'Substitua u por 5 e v por 2a.',
    ],
    hint: 'Pense em uma diferença de dois quadrados perfeitos.',
  },
  {
    expression: '9m² + 6mp + p²',
    answer: '(3m + p)²',
    factors: ['(3m + p)²'],
    steps: [
      'É um trinômio quadrado perfeito: (3m)² + 2·3m·p + p².',
      'O termo do meio é 6mp, exatamente 2·3m·p.',
      'Logo, a expressão vira (3m + p)².',
    ],
    hint: 'O primeiro e o último termo parecem quadrados. Confira o termo do meio.',
  },
  {
    expression: '(x + y) − (x + y)·m',
    answer: '(x + y)(1 − m)',
    factors: ['(x + y)'],
    steps: [
      'O bloco (x + y) aparece nos dois termos.',
      'Coloque (x + y) em evidência.',
      'Sobra 1 no primeiro termo e −m no segundo: (x + y)(1 − m).',
    ],
    hint: 'Procure um bloco inteiro repetido, não apenas uma letra.',
  },
  {
    expression: 'm² + 6m − 7',
    answer: '(m + 7)(m − 1)',
    factors: ['m + 7', 'm − 1'],
    steps: [
      'Busque dois números cujo produto seja −7 e cuja soma seja 6.',
      'Esses números são 7 e −1.',
      'Então m² + 6m − 7 = (m + 7)(m − 1).',
    ],
    hint: 'Quais dois números multiplicam −7 e somam 6?',
  },
  {
    expression: 'x² + 11x + 24',
    answer: '(x + 3)(x + 8)',
    factors: ['x + 3', 'x + 8'],
    steps: [
      'Procure dois números que multiplicam 24 e somam 11.',
      'São 3 e 8.',
      'A forma fatorada é (x + 3)(x + 8).',
    ],
    hint: 'Liste os pares de fatores de 24 e procure a soma 11.',
  },
  {
    expression: 'a² + 5a − 36',
    answer: '(a + 9)(a − 4)',
    factors: ['a + 9', 'a − 4'],
    steps: [
      'Precisamos de dois números com produto −36 e soma 5.',
      '9 · (−4) = −36 e 9 + (−4) = 5.',
      'Logo, (a + 9)(a − 4).',
    ],
    hint: 'Como o produto é negativo, os sinais dos números são diferentes.',
  },
  {
    expression: 'y² − 12y + 32',
    answer: '(y − 4)(y − 8)',
    factors: ['y − 4', 'y − 8'],
    steps: [
      'Precisamos de dois números com produto 32 e soma −12.',
      'São −4 e −8.',
      'Portanto, (y − 4)(y − 8).',
    ],
    hint: 'Dois números negativos podem somar −12 e multiplicar 32.',
  },
  {
    expression: 'p² + p − 2',
    answer: '(p + 2)(p − 1)',
    factors: ['p + 2', 'p − 1'],
    steps: [
      'Precisamos de dois números com produto −2 e soma 1.',
      'São 2 e −1.',
      'A fatoração fica (p + 2)(p − 1).',
    ],
    hint: 'Os números 2 e −1 têm produto −2. Confira a soma.',
  },
  {
    expression: 'x² + 5ax + 6a²',
    answer: '(x + 2a)(x + 3a)',
    factors: ['x + 2a', 'x + 3a'],
    steps: [
      'Os fatores devem somar 5a e multiplicar 6a².',
      '2a + 3a = 5a e 2a · 3a = 6a².',
      'Logo, (x + 2a)(x + 3a).',
    ],
    hint: 'Pense em dois múltiplos de a que somem 5a.',
  },
  {
    expression: '36a⁴b⁴c⁶ − 12abc',
    answer: '12abc(3a³b³c⁵ − 1)',
    factors: ['12abc'],
    steps: [
      'O MDC dos coeficientes 36 e 12 é 12.',
      'As menores potências comuns são a¹b¹c¹.',
      'Divida os termos por 12abc e obtenha 3a³b³c⁵ − 1.',
    ],
    hint: 'Pegue o menor expoente de cada letra comum.',
  },
  {
    expression: '2x² + 8x + 8',
    answer: '2(x + 2)²',
    factors: ['2'],
    steps: [
      'Retire o fator comum 2: 2(x² + 4x + 4).',
      'Dentro dos parênteses há um trinômio quadrado perfeito.',
      'Como x² + 4x + 4 = (x + 2)², o resultado é 2(x + 2)².',
    ],
    hint: 'Primeiro retire o fator comum. Depois procure um trinômio quadrado perfeito.',
  },
  {
    expression: '3a² − 27b²',
    answer: '3(a − 3b)(a + 3b)',
    factors: ['3'],
    steps: [
      'O fator comum entre 3a² e 27b² é 3.',
      'Fica 3(a² − 9b²).',
      'a² − (3b)² é diferença de quadrados: 3(a − 3b)(a + 3b).',
    ],
    hint: 'Combine fator comum com diferença de quadrados.',
  },
  {
    expression: 'x³ + 3x² + 2x',
    answer: 'x(x + 1)(x + 2)',
    factors: ['x'],
    steps: [
      'Retire x: x(x² + 3x + 2).',
      'Procure dois números que multiplicam 2 e somam 3: 1 e 2.',
      'Fatore o trinômio: x(x + 1)(x + 2).',
    ],
    hint: 'Retire x antes de fatorar o trinômio que sobrou.',
  },
  {
    expression: '4m² − 12mn + 9n²',
    answer: '(2m − 3n)²',
    factors: ['(2m − 3n)²'],
    steps: [
      'As extremidades são quadrados: (2m)² e (3n)².',
      'O termo do meio é −2·2m·3n = −12mn.',
      'Portanto, é o quadrado da diferença: (2m − 3n)².',
    ],
    hint: 'Confira as raízes do primeiro e do último termo e o sinal do termo do meio.',
  },
  {
    expression: '6x²y + 12xy² − 18xy',
    answer: '6xy(x + 2y − 3)',
    factors: ['6xy'],
    steps: [
      'O MDC dos números é 6.',
      'As menores potências comuns são x e y, então o fator é 6xy.',
      'Divida cada termo: x + 2y − 3.',
    ],
    hint: 'Use o MDC dos coeficientes e os menores expoentes das letras.',
  },
  {
    expression: 'x⁴ − 16',
    answer: '(x − 2)(x + 2)(x² + 4)',
    factors: ['x − 2', 'x + 2'],
    steps: [
      'Veja x⁴ − 16 como (x²)² − 4².',
      'A primeira fatoração é (x² − 4)(x² + 4).',
      'Ainda há uma diferença de quadrados: x² − 4 = (x − 2)(x + 2).',
    ],
    hint: 'A diferença de quadrados pode aparecer mais de uma vez.',
  },
  {
    expression: '2x² + 7x + 3',
    answer: '(2x + 1)(x + 3)',
    factors: ['2x + 1', 'x + 3'],
    steps: [
      'O produto do primeiro pelo último coeficiente é 2·3 = 6.',
      'Os números 6 e 1 somam 7: separe 7x em 6x + x.',
      'Agrupe: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).',
    ],
    hint: 'Quando o coeficiente de x² não é 1, use o agrupamento após separar o termo do meio.',
  },
  {
    expression: '9p² − 24pq + 16q²',
    answer: '(3p − 4q)²',
    factors: ['(3p − 4q)²'],
    steps: [
      'As raízes dos extremos são 3p e 4q.',
      'O dobro do produto é 2·3p·(−4q) = −24pq.',
      'Logo, o trinômio é (3p − 4q)².',
    ],
    hint: 'Teste se o termo do meio é o dobro do produto das raízes.',
  },
  {
    expression: 'a³ − 8',
    answer: '(a − 2)(a² + 2a + 4)',
    factors: ['a − 2'],
    steps: [
      'Reconheça uma diferença de cubos: a³ − 2³.',
      'Use a fórmula u³ − v³ = (u − v)(u² + uv + v²).',
      'Com u = a e v = 2, fica (a − 2)(a² + 2a + 4).',
    ],
    hint: 'Aqui aparecem cubos perfeitos. Use a fórmula da diferença de cubos.',
  },
  {
    expression: '4x³ + 12x² + 9x',
    answer: 'x(2x + 3)²',
    factors: ['x'],
    steps: [
      'Retire x: x(4x² + 12x + 9).',
      'O polinômio restante tem extremos 4x² e 9.',
      'Como o termo do meio é 2·2x·3 = 12x, fica x(2x + 3)².',
    ],
    hint: 'Combine fator comum e trinômio quadrado perfeito.',
  },
];
const distractors = [
  ['3x²(4x² + 6x + x³)', '6x³(2x + 3 + 2x²)', '3x(4x³ + 6x² + x⁴)'],
  ['7(2x − 3y − 5z)', '14(x − 21y + 35z)', '5(2x − 3y + 7z)'],
  ['(5 − 2a)²', '(5 − 2a)(5 − 2a)', '(25 − 2a)(25 + 2a)'],
  ['(3m + p)(3m − p)', '(9m + p)²', '(3m + 2p)²'],
  ['(x + y)(m − 1)', '(x − y)(1 − m)', '(x + y)(1 + m)'],
  ['(m + 1)(m − 7)', '(m − 7)(m − 1)', '(m + 6)(m − 1)'],
  ['(x + 4)(x + 6)', '(x + 2)(x + 12)', '(x + 3)(x − 8)'],
  ['(a − 9)(a + 4)', '(a + 6)(a − 6)', '(a + 9)(a + 4)'],
  ['(y + 4)(y + 8)', '(y − 2)(y − 16)', '(y − 4)(y + 8)'],
  ['(p − 2)(p + 1)', '(p + 2)(p + 1)', '(p − 2)(p − 1)'],
  ['(x + a)(x + 6a)', '(x + 2a)(x − 3a)', '(x + 3a)²'],
  ['12abc(3a³b³c⁵ + 1)', '6abc(6a³b³c⁵ − 2)', '12a²b²c²(3a²b²c⁴ − 1)'],
  ['2(x + 2)(x − 2)', '2(x + 4)²', '(2x + 2)²'],
  ['3(a − 3b)²', '3(a − 9b)(a + 9b)', '(3a − 9b)(a + 3b)'],
  ['x(x + 1)(x − 2)', 'x(x + 3)(x + 2)', '(x + 1)(x + 2)'],
  ['(2m + 3n)²', '(2m − 3n)(2m + 3n)', '(m − 3n)²'],
  ['6xy(x + 2y + 3)', '6x²y²(x + 2y − 3)', '3xy(2x + 4y − 5)'],
  ['(x − 4)(x + 4)(x² + 4)', '(x − 2)(x + 2)(x² − 4)', '(x² − 4)²'],
  ['(2x + 3)(x + 1)', '(2x − 1)(x − 3)', '(x + 3)(2x − 1)'],
  ['(3p + 4q)²', '(9p − 16q)²', '(3p − 4q)(3p + 4q)'],
  ['(a + 2)(a² − 2a + 4)', '(a − 2)(a² − 2a + 4)', '(a − 8)(a² + 8a + 64)'],
  ['x(2x − 3)²', '(x + 2x + 3)²', 'x(4x² + 9)'],
];
questions.forEach((question, index) => {
  question.options = [question.answer, ...distractors[index]];
});
const lessonNotes = [
  [
    'FATOR COMUM',
    'Procure o maior bloco que aparece em todos os termos.',
    'Distribua 3x³: 3x³·4x + 3x³·6 + 3x³·x² = 12x⁴ + 18x³ + 3x⁵.',
  ],
  [
    'FATOR COMUM',
    'Encontre o maior número que divide todos os coeficientes.',
    'Distribua 7: 7·2x − 7·3y + 7·5z = 14x − 21y + 35z.',
  ],
  [
    'DIFERENÇA DE QUADRADOS',
    'Veja se existem dois quadrados separados por um sinal de menos: u² − v².',
    'Use (u − v)(u + v): (5 − 2a)(5 + 2a) = 25 − 4a².',
  ],
  [
    'TRINÔMIO QUADRADO PERFEITO',
    'O primeiro e o último termos são quadrados, e o termo do meio é o dobro do produto das raízes.',
    'Desenvolva (3m + p)²: 9m² + 6mp + p².',
  ],
  [
    'FATOR COMUM POR AGRUPAMENTO',
    'O fator comum pode ser um parêntese inteiro repetido.',
    'Distribua (x + y): (x + y)·1 − (x + y)·m = (x + y) − (x + y)m.',
  ],
  [
    'TRINÔMIO DO 2º GRAU',
    'Encontre dois números cujo produto seja −7 e cuja soma seja 6.',
    'Desenvolva (m + 7)(m − 1): m² + 6m − 7.',
  ],
  [
    'TRINÔMIO DO 2º GRAU',
    'Encontre dois números cujo produto seja 24 e cuja soma seja 11.',
    'Desenvolva (x + 3)(x + 8): x² + 11x + 24.',
  ],
  [
    'TRINÔMIO DO 2º GRAU',
    'Como o produto é negativo, os dois números terão sinais diferentes.',
    'Desenvolva (a + 9)(a − 4): a² + 5a − 36.',
  ],
  [
    'TRINÔMIO DO 2º GRAU',
    'Dois números negativos têm produto positivo e podem somar −12.',
    'Desenvolva (y − 4)(y − 8): y² − 12y + 32.',
  ],
  [
    'TRINÔMIO DO 2º GRAU',
    'Encontre dois números cujo produto seja −2 e cuja soma seja 1.',
    'Desenvolva (p + 2)(p − 1): p² + p − 2.',
  ],
  [
    'TRINÔMIO COM LETRA',
    'Os números procurados são múltiplos de a: 2a e 3a.',
    'Desenvolva (x + 2a)(x + 3a): x² + 5ax + 6a².',
  ],
  [
    'FATOR COMUM',
    'Use o MDC dos números e o menor expoente de cada letra que aparece em todos os termos.',
    'Distribua 12abc: 12abc·3a³b³c⁵ − 12abc = 36a⁴b⁴c⁶ − 12abc.',
  ],
  [
    'FATOR COMUM + TRINÔMIO QUADRADO PERFEITO',
    'Retire 2 e observe o quadrado de uma soma.',
    'Desenvolva 2(x + 2)²: 2(x² + 4x + 4) = 2x² + 8x + 8.',
  ],
  [
    'FATOR COMUM + DIFERENÇA DE QUADRADOS',
    'Retire 3 e depois use u² − v².',
    'Desenvolva 3(a − 3b)(a + 3b): 3(a² − 9b²) = 3a² − 27b².',
  ],
  [
    'FATOR COMUM + TRINÔMIO',
    'Retire x antes de procurar os fatores de x² + 3x + 2.',
    'Desenvolva x(x + 1)(x + 2): x(x² + 3x + 2) = x³ + 3x² + 2x.',
  ],
  [
    'TRINÔMIO QUADRADO PERFEITO',
    'As raízes são 2m e 3n, e o termo do meio é negativo.',
    'Desenvolva (2m − 3n)²: 4m² − 12mn + 9n².',
  ],
  [
    'FATOR COMUM',
    'O bloco comum tem número e duas letras.',
    'Distribua 6xy: 6xy(x + 2y − 3) = 6x²y + 12xy² − 18xy.',
  ],
  [
    'DIFERENÇA DE QUADRADOS EM DUAS ETAPAS',
    'Comece com (x²)² − 4² e procure outra diferença de quadrados.',
    'Multiplique (x − 2)(x + 2)(x² + 4) e obtenha x⁴ − 16.',
  ],
  [
    'TRINÔMIO POR AGRUPAMENTO',
    'Separe 7x em 6x + x para criar um fator comum.',
    'Agrupe: 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).',
  ],
  [
    'TRINÔMIO QUADRADO PERFEITO',
    'O termo do meio deve ser 2·3p·(−4q).',
    'Desenvolva (3p − 4q)²: 9p² − 24pq + 16q².',
  ],
  [
    'DIFERENÇA DE CUBOS',
    'Reconheça a³ − 2³ e aplique u³ − v³.',
    'Use (a − 2)(a² + 2a + 4) para voltar a a³ − 8.',
  ],
  [
    'FATOR COMUM + TRINÔMIO QUADRADO PERFEITO',
    'Retire x e confira se o restante é o quadrado de 2x + 3.',
    'Distribua x(2x + 3)²: x(4x² + 12x + 9) = 4x³ + 12x² + 9x.',
  ],
];
questions.forEach((question, index) => {
  [question.method, question.tip, question.check, question.formula] =
    lessonNotes[index];
  question.formula ||=
    {
      'FATOR COMUM': 'ab + ac = a(b + c)',
      'DIFERENÇA DE QUADRADOS': 'u² − v² = (u − v)(u + v)',
      'TRINÔMIO QUADRADO PERFEITO': 'u² ± 2uv + v² = (u ± v)²',
      'FATOR COMUM POR AGRUPAMENTO': 'ax + ay + bx + by = (a + b)(x + y)',
      'TRINÔMIO DO 2º GRAU': 'x² + (a + b)x + ab = (x + a)(x + b)',
      'TRINÔMIO COM LETRA': 'x² + (a + b)x + ab = (x + a)(x + b)',
      'FATOR COMUM + TRINÔMIO QUADRADO PERFEITO':
        'k(u² ± 2uv + v²) = k(u ± v)²',
      'FATOR COMUM + DIFERENÇA DE QUADRADOS': 'k(u² − v²) = k(u − v)(u + v)',
      'FATOR COMUM + TRINÔMIO': 'k(x² + ax + b) = k(x + r)(x + s)',
      'DIFERENÇA DE QUADRADOS EM DUAS ETAPAS':
        'u⁴ − v⁴ = (u − v)(u + v)(u² + v²)',
      'TRINÔMIO POR AGRUPAMENTO': 'ax + ay + bx + by = (a + b)(x + y)',
      'DIFERENÇA DE CUBOS': 'u³ − v³ = (u − v)(u² + uv + v²)',
    }[question.method] ||
    'Fatorar é escrever uma expressão como uma multiplicação equivalente.';
});
let state = {
  mode: 'campaign',
  index: 0,
  xp: 0,
  ores: 0,
  streak: 0,
  best: 0,
  correct: 0,
  hearts: 3,
  seconds: 45,
  timerId: null,
  hintUsed: false,
};
const $ = (id) => document.getElementById(id);
const PROGRESS_KEY = 'minefatora-progress';
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    return {
      xp: Number.isFinite(saved.xp) ? Math.max(0, saved.xp) : 0,
      ores: Number.isFinite(saved.ores) ? Math.max(0, saved.ores) : 0,
    };
  } catch {
    return { xp: 0, ores: 0 };
  }
}
function saveProgress() {
  try {
    localStorage.setItem(
      PROGRESS_KEY,
      JSON.stringify({ xp: state.xp, ores: state.ores }),
    );
  } catch {}
}
const savedProgress = loadProgress();
state.xp = savedProgress.xp;
state.ores = savedProgress.ores;
const tutorialLessons = [
  {
    title: 'Fator comum',
    category: 'IDEIA PRINCIPAL',
    intro:
      'Quando todos os termos têm uma parte igual, podemos colocá-la do lado de fora dos parênteses.',
    formula: 'ab + ac = a(b + c)',
    recognize:
      'Procure o maior número e as letras que aparecem em todos os termos. Esse é o fator comum.',
    steps: [
      'Encontre o MDC dos números.',
      'Escolha a menor potência de cada letra repetida.',
      'Divida cada termo pelo fator comum e escreva o que sobrou nos parênteses.',
    ],
    example: '12x⁴ + 18x³ + 3x⁵',
    result: '3x³(4x + 6 + x²)',
  },
  {
    title: 'Agrupamento',
    category: 'QUANDO HÁ BLOCOS REPETIDOS',
    intro:
      'Às vezes não existe uma parte igual em todos os termos, mas podemos separar os termos em grupos.',
    formula: 'ax + ay + bx + by = (a + b)(x + y)',
    recognize:
      'Depois de agrupar, cada grupo precisa revelar um fator comum igual ao do outro grupo.',
    steps: [
      'Separe a expressão em dois grupos.',
      'Coloque o fator comum em evidência em cada grupo.',
      'Coloque o parêntese repetido em evidência novamente.',
    ],
    example: 'ax + ay + bx + by',
    result: 'a(x + y) + b(x + y) = (a + b)(x + y)',
  },
  {
    title: 'Trinômio de 2º grau',
    category: 'PRODUTO E SOMA',
    intro:
      'É uma expressão com três termos. Quando começa com x², procure dois números que resolvam um pequeno desafio.',
    formula: 'x² + (a + b)x + ab = (x + a)(x + b)',
    recognize:
      'Os dois números precisam multiplicar o termo independente e somar o coeficiente de x.',
    steps: [
      'Observe o último número: ele será o produto.',
      'Procure dois números com essa multiplicação.',
      'Confira se a soma deles é o coeficiente de x.',
    ],
    example: 'x² + 11x + 24',
    result: '3 · 8 = 24 e 3 + 8 = 11, então (x + 3)(x + 8)',
  },
  {
    title: 'Trinômio quadrado perfeito',
    category: 'PRODUTO NOTÁVEL',
    intro:
      'É o resultado de elevar uma soma ou diferença ao quadrado. As pontas e o termo do meio entregam a pista.',
    formula: 'u² ± 2uv + v² = (u ± v)²',
    recognize:
      'O primeiro e o último termos devem ser quadrados perfeitos. O termo do meio é duas vezes o produto das raízes.',
    steps: [
      'Tire a raiz quadrada do primeiro termo.',
      'Tire a raiz quadrada do último termo.',
      'Use o sinal do termo do meio entre as raízes e eleve o parêntese ao quadrado.',
    ],
    example: '9m² + 6mp + p²',
    result: '3m e p são as raízes; 2·3m·p = 6mp, então (3m + p)²',
  },
  {
    title: 'Diferença de 2 quadrados',
    category: 'PRODUTO NOTÁVEL',
    intro:
      'Quando dois quadrados aparecem subtraídos, a expressão vira o produto da diferença pela soma das raízes.',
    formula: 'u² − v² = (u − v)(u + v)',
    recognize:
      'Há somente dois termos, um sinal de menos e cada termo pode ser escrito como um quadrado perfeito.',
    steps: [
      'Encontre a raiz quadrada do primeiro termo.',
      'Encontre a raiz quadrada do segundo termo.',
      'Monte dois parênteses: um com menos e outro com mais.',
    ],
    example: '25 − 4a²',
    result: '25 = 5² e 4a² = (2a)², então (5 − 2a)(5 + 2a)',
  },
];
let tutorialIndex = 0;
const normalize = (s) =>
  s
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/\*/g, '')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .replace(/−/g, '-');
function setMode(mode) {
  state.mode = mode;
  document
    .querySelectorAll('.mode-card')
    .forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
}
function shuffleQuestions() {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}
function currentQuestionList() {
  return state.questionOrder || questions;
}
function startGame() {
  stopQuestionTimer();
  document.querySelector('.game-shell').classList.remove('tutorial-active');
  if (state.mode === 'tutorial') return startTutorial();
  state = {
    ...state,
    index: 0,
    questionOrder:
      state.mode === 'campaign' || state.mode === 'speed'
        ? shuffleQuestions()
        : questions,
    streak: 0,
    best: 0,
    correct: 0,
    hearts: state.mode === 'bet' ? 1 : 3,
    seconds: state.mode === 'bet' ? 60 : 45,
    timerId: null,
    hintUsed: false,
  };
  $('home-view').classList.add('hidden');
  $('end-view').classList.add('hidden');
  $('play-view').classList.remove('hidden');
  $('mode-label').textContent =
    state.mode === 'speed'
      ? 'CORRIDA • 45S POR QUESTÃO'
      : state.mode === 'tutorial'
        ? 'TUTORIAL • APRENDA JOGANDO'
        : state.mode === 'bet'
          ? 'APOSTA • RISCO E RECOMPENSA'
          : 'CAMPANHA';
  if (state.mode !== 'speed' && state.mode !== 'bet')
    $('timer').textContent = '∞';
  renderQuestion();
}
function startTutorial() {
  document.querySelector('.game-shell').classList.add('tutorial-active');
  $('home-view').classList.add('hidden');
  $('play-view').classList.add('hidden');
  $('end-view').classList.add('hidden');
  $('tutorial-view').classList.remove('hidden');
  renderTutorial();
}
function renderTutorial() {
  const lesson = tutorialLessons[tutorialIndex];
  $('tutorial-counter').textContent =
    `${tutorialIndex + 1} / ${tutorialLessons.length}`;
  $('lesson-category').textContent = lesson.category;
  $('lesson-title').textContent = lesson.title;
  $('lesson-intro').textContent = lesson.intro;
  $('lesson-formula').textContent = lesson.formula;
  $('lesson-recognize').textContent = lesson.recognize;
  $('lesson-steps').innerHTML = lesson.steps
    .map((step) => `<li>${step}</li>`)
    .join('');
  $('lesson-example').textContent = lesson.example;
  $('lesson-result').textContent = lesson.result;
  $('topic-list').innerHTML = tutorialLessons
    .map(
      (item, index) =>
        `<button class="topic-btn ${index === tutorialIndex ? 'active' : ''}" data-topic="${index}"><span>0${index + 1}</span>${item.title}</button>`,
    )
    .join('');
  document.querySelectorAll('.topic-btn').forEach((button) =>
    button.addEventListener('click', () => {
      tutorialIndex = Number(button.dataset.topic);
      renderTutorial();
    }),
  );
  $('lesson-prev').disabled = tutorialIndex === 0;
  $('lesson-next').textContent =
    tutorialIndex === tutorialLessons.length - 1
      ? 'VOLTAR AO MENU ↩'
      : 'PRÓXIMO TEMA →';
}
function closeTutorial() {
  document.querySelector('.game-shell').classList.remove('tutorial-active');
  $('tutorial-view').classList.add('hidden');
  $('home-view').classList.remove('hidden');
}
function startQuestionTimer() {
  if (state.mode !== 'speed' && state.mode !== 'bet') return;
  if (state.timerId) clearInterval(state.timerId);
  state.seconds = state.mode === 'bet' ? 60 : 45;
  renderTimer();
  state.timerId = setInterval(() => {
    state.seconds--;
    renderTimer();
    if (state.seconds <= 0) submit(true);
  }, 1000);
}
function stopQuestionTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}
function renderTimer() {
  const m = Math.floor(state.seconds / 60),
    s = state.seconds % 60;
  $('timer').textContent = `${m}:${String(s).padStart(2, '0')}`;
}
function renderQuestion() {
  const questionList = currentQuestionList();
  if (state.index >= questionList.length) return finishGame();
  const q = questionList[state.index];
  $('question-count').textContent =
    `FASE ${String(state.index + 1).padStart(2, '0')} / ${questionList.length}`;
  $('progress-bar').style.width =
    `${(state.index / questionList.length) * 100}%`;
  $('expression').textContent = q.expression;
  $('tutorial-guide').classList.toggle('hidden', state.mode !== 'tutorial');
  $('tutorial-guide').innerHTML =
    state.mode === 'tutorial'
      ? `<b>FÓRMULA DE REFERÊNCIA</b><strong>${q.formula}</strong><p>Compare a fórmula com a expressão. Depois confira os passos da resolução.</p>`
      : '';
  $('bet-panel').classList.toggle('hidden', state.mode !== 'bet');
  if (state.mode === 'bet') {
    $('bet-wager').textContent = `${state.ores} minérios`;
    const hasMinimum = state.ores >= 10;
    $('bet-alert').textContent = hasMinimum
      ? ''
      : 'Você não possui minérios suficientes para apostar. O mínimo é 10 minérios.';
    $('bet-alert').classList.toggle('hidden', hasMinimum);
  }
  $('options').innerHTML = q.options
    .map(
      (option, index) =>
        `<button class="option-btn" type="button" data-option="${index}" role="radio" aria-checked="false"><span>${String.fromCharCode(65 + index)}</span><b>${option}</b></button>`,
    )
    .sort(() => Math.random() - 0.5)
    .join('');
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => selectOption(button));
  });
  const canBet = state.mode !== 'bet' || state.ores >= 10;
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.disabled = !canBet;
  });
  $('submit-btn').disabled = !canBet;
  $('hint-text').textContent = '';
  $('feedback').className = 'feedback hidden';
  $('explain-btn').classList.add('hidden');
  $('next-btn').classList.add('hidden');
  const hintCost = state.mode === 'speed' ? 10 : 5;
  $('hint-cost').textContent = `-${hintCost} XP`;
  $('hint-btn').disabled = state.mode === 'bet' || state.xp < hintCost;
  $('hint-btn').parentElement.classList.toggle('hidden', state.mode === 'bet');
  state.hintUsed = false;
  updateStats();
  document.querySelector('.option-btn')?.focus();
  if (canBet) startQuestionTimer();
}
function selectOption(button) {
  document.querySelectorAll('.option-btn').forEach((option) => {
    option.classList.remove('selected');
    option.setAttribute('aria-checked', 'false');
  });
  button.classList.add('selected');
  button.setAttribute('aria-checked', 'true');
  $('submit-btn').disabled = false;
}
function updateStats() {
  $('xp').textContent = String(state.xp).padStart(3, '0');
  $('ores').textContent = state.ores;
  $('streak').textContent = state.streak;
  $('hearts').textContent = '♥ '.repeat(state.hearts).trim() || '—';
  saveProgress();
}
function resolutionMarkup(q, selectedOption) {
  const choice = selectedOption
    ? `<p class="choice-line">Sua escolha: <strong>${selectedOption}</strong></p>`
    : '';
  return `<div class="resolution"><div class="resolution-heading"><b>COMO FAZER</b><span>${q.method}</span></div>${choice}<p class="resolution-tip">${q.tip}</p><ol>${q.steps.map((step, index) => `<li><span>PASSO ${index + 1}</span>${step}</li>`).join('')}</ol><div class="check-box"><b>CONFIRA DESENVOLVENDO</b><p>${q.check}</p></div><strong class="correct-answer">Resposta correta: ${q.answer}</strong></div>`;
}
function submit(timedOut = false) {
  const q = currentQuestionList()[state.index];
  const selected = document.querySelector('.option-btn.selected');
  if (!selected && !timedOut) return;
  const selectedOption = selected
    ? q.options[Number(selected.dataset.option)]
    : null;
  const right = selectedOption === q.answer;
  const wager = state.mode === 'bet' ? state.ores : 0;
  stopQuestionTimer();
  document.querySelectorAll('.option-btn').forEach((option) => {
    option.disabled = true;
  });
  $('submit-btn').disabled = true;
  if (right) {
    state.correct++;
    state.streak++;
    state.best = Math.max(state.best, state.streak);
    state.xp += state.hintUsed ? 8 : 15;
    if (state.mode === 'bet') {
      state.ores += wager;
    } else state.ores++;
    const betMessage =
      state.mode === 'bet'
        ? ` Aposta ganha: +${wager} minérios. Saldo: ${state.ores}.`
        : '';
    $('feedback').className = 'feedback good';
    $('feedback').innerHTML =
      `<b>BLOCO EXTRAÍDO!</b> Mandou bem!${betMessage} Agora veja por que a fatoração funciona:${resolutionMarkup(q, selectedOption)}`;
    $('next-btn').classList.remove('hidden');
  } else {
    state.streak = 0;
    if (state.mode === 'bet') {
      state.ores = 0;
    }
    if (state.mode === 'bet') state.hearts = 0;
    if (state.mode !== 'tutorial' && state.mode !== 'bet')
      state.hearts = Math.max(0, state.hearts - 1);
    const betMessage =
      state.mode === 'bet'
        ? ` Aposta perdida: −${wager} minérios. Saldo: ${state.ores}.`
        : '';
    $('feedback').className = 'feedback bad';
    $('feedback').innerHTML = timedOut
      ? `<b>O tempo acabou.</b>${betMessage} Esta questão valia 60 segundos. A resolução fica disponível para você aprender antes de continuar:${resolutionMarkup(q)}`
      : `<b>O bloco rachou.</b>${betMessage} Tudo bem: erro também ensina. Compare sua escolha com esta resolução:${resolutionMarkup(q, selectedOption)}`;
    $('next-btn').classList.remove('hidden');
  }
  updateStats();
}
function showExplanation() {
  const q = currentQuestionList()[state.index];
  $('feedback').className = 'feedback bad';
  $('feedback').innerHTML = resolutionMarkup(q);
  $('explain-btn').classList.add('hidden');
}
function next() {
  if (state.hearts === 0 || state.index >= currentQuestionList().length - 1)
    return finishGame();
  state.index++;
  renderQuestion();
}
function finishGame() {
  if (state.timerId) clearInterval(state.timerId);
  $('play-view').classList.add('hidden');
  $('end-view').classList.remove('hidden');
  $('final-score').textContent = state.xp;
  $('final-correct').textContent =
    `${state.correct}/${currentQuestionList().length}`;
  $('final-streak').textContent = state.best;
  $('end-title').textContent =
    state.correct >= 8 ? 'Mina explorada!' : 'Expedição encerrada';
  $('end-summary').textContent =
    state.mode === 'tutorial'
      ? 'Tutorial concluído. Você praticou fórmulas e caminhos diferentes para fatorar.'
      : state.mode === 'bet'
        ? `Saldo final: ${state.ores} minérios. Cada aposta ensinou a calcular o risco.`
        : `Você extraiu ${state.ores} minério${state.ores === 1 ? '' : 's'} e aprendeu novos caminhos de fatoração.`;
}
document
  .querySelectorAll('.mode-card')
  .forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
$('start-btn').addEventListener('click', startGame);
$('replay-btn').addEventListener('click', startGame);
$('tutorial-back').addEventListener('click', closeTutorial);
$('lesson-prev').addEventListener('click', () => {
  if (tutorialIndex > 0) {
    tutorialIndex--;
    renderTutorial();
  }
});
$('lesson-next').addEventListener('click', () => {
  if (tutorialIndex < tutorialLessons.length - 1) {
    tutorialIndex++;
    renderTutorial();
  } else closeTutorial();
});
$('back-btn').addEventListener('click', () => {
  if (state.timerId) clearInterval(state.timerId);
  $('play-view').classList.add('hidden');
  $('home-view').classList.remove('hidden');
});
$('submit-btn').addEventListener('click', submit);
$('next-btn').addEventListener('click', next);
$('explain-btn').addEventListener('click', showExplanation);
$('hint-btn').addEventListener('click', () => {
  const q = currentQuestionList()[state.index];
  const hintCost = state.mode === 'speed' ? 10 : 5;
  if (state.xp < hintCost || state.mode === 'bet') return;
  $('hint-text').textContent = q.hint;
  state.xp -= hintCost;
  state.hintUsed = true;
  $('hint-btn').disabled = true;
  updateStats();
});
updateStats();
