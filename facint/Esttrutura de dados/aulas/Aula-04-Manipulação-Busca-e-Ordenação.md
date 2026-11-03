---
marp: true
theme: default
html: true
size: 16:9
backgroundImage: url('../materiais/MODELO_SLIDE_FACINT.pptx.svg')
backgroundSize: cover
backgroundPosition: center

style: |
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

  :root {
    --primary: #092753;
    --primary-soft: #e8eef8;
    --primary-mid: #2c4f86;
    --text: #1d2737;
    --muted: #5b6678;
  }

  section {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    color: var(--text);
    font-size: 26px;
    line-height: 1.45;
    padding: 64px 96px 120px 84px;
    justify-content: flex-start;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: var(--primary);
    font-size: 1.55em;
    margin: 0 0 0.5em 0;
    padding-left: 18px;
    border-left: 10px solid var(--primary);
    max-width: 82%;
  }

  h2 { font-family: 'Montserrat', sans-serif; color: var(--primary); font-size: 1.05em; margin: 0.2em 0; }
  h3 { color: var(--primary-mid); font-size: 0.9em; margin: 0.2em 0; }
  strong { color: var(--primary); }
  ul, ol { margin: 0.2em 0; }
  li { margin: 0.15em 0; }

  /* ---------- Código ---------- */
  pre {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.62em;
    line-height: 1.5;
    background: #f5f8fd;
    border: 1px solid #d5deec;
    border-left: 8px solid var(--primary);
    border-radius: 12px;
    padding: 16px 22px;
    box-shadow: 0 6px 18px rgba(9, 39, 83, 0.10);
    margin: 0.3em 0;
  }
  code { font-family: 'JetBrains Mono', monospace; }
  p > code, li > code, td > code {
    background: var(--primary-soft);
    color: var(--primary);
    padding: 1px 8px;
    border-radius: 6px;
    font-size: 0.85em;
  }

  /* ---------- Rodapé e paginação ---------- */
  footer { color: var(--muted); font-size: 0.5em; left: 84px; bottom: 30px; }
  section::after {
    color: #fff; background: var(--primary);
    font-weight: 600; font-size: 0.55em;
    border-radius: 999px; padding: 4px 14px;
    right: 40px; bottom: 26px;
  }

  /* ---------- Tabelas ---------- */
  table { border-collapse: collapse; font-size: 0.78em; margin: 0.4em 0; }
  th { background: var(--primary); color: #fff; padding: 10px 18px; }
  td { padding: 9px 18px; background: rgba(255,255,255,0.92); border-bottom: 1px solid #dbe3f0; }

  /* ---------- Componentes ---------- */
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
  .cols-60 { display: grid; grid-template-columns: 1.35fr 1fr; gap: 30px; align-items: start; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 0.4em; }
  .cards.c2 { grid-template-columns: repeat(2, 1fr); }
  .cards.c4 { grid-template-columns: repeat(4, 1fr); }
  .card {
    background: rgba(255,255,255,0.95);
    border: 1px solid #d5deec; border-top: 6px solid var(--primary);
    border-radius: 14px; padding: 16px 20px;
    box-shadow: 0 6px 16px rgba(9,39,83,0.08);
    font-size: 0.78em;
  }
  .card b { display: block; color: var(--primary); font-family: 'Montserrat', sans-serif; font-size: 1.1em; margin-bottom: 4px; }
  .card .ico { font-size: 1.6em; display: block; margin-bottom: 4px; }

  .callout {
    background: var(--primary); color: #fff;
    border-radius: 14px; padding: 14px 24px; margin-top: 0.5em;
    font-size: 0.82em; box-shadow: 0 8px 20px rgba(9,39,83,0.25);
  }
  .callout strong { color: #9cc3ff; }

  .note {
    background: var(--primary-soft); border-left: 6px solid var(--primary);
    border-radius: 10px; padding: 10px 18px; font-size: 0.72em; margin-top: 0.4em;
  }
  .note strong { color: var(--primary); }

  .flow { display: flex; align-items: center; gap: 14px; margin: 0.5em 0; flex-wrap: nowrap; }
  .flow .step {
    background: #fff; border: 2px solid var(--primary); color: var(--primary);
    border-radius: 12px; padding: 12px 18px; font-weight: 600; text-align: center;
    font-size: 0.78em; min-width: 140px; box-shadow: 0 4px 12px rgba(9,39,83,0.10);
  }
  .flow .step.fill { background: var(--primary); color: #fff; }
  .flow .arrow { color: var(--primary); font-size: 1.4em; font-weight: 800; }

  /* Representação de memória (array) */
  .mem { display: flex; gap: 0; margin: 0.4em 0; }
  .mem .cell { text-align: center; font-size: 0.72em; }
  .mem .val {
    border: 2px solid var(--primary); background: #fff; color: var(--primary);
    width: 120px; padding: 12px 0; font-weight: 700; font-family: 'JetBrains Mono', monospace;
  }
  .mem .cell + .cell .val { border-left: none; }
  .mem .idx { color: var(--muted); font-family: 'JetBrains Mono', monospace; margin-top: 4px; }

  /* Lista encadeada */
  .nodes { display: flex; align-items: center; gap: 10px; margin: 0.4em 0; }
  .node { display: flex; border: 2px solid var(--primary); border-radius: 10px; overflow: hidden; font-size: 0.72em; font-family: 'JetBrains Mono', monospace; }
  .node span { padding: 10px 14px; background: #fff; color: var(--primary); font-weight: 700; }
  .node span + span { background: var(--primary); color: #fff; }

  /* Gráfico de crescimento */
  .bars { display: flex; flex-direction: column; gap: 10px; margin-top: 0.3em; font-size: 0.7em; }
  .bar-row { display: grid; grid-template-columns: 110px 1fr 150px; align-items: center; gap: 12px; }
  .bar-row .lbl { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--primary); }
  .bar { height: 22px; border-radius: 999px; background: var(--primary); }
  .bar-row .ops { color: var(--muted); font-family: 'JetBrains Mono', monospace; }

  .tag {
    display: inline-block; background: var(--primary); color: #fff;
    border-radius: 999px; padding: 3px 14px; font-size: 0.6em; font-weight: 600;
    letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;
  }
  .muted { color: var(--muted); }
  .center { text-align: center; }

  .bigo { gap: 16px; }
  .bigo .card { position: relative; padding: 12px 18px 12px 70px; font-size: 0.72em; }
  .bigo .card .ico { position: absolute; left: 16px; top: 14px; font-size: 1.8em; }
  .bigo .card .js { display: block; margin-top: 6px; color: var(--muted); font-size: 0.9em; }

  section.dense h1 { margin-bottom: 0.3em; }
  section.dense pre { font-size: 0.56em; line-height: 1.4; padding: 12px 20px; }

  /* ---------- Capa / divisórias ---------- */
  section.lead { justify-content: center; padding-left: 110px; }
  section.lead h1 {
    font-size: 2.3em; border: none; padding: 0; max-width: 75%; line-height: 1.1;
  }
  section.lead h2 { color: var(--primary-mid); font-weight: 500; font-size: 1.05em; }
  section.lead .line { width: 140px; height: 8px; background: var(--primary); border-radius: 99px; margin: 18px 0; }
  section.lead p { color: var(--muted); font-size: 0.8em; }

  /* Destaques em arrays (busca e ordenação) */
  .mem.sm .val { width: 78px; padding: 10px 0; }
  .mem .val.hit { background: var(--primary); color: #fff; }
  .mem .val.mid { background: #9cc3ff; color: var(--primary); }
  .mem .val.off { opacity: .3; }
  .mem .val.ok { background: var(--primary-soft); }
  .mem-row { display: grid; grid-template-columns: 150px 1fr; align-items: center; gap: 10px; }
  .mem-row .lbl { font-size: 0.62em; color: var(--muted); font-family: 'JetBrains Mono', monospace; }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: '' -->

<span class="tag">Engenharia de Software</span>

# Manipulação, Busca e Ordenação

<div class="line"></div>

## Organização e Manipulação de Estruturas de Dados

Busca linear · Busca binária · Ordenação · Desempenho · Aplicações

<!--
🎤 **Fala do Professor:**

"Nas aulas anteriores aprendemos a guardar os dados: arrays, listas, pilhas, filas, árvores e grafos. Hoje vamos aprender a trabalhar com eles: encontrar um elemento e colocar os elementos em ordem. São duas das operações que um software mais executa."
-->

---

# 🎯 Objetivos de aprendizagem

<div class="cards">
  <div class="card"><span class="ico">🔍</span><b>Compreender</b>o que é um algoritmo de busca e quando ele é necessário</div>
  <div class="card"><span class="ico">↔️</span><b>Diferenciar</b>busca linear e busca binária, e seus pré-requisitos</div>
  <div class="card"><span class="ico">📶</span><b>Explicar</b>o funcionamento dos principais algoritmos de ordenação</div>
  <div class="card"><span class="ico">💻</span><b>Implementar</b>buscas e ordenações em JavaScript</div>
  <div class="card"><span class="ico">⏱️</span><b>Comparar</b>o desempenho dos algoritmos com Big O</div>
  <div class="card"><span class="ico">🛠️</span><b>Escolher</b>o algoritmo adequado para um sistema real</div>
</div>

<!--
🎤 **Fala do Professor:**

"Ao final da aula vocês devem saber escolher entre buscar de forma linear ou binária, conhecer os algoritmos de ordenação clássicos e justificar a escolha usando a notação Big O que vimos na primeira aula."
-->

---

# 🔄 Das estruturas às operações

<div class="cols">
<div>

### Até aqui
- **Aula 1:** dados, operações e Big O
- **Aula 2:** arrays, listas, pilhas e filas
- **Aula 3:** árvores, grafos, BFS e DFS

</div>
<div>

### Hoje
- Como **encontrar** um elemento?
- Como **colocar em ordem** uma coleção?
- Quanto **custa** cada estratégia?

</div>
</div>

<div class="flow">
  <div class="step">Dados guardados</div><div class="arrow">➜</div>
  <div class="step">Ordenação</div><div class="arrow">➜</div>
  <div class="step">Busca eficiente</div><div class="arrow">➜</div>
  <div class="step fill">Informação rápida</div>
</div>

<div class="note">💡 Busca e ordenação andam juntas: <strong>ordenar</strong> muitas vezes é o que torna a <strong>busca</strong> rápida.</div>

<!--
🎤 **Fala do Professor:**

"Já sabemos guardar os dados. Agora a pergunta é o que fazer com eles. Vamos ver que ordenar e buscar estão ligados: quem ordena uma vez pode buscar muito mais rápido depois."
-->

---

# 🔍 O que é um algoritmo de busca?

<div class="cols-60">
<div>

Um **algoritmo de busca** localiza um elemento em uma estrutura a partir de uma **chave** (valor, id, nome).

- Retorna a **posição** ou o próprio elemento
- Retorna um sinal de ausência, como `-1` ou `null`
- O custo depende da **estrutura** e da **organização** dos dados

</div>
<div>

<div class="card"><b>Perguntas que todo sistema faz</b>Existe um usuário com este e-mail?<br>Qual é o produto de código 4521?<br>Este CPF já está cadastrado?</div>

</div>
</div>

| Estratégia | Requisito | Custo |
|---|---|---|
| Busca linear | nenhum | **O(n)** |
| Busca binária | dados **ordenados** | **O(log n)** |
| Tabela hash | função de espalhamento | **O(1)** em média |

<!--
🎤 **Fala do Professor:**

"Buscar é responder perguntas como 'esse e-mail já existe?'. Hoje vamos ver três estratégias, cada uma com um requisito e um custo diferentes."
-->

---

# 🚶 Busca linear (sequencial)

Percorre a estrutura **do início ao fim**, comparando cada elemento com o alvo.

<div class="mem-row"><span class="lbl">Buscar 33</span>
<div class="mem sm">
  <div class="cell"><div class="val ok">12</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val ok">45</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val ok">7</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val ok">89</div><div class="idx">[3]</div></div>
  <div class="cell"><div class="val hit">33</div><div class="idx">[4]</div></div>
  <div class="cell"><div class="val">21</div><div class="idx">[5]</div></div>
  <div class="cell"><div class="val">56</div><div class="idx">[6]</div></div>
</div></div>

<div class="cards">
  <div class="card"><b>✅ Vantagens</b>Simples; funciona com dados <strong>desordenados</strong> e em listas encadeadas</div>
  <div class="card"><b>⚠️ Limitação</b>No pior caso visita <strong>todos</strong> os n elementos</div>
  <div class="card"><b>⏱️ Complexidade</b>Melhor: <strong>O(1)</strong> · Pior e médio: <strong>O(n)</strong></div>
</div>

<!--
🎤 **Fala do Professor:**

"É como procurar uma chave num molho sem etiqueta: testamos uma a uma. Se tivermos sorte, é a primeira. Se não, testamos todas. Por isso o pior caso é O(n)."
-->

---

# 💻 Busca linear em JavaScript

```javascript
// Percorre a lista e retorna a posição do alvo, ou -1 se não existir
function buscaLinear(lista, alvo) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === alvo) return i;   // encontrou: para imediatamente
  }
  return -1;                           // percorreu tudo e não encontrou
}

const ids = [12, 45, 7, 89, 33, 21, 56];
console.log(buscaLinear(ids, 33));     // 4
console.log(buscaLinear(ids, 99));     // -1

// Métodos nativos que fazem busca linear: indexOf, includes, find
const usuarios = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Carlos" }];
console.log(usuarios.find(u => u.nome === "Carlos"));  // { id: 2, ... }
```

<div class="note">📌 <strong>Atenção:</strong> <code>indexOf</code>, <code>includes</code> e <code>find</code> parecem "instantâneos", mas por dentro fazem uma busca <strong>linear O(n)</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Os métodos nativos escondem o laço, mas ele continua lá. Usar find dentro de outro laço, por exemplo, gera um custo O(n²) sem que a gente perceba."
-->

---

# 📖 Busca binária: a ideia

<div class="cols-60">
<div>

Em uma coleção **ordenada**, compare o alvo com o elemento do **meio**:

1. Igual? **Encontrou**
2. Alvo menor? Descarte a **metade direita**
3. Alvo maior? Descarte a **metade esquerda**
4. Repita até achar ou o intervalo ficar vazio

</div>
<div>

<div class="card"><b>Analogia: o dicionário</b>Ninguém lê página por página. Abrimos no meio, vemos se a palavra vem antes ou depois e descartamos <strong>metade</strong> do livro a cada tentativa — como na BST da Aula 3.</div>

</div>
</div>

<div class="callout">⚠️ Pré-requisito obrigatório: os dados precisam estar <strong>ordenados</strong> e permitir <strong>acesso por índice</strong>.</div>

<!--
🎤 **Fala do Professor:**

"É o mesmo raciocínio do jogo de adivinhar número e da árvore binária de busca. Mas atenção: só funciona se os dados estiverem ordenados. Em dados desordenados a busca binária dá respostas erradas."
-->

---

# 🪜 Busca binária: passo a passo

Buscar **`42`** em um array ordenado de 9 elementos:

<div class="mem-row"><span class="lbl">1º · meio = [4]</span>
<div class="mem sm">
  <div class="cell"><div class="val">3</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val">9</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val">14</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val">21</div><div class="idx">[3]</div></div>
  <div class="cell"><div class="val mid">27</div><div class="idx">[4]</div></div>
  <div class="cell"><div class="val">35</div><div class="idx">[5]</div></div>
  <div class="cell"><div class="val">42</div><div class="idx">[6]</div></div>
  <div class="cell"><div class="val">50</div><div class="idx">[7]</div></div>
  <div class="cell"><div class="val">68</div><div class="idx">[8]</div></div>
</div></div>

<div class="mem-row"><span class="lbl">2º · meio = [6]</span>
<div class="mem sm">
  <div class="cell"><div class="val off">3</div><div class="idx">[0]</div></div>
  <div class="cell"><div class="val off">9</div><div class="idx">[1]</div></div>
  <div class="cell"><div class="val off">14</div><div class="idx">[2]</div></div>
  <div class="cell"><div class="val off">21</div><div class="idx">[3]</div></div>
  <div class="cell"><div class="val off">27</div><div class="idx">[4]</div></div>
  <div class="cell"><div class="val">35</div><div class="idx">[5]</div></div>
  <div class="cell"><div class="val hit">42</div><div class="idx">[6]</div></div>
  <div class="cell"><div class="val">50</div><div class="idx">[7]</div></div>
  <div class="cell"><div class="val">68</div><div class="idx">[8]</div></div>
</div></div>

<div class="note">42 &gt; 27 → descarta a metade esquerda. No 2º passo, o meio de [5..8] é [6] → <strong>encontrado em 2 comparações</strong> (a busca linear precisaria de 7).</div>

<!--
🎤 **Fala do Professor:**

"No primeiro passo comparamos com 27, que está no meio. Como 42 é maior, tudo à esquerda é descartado. No segundo passo o meio do que sobrou já é o 42. Duas comparações contra sete da busca linear."
-->

---

# 💻 Busca binária em JavaScript

```javascript
// Pré-requisito: lista ORDENADA em ordem crescente
function buscaBinaria(lista, alvo) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {                       // ainda há intervalo para procurar
    const meio = Math.floor((inicio + fim) / 2); // índice central do intervalo
    if (lista[meio] === alvo) return meio;       // encontrou
    if (alvo < lista[meio]) fim = meio - 1;      // descarta a metade direita
    else inicio = meio + 1;                      // descarta a metade esquerda
  }
  return -1;                                     // intervalo vazio: não existe
}

const precos = [3, 9, 14, 21, 27, 35, 42, 50, 68];
console.log(buscaBinaria(precos, 42));  // 6
console.log(buscaBinaria(precos, 10));  // -1
```

<div class="note">📌 <strong>Conceito:</strong> a cada volta do laço o intervalo cai pela <strong>metade</strong> → <strong>O(log n)</strong> no pior caso, com espaço extra <strong>O(1)</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Usamos dois marcadores, início e fim, que vão se aproximando. Repare que não criamos cópias do array: só movemos índices. Por isso o espaço extra é constante."
-->

---

# ⚖️ Linear × Binária: quantos passos?

| Tamanho (n) | Busca linear — pior caso | Busca binária — pior caso |
|---|---|---|
| 10 | 10 | 4 |
| 1.000 | 1.000 | 10 |
| 1.000.000 | 1.000.000 | 20 |
| 1.000.000.000 | 1.000.000.000 | 30 |

<div class="cols">
<div class="card"><b>🚶 Linear — O(n)</b>Dobrou os dados, <strong>dobrou</strong> o tempo. Não exige ordenação.</div>
<div class="card"><b>📖 Binária — O(log n)</b>Dobrou os dados, <strong>+1 passo</strong>. Exige dados ordenados.</div>
</div>

<div class="callout">Com 1 bilhão de registros, a binária faz <strong>30</strong> comparações. A linear pode fazer <strong>1 bilhão</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Esta tabela é o argumento mais forte da aula. Com um bilhão de registros, a busca binária precisa de apenas 30 comparações. É por isso que bancos de dados mantêm índices ordenados."
-->

---

# #️⃣ Busca com tabela hash

**Tabelas de dispersão** (hash tables) usam uma **função de espalhamento** para calcular, a partir da chave, a posição onde o dado está.

<div class="flow">
  <div class="step">Chave<br><span class="muted">23</span></div><div class="arrow">➜</div>
  <div class="step">Função hash<br><span class="muted">23 MOD 7</span></div><div class="arrow">➜</div>
  <div class="step fill">Índice 2</div>
</div>

<div class="cards">
  <div class="card"><b>Colisão</b>Duas chaves geram o mesmo índice (ex.: 9 e 23 → 2)</div>
  <div class="card"><b>Encadeamento</b>Cada posição (<em>bucket</em>) guarda uma lista com as chaves</div>
  <div class="card"><b>Endereçamento aberto</b>Procura a próxima posição livre, voltando ao início se preciso</div>
</div>

<div class="note">💻 Em JS, <code>Map</code>, <code>Set</code> e objetos usam hash: <code>mapa.get(chave)</code> é <strong>O(1) em média</strong>, sem precisar ordenar.</div>

<!--
🎤 **Fala do Professor:**

"Existe uma terceira via: em vez de procurar, calculamos onde o dado está. A função mais simples é o resto da divisão, a chave MOD 7. Como chaves diferentes podem cair no mesmo lugar, precisamos tratar colisões, com listas encadeadas ou procurando a próxima posição livre. O Map do JavaScript faz isso por nós."
-->

---

# 📶 O que é ordenação?

<div class="cols-60">
<div>

Segundo **Laureano (2008)**, ordenação é o processo de arranjar um conjunto de informações semelhantes em ordem **crescente** ou **decrescente**.

- Atribui a cada elemento uma **posição definida**
- Usa um ou mais **critérios**: nome, data, preço, prioridade
- Torna a **busca** e outras operações mais rápidas

</div>
<div>

<div class="card"><b>Onde aparece</b>Relatórios (clientes por nome) · filas de atendimento por prioridade · produtos mais baratos · placares de jogos · feed de redes sociais · consultas SQL com <code>ORDER BY</code></div>

</div>
</div>

<div class="mem-row"><span class="lbl">crescente</span>
<div class="mem sm">
  <div class="cell"><div class="val">3</div><div class="idx">a₁ ≤</div></div>
  <div class="cell"><div class="val">7</div><div class="idx">a₂ ≤</div></div>
  <div class="cell"><div class="val">12</div><div class="idx">a₃ ≤</div></div>
  <div class="cell"><div class="val">33</div><div class="idx">… ≤</div></div>
  <div class="cell"><div class="val hit">89</div><div class="idx">aₙ</div></div>
</div></div>

<!--
🎤 **Fala do Professor:**

"Ordenar é colocar cada elemento numa posição bem definida segundo um critério. Pensem em quantas telas de sistema vocês já viram com 'ordenar por preço' ou 'ordenar por data'. Por trás de cada uma há um algoritmo de ordenação."
-->

---

# 🧪 Critérios para avaliar uma ordenação

<div class="cards c4">
  <div class="card"><span class="ico">⏱️</span><b>Tempo</b>Quantas comparações e trocas? Melhor, médio e pior caso</div>
  <div class="card"><span class="ico">💾</span><b>Espaço</b>Quanta memória extra o algoritmo precisa?</div>
  <div class="card"><span class="ico">🧷</span><b>Estabilidade</b>Elementos iguais mantêm a <strong>ordem relativa</strong> original?</div>
  <div class="card"><span class="ico">📍</span><b>In-place</b>Ordena no próprio array, com memória extra mínima?</div>
</div>

<div class="note"><strong>Exemplo de estabilidade:</strong> uma lista de pedidos já ordenada por <strong>hora</strong> é reordenada por <strong>cliente</strong>. Um algoritmo estável mantém os pedidos de cada cliente na ordem de hora.</div>

<div class="callout">Também importa a <strong>complexidade cognitiva</strong>: algoritmos simples são fáceis de entender, mas costumam ser lentos.</div>

<!--
🎤 **Fala do Professor:**

"Não existe só 'rápido ou lento'. Um algoritmo pode ser rápido e gastar muita memória, ou ser lento e não gastar quase nada. A estabilidade importa quando ordenamos por mais de um critério."
-->

---

# 🫧 Bubble Sort (ordenação por bolha)

Compara **pares vizinhos** e troca quando estão fora de ordem. A cada passada, o maior elemento "flutua" até o final.

<div class="mem-row"><span class="lbl">início</span>
<div class="mem sm">
  <div class="cell"><div class="val mid">5</div></div><div class="cell"><div class="val mid">1</div></div><div class="cell"><div class="val">4</div></div><div class="cell"><div class="val">2</div></div><div class="cell"><div class="val">8</div></div>
</div></div>
<div class="mem-row"><span class="lbl">após 1ª passada</span>
<div class="mem sm">
  <div class="cell"><div class="val">1</div></div><div class="cell"><div class="val">4</div></div><div class="cell"><div class="val">2</div></div><div class="cell"><div class="val">5</div></div><div class="cell"><div class="val hit">8</div></div>
</div></div>
<div class="mem-row"><span class="lbl">após 2ª passada</span>
<div class="mem sm">
  <div class="cell"><div class="val">1</div></div><div class="cell"><div class="val">2</div></div><div class="cell"><div class="val">4</div></div><div class="cell"><div class="val hit">5</div></div><div class="cell"><div class="val hit">8</div></div>
</div></div>

<div class="cards c2">
  <div class="card"><b>✅ Simples</b>Dois laços e uma troca. Estável e in-place.</div>
  <div class="card"><b>⚠️ Lento</b>Pior e médio caso <strong>O(n²)</strong>; melhor caso <strong>O(n)</strong> com parada antecipada.</div>
</div>

<!--
🎤 **Fala do Professor:**

"O Bubble Sort é famoso pelo nome e pela simplicidade, mas é um dos piores em desempenho. Vejam que, a cada passada, o maior valor que ainda não estava no lugar vai parar no final, como uma bolha subindo."
-->

---

# 💻 Bubble Sort em JavaScript

```javascript
function bubbleSort(lista) {
  const v = [...lista];                       // cópia para não alterar o original
  for (let fim = v.length - 1; fim > 0; fim--) {
    let trocou = false;
    for (let j = 0; j < fim; j++) {           // compara vizinhos até o "fim"
      if (v[j] > v[j + 1]) {
        [v[j], v[j + 1]] = [v[j + 1], v[j]];  // troca usando desestruturação
        trocou = true;
      }
    }
    if (!trocou) break;                       // nenhuma troca: já está ordenado
  }
  return v;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));     // [1, 2, 4, 5, 8]
```

<div class="note">📌 A variável <code>trocou</code> é a otimização que garante o melhor caso <strong>O(n)</strong> em listas já ordenadas. Sem ela, são sempre <strong>O(n²)</strong> comparações.</div>

<!--
🎤 **Fala do Professor:**

"O laço externo diminui o fim a cada passada, porque o final já está ordenado. Se uma passada inteira não fizer nenhuma troca, podemos parar: a lista está pronta."
-->

---

# 🎯 Selection Sort (ordenação por seleção)

<div class="cols-60">
<div>

A cada rodada, **seleciona o menor** elemento da parte não ordenada e o coloca na próxima posição.

```javascript
function selectionSort(lista) {
  const v = [...lista];
  for (let i = 0; i < v.length - 1; i++) {
    let menor = i;                          // supõe que o menor está em i
    for (let j = i + 1; j < v.length; j++)
      if (v[j] < v[menor]) menor = j;       // achou um menor
    [v[i], v[menor]] = [v[menor], v[i]];    // leva-o para a posição i
  }
  return v;
}
```

</div>
<div>

<div class="card"><b>Analogia</b>Escolher jogadores para um time: procura o melhor entre os que sobraram, chama, e repete.</div>

<div class="card" style="margin-top:14px"><b>Desempenho</b><strong>O(n²)</strong> em todos os casos — sempre varre o restante. Faz poucas trocas (no máximo n−1). In-place, <strong>não estável</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"O Selection Sort sempre procura o menor no que sobrou. Mesmo que a lista já esteja ordenada, ele varre tudo, por isso é O(n²) até no melhor caso. A vantagem é fazer poucas trocas, o que importa quando escrever na memória é caro."
-->

---

# 🃏 Insertion Sort (ordenação por inserção)

<div class="cols-60">
<div>

Pega cada elemento e o **insere na posição correta** da parte já ordenada à esquerda.

```javascript
function insertionSort(lista) {
  const v = [...lista];
  for (let i = 1; i < v.length; i++) {
    const atual = v[i];                 // carta a ser inserida
    let j = i - 1;
    while (j >= 0 && v[j] > atual) {    // desloca os maiores
      v[j + 1] = v[j];                  // uma casa à direita
      j--;
    }
    v[j + 1] = atual;                   // encaixa na posição livre
  }
  return v;
}
```

</div>
<div>

<div class="card"><b>Analogia</b>Organizar as <strong>cartas na mão</strong>: cada carta nova é deslizada até o lugar certo.</div>

<div class="card" style="margin-top:14px"><b>Desempenho</b>Pior caso <strong>O(n²)</strong>; melhor caso <strong>O(n)</strong> quando já está quase ordenado. Estável e in-place. Ótimo para listas <strong>pequenas</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"É exatamente como organizamos cartas de baralho. Ele é considerado o mais simples de todos e, em listas pequenas ou quase ordenadas, é muito bom. Tanto que algoritmos modernos usam o Insertion Sort em pedaços pequenos."
-->

---

# 🚧 O limite dos algoritmos O(n²)

<div class="cols">
<div>

Bubble, Selection e Insertion são **fáceis de entender**, mas o número de comparações tende a **n²** no pior caso.

| n | ~n² comparações |
|---|---|
| 100 | 10 mil |
| 10.000 | 100 milhões |
| 1.000.000 | 1 trilhão |

</div>
<div>

### Dividir para conquistar

1. **Dividir** o problema em partes menores
2. **Conquistar**: resolver as partes (recursão)
3. **Combinar** as soluções parciais

<div class="note">Os algoritmos avançados trocam <strong>simplicidade</strong> por <strong>velocidade</strong>: chegam a <strong>O(n log n)</strong>.</div>

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Com um milhão de elementos, um algoritmo quadrático faz cerca de um trilhão de comparações. Para grandes volumes usamos a estratégia de dividir para conquistar: quebrar o problema em partes pequenas, resolver e juntar."
-->

---

# 🧩 Merge Sort (intercalação)

Criado por **John von Neumann (1945)**. Divide o array **ao meio** até restarem partes de 1 elemento e depois **intercala** (mescla) as partes já ordenadas.

<div class="flow">
  <div class="step">[38, 27, 43, 3]</div><div class="arrow">➜</div>
  <div class="step">[38, 27] · [43, 3]</div><div class="arrow">➜</div>
  <div class="step">[27, 38] · [3, 43]</div><div class="arrow">➜</div>
  <div class="step fill">[3, 27, 38, 43]</div>
</div>

<div class="cards">
  <div class="card"><b>⏱️ Tempo</b><strong>O(n log n)</strong> em todos os casos — previsível</div>
  <div class="card"><b>💾 Espaço</b><strong>O(n)</strong> extra para os arrays auxiliares</div>
  <div class="card"><b>🧷 Estável</b>Ideal para ordenar registros por vários critérios</div>
</div>

<!--
🎤 **Fala do Professor:**

"O Merge Sort, do mesmo von Neumann da arquitetura de computadores, não usa pivô: só divide ao meio. A mágica está na intercalação: juntar duas listas já ordenadas é fácil, basta comparar sempre o primeiro de cada uma."
-->

---

<!-- _class: dense -->

# 💻 Merge Sort em JavaScript

```javascript
function mergeSort(lista) {
  if (lista.length <= 1) return lista;           // caso base: já está ordenado

  const meio = Math.floor(lista.length / 2);
  const esquerda = mergeSort(lista.slice(0, meio)); // ordena a 1ª metade
  const direita = mergeSort(lista.slice(meio));     // ordena a 2ª metade

  return intercalar(esquerda, direita);          // combina as duas metades
}

function intercalar(a, b) {
  const resultado = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {         // compara o 1º de cada lista
    if (a[i] <= b[j]) resultado.push(a[i++]);    // "<=" mantém a estabilidade
    else resultado.push(b[j++]);
  }
  return [...resultado, ...a.slice(i), ...b.slice(j)]; // acrescenta as sobras
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
```

<div class="note">📌 <strong>Recursão:</strong> o array é dividido log n vezes, e cada nível de divisão faz n comparações → <strong>n × log n</strong>.</div>

<!--
🎤 **Fala do Professor:**

"A função chama a si mesma para cada metade até chegar a listas de um elemento. Depois, intercalar junta tudo. Reparem no 'menor ou igual': é ele que garante a estabilidade."
-->

---

# ⚡ Quick Sort (ordenação rápida)

Criado por **C. A. R. Hoare (1959, publicado em 1962)**. Escolhe um **pivô** e particiona: menores à esquerda, maiores à direita. Repete em cada lado.

<div class="mem-row"><span class="lbl">pivô = 5</span>
<div class="mem sm">
  <div class="cell"><div class="val">3</div></div><div class="cell"><div class="val">1</div></div><div class="cell"><div class="val">2</div></div><div class="cell"><div class="val hit">5</div></div><div class="cell"><div class="val">9</div></div><div class="cell"><div class="val">7</div></div><div class="cell"><div class="val">8</div></div>
</div></div>
<div class="muted" style="font-size:.6em;margin-left:160px">← menores que o pivô &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; maiores que o pivô →</div>

<div class="cards">
  <div class="card"><b>⏱️ Médio</b><strong>O(n log n)</strong> — na prática, um dos mais rápidos</div>
  <div class="card"><b>⚠️ Pior caso</b><strong>O(n²)</strong> quando o pivô é sempre o menor/maior</div>
  <div class="card"><b>💾 Espaço</b><strong>O(log n)</strong> da recursão; in-place, não estável</div>
</div>

<!--
🎤 **Fala do Professor:**

"O Quick Sort escolhe um elemento como referência, o pivô, e separa o resto em menores e maiores. O pivô já fica na posição final. O risco é escolher um pivô ruim, como o primeiro elemento de uma lista já ordenada; por isso costuma-se usar o elemento do meio ou um aleatório."
-->

---

<!-- _class: dense -->

# 💻 Quick Sort em JavaScript

```javascript
function quickSort(v, inicio = 0, fim = v.length - 1) {
  if (inicio < fim) {
    const p = particionar(v, inicio, fim);  // pivô vai para a posição final
    quickSort(v, inicio, p - 1);            // ordena o lado dos menores
    quickSort(v, p + 1, fim);               // ordena o lado dos maiores
  }
  return v;
}

function particionar(v, inicio, fim) {
  const pivo = v[fim];                      // usa o último elemento como pivô
  let i = inicio;                           // fronteira da região dos menores
  for (let j = inicio; j < fim; j++) {
    if (v[j] < pivo) {
      [v[i], v[j]] = [v[j], v[i]];          // traz o menor para a esquerda
      i++;
    }
  }
  [v[i], v[fim]] = [v[fim], v[i]];          // coloca o pivô entre as regiões
  return i;
}

console.log(quickSort([9, 3, 7, 1, 8, 2, 5]));  // [1, 2, 3, 5, 7, 8, 9]
```

<div class="note">📌 Ao contrário do Merge Sort, o Quick Sort ordena <strong>no próprio array</strong> (in-place): troca elementos em vez de criar cópias.</div>

<!--
🎤 **Fala do Professor:**

"Aqui o pivô é o último elemento. O índice i marca até onde vão os menores. No final, trocamos o pivô para ficar exatamente entre os dois grupos e repetimos em cada lado."
-->

---

# 🔢 Radix Sort (por base numérica)

Origem nas máquinas de tabulação de **Herman Hollerith (1887)** — empresa que deu origem à IBM. **Não compara** elementos: distribui por **dígito**, da unidade para a dezena, centena…

<div class="flow">
  <div class="step">170 · 45 · 75 · 90 · 802 · 24</div><div class="arrow">➜</div>
  <div class="step">unidade<br><span class="muted">170 90 802 24 45 75</span></div><div class="arrow">➜</div>
  <div class="step">dezena<br><span class="muted">802 24 45 170 75 90</span></div><div class="arrow">➜</div>
  <div class="step fill">centena<br>24 45 75 90 170 802</div>
</div>

<div class="cards">
  <div class="card"><b>⏱️ Tempo</b><strong>O(n × k)</strong>, sendo k o número de dígitos do maior valor</div>
  <div class="card"><b>🔀 Variações</b><strong>LSD</strong> (dígito menos significativo) e <strong>MSD</strong> (mais significativo)</div>
  <div class="card"><b>🎯 Uso</b>Inteiros, CEPs, códigos e chaves de tamanho fixo. Estável.</div>
</div>

<!--
🎤 **Fala do Professor:**

"O Radix é diferente de todos os outros: ele nunca compara dois números. Distribui os valores em dez 'baldes', de 0 a 9, olhando primeiro a unidade, depois a dezena, e assim por diante. Funciona muito bem para chaves numéricas de tamanho parecido, mas exige memória extra para os baldes."
-->

---

# 📊 Comparação de desempenho

| Algoritmo | Melhor | Médio | Pior | Espaço extra | Estável |
|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ |
| Radix Sort | O(n × k) | O(n × k) | O(n × k) | O(n + b) | ✅ |

<div class="note">💡 <strong>b</strong> = base (10 para decimais). O <strong>Heap Sort</strong> usa uma árvore do tipo heap (Aula 3) para extrair sempre o maior elemento.</div>

<!--
🎤 **Fala do Professor:**

"Esta é a tabela para guardar. Vejam que nenhum algoritmo vence em todas as colunas. O Merge é previsível e estável, mas gasta memória. O Quick é rápido na média, mas tem um pior caso ruim. O Heap não gasta memória, mas não é estável."
-->

---

# 📈 O crescimento na prática

Comparações aproximadas para ordenar **n = 10.000** elementos:

<div class="bars">
  <div class="bar-row"><span class="lbl">O(n)</span><div class="bar" style="width:1%"></div><span class="ops">~10 mil</span></div>
  <div class="bar-row"><span class="lbl">O(n log n)</span><div class="bar" style="width:3%;opacity:.85"></div><span class="ops">~133 mil</span></div>
  <div class="bar-row"><span class="lbl">O(n²)</span><div class="bar" style="width:100%;opacity:.6"></div><span class="ops">~100 milhões</span></div>
</div>

<div class="cards c2">
  <div class="card"><b>🐢 Bubble Sort</b>~100 milhões de comparações: perceptível para o usuário</div>
  <div class="card"><b>🚀 Merge / Quick Sort</b>~133 mil comparações: cerca de <strong>750× menos</strong> trabalho</div>
</div>

<div class="callout">Com poucos dados, qualquer algoritmo serve. Com <strong>muitos</strong>, a escolha define se o sistema <strong>escala</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Com dez mil elementos, a diferença entre n log n e n² já é de cerca de 750 vezes. A barra do O(n log n) quase some perto da do O(n²). É essa diferença que separa um sistema que escala de um que trava."
-->

---

<!-- _class: dense -->

# ⏱️ Medindo o desempenho em JavaScript

```javascript
// Gera um array com n números aleatórios
const gerar = n => Array.from({ length: n }, () => Math.floor(Math.random() * 1e6));

function medir(nome, algoritmo, dados) {
  const copia = [...dados];                  // todos ordenam os mesmos dados
  const t0 = performance.now();              // marca o tempo inicial
  algoritmo(copia);
  const t1 = performance.now();              // marca o tempo final
  console.log(`${nome.padEnd(10)} ${(t1 - t0).toFixed(1)} ms`);
}

const dados = gerar(20000);
medir("Bubble",    bubbleSort,    dados);
medir("Insertion", insertionSort, dados);
medir("Merge",     mergeSort,     dados);
medir("Quick",     quickSort,     dados);
medir("Nativo",    v => v.sort((a, b) => a - b), dados);
```

<div class="note">🧪 <strong>Experimente:</strong> rode com 1.000, 10.000 e 50.000 elementos. Observe que o tempo dos algoritmos O(n²) cresce muito mais rápido. Os tempos variam conforme a máquina — o que importa é a <strong>tendência</strong>.</div>

<!--
🎤 **Fala do Professor:**

"Teoria é importante, mas vamos medir. Rodem esse código no Node ou no navegador. A cada vez que dobrarem n, os algoritmos quadráticos vão levar cerca de quatro vezes mais tempo, enquanto os n log n vão levar pouco mais do dobro."
-->

---

# 🧰 Ordenação nativa no JavaScript

```javascript
const numeros = [10, 9, 1, 100, 25];
numeros.sort();                          // ⚠️ [1, 10, 100, 25, 9] — compara como TEXTO!
numeros.sort((a, b) => a - b);           // ✅ [1, 9, 10, 25, 100] — crescente
numeros.sort((a, b) => b - a);           // ✅ [100, 25, 10, 9, 1] — decrescente

const produtos = [
  { nome: "Mouse", preco: 80 }, { nome: "Teclado", preco: 150 }, { nome: "Cabo", preco: 80 }
];
produtos.sort((a, b) => a.preco - b.preco);          // por preço (estável)
produtos.sort((a, b) => a.nome.localeCompare(b.nome)); // por nome, respeitando acentos

const copia = numeros.toSorted((a, b) => a - b);      // ES2023: não altera o original
```

<div class="cols">
<div class="note">📌 O <strong>comparador</strong> retorna negativo (a antes), positivo (b antes) ou zero (empate).</div>
<div class="note">📌 Desde o ES2019, o <code>sort</code> é <strong>estável</strong>; no V8 (Chrome/Node) usa o <strong>TimSort</strong>, híbrido de Merge + Insertion.</div>
</div>

<!--
🎤 **Fala do Professor:**

"No dia a dia, usamos o sort da linguagem. Mas cuidado com a armadilha clássica: sem comparador, o JavaScript converte tudo para texto, e 100 vem antes de 25. O motor V8 usa o TimSort, que combina Merge Sort com Insertion Sort, justamente aproveitando o que cada um tem de melhor."
-->

---

# 🌍 Aplicações em sistemas de software

<div class="cards">
  <div class="card"><span class="ico">🗄️</span><b>Bancos de dados</b><code>ORDER BY</code>, índices B-tree (busca binária em disco) e <em>hash index</em></div>
  <div class="card"><span class="ico">🛒</span><b>E-commerce</b>Ordenar por preço, relevância ou avaliação; filtros por faixa de valor</div>
  <div class="card"><span class="ico">🔐</span><b>Autenticação</b>Sessões e tokens em tabela hash: validação O(1) a cada requisição</div>
  <div class="card"><span class="ico">📱</span><b>Feeds e streaming</b>Ordenação por data e pontuação de recomendação</div>
  <div class="card"><span class="ico">🏆</span><b>Jogos</b>Ranking e placar ordenados; busca binária para a posição do jogador</div>
  <div class="card"><span class="ico">⚙️</span><b>Sistemas operacionais</b>Escalonamento de tarefas por prioridade e ordenação de arquivos</div>
</div>

<div class="note">💡 Também aparecem em autocompletar (busca em lista ordenada de palavras), sistemas financeiros (transações por data) e sistemas eleitorais (apuração e classificação).</div>

<!--
🎤 **Fala do Professor:**

"Tudo o que vimos hoje está dentro dos sistemas que vocês usam. Quando um banco de dados executa ORDER BY, ele está ordenando. Quando valida seu login, provavelmente consulta uma tabela hash. Quando mostra sua posição no ranking, pode estar fazendo uma busca binária."
-->

---

# 🧠 Decisão de engenharia: ordenar para buscar?

<div class="cols">
<div class="card">
<b>Cenário: catálogo com 1 milhão de produtos</b>

- **Sem ordenar:** cada busca linear ≈ 1.000.000 passos
- **Ordenar uma vez:** ≈ 20 milhões de operações (n log n)
- **Depois:** cada busca binária ≈ 20 passos

</div>
<div>

### Qual estratégia escolher?

| Situação | Escolha |
|---|---|
| Poucas buscas, dados mudam muito | Busca linear |
| Muitas buscas, dados estáveis | Ordenar + binária |
| Busca por chave exata | `Map` / hash |
| Busca por faixa ("de R$50 a R$100") | Dados ordenados |

</div>
</div>

<div class="callout">Ordenar tem custo, mas se pago <strong>uma vez</strong> e aproveitado em <strong>muitas</strong> buscas, compensa.</div>

<!--
🎤 **Fala do Professor:**

"Este é o raciocínio de engenharia. Se vou buscar uma única vez, ordenar não compensa. Se vou buscar milhares de vezes, ordenar uma vez e usar busca binária é muito melhor. E se só busco por chave exata, um Map resolve sem ordenar. Mas o hash não ajuda em buscas por faixa: para isso, precisamos de dados ordenados."
-->

---

# 🧾 Síntese dos conceitos

<div class="cols">
<div>

- **Busca linear:** simples, sem pré-requisito, **O(n)**
- **Busca binária:** exige ordem, **O(log n)**
- **Hash:** cálculo da posição, **O(1)** em média
- **Ordenação:** critério + algoritmo
- Avaliamos **tempo, espaço, estabilidade** e **in-place**

</div>
<div>

- **Bubble, Selection, Insertion:** simples, **O(n²)**
- **Merge:** O(n log n) garantido e estável, usa memória
- **Quick:** O(n log n) médio, in-place, pior caso O(n²)
- **Radix:** sem comparações, **O(n × k)**
- No JS: `sort` com **comparador**

</div>
</div>

<div class="callout">🧭 Não existe algoritmo "melhor": existe o mais adequado ao <strong>volume</strong>, à <strong>frequência das operações</strong> e aos <strong>recursos</strong> do sistema.</div>

<!--
🎤 **Fala do Professor:**

"Recapitulando: para buscar, olhem se os dados estão ordenados e se a busca é por chave exata. Para ordenar, olhem o volume, a memória disponível e se precisam de estabilidade. A frase da aula 1 continua valendo: não existe o melhor, existe o mais adequado."
-->

---

# 📝 Atividade de fixação

<div class="cols-60">
<div>

1. Simule a **busca binária** de `18` em `[2, 5, 8, 12, 18, 23, 31, 40]`. Anote `inicio`, `fim` e `meio` em cada passo.
2. Mostre o array `[6, 2, 9, 1, 5]` após **cada passada** do Bubble Sort e do Insertion Sort.
3. Rode o código de medição com n = 1.000, 10.000 e 50.000. Monte uma tabela com os tempos.
4. Ordene uma lista de alunos por **nota (decrescente)** e, em caso de empate, por **nome**.

</div>
<div>

### 💬 Reflita
- Por que a busca binária não funciona em uma **lista encadeada** de forma eficiente?
- Em que situação o **Insertion Sort** pode ser melhor que o Quick Sort?
- Quando a **estabilidade** é essencial em um sistema?

</div>
</div>

<!--
🎤 **Fala do Professor:**

"Façam a simulação no papel antes de programar: é a melhor forma de entender. Na questão 3, observem como os tempos crescem. E pensem na reflexão sobre a lista encadeada: lembrem que ela não tem acesso direto por índice."
-->

---

<!-- _class: dense -->

# 📖 Glossário: busca

| Termo | Significado |
|---|---|
| Chave | Valor usado para identificar e localizar um elemento. |
| Busca linear | Percorre os elementos um a um até encontrar o alvo; O(n). |
| Busca binária | Divide o intervalo ordenado ao meio a cada comparação; O(log n). |
| Tabela hash | Estrutura que calcula a posição do dado a partir da chave. |
| Função de espalhamento | Função que transforma a chave em um índice, como `chave MOD 7`. |
| Colisão | Quando duas chaves diferentes geram o mesmo índice. |
| Encadeamento | Tratamento de colisão em que cada posição guarda uma lista. |
| Endereçamento aberto | Tratamento de colisão que procura a próxima posição livre. |

---

<!-- _class: dense -->

# 📖 Glossário: ordenação

| Termo | Significado |
|---|---|
| Ordenação | Arranjo dos elementos em ordem crescente ou decrescente por um critério. |
| Estabilidade | Elementos iguais mantêm a ordem relativa original. |
| In-place | Ordena no próprio array, usando memória extra mínima. |
| Pivô | Elemento de referência do Quick Sort para separar menores e maiores. |
| Intercalação | Mescla de duas listas ordenadas em uma só (Merge Sort). |
| Dividir para conquistar | Estratégia que quebra o problema em partes menores e combina as soluções. |
| Recursão | Função que chama a si mesma até atingir um caso base. |
| Comparador | Função que define a ordem entre dois elementos no `sort`. |

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: '' -->

<span class="tag">Engenharia de Software</span>

# Encontrar e organizar

<div class="line"></div>

## Busca e ordenação transformam dados guardados em respostas rápidas

Estruturas de Dados · Aula 4